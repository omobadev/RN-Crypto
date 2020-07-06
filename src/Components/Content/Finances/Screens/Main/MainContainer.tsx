// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import Main from "./Main"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { getUserCredentialsThunkCreator } from "~/Redux/Reducers/UserReducers/UserGetReducer"
import { getUserGeneralFinancesInfoThunkCreator } from "~/Redux/Reducers/FinancesReducers/FinancesGetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any

  userID: string | null
  BudgetInfo: {
    CGC: {
      price: string
      value2: string
    }

    MiningCGC: {
      price: string
      value2: string
    }
    DailyIncome: {
      price: string
      value2: string
    }
  }
}

type MapDispatchToPropsType = {
  getUserGeneralFinancesInfoThunkCreator: () => void
  getUserCredentialsThunkCreator: () => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,

    BudgetInfo: state.FinancesGetState.BudgetInfo,
    userID: state.UserGetState.UserCredentials.ID,
  }
}

const MainContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      getUserGeneralFinancesInfoThunkCreator: getUserGeneralFinancesInfoThunkCreator,
      getUserCredentialsThunkCreator: getUserCredentialsThunkCreator,
    }
  )
)(Main)

export default MainContainer
