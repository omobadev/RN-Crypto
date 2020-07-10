// PLUGINS IMPORTS //
import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import * as Linking from "expo-linking"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { FontAwesome } from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  referaLink: string
}

const SocialMediaSection: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Поделится:</Text>
      <View style={styles.content_wrap}>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(`whatsapp://send?text=${props.referaLink}`)
          }
        >
          <Ionicons name="logo-whatsapp" size={39} color="#1BD741" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL(`tg://send?text=${props.referaLink}`)}
        >
          <FontAwesome name="telegram" size={38} color="#61A8DE" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL(`vk://send?text=${props.referaLink}`)}
        >
          <Entypo name="vk-with-circle" size={38} color="#44678D" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 200,
  },

  title: {
    color: "#00392D",
    fontSize: 19,
    fontWeight: "bold",
  },

  content_wrap: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 230,
  },
})

export default SocialMediaSection
