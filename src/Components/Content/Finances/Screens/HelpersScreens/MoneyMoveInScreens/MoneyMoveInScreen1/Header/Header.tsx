// PLUGINS IMPORTS //
import React, { useState, useEffect } from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  CGCInfo: {
    price: string
    value2: string
  }

  isCertainUser: boolean
  queryValue: string
  setQueryValue: (newQueryValue: string) => void
}

const Header: React.FC<PropsType> = (props) => {
  const [showSearch, setShowSearch] = useState(false as boolean)

  useEffect(() => {
    if (props.isCertainUser) {
      setShowSearch(true)
    }
  }, [props.isCertainUser])

  return (
    <>
      {showSearch && (
        <TextInput
          style={styles.input}
          placeholder="Поиск"
          placeholderTextColor="rgba(0, 57, 45, 0.5)"
          value={props.queryValue}
          onChangeText={(text: string) => props.setQueryValue(text)}
        />
      )}

      <View style={styles.content}>
        <Text style={styles.text}>Ваш баланс</Text>
        <Text style={[styles.text, { fontWeight: "bold" }]}>
          {props.CGCInfo.price || 0} CGC
        </Text>
      </View>

      {showSearch ? (
        <Text style={[styles.text, { marginTop: 30, fontSize: 17 }]}>
          Выберите получателя:
        </Text>
      ) : (
        <TouchableOpacity onPress={() => setShowSearch(true)}>
          <Text style={[styles.text, { marginTop: 30, fontSize: 17 }]}>
            Нажмите для выбора получателя
          </Text>
        </TouchableOpacity>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    width: 288,
    alignSelf: "center",
    backgroundColor: "rgba(0, 57, 45, 0.05)",
    borderRadius: 10,
    marginTop: 10,
    height: 35,
    fontSize: 16.9,
    textAlign: "center",
  },

  content: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  text: {
    color: "#00392D",
    fontSize: 18,
  },
})

export default Header
