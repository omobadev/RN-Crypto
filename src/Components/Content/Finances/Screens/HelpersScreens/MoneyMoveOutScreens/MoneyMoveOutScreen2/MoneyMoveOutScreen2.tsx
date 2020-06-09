// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Button from "~/Components/Shared/Components/Button/Button"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const MoneyMoveOutScreen2: React.FC<PropsType> = (props) => {
  const [value, setValue] = useState("0" as string)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Укажите адрес для вывода:</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text: string) => setValue(text)}
      />
      <Button
        text="Готово"
        buttonStyle={{ alignSelf: "center" }}
        onPress={() => props.navigation.navigate("FinancesMain")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 30,
  },

  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#00392D",
  },

  input: {
    marginTop: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 57, 45, 0.25)",
    marginRight: 10,
    paddingBottom: 5,
    color: "#006F5F",
  },
})

export default MoneyMoveOutScreen2
