// PLUGINS IMPORTS //
import React from "react"
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { Feather } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const Header: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={require("~/Images/avatar.png")} />
      <View style={styles.content_wrap}>
        <TouchableOpacity style={styles.item_wrap}>
          <Text style={styles.text}>Сменить фотографию</Text>
          <Feather name="camera" size={24} color="#006F5F" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item_wrap}>
          <Text style={styles.text}>Удалить фотографию</Text>
          <Feather name="camera-off" size={24} color="#006F5F" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    height: 122,
    width: 122,
    borderRadius: 100,
  },

  content_wrap: {
    marginLeft: 16,
    justifyContent: "space-between",
  },

  text: {
    color: "#00392D",
    fontSize: 16.7,
  },

  item_wrap: {
    marginVertical: 11,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 210,
  },
})

export default Header
