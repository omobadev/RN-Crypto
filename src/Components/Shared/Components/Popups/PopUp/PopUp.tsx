// PLUGINS IMPORTS //
import React from "react"
import { View, Text, StyleSheet } from "react-native"
import Dialog, { DialogContent } from "react-native-popup-dialog"
import * as Linking from "expo-linking"

// COMPONENTS IMPORTS //
import Button from "~/Components/Shared/Components/Button/Button"

// EXTRA IMPORTS //
import { RectButton } from "react-native-gesture-handler"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  popupVisible: boolean

  title?: string
  description?: string
  buttonsArray: Array<any>
  elements?: any
  link?: string
  linkOpen?: () => void

  containerStyle?: any
  descriptionStyle?: any

  setPopupVisible: (popupVisibilityStatus: boolean) => void
}

const PopUp: React.FC<PropsType> = (props) => {
  const handleOpenLink = () => {
    Linking.openURL(props.link as string)
  }

  return (
    <Dialog
      visible={props.popupVisible}
      onTouchOutside={() => {
        props.setPopupVisible(false)
      }}
    >
      <DialogContent style={{ ...styles.container, ...props.containerStyle }}>
        <View style={styles.content_wrap}>
          <Text style={styles.title}>{props.title}</Text>
          {props.description ? (
            <Text style={{ ...styles.description, ...props.descriptionStyle }}>
              {props.description}
            </Text>
          ) : null}
          {props.elements && props.elements}
          {props.link && (
            <Button
              text="Открыть ссылку"
              onPress={props.linkOpen ? props.linkOpen : handleOpenLink}
              buttonStyle={styles.link_button}
            />
          )}
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
    width: "100%",
  },

  title: {
    marginTop: 45,
    color: "#00392D",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 3,
    textAlign: "center",
  },

  description: {
    fontSize: 16,
    color: "#00392D",
    marginBottom: 10,
    textAlign: "center",
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

  link_button: {
    marginVertical: 5,
    height: 33,
  },
})

export default PopUp
