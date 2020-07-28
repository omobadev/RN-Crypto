// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import Dialogs from "./Dialogs/Dialogs"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any

  DialogsChatsList: Array<any>
  getDialogsChatsListThunkCreator: () => void
}

const Main: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} />
      <Dialogs
        navigation={props.navigation}
        DialogsChatsList={props.DialogsChatsList}
        getDialogsChatsListThunkCreator={props.getDialogsChatsListThunkCreator}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Main
