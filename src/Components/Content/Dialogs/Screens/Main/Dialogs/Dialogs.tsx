// PLUGINS IMPORTS //
import React, { useEffect } from "react"
import { ScrollView, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import LineDialogItem from "./LineDialogItem/LineDialogItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any

  DialogsChatsList: Array<any>
  getDialogsChatsListThunkCreator: () => void
}

const Dialogs: React.FC<PropsType> = (props) => {
  useEffect(() => {
    props.getDialogsChatsListThunkCreator()
  }, [])

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {props.DialogsChatsList &&
        props.DialogsChatsList.length > 0 &&
        props.DialogsChatsList.map((dialog: any) => {
          return (
            <LineDialogItem navigation={props.navigation} dialog={dialog} />
          )
        })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
  },
})

export default Dialogs
