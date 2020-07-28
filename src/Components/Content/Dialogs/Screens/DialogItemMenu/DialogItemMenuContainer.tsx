// PLUGINS IMPORTS //
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import DialogItemMenu from "./DialogItemMenu"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import {
  addUsersToChatThunkCreator,
  leaveChatThunkCreator,
} from "~/Redux/Reducers/ChatsReducers/ChatsSetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any
  route: any
}

type MapDispatchToPropsType = {
  leaveChatThunkCreator: (chatID: string) => void
  addUsersToChatThunkCreator: (newUsers: Array<any>, chatID: string) => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    route: props.route,
  }
}

const DialogItemContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      leaveChatThunkCreator: leaveChatThunkCreator,
      addUsersToChatThunkCreator: addUsersToChatThunkCreator,
    }
  )
)(DialogItemMenu)

export default DialogItemContainer
