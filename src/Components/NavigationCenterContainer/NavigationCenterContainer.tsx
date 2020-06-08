// PLUGINS IMPORTS //
import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

// COMPONENTS IMPORTS //
import Dialogs from "~/Components/Content/Dialogs/Dialogs"

// EXTRA IMPORTS //

////////////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const NavigationCenterContainer: React.FC<PropsType> = (props) => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator initialRouteName="Dialogs">
      <Tab.Screen name="Dialogs" component={Dialogs} options={{}} />
    </Tab.Navigator>
  )
}

export default NavigationCenterContainer
