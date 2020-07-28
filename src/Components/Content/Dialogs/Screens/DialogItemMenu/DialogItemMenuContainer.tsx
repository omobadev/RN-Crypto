// PLUGINS IMPORTS //
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import DialogItemMenu from "./DialogItemMenu"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { addUsersToChatThunkCreator } from "~/Redux/Reducers/ChatsReducers/ChatsSetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any
  route: any
}

type MapDispatchToPropsType = {
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
      addUsersToChatThunkCreator: addUsersToChatThunkCreator,
    }
  )
)(DialogItemMenu)

export default DialogItemContainer
