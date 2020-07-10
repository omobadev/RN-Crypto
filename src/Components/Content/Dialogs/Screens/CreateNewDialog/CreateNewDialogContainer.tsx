// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import CreateNewDialog from "./CreateNewDialog"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { getUsersListThunkCreator } from "~/Redux/Reducers/ChatsReducers/ChatsGetReducer"
import { createNewDialogThunkCreator } from "~/Redux/Reducers/ChatsReducers/ChatsSetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any
  UsersList: Array<any>
}

type MapDispatchToPropsType = {
  getUsersListThunkCreator: () => void
  createNewDialogThunkCreator: (usersList: Array<any>) => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    UsersList: state.ChatsGetState.UsersList,
  }
}

const CreateNewDialogContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      getUsersListThunkCreator: getUsersListThunkCreator,
      createNewDialogThunkCreator: createNewDialogThunkCreator,
    }
  )
)(CreateNewDialog)

export default CreateNewDialogContainer
