// PLUGINS IMPORTS //
import React from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import UserListItem from "./UserListItem/UserListItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const MoneyMoveScreen: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Поиск"
        placeholderTextColor="rgba(0, 57, 45, 0.5)"
      />

      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.text}>Ваш баланс</Text>
          <Text style={{ ...styles.text, fontWeight: "bold" }}>50 CGC </Text>
        </View>

        <Text style={{ ...styles.text, marginTop: 30 }}>
          Вы переводили ранее:
        </Text>
        <View style={styles.divider} />
        <View style={styles.users_list}>
          <UserListItem userName="DaryaIvanova" />
          <UserListItem userName="DaryaIvanova" />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

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
    marginTop: 30,
    marginHorizontal: 16,
  },

  text: {
    color: "#00392D",
    fontSize: 18,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  divider: {
    borderBottomColor: "rgba(0, 57, 45, 0.05)",
    borderWidth: 1,
    opacity: 0.2,
    marginVertical: 10,
  },

  users_list: {
    marginTop: -6,
  },
})

export default MoneyMoveScreen
