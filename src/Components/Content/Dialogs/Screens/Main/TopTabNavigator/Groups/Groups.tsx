// PLUGINS IMPORTS //
import React, { useEffect } from "react"
import { ScrollView, Text, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import LineDialogItem from "../Shared/LineDialogItem/LineDialogItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  GroupsChatsList: Array<any>

  getGroupsChatsListThunkCreator: () => void
}

const Groups: React.FC<PropsType> = (props) => {
  useEffect(() => {
    props.getGroupsChatsListThunkCreator()
  }, [])

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {props.GroupsChatsList &&
        props.GroupsChatsList.length > 0 &&
        props.GroupsChatsList.map((groupChat: any) => {
          return (
            <LineDialogItem
              navigation={props.navigation}
              name="Группа Crypto"
              latestMessage={"Как дела?"}
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

export default Groups
