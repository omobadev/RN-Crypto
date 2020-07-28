// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { RectButton } from "react-native-gesture-handler"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import PopUp from "~/Components/Shared/Components/Popups/PopUp/PopUp"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  price: string
  sale: string
  duration: string

  containerStyle?: any
  textStyle?: any
}

const TarifItem: React.FC<PropsType> = (props) => {
  const [popupVisible, setPopupVisible] = useState(false as boolean)
  const [confirmPopUpVisible, setConfirmPopUpVisible] = useState(
    false as boolean
  )

  return (
    <>
      <Text style={styles.title}> Тариф за {props.duration}</Text>
      <RectButton
        style={{ ...styles.container, ...props.containerStyle }}
        onPress={() => setPopupVisible(true)}
      >
        <Text style={{ ...styles.price, ...props.textStyle }}>
          {props.price} CGC
        </Text>
        {props.sale && (
          <Text style={{ ...styles.sale, ...props.textStyle }}>
            Скидка {props.sale}
          </Text>
        )}
      </RectButton>
      <PopUp
        popupVisible={popupVisible}
        setPopupVisible={setPopupVisible}
        title={`Вы собираетесь продлить использование платных функций на ${props.duration}`}
        buttonsArray={[
          {
            text: "Отмена",
            action: () => setPopupVisible(false),
          },
          {
            text: "Продолжить",
            action: () => {
              setPopupVisible(false)
              setConfirmPopUpVisible(true)
            },
          },
        ]}
        containerStyle={{
          width: 350,
        }}
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
        containerStyle={{
          width: 350,
        }}
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
  },

  price: {
    fontWeight: "bold",
    fontSize: 26,
    marginTop: 20,
  },

  sale: {
    fontWeight: "bold",
    fontSize: 17,
  },
})

export default TarifItem
