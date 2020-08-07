// PLUGINS IMPORTS //
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import MiningOutMoneyScreen from "./MiningOutMoneyScreen"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { deriveMiningThunkCreator } from "~/Redux/Reducers/FinancesReducers/FinancesSetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any
}

type MapDispatchToPropsType = {
  deriveMiningThunkCreator: (moneyAmount: string) => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
  }
}

const MiningOutMoneyScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      deriveMiningThunkCreator,
    }
  )
)(MiningOutMoneyScreen)

export default MiningOutMoneyScreenContainer
