// PLUGINS IMPORTS //
import React from "react"
import { ScrollView, StyleSheet } from "react-native"
import { useDispatch } from "react-redux"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import FooterInput from "~/Components/Shared/Sections/FooterInputSection/FooterInputSection"
import Popup from "~/Components/Shared/Components/Popups/PopUp/PopUp"

// EXTRA IMPORTS //

// REDUX
import { deriveMoneyThunkCreator } from "~/Redux/Reducers/FinancesReducers/FinancesSetReducer"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any

  transferStatusRes: {
    title: string
    text: string
    visible: boolean
    positive: boolean
  }

  setTransferStatusResActionCreator: (config: {
    title: string
    text: string
    visible: boolean
    positive: boolean
  }) => void
}

const MoneyMoveOutScreen1: React.FC<PropsType> = (props) => {
  const dispatch = useDispatch()

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />

      <FooterInput
        buttonText="Вывод"
        action={(values: { value: string }) =>
          dispatch(deriveMoneyThunkCreator(values.value as any))
        }
        valueName="Количество"
        errorText="Укажите количество"
        containerStyle={styles.footer_input}
        isNumberPad
      />

      <Popup
        title={props.transferStatusRes.title}
        description={props.transferStatusRes.text}
        buttonsArray={[
          {
            text: "OK",
            action: () => props.navigation.navigate("FinancesMain"),
          },
        ]}
        popupVisible={props.transferStatusRes.visible}
        setPopupVisible={(visibility: boolean) =>
          props.setTransferStatusResActionCreator({
            ...props.transferStatusRes,
            visible: visibility,
          })
        }
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },

  footer_input: {
    marginTop: 120,
    marginBottom: 15,
  },
})

export default MoneyMoveOutScreen1
