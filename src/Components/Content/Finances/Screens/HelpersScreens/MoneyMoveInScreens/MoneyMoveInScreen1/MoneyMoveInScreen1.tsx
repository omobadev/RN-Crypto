// PLUGINS IMPORTS //
import React, { useEffect, useState } from "react"
import { ScrollView, View, StyleSheet } from "react-native"
import * as yup from "yup"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import UsersList from "./UsersList/UsersList"
import FooterInput from "~/Components/Shared/Sections/FooterInputSection/FooterInputSection"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  route: any

  usersList: Array<any>
  CGCInfo: {
    price: string
    value2: string
  }

  getUsersListThunkCreator: () => void
}

const MoneyMoveInScreen1: React.FC<PropsType> = (props) => {
  const [selectedUserID, setSelectedUserID] = useState(null as string | null)
  const [queryValue, setQueryValue] = useState(
    props.route.params.selectedUserID
      ? props.route.params.selectedUserID
      : ("" as string)
  )
  const [filteredUsers, setFilteredUsers] = useState([] as Array<any>)

  useEffect(() => {
    props.getUsersListThunkCreator()
  }, [])

  useEffect(() => {
    setFilteredUsers(
      queryValue
        ? props.usersList
            .filter(
              (l) =>
                l.id.toLowerCase().indexOf(queryValue.trim().toLowerCase()) ===
                0
            )
            .map((l) => l)
        : []
    )
  }, [queryValue])

  useEffect(() => {
    setSelectedUserID(
      props.route.params.selectedUserID
        ? props.route.params.selectedUserID
        : props.usersList && props.usersList[0] && props.usersList[0].id
    )
  }, [props.usersList])

  const isCertainUser =
    props.route.params.selectedUserID &&
    props.route.params.selectedUserID.length > 0

  const ValidationSchema = yup.object({
    value: yup
      .number()
      .required("Укажите сумму не больше вашего баланса")
      .typeError("Укажите сумму"),
  })

  return (
    <ScrollView style={styles.container}>
      <Header
        CGCInfo={props.CGCInfo}
        queryValue={queryValue}
        setQueryValue={setQueryValue}
        isCertainUser={isCertainUser}
      />
      <View style={styles.divider} />
      <UsersList
        usersList={filteredUsers}
        selectedUserID={selectedUserID}
        setSelectedUserID={setSelectedUserID}
      />
      <FooterInput
        buttonText="Перевод"
        action={(values: { value: string }) => {
          if (
            !isNaN(Number(values.value)) &&
            Number(values.value) > 0 &&
            selectedUserID
          ) {
            props.navigation.navigate("MoneyMoveInScreen2", {
              moneyAmount: Number(values.value),
              selectedUserID: selectedUserID,
            })
          } else {
            values.value = ""
          }
        }}
        valueName="Укажите сумму"
        containerStyle={styles.footer_input}
        PropValidationSchema={ValidationSchema}
        isNumberPad
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },

  footer_input: {
    marginBottom: 20,
    marginTop: 20,
  },

  divider: {
    borderBottomColor: "rgba(0, 57, 45, 0.05)",
    borderWidth: 1,
    opacity: 0.2,
    marginVertical: 10,
  },
})

export default MoneyMoveInScreen1
