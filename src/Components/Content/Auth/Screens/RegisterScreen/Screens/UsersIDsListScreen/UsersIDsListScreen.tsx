// PLUGINS IMPORTS //
import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet } from "react-native"
import { List } from "react-native-paper"

// COMPONENTS IMPORTS //
import Button from "~/Components/Shared/Components/Button/Button"
import { ScrollView } from "react-native-gesture-handler"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  UserInvitedID: string | null
  regUsersList: Array<any>

  setUserInvitedIDActionCreator: (userInvitedID: string) => void
  getRegUsersListThunkCreator: () => void
}

const UsersIDsListScreen: React.FC<PropsType> = (props) => {
  const [selectedUserID, setSelectedUserID] = useState(
    props.UserInvitedID || (props.regUsersList[0] && props.regUsersList[0].id)
  )
  const [expanded, setExpanded] = React.useState(false)

  const handlePress = () => setExpanded(!expanded)

  useEffect(() => {
    props.getRegUsersListThunkCreator()
  }, [])

  return (
    <ScrollView>
      <List.Section>
        <List.Accordion
          expanded={expanded}
          title="Выберите из списка:"
          titleStyle={styles.accord_title}
          onPress={handlePress}
        >
          {props.regUsersList.map((userID: { id: string }) => {
            return (
              <List.Item
                title={userID.id}
                onPress={() => {
                  handlePress()
                  setSelectedUserID(userID.id)
                }}
              />
            )
          })}
        </List.Accordion>
      </List.Section>
      <View style={styles.container}>
        <View style={styles.divider} />
        <View style={styles.content_wrap}>
          <Text style={styles.content_title}>Вы выбрали</Text>
          <Text style={styles.content_text}>{selectedUserID}</Text>
        </View>
        <Button
          text="Готово"
          buttonStyle={styles.button}
          onPress={() => {
            props.setUserInvitedIDActionCreator(selectedUserID)
            props.navigation.navigate("RegisterStep1Screen", {
              userInvitedID: selectedUserID,
            })
          }}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  accord_title: {
    color: "#006F5F",
    fontSize: 17,
  },

  divider: {
    borderWidth: 0.25,
    borderColor: "gray",
    width: "92%",
  },

  content_wrap: {
    marginTop: 15,
    marginBottom: 50,
    alignSelf: "flex-start",
    marginHorizontal: 16,
  },

  content_title: {
    fontSize: 18,
    color: "#00392D",
  },

  content_text: {
    color: "#9E9E9E",
  },

  button: {
    marginBottom: 50,
  },
})

export default UsersIDsListScreen
