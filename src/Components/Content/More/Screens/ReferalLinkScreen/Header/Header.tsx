// PLUGINS IMPORTS //
import React, { useState } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  Clipboard,
  StyleSheet,
} from "react-native"
import { Snackbar } from "react-native-paper"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { MaterialCommunityIcons } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  referaLink: string
}

const Header: React.FC<PropsType> = (props) => {
  const [snackbarVisible, setSnackbarVisible] = useState(false as boolean)

  const copyToClipboard = () => {
    Clipboard.setString(props.referaLink)
    toggleSnackbar()
  }

  const toggleSnackbar = () => setSnackbarVisible(!snackbarVisible)
  const dismissSnackBar = () => setSnackbarVisible(false)

  return (
    <>
      <View style={styles.link_wrap}>
        <Text style={styles.title}>Ссылка:</Text>
        <View style={styles.link}>
          <Text style={styles.link_text}>{props.referaLink}</Text>
          <TouchableOpacity onPress={() => copyToClipboard()}>
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
      <Snackbar
        visible={snackbarVisible}
        onDismiss={dismissSnackBar}
        style={styles.snackbar}
      >
        Реферальная ссылка успешно скопирована
      </Snackbar>
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

  snackbar: {
    marginTop: 450,
    position: "absolute",
  },
})

export default Header
