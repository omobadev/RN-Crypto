// PLUGINS IMPORTS //
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import Main from "./Main"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { getUserGeneralFinancesInfoThunkCreator } from "~/Redux/Reducers/FinancesReducers/FinancesGetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any

  hasAbon: boolean
  BudgetInfo: {
    CGC: {
      price: string
      value2: string
    }

    MiningCGC: {
      price: string
      value2: string
    }

    DailyIncome: {
      price: string
      value2: string
    }
    INPH: {
      price: string
      value2: string
    }
    wallet: string
  }
}

type MapDispatchToPropsType = {
  getUserGeneralFinancesInfoThunkCreator: () => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    BudgetInfo: state.FinancesGetState.BudgetInfo,
    hasAbon: state.FinancesGetState.hasAbon,
  }
}

const MainContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      getUserGeneralFinancesInfoThunkCreator: getUserGeneralFinancesInfoThunkCreator,
    }
  )
)(Main)

export default MainContainer
