// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import Main from "./Main"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { getUserDataThunkCreator } from "~/Redux/Reducers/UserReducers/UserGetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any
  route: any
}

type MapDispatchToPropsType = {
  getUserDataThunkCreator: () => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    route: props.route,
  }
}

const MainContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      getUserDataThunkCreator: getUserDataThunkCreator,
    }
  )
)(Main)

export default MainContainer
