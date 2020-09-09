// PLUGINS IMPORTS //
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import MoneyMoveOutScreen1 from "./MoneyMoveOutScreen1"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { ActionCreatorsList } from "~/Redux/Reducers/FinancesReducers/FinancesSetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any

  transferStatusRes: {
    title: string
    text: string
    visible: boolean
    positive: boolean
  }
}

type MapDispatchToPropsType = {
  setTransferStatusResActionCreator: (config: {
    title: string
    text: string
    visible: boolean
    positive: boolean
  }) => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    transferStatusRes: state.FinancesSetState.transferStatusRes,
  }
}

const MoneyMoveOutScreen1Container = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      setTransferStatusResActionCreator:
        ActionCreatorsList.setTransferStatusResActionCreator,
    }
  )
)(MoneyMoveOutScreen1)

export default MoneyMoveOutScreen1Container
