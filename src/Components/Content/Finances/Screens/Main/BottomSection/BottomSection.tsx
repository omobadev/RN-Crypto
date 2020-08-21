// PLUGINS IMPORTS //
import React from "react"
import { View, Image, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import ListItem from "~/Components/Shared/Components/ListItem/ListItem"

// EXTRA IMPORTS //
import { MaterialCommunityIcons } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const BottomSection: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <ListItem
        navigation={props.navigation}
        navigationDestination="MoneyMoveInScreen1"
        title="Перевод CGC"
        icon={
          <Image
            style={styles.icon}
            source={require("~/Images/Icons/icon-in.png")}
          />
        }
      />
      <ListItem
        navigation={props.navigation}
        navigationDestination="MoneyMoveOutScreen1"
        title="Вывод"
        icon={
          <Image
            style={styles.icon}
            source={require("~/Images/Icons/icon-out.png")}
          />
        }
      />
      <ListItem
        navigation={props.navigation}
        navigationDestination="BuyMoneyScreen1"
        title="Купить CGC"
        icon={
          <Image
            style={styles.icon}
            source={require("~/Images/Icons/icon-buy.png")}
          />
        }
      />
      <ListItem
        navigation={props.navigation}
        navigationDestination="MiningMainScreen"
        title="Майнинг"
        icon={
          <Image
            style={styles.icon}
            source={require("~/Images/Icons/icon-mining.png")}
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

  icon: {
    height: 25,
    width: 25,
    resizeMode: "center",
  },
})

export default BottomSection
