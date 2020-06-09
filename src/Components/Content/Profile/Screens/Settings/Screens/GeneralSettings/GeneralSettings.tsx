// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { RadioButton } from "react-native-paper"

// COMPONENTS IMPORTS //
import SelectListItem from "~/Components/Shared/Components/SelectListItem/SelectListItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const GeneralSettings: React.FC<PropsType> = (props) => {
  const [selectedTime, setSelectedTime] = useState("24" as string)

  return (
    <View>
      <SelectListItem
        title="24 часовой"
        selectItem={
          <RadioButton
            color={"#006F5F"}
            value={"24"}
            status={selectedTime === "24" ? "checked" : "unchecked"}
            onPress={() => setSelectedTime("24")}
          />
        }
      />
      <SelectListItem
        title="12 часовой"
        selectItem={
          <RadioButton
            color={"#006F5F"}
            value={"12"}
            status={selectedTime === "12" ? "checked" : "unchecked"}
            onPress={() => setSelectedTime("12")}
          />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default GeneralSettings
