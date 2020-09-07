// PLUGINS IMPORTS //
import React, { useState } from "react"
import { Text, StyleSheet, ImageBackground } from "react-native"
import { RectButton, TouchableOpacity } from "react-native-gesture-handler"
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

  background: string
  textColor: string
  saleText: string

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
      <TouchableOpacity onPress={() => setPopupVisible(true)}>
        <ImageBackground
          source={props.background as any}
          style={styles.container}
          imageStyle={styles.image}
        >
          <Text style={[styles.price, { color: props.textColor }]}>
            {props.tarif.price &&
              String(props.tarif.price).replace(".", "").slice(0, 3)}{" "}
            CGC
          </Text>
          {props.tarif.title && (
            <Text style={[styles.sale_text, { color: props.textColor }]}>
              {props.saleText}
            </Text>
          )}
        </ImageBackground>
      </TouchableOpacity>

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
    height: 100,
    paddingHorizontal: 15,
  },

  image: {
    borderRadius: 10,
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
