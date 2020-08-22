// PLUGINS IMPORTS //
import React, { useEffect } from "react"
import { ScrollView, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import LineDialogItem from "~/Components/Content/Dialogs/Screens/Main/Dialogs/LineDialogItem/LineDialogItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  TechSupportChats: Array<any>

  getTechSupportChatsThunkCreator: () => void
}

const TechSupportScreen: React.FC<PropsType> = (props) => {
  console.log(props.TechSupportChats)
  useEffect(() => {
    props.getTechSupportChatsThunkCreator()
  }, [])

  return (
    <ScrollView>
      {props.TechSupportChats &&
        props.TechSupportChats.length > 0 &&
        props.TechSupportChats.map((chat: any) => {
          return <LineDialogItem navigation={props.navigation} dialog={chat} />
        })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({})

export default TechSupportScreen
