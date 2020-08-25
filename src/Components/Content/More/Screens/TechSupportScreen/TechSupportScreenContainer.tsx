// PLUGINS IMPORTS //
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import TechSupportScreen from "./TechSupportScreen"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { getTechSupportChatsThunkCreator } from "~/Redux/Reducers/ExtraReducers/ExtraGetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any
  TechSupportChats: Array<any>
}

type MapDispatchToPropsType = {
  getTechSupportChatsThunkCreator: () => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    TechSupportChats: state.ExtraGetState.TechSupportChats,
  }
}

const TechSupportScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      getTechSupportChatsThunkCreator,
    }
  )
)(TechSupportScreen)

export default TechSupportScreenContainer