// PLUGINS IMPORTS //
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import TarifsScreen from "./TarifsScreen"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import {
  getTarifsInfoThunkCreator,
  getTarifsListThunkCreator,
} from "~/Redux/Reducers/ExtraReducers/ExtraGetReducer"
import {
  buyTarifThunkCreator,
  ActionCreatorsList,
} from "~/Redux/Reducers/ExtraReducers/ExtraSetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  responseStatus: {
    positive: boolean
    show: boolean
  }
  PaymentAmount: string | null
  endDate: string | null

  TarifsList: Array<{
    ID: string
    title: string
    description: string
    price: string
    duration: string
  }>
}

type MapDispatchToPropsType = {
  getTarifsInfoThunkCreator: () => void
  getTarifsListThunkCreator: () => void
  setResponseStatusActionCreator: (responseStatus: {
    positive: boolean
    show: boolean
  }) => void
  buyTarifThunkCreator: (tarifID: string) => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    responseStatus: state.ExtraSetState.responseStatus,
    TarifsList: state.ExtraGetState.TarifsList,
    PaymentAmount: state.ExtraGetState.PaymentAmount,
    endDate: state.ExtraGetState.endDate,
  }
}

const TarifsScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      setResponseStatusActionCreator:
        ActionCreatorsList.setResponseStatusActionCreator,
      getTarifsInfoThunkCreator,
      getTarifsListThunkCreator,
      buyTarifThunkCreator,
    }
  )
)(TarifsScreen)

export default TarifsScreenContainer
