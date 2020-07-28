// PLUGINS IMPORTS //
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import UsersIDsListScreen from "./UsersIDsListScreen"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { ActionCreatorsList } from "~/Redux/Reducers/AuthReducers/AuthSetReducer"
import { getUsersIDsListThunkCreator } from "~/Redux/Reducers/AuthReducers/AuthGetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any

  UserInvitedID: string | null
  usersIDsList: Array<any>
}

type MapDispatchToPropsType = {
  setUserInvitedIDActionCreator: (userInvitedID: string) => void
  getUsersIDsListThunkCreator: () => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    UserInvitedID: state.AuthSetState.UserInvitedID,
    usersIDsList: state.AuthGetState.usersIDsList,
  }
}

const UsersIDsListScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      setUserInvitedIDActionCreator:
        ActionCreatorsList.setUserInvitedIDActionCreator,
      getUsersIDsListThunkCreator: getUsersIDsListThunkCreator,
    }
  )
)(UsersIDsListScreen)

export default UsersIDsListScreenContainer
