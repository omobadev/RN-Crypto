// PLUGINS IMPORTS //
import React, { useEffect } from "react"
import { ScrollView, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import TransactionItem from "./TransactionItem/TransactionItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  TransactionsList: Array<{
    isIncome: boolean
    moneyAmount: string
    createdAt: string
    ID: string
  }>

  getTransactionsHistoryThunkCreator: () => void
}

const TransactionsHistory: React.FC<PropsType> = (props) => {
  useEffect(() => {
    props.getTransactionsHistoryThunkCreator()
  }, [])

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {props.TransactionsList.map(
        (transaction: {
          isIncome: boolean
          moneyAmount: string
          createdAt: string
          ID: string
        }) => {
          return (
            <TransactionItem
              amountChanged={Number(transaction.moneyAmount)}
              positive={transaction.isIncome}
              letter={"B"}
              date={transaction.createdAt}
              code={transaction.ID}
            />
          )
        }
      )}
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
