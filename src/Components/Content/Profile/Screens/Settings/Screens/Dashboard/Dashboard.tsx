// PLUGINS IMPORTS //
import React from "react"
import { View, Text, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import ListItem from "~/Components/Shared/Components/ListItem/ListItem"

// EXTRA IMPORTS //
import { Fontisto } from "@expo/vector-icons"
import { Feather } from "@expo/vector-icons"
import { SimpleLineIcons } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const Dashboard: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Аккаунт</Text>
      <ListItem
        navigation={props.navigation}
        navigationDestination=""
        title="Уведомления"
        icon={<Fontisto name="bell" size={24} color="#006F5F" />}
        titleStyle={{
          fontWeight: null,
        }}
      />
      <ListItem
        navigation={props.navigation}
        navigationDestination=""
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
        navigationDestination=""
        title="Сбросить настройки"
        icon={<Feather name="alert-triangle" size={24} color="#006F5F" />}
        titleStyle={{
          fontWeight: null,
        }}
      />
      <ListItem
        navigation={props.navigation}
        navigationDestination=""
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},

  title: {
    color: "#9E9E9E",
    marginHorizontal: 19,
    fontSize: 17,
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
