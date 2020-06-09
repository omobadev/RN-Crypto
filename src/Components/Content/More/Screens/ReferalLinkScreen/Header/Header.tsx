// PLUGINS IMPORTS //
import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { MaterialCommunityIcons } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const Header: React.FC<PropsType> = (props) => {
  return (
    <>
      <View style={styles.link_wrap}>
        <Text style={styles.title}>Ссылка:</Text>
        <View style={styles.link}>
          <Text style={styles.link_text}>https://qwe213124ew123</Text>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="content-copy"
              size={24}
              color="#006F5F"
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.paragraph}>
        Данная ссылка даёт возможность получить доход от приглашенных вами людей
        и много чего хорошего
      </Text>
    </>
  )
}

const styles = StyleSheet.create({
  link_wrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    color: "#00392D",
    fontSize: 17,
    fontWeight: "bold",
  },

  link: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 205,
  },

  link_text: {
    color: "#9E9E9E",
    fontSize: 15,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    lineHeight: 25,
    marginLeft: -20,
    marginTop: 1,
  },

  paragraph: {
    marginTop: 33,
    fontSize: 17,
    width: 290,
  },
})

export default Header
