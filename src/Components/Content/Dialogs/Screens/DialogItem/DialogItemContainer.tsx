// PLUGINS IMPORTS //
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import DialogItem from "./DialogItem"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { getCurrentChatMessagesThunkCreator } from "~/Redux/Reducers/ChatsReducers/ChatsGetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  route: any
  currentChatMessages: Array<any>
}

type MapDispatchToPropsType = {
  getCurrentChatMessagesThunkCreator: (chatID: string) => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    route: props.route,
    currentChatMessages: state.ChatsGetState.currentChatMessages,
  }
}

const DialogItemContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      getCurrentChatMessagesThunkCreator: getCurrentChatMessagesThunkCreator,
    }
  )
)(DialogItem)

export default DialogItemContainer
