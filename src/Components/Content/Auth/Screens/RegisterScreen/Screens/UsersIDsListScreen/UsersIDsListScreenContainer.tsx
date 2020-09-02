// PLUGINS IMPORTS //
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import UsersIDsListScreen from "./UsersIDsListScreen"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { ActionCreatorsList } from "~/Redux/Reducers/AuthReducers/AuthSetReducer"
import { getRegUsersListThunkCreator } from "~/Redux/Reducers/AuthReducers/AuthGetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any

  UserInvitedID: string | null
  regUsersList: Array<any>
}

type MapDispatchToPropsType = {
  setUserInvitedIDActionCreator: (userInvitedID: string) => void
  getRegUsersListThunkCreator: () => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    UserInvitedID: state.AuthSetState.UserInvitedID,
    regUsersList: state.AuthGetState.regUsersList,
  }
}

const UsersIDsListScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      setUserInvitedIDActionCreator:
        ActionCreatorsList.setUserInvitedIDActionCreator,
      getRegUsersListThunkCreator,
    }
  )
)(UsersIDsListScreen)

export default UsersIDsListScreenContainer
