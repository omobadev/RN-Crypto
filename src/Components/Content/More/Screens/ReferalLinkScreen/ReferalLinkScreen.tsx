// PLUGINS IMPORTS //
import React, { useEffect } from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import SocialMediaSection from "./SocialMediaSection/SocialMediaSection"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  ReferalLink: string

  getReferalLinkThunkCreator: () => void
}

const ReferalLinkScreen: React.FC<PropsType> = (props) => {
  useEffect(() => {
    props.getReferalLinkThunkCreator()
  }, [])

  return (
    <View style={styles.container}>
      <Header referaLink={props.ReferalLink} />
      <SocialMediaSection referaLink={props.ReferalLink} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 17,
  },
})

export default ReferalLinkScreen
