// PLUGINS IMPORTS //
import React, { useState } from "react"
import { Text, StyleSheet } from "react-native"
import { RectButton } from "react-native-gesture-handler"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import PopUp from "~/Components/Shared/Components/Popups/PopUp/PopUp"
import { number } from "yup"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  tarif: {
    ID: string
    title: string
    price: string
    duration: string
  }

  backgroundColor: string
  textColor: string

  buyTarifThunkCreator: (tarifID: string, currency: string) => void
}

const TarifItem: React.FC<PropsType> = (props) => {
  const [popupVisible, setPopupVisible] = useState(false as boolean)
  const [confirmPopUpVisible, setConfirmPopUpVisible] = useState(
    false as boolean
  )

  const renderDuration = () => {
    const date = Number(props.tarif.duration) / 24 / 30
    if (Number(date) < 12) {
      return `${date} месяц`
    } else {
      return "1 год"
    }
  }

  return (
    <>
      <Text style={styles.title}> Тариф за {renderDuration()}</Text>
      <RectButton
        style={[styles.container, { backgroundColor: props.backgroundColor }]}
        onPress={() => setPopupVisible(true)}
      >
        <Text style={[styles.price, { color: props.textColor }]}>
          {props.tarif.price} CGC
        </Text>
        {props.tarif.title && (
          <Text style={[styles.sale_text, { color: props.textColor }]}>
            Скидка {props.tarif.title}
          </Text>
        )}
      </RectButton>

      <PopUp
        popupVisible={popupVisible}
        setPopupVisible={setPopupVisible}
        title={`Вы собираетесь продлить использование платных функций на ${props.tarif.duration}`}
        buttonsArray={[
          {
            text: "Отмена",
            action: () => setPopupVisible(false),
          },
          {
            text: "Купить с CGC",
            action: () => {
              props.buyTarifThunkCreator(props.tarif.ID, "CGC")
              setPopupVisible(false)
              setConfirmPopUpVisible(true)
            },
          },
          {
            text: "Купить с INPH",
            action: () => {
              props.buyTarifThunkCreator(props.tarif.ID, "INPH")
              setPopupVisible(false)
              setConfirmPopUpVisible(true)
            },
          },
        ]}
        containerStyle={styles.popup}
      />
      <PopUp
        popupVisible={confirmPopUpVisible}
        setPopupVisible={setConfirmPopUpVisible}
        title={`Спасибо!`}
        description={"Ваш тариф продлен до 31.01.2021"}
        buttonsArray={[
          {
            text: "OK",
            action: () => setConfirmPopUpVisible(false),
          },
        ]}
        containerStyle={styles.popup}
      />
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    color: "gray",
    marginTop: 17,
    marginBottom: 7,
  },

  container: {
    borderRadius: 10,
    height: 100,
    paddingHorizontal: 15,
  },

  price: {
    fontWeight: "bold",
    fontSize: 26,
    marginTop: 20,
  },

  sale_text: {
    fontWeight: "bold",
    fontSize: 16,
  },

  popup: {
    width: 350,
  },
})

export default TarifItem
