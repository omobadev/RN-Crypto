// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import Dialogs from "./Dialogs"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { getDialogsChatsListThunkCreator } from "~/Redux/Reducers/ChatsReducers/ChatsGetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any

  DialogsChatsList: Array<any>
}

type MapDispatchToPropsType = {
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
      getDialogsChatsListThunkCreator: getDialogsChatsListThunkCreator,
    }
  )
)(Dialogs)

export default DialogsContainer
