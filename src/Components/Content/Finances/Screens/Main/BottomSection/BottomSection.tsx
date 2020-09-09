// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, Text, Image, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import ListItem from "~/Components/Shared/Components/ListItem/ListItem"
import PopUp from "~/Components/Shared/Components/Popups/PopUp/PopUp"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  hasAbon: boolean
}

const BottomSection: React.FC<PropsType> = (props) => {
  const [popupVisible, setPopupVisible] = useState(false as boolean)

  return (
    <>
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
          title="Майнинг"
          icon={
            <Image
              style={styles.icon}
              source={require("~/Images/Icons/icon-mining.png")}
            />
          }
          action={() => {
            if (props.hasAbon) {
              props.navigation.navigate("MiningMainScreen")
            } else {
              setPopupVisible(true)
            }
          }}
        />
      </View>

      <PopUp
        title={"У вас не оплачен тариф"}
        description={
          "Оплатите абоненсткую плату перед тем как воспользоваться майнингом"
        }
        buttonsArray={[
          {
            text: "OK",
            action: () => setPopupVisible(false),
          },
        ]}
        link={"Оплатить"}
        linkOpen={() => {
          setPopupVisible(false)
          props.navigation.navigate("TarifsScreen")
        }}
        popupVisible={popupVisible}
        setPopupVisible={setPopupVisible}
      />
    </>
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
