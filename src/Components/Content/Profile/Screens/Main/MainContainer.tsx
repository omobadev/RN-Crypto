// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import Main from "./Main"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { getUserCredentialsThunkCreator } from "~/Redux/Reducers/UserReducers/UserGetReducer"
import { createNewDialogThunkCreator } from "~/Redux/Reducers/ChatsReducers/ChatsSetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any
  route: any

  userID: string
  UserCredentials: {
    ID: string
    name: string
    avatar: string
    login: string
    email: string
    location: string
    invitedID: string
  }
}

type MapDispatchToPropsType = {
  createNewDialogThunkCreator: (
    selectedUsersIDs: Array<any>,
    chatTitle: string,
    message: string
  ) => void
  getUserCredentialsThunkCreator: (uid: string) => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    route: props.route,

    userID: state.AuthSetState.userID,
    UserCredentials: state.UserGetState.UserCredentials,
  }
}

const MainContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      getUserCredentialsThunkCreator,
      createNewDialogThunkCreator,
    }
  )
)(Main)

export default MainContainer
