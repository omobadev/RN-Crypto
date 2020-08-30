// PLUGINS IMPORTS //
import React, { useState, useEffect } from "react"
import { Keyboard, TextInput, StyleSheet } from "react-native"
import * as ImagePicker from "expo-image-picker"
import Constants from "expo-constants"
import * as Permissions from "expo-permissions"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { Feather } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"
import { BorderlessButton } from "react-native-gesture-handler"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  images: Array<any>
  setImages: (newImages: Array<any>) => void

  sendMessage: (newMessage: string, images: Array<any>) => void
}

const MainSection: React.FC<PropsType> = (props) => {
  let [message, setMessage] = useState(null as string | null)

  useEffect(() => {
    const getPermissions = async () => {
      if (Constants.platform?.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!")
        }
      }
    }

    getPermissions()
  }, [])

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      })
      if (!result.cancelled) {
        props.setImages(props.images.concat(result.uri))
      }
    } catch (E) {}
  }

  const sendMessage = () => {
    if (message && message?.length > 0) {
      props.sendMessage(message, props.images)
      setMessage(null)
      props.setImages([])
      Keyboard.dismiss()
    }
  }

  return (
    <>
      <TextInput
        placeholder="Введите сообщение"
        placeholderTextColor="rgba(0, 57, 45, 0.4)"
        onChangeText={(text: string) => setMessage(text)}
        value={message as string}
        style={styles.input}
      />
      <BorderlessButton
        style={[styles.icon, { right: 55, marginTop: 1.5 }]}
        onPress={pickImage}
      >
        <Feather name="image" size={24} color="#006F5F" />
      </BorderlessButton>
      <BorderlessButton
        style={[styles.icon, { right: 25 }]}
        onPress={sendMessage}
      >
        <FontAwesome name="send-o" size={20} color="#006F5F" />
      </BorderlessButton>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginTop: 7,
    flexDirection: "column",
  },

  input: {
    backgroundColor: "rgba(0, 57, 45, 0.1)",
    marginHorizontal: 16,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    paddingRight: 85,
  },

  icon: {
    position: "absolute",
    marginTop: 4,
    padding: 10,
  },
})

export default MainSection
