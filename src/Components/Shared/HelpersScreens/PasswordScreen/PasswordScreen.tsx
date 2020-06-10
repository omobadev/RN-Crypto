// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, Text, ImageBackground, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import NumItem from "./NumItem/NumItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  route: any
}

const PasswordScreen: React.FC<PropsType> = (props) => {
  const [password, setPassword] = useState("" as string)

  console.log(password)

  return (
    <ImageBackground
      style={styles.container}
      source={require("~/Images/bg-1.png")}
    >
      <Text style={styles.title}>{props.route.params.title}</Text>
      <View style={styles.numbers_wrap}>
        <NumItem
          number={"1"}
          letters=""
          password={password}
          setPassword={setPassword}
        />
        <NumItem
          number={"2"}
          letters="A B C"
          password={password}
          setPassword={setPassword}
        />

        <NumItem
          number={"3"}
          letters="D E F"
          password={password}
          setPassword={setPassword}
        />
        <NumItem
          number={"4"}
          letters="G H I"
          password={password}
          setPassword={setPassword}
        />
        <NumItem
          number={"5"}
          letters="J K L"
          password={password}
          setPassword={setPassword}
        />
        <NumItem
          number={"6"}
          letters="M N O"
          password={password}
          setPassword={setPassword}
        />
        <NumItem
          number={"7"}
          letters="P Q R S"
          password={password}
          setPassword={setPassword}
        />
        <NumItem
          number={"8"}
          letters="T U V"
          password={password}
          setPassword={setPassword}
        />
        <NumItem
          number={"9"}
          letters="W X Y Z"
          password={password}
          setPassword={setPassword}
        />
        <NumItem
          number={"0"}
          letters=""
          password={password}
          setPassword={setPassword}
        />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  numbers_wrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 35.11,
    alignSelf: "center",
    justifyContent: "center",
  },
})

export default PasswordScreen
