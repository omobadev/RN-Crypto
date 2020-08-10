// PLUGINS IMPORTS //
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import MiningInMoneyScreen from "./MiningInMoneyScreen"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { addMiningThunkCreator } from "~/Redux/Reducers/FinancesReducers/FinancesSetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any
}

type MapDispatchToPropsType = {
  addMiningThunkCreator: (moneyAmount: string, currency: string) => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
  }
}

const MiningInMoneyScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(mapStateToProps, {
    addMiningThunkCreator,
  })
)(MiningInMoneyScreen)

export default MiningInMoneyScreenContainer
