// PLUGINS IMPORTS //
import React, { useState } from "react"
import {
  ImageBackground,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native"

// COMPONENTS IMPORTS //
import DialogsInputPopup from "~/Components/Shared/Components/Popups/DialogsInputPopup/DialogsInputPopup"

// EXTRA IMPORTS //
import CustomHeader from "~/Components/Shared/Components/CustomHeader/CustomHeader"
import { AntDesign } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any

  queryValue: string
  setQueryValue: (newQueryValue: string) => void

  createNewDialogThunkCreator: (
    selectedUsersIDs: Array<any>,
    chatTitle: string,
    message: string
  ) => void
}

const TopBox: React.FC<PropsType> = (props) => {
  const [popupVisible, setPopupVisible] = useState(false as boolean)
  const [selectedUsersIDs, setSelectedUsersIDs] = useState([] as Array<any>)

  const submitNewChat = (values: any) => {
    setPopupVisible(false)
    props.createNewDialogThunkCreator(
      selectedUsersIDs,
      values.title,
      values.message
    )
    props.navigation.navigate("NavigationCenterContainer")
  }

  const submitFunction = (selectedUsersIDs: Array<any>) => {
    setSelectedUsersIDs(selectedUsersIDs)
    setPopupVisible(true)
  }

  return (
    <>
      <ImageBackground
        source={require("~/Images/bg-1.png")}
        imageStyle={{ borderBottomRightRadius: 25, borderBottomLeftRadius: 25 }}
        style={styles.container}
      >
        <CustomHeader
          title="Сообщения"
          rightIcon={
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("UsersSelectScreen", {
                  function: submitFunction,
                  title: "Новый диалог",
                })
              }
            >
              <AntDesign name="plus" size={24} color="white" />
            </TouchableOpacity>
          }
        />
        <TextInput
          placeholder="Поиск"
          placeholderTextColor="rgba(0, 57, 45, 1)"
          style={styles.input}
          value={props.queryValue}
          onChangeText={(text: string) => props.setQueryValue(text)}
        />
      </ImageBackground>

      <DialogsInputPopup
        popupVisible={popupVisible}
        setPopupVisible={setPopupVisible}
        onSubmit={submitNewChat}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 25,
  },

  input: {
    backgroundColor: "rgba(242, 242, 242, 0.2)",
    color: "rgba(0, 57, 45, 1)",
    marginHorizontal: 16,
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 20,
    fontSize: 16,
  },
})

export default TopBox
