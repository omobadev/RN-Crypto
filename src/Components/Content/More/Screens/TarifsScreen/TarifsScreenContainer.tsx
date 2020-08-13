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
import { buyTarifThunkCreator } from "~/Redux/Reducers/ExtraReducers/ExtraSetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
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
  buyTarifThunkCreator: (tarifID: string, currency: string) => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    TarifsList: state.ExtraGetState.TarifsList,
    PaymentAmount: state.ExtraGetState.PaymentAmount,
    endDate: state.ExtraGetState.endDate,
  }
}

const TarifsScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      getTarifsInfoThunkCreator,
      getTarifsListThunkCreator,
      buyTarifThunkCreator,
    }
  )
)(TarifsScreen)

export default TarifsScreenContainer
