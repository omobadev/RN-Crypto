// PLUGINS IMPORTS //
import React from "react"
import { View, Text, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { AntDesign } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  code: string
  date: string
  letter: string

  amountChanged: number
  positive: boolean
}

const TransactionItem: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content_wrap}>
        <AntDesign
          name="wallet"
          size={24}
          color={props.positive ? "#54bf70" : "#D50102"}
        />
        <View style={styles.text_wrap}>
          <Text style={styles.title}>
            {props.positive ? "Входящие средства" : "Исходящие средства"}
          </Text>
          <Text style={styles.code}>{props.code}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.date}>{props.date}</Text>
        <View style={styles.price_wrap}>
          <Text
            style={[
              styles.price,
              props.positive ? { color: "#54bf70" } : { color: "#D50102" },
            ]}
          >
            {props.positive ? "+" : "-"}
            {props.amountChanged}
          </Text>
          {/* <Text style={styles.letter}>{props.letter}</Text> */}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  content_wrap: {
    flexDirection: "row",
  },

  text_wrap: {
    marginLeft: 15,
  },

  title: {
    color: "#00392D",
    fontWeight: "bold",
    fontSize: 16,
  },

  date: {
    textAlign: "right",
    color: "gray",
    fontSize: 12,
  },

  price_wrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "flex-end",
  },

  price: {
    fontSize: 18,
    width: 100,
    textAlign: "right",
  },

  negative_income_text: {
    color: "#D50102",
    fontSize: 18,
  },

  code: {
    lineHeight: 23,
    color: "#9E9E9E",
    fontSize: 14,
  },

  letter: {
    color: "#00392D",
    fontSize: 17,
    fontWeight: "bold",
  },
})

export default TransactionItem
