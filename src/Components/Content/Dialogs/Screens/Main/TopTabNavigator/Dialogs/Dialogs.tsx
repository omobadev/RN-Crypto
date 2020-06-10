// PLUGINS IMPORTS //
import React from "react"
import { ScrollView, Text, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import LineDialogItem from "../Shared/LineDialogItem/LineDialogItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const Dialogs: React.FC<PropsType> = (props) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LineDialogItem
        name="Василий Петрович"
        latestMessage={
          "Привет, я не так давно переводил тебе определеную сумму, проверь дошли?"
        }
        avatar=""
      />
      <LineDialogItem
        name="Василий Петрович"
        latestMessage={
          "Привет, я не так давно переводил тебе определеную сумму, проверь дошли?"
        }
        avatar=""
      />
      <LineDialogItem
        name="Василий Петрович"
        latestMessage={
          "Привет, я не так давно переводил тебе определеную сумму, проверь дошли?"
        }
        avatar=""
      />
      <LineDialogItem
        name="Василий Петрович"
        latestMessage={
          "Привет, я не так давно переводил тебе определеную сумму, проверь дошли?"
        }
        avatar=""
      />
      <LineDialogItem
        name="Василий Петрович"
        latestMessage={
          "Привет, я не так давно переводил тебе определеную сумму, проверь дошли?"
        }
        avatar=""
      />
      <LineDialogItem
        name="Василий Петрович"
        latestMessage={
          "Привет, я не так давно переводил тебе определеную сумму, проверь дошли?"
        }
        avatar=""
      />
      <LineDialogItem
        name="Василий Петрович"
        latestMessage={
          "Привет, я не так давно переводил тебе определеную сумму, проверь дошли?"
        }
        avatar=""
      />
      <LineDialogItem
        name="Василий Петрович"
        latestMessage={
          "Привет, я не так давно переводил тебе определеную сумму, проверь дошли?"
        }
        avatar=""
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 11,
  },
})

export default Dialogs
