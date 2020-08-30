// PLUGINS IMPORTS //
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import TechSupportScreen from "./TechSupportScreen"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { getTechSupportChatThunkCreator } from "~/Redux/Reducers/ExtraReducers/ExtraGetReducer"
import { sendTechChatMessageThunkCreator } from "~/Redux/Reducers/ExtraReducers/ExtraSetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any
  TechSupportChat: any
}

type MapDispatchToPropsType = {
  getTechSupportChatThunkCreator: () => void
  sendTechChatMessageThunkCreator: (message: string) => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    TechSupportChat: state.ExtraGetState.TechSupportChat,
  }
}

const TechSupportScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      getTechSupportChatThunkCreator,
      sendTechChatMessageThunkCreator,
    }
  )
)(TechSupportScreen)

export default TechSupportScreenContainer
