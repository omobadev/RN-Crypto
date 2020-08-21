// PLUGINS IMPORTS //
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import BuyMoneyScreen2 from "./BuyMoneyScreen2"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import {
  buyMoneyThunkCreator,
  ActionCreatorsList,
} from "~/Redux/Reducers/FinancesReducers/FinancesSetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any
  route: any

  wallet: string
  transferStatusRes: {
    title: string
    text: string
    visible: boolean
    positive: boolean
    link?: string
  }
}

type MapDispatchToPropsType = {
  setTransferStatusResActionCreator: (config: {
    title: string
    text: string
    visible: boolean
    positive: boolean
    link?: string
  }) => void
  buyMoneyThunkCreator: (moneyAmount: number, sendingAdress: string) => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    route: props.route,

    wallet: state.FinancesGetState.BudgetInfo.wallet,
    transferStatusRes: state.FinancesSetState.transferStatusRes,
  }
}

const BuyMoneyScreen2Container = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      setTransferStatusResActionCreator:
        ActionCreatorsList.setTransferStatusResActionCreator,
      buyMoneyThunkCreator,
    }
  )
)(BuyMoneyScreen2)

export default BuyMoneyScreen2Container
