// PLUGINS IMPORTS //
import React, { useState, useEffect } from "react"
import { View, Keyboard, TextInput, StyleSheet } from "react-native"
import * as ImagePicker from "expo-image-picker"
import Constants from "expo-constants"
import * as Permissions from "expo-permissions"

// COMPONENTS IMPORTS //
import MainSection from "./MainSection/MainSection"
import ImagesSection from "./ImagesSection/ImagesSection"

// EXTRA IMPORTS //
import { Feather } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"
import { BorderlessButton } from "react-native-gesture-handler"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  chatID: string

  sendMessageThunkCreator: (message: string, images: Array<Blob>, chatID: string) => void
}

const BottomInput: React.FC<PropsType> = (props) => {
  const [images, setImages] = useState([] as Array<any>)

  return (
    <View style={styles.container}>
      <MainSection
        chatID={props.chatID}
        images={images}
        setImages={setImages}
        sendMessageThunkCreator={props.sendMessageThunkCreator}
      />
      <ImagesSection images={images} setImages={setImages} />
    </View>
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

export default BottomInput
