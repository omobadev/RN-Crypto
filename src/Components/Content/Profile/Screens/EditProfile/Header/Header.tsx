// PLUGINS IMPORTS //
import React, { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native"
import * as ImagePicker from "expo-image-picker"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { Feather } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const Header: React.FC<PropsType> = (props) => {
  const [avatar, setAvatar] = useState(null as string | null)

  const selectAvatar = () => {
    ;(async () => {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync()
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!")
      }
    })().then(async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      })

      if (!result.cancelled) {
        setAvatar(result.uri)
      }
    })
  }
  console.log(avatar)
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={avatar ? { uri: avatar } : require("~/Images/avatar.png")}
      />
      <View style={styles.content_wrap}>
        <TouchableOpacity
          style={styles.item_wrap}
          onPress={() => selectAvatar()}
        >
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
