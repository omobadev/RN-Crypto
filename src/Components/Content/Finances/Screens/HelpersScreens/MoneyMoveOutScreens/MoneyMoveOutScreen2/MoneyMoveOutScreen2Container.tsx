// PLUGINS IMPORTS //
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import MoneyMoveOutScreen2 from "./MoneyMoveOutScreen2"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import {
  deriveMoneyThunkCreator,
  ActionCreatorsList,
} from "~/Redux/Reducers/FinancesReducers/FinancesSetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any
  route: any

  transferStatusRes: {
    title: string
    text: string
    visible: boolean
    positive: boolean
    link?: string
  }
}

type MapDispatchToPropsType = {
  deriveMoneyThunkCreator: (
    moneyAmount: number,
    currency: string,
    wallet: string,
    password: string
  ) => void
  setTransferStatusResActionCreator: (config: {
    title: string
    text: string
    visible: boolean
    positive: boolean
    link?: string
  }) => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    route: props.route,

    transferStatusRes: state.FinancesSetState.transferStatusRes,
  }
}

const MoneyMoveOutScreen2Container = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      deriveMoneyThunkCreator,
      setTransferStatusResActionCreator:
        ActionCreatorsList.setTransferStatusResActionCreator,
    }
  )
)(MoneyMoveOutScreen2)

export default MoneyMoveOutScreen2Container
