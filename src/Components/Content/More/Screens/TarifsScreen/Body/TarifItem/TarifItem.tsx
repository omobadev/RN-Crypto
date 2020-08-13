// PLUGINS IMPORTS //
import React, { useState } from "react"
import { Text, StyleSheet } from "react-native"
import { RectButton } from "react-native-gesture-handler"
import dayjs from "dayjs"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import PopUp from "~/Components/Shared/Components/Popups/PopUp/PopUp"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  responseStatus: {
    positive: boolean
    show: boolean
  }
  tarif: {
    ID: string
    title: string
    price: string
    duration: string
  }

  backgroundColor: string
  textColor: string

  setResponseStatusActionCreator: (responseStatus: {
    positive: boolean
    show: boolean
  }) => void
  buyTarifThunkCreator: (tarifID: string) => void
}

const TarifItem: React.FC<PropsType> = (props) => {
  const [popupVisible, setPopupVisible] = useState(false as boolean)

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
        title={`Вы собираетесь купить использование платных функций на ${renderDuration()}`}
        buttonsArray={[
          {
            text: "Отмена",
            action: () => setPopupVisible(false),
          },
          {
            text: "Купить",
            action: () => {
              setPopupVisible(false)
              props.buyTarifThunkCreator(props.tarif.ID)
            },
          },
        ]}
        containerStyle={styles.popup}
      />
      <PopUp
        popupVisible={props.responseStatus.show}
        setPopupVisible={() =>
          props.setResponseStatusActionCreator({ positive: false, show: false })
        }
        title={props.responseStatus.positive ? `Спасибо!` : "Ошибка..."}
        description={
          props.responseStatus.positive
            ? `Ваш тариф продлен до ${dayjs()
                .add(Number(props.tarif.duration), "hour")
                .format("DD-MM-YYYY")}`
            : `Что то пошло не так, проверьте свой баланс и попробуйте снова.`
        }
        buttonsArray={[
          {
            text: "OK",
            action: () =>
              props.setResponseStatusActionCreator({
                positive: false,
                show: false,
              }),
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
