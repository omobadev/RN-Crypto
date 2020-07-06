// PLUGINS IMPORTS //
import React, { useEffect } from "react"
import { ScrollView, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import LineDialogItem from "../Shared/LineDialogItem/LineDialogItem"

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
            <LineDialogItem
              navigation={props.navigation}
              name="Василий Петрович"
              latestMessage={"Привет, я не так давно переводил тебе..."}
              avatar=""
              date="12.08.2020"
              time="18:55"
            />
          )
        })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 11,
  },
})

export default Dialogs
