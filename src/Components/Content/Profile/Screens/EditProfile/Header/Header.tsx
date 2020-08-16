// PLUGINS IMPORTS //
import React, { useState } from "react"
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native"
import * as ImagePicker from "expo-image-picker"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { Feather } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  userData: {
    ID: string
    name: string
    avatar: string
    login: string
    email: string
    location: string
    invitedID: string
  }

  uploadAvatarThunkCreator: (avatar: string) => void
}

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
        aspect: [4, 3],
        quality: 1,
      })

      if (!result.cancelled) {
        setAvatar(result.uri)
        props.uploadAvatarThunkCreator(result.uri)
      }
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.img_wrap}>
        {avatar || props.userData.avatar ? (
          <Image
            style={styles.img_wrap}
            source={{ uri: avatar || props.userData.avatar }}
          />
        ) : (
          <ImageBackground
            style={styles.img_wrap}
            source={require("~/Images/default-avatar.png")}
          >
            <Text style={styles.letter}>
              {props.userData &&
                props.userData.name &&
                String(props.userData.name.charAt(0))}
            </Text>
          </ImageBackground>
        )}
      </View>

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

  img_wrap: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 1000,
    height: 95,
    width: 95,
  },

  letter: {
    fontSize: 50,
    color: "#F2F2F2",
    marginBottom: "12%",
    marginRight: "2%",
  },
})

export default Header
