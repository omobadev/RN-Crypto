// PLUGINS IMPORTS //
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import MoneyMoveOutScreen2 from "./MoneyMoveOutScreen2"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { deriveMoneyThunkCreator } from "~/Redux/Reducers/FinancesReducers/FinancesSetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any
  route: any
}

type MapDispatchToPropsType = {
  deriveMoneyThunkCreator: (
    moneyAmount: number,
    currency: string,
    wallet: string,
    password: string
  ) => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    route: props.route,
  }
}

const MoneyMoveOutScreen2Container = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      deriveMoneyThunkCreator,
    }
  )
)(MoneyMoveOutScreen2)

export default MoneyMoveOutScreen2Container
