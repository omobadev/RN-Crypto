// PLUGINS IMPORTS //
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import LoginScreen from "./LoginScreen"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import {
  LoginUserThunkCreator,
  ActionCreatorsList as AuthSetActionCreatorsList,
} from "~/Redux/Reducers/AuthReducers/AuthSetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  LoginError: boolean
}

type MapDispatchToPropsType = {
  LoginUserThunkCreator: (email: string, password: string) => void
  setLoginErrorStatusActionCreator: (loginErrorStatus: boolean) => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    LoginError: state.AuthSetState.LoginError,
  }
}

const LoginScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      LoginUserThunkCreator,
      setLoginErrorStatusActionCreator:
        AuthSetActionCreatorsList.setLoginErrorStatusActionCreator,
    }
  )
)(LoginScreen)

export default LoginScreenContainer
