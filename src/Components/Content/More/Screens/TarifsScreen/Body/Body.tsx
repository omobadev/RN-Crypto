// PLUGINS IMPORTS //
import React from "react"

// COMPONENTS IMPORTS //
import TarifItem from "./TarifItem/TarifItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  TarifsList: Array<{
    color: string
    sale: string
    price: string
    duration: string
  }>
  buyTarifThunkCreator: (tarifID: string, currency: string) => void
}

const Body: React.FC<PropsType> = (props) => {
  return (
    <>
      {props.TarifsList &&
        props.TarifsList.length > 0 &&
        props.TarifsList.map(
          (tarif: { color: string; sale: string; price: string; duration: string }) => {
            return (
              <TarifItem
                price={tarif.price}
                sale={tarif.sale}
                duration={tarif.duration}
                containerStyle={{ backgroundColor: tarif.color }}
                textStyle={{ color: "#00392D", marginHorizontal: 25 }}
                buyTarifThunkCreator={props.buyTarifThunkCreator}
              />
            )
          }
        )}
    </>
  )
}

export default Body
