// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import TarifsScreen from "./TarifsScreen"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { getTarifsListThunkCreator } from "~/Redux/Reducers/ExtraReducers/ExtraGetReducer/ExtraGetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  TarifsList: Array<{
    color: string
    sale: string
    price: string
    duration: string
  }>
}

type MapDispatchToPropsType = {
  getTarifsListThunkCreator: () => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    TarifsList: state.ExtraGetState.TarifsList,
  }
}

const TarifsScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      getTarifsListThunkCreator: getTarifsListThunkCreator,
    }
  )
)(TarifsScreen)

export default TarifsScreenContainer
