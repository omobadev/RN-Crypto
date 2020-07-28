// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, Text, Image, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import ListItem from "~/Components/Shared/Components/ListItem/ListItem"

// EXTRA IMPORTS //
import PopUp from "~/Components/Shared/Components/Popups/PopUp/PopUp"
import { Fontisto } from "@expo/vector-icons"
import { Feather } from "@expo/vector-icons"
import { SimpleLineIcons } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const Dashboard: React.FC<PropsType> = (props) => {
  const [resetSettingsPopUpVisible, setResetSettigsPopUpVisible] = useState(
    false as boolean
  )
  const [aboutPopUpVisible, setAboutPopUpVisible] = useState(false as boolean)

  return (
    <>
      <Text style={styles.title}>Аккаунт</Text>
      <ListItem
        navigation={props.navigation}
        navigationDestination="NotificationsSettings"
        title="Уведомления"
        icon={<Fontisto name="bell" size={24} color="#006F5F" />}
        titleStyle={{
          fontWeight: null,
        }}
      />
      <ListItem
        navigation={props.navigation}
        navigationDestination="GeneralSettings"
        title="Основные"
        icon={<Feather name="settings" size={24} color="#006F5F" />}
        titleStyle={{
          fontWeight: null,
        }}
      />
      <ListItem
        navigation={props.navigation}
        navigationDestination=""
        title="Функции вызова"
        icon={<Feather name="phone-call" size={24} color="#006F5F" />}
        titleStyle={{
          fontWeight: null,
        }}
      />
      <View style={styles.divider} />
      <Text style={styles.title}>Другое</Text>
      <ListItem
        navigation={props.navigation}
        action={() => setResetSettigsPopUpVisible(true)}
        title="Сбросить настройки"
        icon={<Feather name="alert-triangle" size={24} color="#006F5F" />}
        titleStyle={{
          fontWeight: null,
        }}
      />
      <ListItem
        navigation={props.navigation}
        action={() => setAboutPopUpVisible(true)}
        title="О программе"
        icon={<SimpleLineIcons name="question" size={24} color="#006F5F" />}
        titleStyle={{
          fontWeight: null,
        }}
      />
      <ListItem
        navigation={props.navigation}
        navigationDestination=""
        title="Выход"
        icon={<SimpleLineIcons name="logout" size={24} color="#006F5F" />}
        titleStyle={{
          fontWeight: null,
        }}
      />
      <PopUp
        popupVisible={resetSettingsPopUpVisible}
        setPopupVisible={setResetSettigsPopUpVisible}
        containerStyle={{
          width: 340,
        }}
        title="Сбросить настройки?"
        buttonsArray={[
          {
            text: "Отмена",
            action: () => setResetSettigsPopUpVisible(false),
          },
          {
            text: "OK",
            action: () => console.log("Сбросить настройки Fn"),
          },
        ]}
      />
      <PopUp
        popupVisible={aboutPopUpVisible}
        setPopupVisible={setAboutPopUpVisible}
        containerStyle={{
          width: 340,
        }}
        title="О программе"
        elements={
          <View style={{ alignItems: "center" }}>
            <Image
              style={styles.popup_img}
              source={require("~/Images/logo-1.png")}
            />
            <Text style={styles.popup_text}>
              Все предложения принимаются на почту: 123@mail.ru
            </Text>
            <Text style={styles.popup_subtitle}>Версия 1.1</Text>
          </View>
        }
        buttonsArray={[
          {
            text: "OK",
            action: () => setAboutPopUpVisible(false),
          },
        ]}
      />
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    color: "#9E9E9E",
    marginHorizontal: 19,
    fontSize: 17,
  },

  popup_img: {
    width: 100,
    height: 100,
  },

  popup_text: {
    color: "#00392D",
    textAlign: "center",
    fontSize: 16,
  },

  popup_subtitle: {
    color: "gray",
    marginTop: 10,
  },

  divider: {
    borderTopColor: "#9E9E9E",
    borderTopWidth: 1,
    opacity: 0.5,
    marginHorizontal: 19,
    marginBottom: 15,
  },
})

export default Dashboard
