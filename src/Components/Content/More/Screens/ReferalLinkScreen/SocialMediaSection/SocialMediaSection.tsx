// PLUGINS IMPORTS //
import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { FontAwesome } from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const SocialMediaSection: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Поделится:</Text>
      <View style={styles.content_wrap}>
        <TouchableOpacity>
          <Entypo name="twitter-with-circle" size={38} color="#50ABF1" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="logo-whatsapp" size={39} color="#1BD741" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="telegram" size={38} color="#61A8DE" />
        </TouchableOpacity>

        <TouchableOpacity>
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
