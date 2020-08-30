// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import MainSection from "./MainSection/MainSection"
import ImagesSection from "./ImagesSection/ImagesSection"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  sendMessage: (newMessage: string, images: Array<any>) => void
}

const BottomInput: React.FC<PropsType> = (props) => {
  const [images, setImages] = useState([] as Array<any>)

  return (
    <View style={styles.container}>
      <MainSection
        images={images}
        setImages={setImages}
        sendMessage={props.sendMessage}
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
