// PLUGINS IMPORTS //
import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import BottomListItem from "./BottomListItem/BottomListItem"

// EXTRA IMPORTS //
import { MaterialCommunityIcons } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const BottomSection: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <BottomListItem
        title="Перевод CGC"
        icon={
          <MaterialCommunityIcons
            name="cellphone-sound"
            size={25}
            color="#006F5F"
          />
        }
      />
      <BottomListItem
        title="Вывод CGC"
        icon={
          <MaterialCommunityIcons
            name="cellphone-sound"
            size={25}
            color="#006F5F"
          />
        }
      />
      <BottomListItem
        title="Купить CGC"
        icon={
          <MaterialCommunityIcons
            name="cellphone-sound"
            size={25}
            color="#006F5F"
          />
        }
      />
      <BottomListItem
        title="Майнинг"
        icon={
          <MaterialCommunityIcons
            name="cellphone-sound"
            size={25}
            color="#006F5F"
          />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 25,
  },
})

export default BottomSection
