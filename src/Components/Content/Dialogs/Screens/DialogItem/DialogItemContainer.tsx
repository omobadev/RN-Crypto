// PLUGINS IMPORTS //
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import DialogItem from "./DialogItem"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { sendMessageThunkCreator } from "~/Redux/Reducers/ChatsReducers/ChatsSetReducer"
import { getCurrentChatMessagesThunkCreator } from "~/Redux/Reducers/ChatsReducers/ChatsGetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any
  route: any
  currentChatMessages: Array<any>
}

type MapDispatchToPropsType = {
  sendMessageThunkCreator: (
    message: string,
    images: Array<string>,
    chatID: string
  ) => void
  getCurrentChatMessagesThunkCreator: (chatID: string) => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    route: props.route,
    currentChatMessages: state.ChatsGetState.currentChatMessages,
  }
}

const DialogItemContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      sendMessageThunkCreator: sendMessageThunkCreator,
      getCurrentChatMessagesThunkCreator: getCurrentChatMessagesThunkCreator,
    }
  )
)(DialogItem)

export default DialogItemContainer
