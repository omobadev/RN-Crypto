// PLUGINS IMPORTS //
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import More from "./More"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { createTechnicalHelpChatThunkCreator } from "~/Redux/Reducers/ExtraReducers/ExtraSetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {}

type MapDispatchToPropsType = {
  createTechnicalHelpChatThunkCreator: (topic: string, message: string) => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {}
}

export default compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    { createTechnicalHelpChatThunkCreator }
  )
)(More)
