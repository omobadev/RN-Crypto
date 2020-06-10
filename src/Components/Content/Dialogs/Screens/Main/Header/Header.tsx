// PLUGINS IMPORTS //
import React from "react"
import { ImageBackground, TextInput, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import CustomHeader from "~/Components/Shared/Components/CustomHeader/CustomHeader"
import { AntDesign } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const TopBox: React.FC<PropsType> = (props) => {
  return (
    <ImageBackground
      source={require("~/Images/bg-1.png")}
      // imageStyle={{ borderBottomRightRadius: 25, borderBottomLeftRadius: 25 }}
      style={styles.container}
    >
      <CustomHeader
        title="Сообщения"
        rightIcon={<AntDesign name="plus" size={24} color="white" />}
      />
      <TextInput
        placeholder="Поиск"
        placeholderTextColor="rgba(0, 57, 45, 1)"
        style={styles.input}
      />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 5,
  },

  input: {
    backgroundColor: "rgba(242, 242, 242, 0.2)",
    marginHorizontal: 16,
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 20,
    fontSize: 16,
  },
})

export default TopBox
