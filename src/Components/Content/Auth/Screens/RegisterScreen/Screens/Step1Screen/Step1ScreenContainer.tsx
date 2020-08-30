// PLUGINS IMPORTS //
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import Step1Screen from "./Step1Screen"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { ActionCreatorsList } from "~/Redux/Reducers/AuthReducers/AuthSetReducer"
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any
  route: any
}

type MapDispatchToPropsType = {
  setFirstScreenValuesActionCreator: (
    UserLogin: string,
    UserPassword: string,
    inviteID: string
  ) => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    route: props.route,
  }
}

const Step1ScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      setFirstScreenValuesActionCreator:
        ActionCreatorsList.setFirstScreenValuesActionCreator,
    }
  )
)(Step1Screen)

export default Step1ScreenContainer
