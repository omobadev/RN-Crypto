// PLUGINS IMPORTS //
import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { Ionicons } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  userName: string
}

const UserListItem: React.FC<PropsType> = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{props.userName}</Text>
      <Ionicons name="ios-arrow-down" size={22} color="#006F5F" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 15,
    alignItems: "center",
  },

  text: {
    color: "#006F5F",
    fontSize: 18,
  },
})

export default UserListItem
