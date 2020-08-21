// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import Dialogs from "./Dialogs"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { createNewDialogThunkCreator } from "~/Redux/Reducers/ChatsReducers/ChatsSetReducer"
import { getDialogsChatsListThunkCreator } from "~/Redux/Reducers/ChatsReducers/ChatsGetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any

  DialogsChatsList: Array<any>
}

type MapDispatchToPropsType = {
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
    DialogsChatsList: state.ChatsGetState.DialogsChatsList,
  }
}

const DialogsContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      createNewDialogThunkCreator,
      getDialogsChatsListThunkCreator,
    }
  )
)(Dialogs)

export default DialogsContainer
