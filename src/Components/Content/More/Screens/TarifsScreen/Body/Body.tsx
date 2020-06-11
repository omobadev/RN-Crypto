// PLUGINS IMPORTS //
import React from "react"

// COMPONENTS IMPORTS //
import TarifItem from "./TarifItem/TarifItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const Body: React.FC<PropsType> = (props) => {
  return (
    <>
      <TarifItem
        price="2500"
        sale="15%"
        duration="3 месяца"
        containerStyle={{ backgroundColor: "silver" }}
        textStyle={{ color: "#00392D", marginHorizontal: 25 }}
      />
      <TarifItem
        price="4200"
        sale="15%"
        duration="6 месяцев"
        containerStyle={{ backgroundColor: "#006F5F" }}
        textStyle={{ color: "white", marginHorizontal: 25 }}
      />
      <TarifItem
        price="6500"
        sale="15%"
        duration="12 месяцев"
        containerStyle={{ backgroundColor: "#DEC15D" }}
        textStyle={{ color: "#00392D", marginHorizontal: 25 }}
      />
    </>
  )
}

export default Body
