// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import LineDataItem from "../../Shared/LineDataItem/LineDataItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  userData: any
}

const Body: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <LineDataItem title="ID" desc={props.userData.ID} />
      <LineDataItem title="Имя" desc={props.userData.name} />
      <LineDataItem title="Логин" desc={props.userData.login} />
      <LineDataItem title="Email" desc={props.userData.email} />
      <LineDataItem title="Страна, Город" desc={props.userData.location} />
      <LineDataItem title="ID пригласившего" desc={props.userData.invitedID} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
})

export default Body
