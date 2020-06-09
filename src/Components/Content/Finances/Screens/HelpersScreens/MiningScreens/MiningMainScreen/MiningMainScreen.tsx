// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import ListItem from "~/Components/Shared/Components/ListItem/ListItem"

// EXTRA IMPORTS //
import Popup from "~/Components/Shared/Components/PopUp/PopUp"
import { Entypo } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  route: any
}

const MiningMainScreen: React.FC<PropsType> = (props) => {
  const changePopupVisibility = (visibilityStatus: boolean) => {
    props.navigation.setParams({
      infoPopupOpened: visibilityStatus,
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.btns_wrap}>
        <ListItem
          navigation={props.navigation}
          navigationDestination={"MiningInMoneyScreen"}
          title="Пополнить CGC"
          icon={<Entypo name="align-top" size={24} color="#006F5F" />}
        />
        <ListItem
          navigation={props.navigation}
          navigationDestination={"MiningOutMoneyScreen"}
          title="Вывод CGC"
          icon={<Entypo name="align-bottom" size={24} color="#006F5F" />}
        />
      </View>
      <Popup
        title="О майнинге"
        description="Здесь вы можете заработать кучу денег и это хороший способ среднесрочных инвестиий и тд."
        buttonsArray={[
          {
            text: "OK",
            action: () => changePopupVisibility(false),
          },
        ]}
        descriptionStyle={{
          textAlign: "center",
        }}
        popupVisible={props.route.params.infoPopupOpened}
        setPopupVisible={changePopupVisibility}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },

  btns_wrap: {
    marginTop: 5,
  },
})

export default MiningMainScreen
