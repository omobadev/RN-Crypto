// PLUGINS IMPORTS //
import React from "react"
import { View, Text, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import NumItem from "./NumItem/NumItem"
import PassCountCircleItem from "./PassCountCircleItem/PassCountCircleItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  route: any
  password: any

  setPassword: (password: string) => void
}

const Body: React.FC<PropsType> = (props) => {
  return (
    <>
      <Text style={styles.title}>{props.route.params.title}</Text>
      <View style={styles.circles_wrap}>
        <PassCountCircleItem
          filled={props.password.length >= 1 ? true : false}
        />
        <PassCountCircleItem
          filled={props.password.length >= 2 ? true : false}
        />
        <PassCountCircleItem
          filled={props.password.length >= 3 ? true : false}
        />
        <PassCountCircleItem
          filled={props.password.length >= 4 ? true : false}
        />
        <PassCountCircleItem
          filled={props.password.length >= 5 ? true : false}
        />
        <PassCountCircleItem
          filled={props.password.length >= 6 ? true : false}
        />
      </View>
      <View style={styles.numbers_wrap}>
        <NumItem
          number={"1"}
          letters=""
          password={props.password}
          setPassword={props.setPassword}
        />
        <NumItem
          number={"2"}
          letters="A B C"
          password={props.password}
          setPassword={props.setPassword}
        />

        <NumItem
          number={"3"}
          letters="D E F"
          password={props.password}
          setPassword={props.setPassword}
        />
        <NumItem
          number={"4"}
          letters="G H I"
          password={props.password}
          setPassword={props.setPassword}
        />
        <NumItem
          number={"5"}
          letters="J K L"
          password={props.password}
          setPassword={props.setPassword}
        />
        <NumItem
          number={"6"}
          letters="M N O"
          password={props.password}
          setPassword={props.setPassword}
        />
        <NumItem
          number={"7"}
          letters="P Q R S"
          password={props.password}
          setPassword={props.setPassword}
        />
        <NumItem
          number={"8"}
          letters="T U V"
          password={props.password}
          setPassword={props.setPassword}
        />
        <NumItem
          number={"9"}
          letters="W X Y Z"
          password={props.password}
          setPassword={props.setPassword}
        />
        <NumItem
          number={"0"}
          letters=""
          password={props.password}
          setPassword={props.setPassword}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 20,
  },

  circles_wrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "30%",
    marginTop: 20,
    marginBottom: 30,
  },

  numbers_wrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 35.11,
    alignSelf: "center",
    justifyContent: "center",
  },
})

export default Body
