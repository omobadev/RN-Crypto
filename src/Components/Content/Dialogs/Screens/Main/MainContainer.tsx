// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import Main from "./Main"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { getUsersListThunkCreator } from "~/Redux/Reducers/AuthReducers/AuthGetReducer"
import { getDialogsChatsListThunkCreator } from "~/Redux/Reducers/ChatsReducers/ChatsGetReducer"
import { createNewDialogThunkCreator } from "~/Redux/Reducers/ChatsReducers/ChatsSetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any

  usersList: Array<any>
  DialogsChatsList: Array<any>
}

type MapDispatchToPropsType = {
  getUsersListThunkCreator: () => void
  createNewDialogThunkCreator: (
    selectedUsersIDs: Array<any>,
    chatTitle: string,
    message: string
  ) => void
  getDialogsChatsListThunkCreator: () => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,

    usersList: state.AuthGetState.usersList,
    DialogsChatsList: state.ChatsGetState.DialogsChatsList,
  }
}

const MainContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      createNewDialogThunkCreator,
      getDialogsChatsListThunkCreator,
      getUsersListThunkCreator,
    }
  )
)(Main)

export default MainContainer
