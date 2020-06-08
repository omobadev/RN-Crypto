// PLUGINS IMPORTS //
import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

// COMPONENTS IMPORTS //
import Dialogs from "~/Components/Content/Dialogs/Dialogs"
import Finances from "~/Components/Content/Finances/Finances"
import Statistics from "~/Components/Content/Statistics/Statistics"
import Profile from "~/Components/Content/Profile/Profile"
import More from "~/Components/Content/More/More"

// EXTRA IMPORTS //

////////////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const NavigationCenterContainer: React.FC<PropsType> = (props) => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator initialRouteName="Dialogs">
      <Tab.Screen name="Dialogs" component={Dialogs} options={{}} />
      <Tab.Screen name="Finances" component={Finances} options={{}} />
      <Tab.Screen name="Statistics" component={Statistics} options={{}} />
      <Tab.Screen name="Profile" component={Profile} options={{}} />
      <Tab.Screen name="More" component={More} options={{}} />
    </Tab.Navigator>
  )
}

export default NavigationCenterContainer
