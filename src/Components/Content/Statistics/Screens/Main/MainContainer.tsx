// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import Main from "./Main"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { getStatsInfoThunkCreator } from "~/Redux/Reducers/StatsReducers/StatsGetReducer/StatsGetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  MonthlyIncome: string | null
  OverallIncome: string | null
  ConnectionsAmount: string | null

  GraphData: Array<any>
}

type MapDispatchToPropsType = {
  getStatsInfoThunkCreator: () => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    MonthlyIncome: state.StatsGetState.MonthlyIncome,
    OverallIncome: state.StatsGetState.OverallIncome,
    ConnectionsAmount: state.StatsGetState.ConnectionsAmount,
    GraphData: state.StatsGetState.GraphData,
  }
}

const MainContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      getStatsInfoThunkCreator: getStatsInfoThunkCreator,
    }
  )
)(Main)

export default MainContainer
