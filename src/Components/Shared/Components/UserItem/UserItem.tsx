// PLUGINS IMPORTS //
import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import { RectButton } from "react-native-gesture-handler"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { AntDesign } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  id: string
  avatar: string
  isSelected?: boolean

  onPress?: any
  removeSelection?: boolean
}

const UserItem: React.FC<PropsType> = (props) => {
  return (
    <RectButton style={styles.wrapper} onPress={props.onPress}>
      <View style={styles.content_wrap}>
        <View style={styles.img_wrap}>
          <Image
            style={styles.img_wrap}
            source={props.avatar ? { uri: props.avatar } : require("~/Images/default-avatar.png")}
          />
          {!props.avatar && <Text style={styles.letter}>{props.id && props.id.charAt(0)}</Text>}
        </View>
        <Text style={styles.name}>{props.id}</Text>
      </View>
      {props.removeSelection ? null : props.isSelected ? (
        <AntDesign name="checkcircle" size={24} color="#006F5F" />
      ) : (
        <AntDesign name="checkcircleo" size={24} color="#006F5F" />
      )}
    </RectButton>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 13,
    paddingRight: 23,
    justifyContent: "space-between",
    alignItems: "center",
  },

  content_wrap: {
    flexDirection: "row",
    alignItems: "center",
  },

  name: {
    color: "#00392D",
    fontSize: 20,
    marginLeft: 13,
    fontWeight: "bold",
    marginBottom: 5,
  },

  img_wrap: {
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    height: 46,
    width: 46,
  },

  letter: {
    position: "absolute",
    fontSize: 20,
    fontWeight: "bold",
    color: "#F2F2F2",
  },
})

export default UserItem
