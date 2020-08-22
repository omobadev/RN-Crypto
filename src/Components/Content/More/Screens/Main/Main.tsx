// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import AsyncStorage from "@react-native-community/async-storage"

// COMPONENTS IMPORTS //
import ListItem from "~/Components/Shared/Components/ListItem/ListItem"

// EXTRA IMPORTS //
import { SimpleLineIcons } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any

  VerifyIfAuthentificatedThunkCreator: () => void
}

const Main: React.FC<PropsType> = (props) => {
  return (
    <View>
      <ListItem
        navigation={props.navigation}
        action={() => props.navigation.navigate("TechSupportScreen")}
        title="Техническая поддержка"
        icon={
          <SimpleLineIcons name="earphones-alt" size={24} color="#006F5F" />
        }
        titleStyle={styles.text}
      />

      <ListItem
        navigation={props.navigation}
        navigationDestination="TarifsScreen"
        title="Мой тариф"
        icon={<FontAwesome name="star-o" size={24} color="#006F5F" />}
        titleStyle={styles.text}
      />
      <ListItem
        navigation={props.navigation}
        navigationDestination="ReferalLinkScreen"
        title="Реферальная ссылка"
        icon={<Entypo name="link" size={24} color="#006F5F" />}
        titleStyle={styles.text}
      />

      <ListItem
        navigation={props.navigation}
        title="Информация"
        icon={<SimpleLineIcons name="question" size={24} color="#006F5F" />}
        titleStyle={styles.text}
      />

      <ListItem
        navigation={props.navigation}
        title="Выйти"
        icon={<SimpleLineIcons name="logout" size={24} color="#006F5F" />}
        action={async () => {
          await AsyncStorage.removeItem("uid")
          props.VerifyIfAuthentificatedThunkCreator()
        }}
        titleStyle={styles.text}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "100",
  },
})

export default Main
