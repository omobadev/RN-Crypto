// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import Step2Screen from "./Step2Screen"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import {
  ActionCreatorsList,
  RegisterUserThunkCreator,
} from "~/Redux/Reducers/AuthReducers/AuthSetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any
}

type MapDispatchToPropsType = {
  setSecondScreenValuesActionCreator: (
    UserName: string,
    Email: string,
    Country: string,
    City: string
  ) => void

  RegisterUserThunkCreator: (secretCode: string) => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
  }
}

const Step2ScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      setSecondScreenValuesActionCreator:
        ActionCreatorsList.setSecondScreenValuesActionCreator,
      RegisterUserThunkCreator: RegisterUserThunkCreator,
    }
  )
)(Step2Screen)

export default Step2ScreenContainer
