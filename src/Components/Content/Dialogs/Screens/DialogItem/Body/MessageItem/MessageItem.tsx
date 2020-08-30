// PLUGINS IMPORTS //
import React, { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native"
import AsyncStorage from "@react-native-community/async-storage"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  message: any
}

const Body: React.FC<PropsType> = (props) => {
  const [myUID, setMyUID] = useState(null as string | null)

  useEffect(() => {
    const getData = async () => {
      const uid = await AsyncStorage.getItem("uid")
      setMyUID(uid)
    }

    getData()
  }, [])

  const senderMe = props.message.uID === myUID
  return (
    <View style={!senderMe && styles.container}>
      {!senderMe && (
        <View style={styles.img_wrap}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("Profile", {
                uid: props.message.uID,
              })
            }
          >
            <Image
              style={styles.img_wrap}
              source={require("~/Images/default-avatar.png")}
            />
          </TouchableOpacity>
          <Text style={styles.letter}>
            {String(props.message.uLogin.charAt(0))}
          </Text>
        </View>
      )}
      <View style={senderMe ? styles.message_me : styles.message_friend}>
        <Text style={senderMe ? styles.text_me : styles.text_friend}>
          {props.message.chmText}
        </Text>
        <Text style={styles.time}>{props.message.chmTS}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },

  img_wrap: {
    marginLeft: 5,
    width: 37,
    height: 37,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  letter: {
    paddingLeft: 5,
    position: "absolute",
    fontSize: 20,
    color: "#F2F2F2",
  },

  text_me: {
    color: "#00392D",
  },

  text_friend: {
    color: "#F2F2F2",
  },

  message_me: {
    maxWidth: 270,
    alignSelf: "flex-end",
    backgroundColor: "#DADADA",
    padding: 11,
    borderRadius: 10,
    marginBottom: 35,
    marginRight: 16,
    borderBottomRightRadius: 0,
  },

  message_friend: {
    maxWidth: 270,
    alignSelf: "flex-start",
    backgroundColor: "#006F5F",
    padding: 11,
    borderRadius: 10,
    marginBottom: 35,
    marginLeft: 16,
    borderTopLeftRadius: 0,
  },

  time: {
    position: "absolute",
    bottom: -21,
    right: 0,
    fontSize: 13,
    color: "#9E9E9E",
  },
})

export default Body
