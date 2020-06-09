// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import BottomListItem from "./BottomListItem/BottomListItem"

// EXTRA IMPORTS //
import { MaterialCommunityIcons } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const BottomSection: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <BottomListItem
        navigation={props.navigation}
        navigationDestination="MoneyMoveInScreen1"
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
        navigation={props.navigation}
        navigationDestination="MoneyMoveOutScreen1"
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
        navigation={props.navigation}
        navigationDestination="BuyMoneyScreen1"
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
        navigation={props.navigation}
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
    marginVertical: 10,
  },
})

export default BottomSection
