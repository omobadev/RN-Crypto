// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import Main from "./Main"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import {
  getUserFinancesInfoThunkCreator,
  getUserCredentialsThunkCreator,
} from "~/Redux/Reducers/UserReducers/UserGetReducer"

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
  getUserFinancesInfoThunkCreator: () => void
  getUserCredentialsThunkCreator: () => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,

    BudgetInfo: state.UserGetState.BudgetInfo,
    userID: state.UserGetState.UserCredentials.ID,
  }
}

const MainContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      getUserFinancesInfoThunkCreator: getUserFinancesInfoThunkCreator,
      getUserCredentialsThunkCreator: getUserCredentialsThunkCreator,
    }
  )
)(Main)

export default MainContainer
