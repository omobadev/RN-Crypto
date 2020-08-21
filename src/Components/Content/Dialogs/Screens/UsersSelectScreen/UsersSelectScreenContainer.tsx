// PLUGINS IMPORTS //
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import UsersSelectScreen from "./UsersSelectScreen"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { getUsersListThunkCreator } from "~/Redux/Reducers/AuthReducers/AuthGetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any
  route: any

  usersList: Array<any>
}

type MapDispatchToPropsType = {
  getUsersListThunkCreator: () => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    route: props.route,
    usersList: state.AuthGetState.usersList,
  }
}

const CreateNewDialogContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      getUsersListThunkCreator,
    }
  )
)(UsersSelectScreen)

export default CreateNewDialogContainer
