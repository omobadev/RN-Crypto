// PLUGINS IMPORTS //
import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import { RectButton } from "react-native-gesture-handler"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  name: string
  avatar: string
  latestMessage: string
}

const LineDialogItem: React.FC<PropsType> = (props) => {
  return (
    <>
      <RectButton style={styles.container}>
        <View style={styles.img_wrap}>
          <Image source={require("~/Images/default-avatar.png")} />
          <Text style={styles.letter}>{props.name.charAt(0)}</Text>
        </View>
        <View style={styles.text_wrap}>
          <Text style={styles.name_text}>{props.name}</Text>
          <Text style={styles.desc_text}>{props.latestMessage}</Text>
        </View>
      </RectButton>
      <View style={styles.divider} />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  img_wrap: {
    marginTop: 14,
    width: 46,
    height: 46,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  letter: {
    position: "absolute",
    fontSize: 26,
    color: "#F2F2F2",
  },

  text_wrap: {
    marginLeft: 12,
    width: "95%",
  },

  name_text: {
    color: "#00392D",
    fontSize: 18,
  },

  desc_text: {
    color: "#9E9E9E",
  },

  divider: {
    borderTopColor: "rgba(0, 57, 45, 0.14)",
    borderTopWidth: 1,
    width: 310,
    alignSelf: "flex-end",
    marginRight: 30,
  },
})

export default LineDialogItem
