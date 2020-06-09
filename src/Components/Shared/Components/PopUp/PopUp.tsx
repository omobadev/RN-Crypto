// PLUGINS IMPORTS //
import React from "react"
import { View, Text, StyleSheet } from "react-native"
import Dialog, { DialogContent } from "react-native-popup-dialog"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

import { RectButton } from "react-native-gesture-handler"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  popupVisible: boolean

  title?: string
  description?: string
  buttonsArray: Array<any>

  setPopupVisible: (popupVisibilityStatus: boolean) => void
}

const PopUp: React.FC<PropsType> = (props) => {
  return (
    <Dialog
      visible={props.popupVisible}
      onTouchOutside={() => {
        props.setPopupVisible(false)
      }}
    >
      <DialogContent style={styles.container}>
        <View style={styles.content_wrap}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.description}>{props.description}</Text>
        </View>
        <View style={styles.btns_wrap}>
          {props.buttonsArray?.map((button: any) => {
            return (
              <RectButton
                style={{
                  ...styles.btn,
                  width: `${100 / props.buttonsArray.length}%`,
                }}
                onPress={() => {
                  props.setPopupVisible(false)
                  button.action()
                }}
              >
                <Text style={styles.btn_text}>{button.text}</Text>
              </RectButton>
            )
          })}
        </View>
      </DialogContent>
    </Dialog>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: -18,
    marginVertical: -24,
    width: "100%",
  },

  content_wrap: {
    borderBottomColor: "silver",
    borderBottomWidth: 1,
    alignItems: "center",
    paddingBottom: 10,
    paddingHorizontal: 15,
  },

  title: {
    marginTop: 45,
    color: "#00392D",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 3,
  },

  description: {
    fontSize: 16,
    color: "#00392D",
    marginBottom: 10,
  },

  btns_wrap: {
    flexDirection: "row",
  },

  btn: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },

  btn_text: {
    textAlign: "center",
    color: "#00392D",
  },
})

export default PopUp
