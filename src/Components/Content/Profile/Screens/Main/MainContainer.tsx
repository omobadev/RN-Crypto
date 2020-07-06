// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import Main from "./Main"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { getUserCredentialsThunkCreator } from "~/Redux/Reducers/UserReducers/UserGetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any
  route: any

  UserCredentials: {
    ID: string
    name: string
    login: string
    email: string
    location: string
    invitedID: string
  }
}

type MapDispatchToPropsType = {
  getUserCredentialsThunkCreator: () => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    route: props.route,

    UserCredentials: state.UserGetState.UserCredentials,
  }
}

const MainContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      getUserCredentialsThunkCreator: getUserCredentialsThunkCreator,
    }
  )
)(Main)

export default MainContainer
