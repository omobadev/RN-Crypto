// PLUGINS IMPORTS //
import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import ListItem from "~/Components/Shared/Components/ListItem/ListItem"

// EXTRA IMPORTS //
import Popup from "~/Components/Shared/Components/Popups/PopUp/PopUp"

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
      <View style={styles.btns_wrap}>
        <ListItem
          navigation={props.navigation}
          navigationDestination={"MiningInMoneyScreen"}
          title="Депозит CGC"
          icon={
            <Image
              style={styles.icon}
              source={require("~/Images/Icons/icon-mining-down.png")}
            />
          }
        />
        <ListItem
          navigation={props.navigation}
          navigationDestination={"MiningOutMoneyScreen"}
          title="Вывод CGC"
          icon={
            <Image
              style={styles.icon}
              source={require("~/Images/Icons/icon-mining-up.png")}
            />
          }
        />
      </View>
      <Popup
        title="О майнинге"
        elements={
          <View>
            <Text>
              Майнинг доступен только для пользователей у которых подключена
              абонентская плата. Сделать это вы можете во вкладке “мой тариф” в
              главном меню приложения.
            </Text>

            <Text>Условия на уровни майнинга:</Text>
            <Text>
              1 уровень: - на счете от 1 000 до 99 000 (от 1 до 99 блоков)
              начисляется 5% в месяц
            </Text>
            <Text>
              2 уровень: - на счете от 100 000 до 999 000 (от 100 до 999)
              начисляется 6% в месяц 3 уровень: - на счете от 1 000 000 (от 1000
              блоков) и более начисляется 7% в месяц
            </Text>

            <Text>
              Для владельцев токенов INPH даются бонусные проценты начисления
              майнинга: от 10 до 99,999 999 INPH: +0,2% в месяц от 100 до 9
              999,999 999 INPH: +0,5% в месяц от 10 000 INPH и более: +1,0% в
              месяц
            </Text>
          </View>
        }
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

  icon: {
    width: 25,
    height: 25,
  },
})

export default MiningMainScreen
