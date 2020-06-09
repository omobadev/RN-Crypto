// PLUGINS IMPORTS //
import React from "react"
import { View, Text } from "react-native"
import { Switch } from "react-native-paper"

// COMPONENTS IMPORTS //
import SelectListItem from "~/Components/Shared/Components/SelectListItem/SelectListItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const NotificationsSettings: React.FC<PropsType> = (props) => {
  return (
    <View>
      <SelectListItem
        title="Не беспокоить"
        selectItem={<Switch color={"#006F5F"} />}
      />
      <SelectListItem
        title="Вибрация"
        selectItem={<Switch color={"#006F5F"} />}
      />
      <SelectListItem
        title="Уведомления"
        selectItem={<Switch color={"#006F5F"} />}
      />
    </View>
  )
}

export default NotificationsSettings
