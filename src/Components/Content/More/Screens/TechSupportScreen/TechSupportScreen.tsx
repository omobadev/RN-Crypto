// PLUGINS IMPORTS //
import React, { useEffect } from "react"
import { ScrollView, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  getTechSupportChatsThunkCreator: () => void
}

const TechSupportScreen: React.FC<PropsType> = (props) => {
  useEffect(() => {
    props.getTechSupportChatsThunkCreator()
  }, [])

  return <ScrollView></ScrollView>
}

const styles = StyleSheet.create({})

export default TechSupportScreen
