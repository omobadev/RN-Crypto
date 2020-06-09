// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Button from "~/Components/Shared/Components/Button/Button"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const FooterInput: React.FC<PropsType> = (props) => {
  const [value, setValue] = useState("0" as string)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Укажите сумму</Text>

      <TextInput
        style={styles.input}
        value={value}
        keyboardType="number-pad"
        placeholderTextColor="rgba(0, 57, 45, 0.5)"
        onChangeText={(text: string) => setValue(text)}
      />

      <Button text="Перевод" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 60,
  },

  title: {
    color: "#00392D",
    fontSize: 17,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 57, 45, 0.05)",
    width: 206,
    marginBottom: 20,
    marginTop: 10,
    textAlign: "center",
    color: "#006F5F",
  },
})

export default FooterInput
