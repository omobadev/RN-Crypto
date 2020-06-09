// PLUGINS IMPORTS //
import React from "react"
import { ScrollView, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import TransactionItem from "./TransactionItem/TransactionItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const TransactionsHistory: React.FC<PropsType> = (props) => {
  return (
    <ScrollView style={styles.container}>
      <TransactionItem
        amountChanged={423}
        positive={false}
        letter={"B"}
        date={"12:48"}
        code={"B29831FDUHSUH289"}
      />
      <TransactionItem
        amountChanged={423}
        positive={false}
        letter={"B"}
        date={"12:48"}
        code={"B29831FDUHSUH289"}
      />
      <TransactionItem
        amountChanged={423}
        positive={false}
        letter={"B"}
        date={"12:48"}
        code={"B29831FDUHSUH289"}
      />
      <TransactionItem
        amountChanged={423}
        positive={true}
        letter={"B"}
        date={"12:48"}
        code={"B29831FDUHSUH289"}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 17,
  },
})

export default TransactionsHistory
