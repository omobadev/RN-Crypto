// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import Groups from "./Groups"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { getGroupsChatsListThunkCreator } from "~/Redux/Reducers/ChatsReducers/ChatsGetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any
  GroupsChatsList: Array<any>
}

type MapDispatchToPropsType = {
  getGroupsChatsListThunkCreator: () => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    GroupsChatsList: state.ChatsGetState.GroupsChatsList,
  }
}

const GroupsContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      getGroupsChatsListThunkCreator: getGroupsChatsListThunkCreator,
    }
  )
)(Groups)

export default GroupsContainer
