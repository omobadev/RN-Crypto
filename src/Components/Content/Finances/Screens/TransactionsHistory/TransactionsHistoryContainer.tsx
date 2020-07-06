// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import TransactionsHistory from "./TransactionsHistory"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { getTransactionsHistoryThunkCreator } from "~/Redux/Reducers/FinancesReducers/FinancesGetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  TransactionsList: Array<{
    isIncome: boolean
    moneyAmount: string
    createdAt: string
    ID: string
  }>
}

type MapDispatchToPropsType = {
  getTransactionsHistoryThunkCreator: () => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    TransactionsList: state.FinancesGetState.TransactionsList,
  }
}

const TransactionsHistoryContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      getTransactionsHistoryThunkCreator: getTransactionsHistoryThunkCreator,
    }
  )
)(TransactionsHistory)

export default TransactionsHistoryContainer
