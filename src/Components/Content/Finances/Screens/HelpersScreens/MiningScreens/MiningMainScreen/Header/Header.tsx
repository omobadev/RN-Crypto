// PLUGINS IMPORTS //
import React from "react"
import { View, Text, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const Header: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ознакомьтесь с доходностью от майнинга:</Text>
      <Text style={styles.text}>
        Здесь вы можете заработать кучу денег и это хороший способ среднесрочных
        инвестиий и тд.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },

  text: {
    color: "#00392D",
    marginBottom: 10,
    fontSize: 16.5,
    letterSpacing: 0.1,
  },
})

export default Header
