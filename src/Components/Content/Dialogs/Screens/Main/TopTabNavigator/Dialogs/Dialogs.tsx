// PLUGINS IMPORTS //
import React from "react"
import { ScrollView, Text, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import LineDialogItem from "../Shared/LineDialogItem/LineDialogItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const Dialogs: React.FC<PropsType> = (props) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LineDialogItem
        navigation={props.navigation}
        name="Василий Петрович"
        latestMessage={"Привет, я не так давно переводил тебе..."}
        avatar=""
        date="12.08.2020"
        time="18:55"
      />
      <LineDialogItem
        navigation={props.navigation}
        name="Василий Петрович"
        latestMessage={"Привет, я не так давно переводил тебе..."}
        avatar=""
        date="12.08.2020"
        time="18:55"
      />
      <LineDialogItem
        navigation={props.navigation}
        name="Василий Петрович"
        latestMessage={
          "Привет, я не так давно переводил тебе опре деленую сумму, проверь дошли?"
        }
        avatar=""
        date="12.08.2020"
        time="18:55"
      />
      <LineDialogItem
        navigation={props.navigation}
        name="Василий Петрович"
        latestMessage={"Привет, я не так давно переводил тебе..."}
        avatar=""
        date="12.08.2020"
        time="18:55"
      />
      <LineDialogItem
        navigation={props.navigation}
        name="Василий Петрович"
        latestMessage={"Привет, я не так давно переводил тебе..."}
        avatar=""
        date="12.08.2020"
        time="18:55"
      />
      <LineDialogItem
        navigation={props.navigation}
        name="Василий Петрович"
        latestMessage={"Привет, я не так давно переводил тебе..."}
        avatar=""
        date="12.08.2020"
        time="18:55"
      />
      <LineDialogItem
        navigation={props.navigation}
        name="Василий Петрович"
        latestMessage={"Привет, я не так давно переводил тебе..."}
        avatar=""
        date="12.08.2020"
        time="18:55"
      />
      <LineDialogItem
        navigation={props.navigation}
        name="Василий Петрович"
        latestMessage={"Привет, я не так давно переводил тебе..."}
        avatar=""
        date="12.08.2020"
        time="18:55"
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 11,
  },
})

export default Dialogs
