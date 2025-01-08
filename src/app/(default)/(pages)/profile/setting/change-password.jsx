import { View, Text, ScrollView } from 'react-native'
import Input from '../../../../../components/Input'
import Btn from '../../../../../components/Button'
import { useAuthContext } from '../../../../../contexts/AuthContext'
import { useState } from 'react'

const ChangePassword = () => {
  const { user, changePassword, loading } = useAuthContext()
  const [current_password, setCurrentPassword] = useState("")
  const [new_password, setNewPassword] = useState("")
  const [password_confirmation, setPasswordConfirmation] = useState("")

  const handleChangePassword = () => {
    if (user.is_default === 1) {
      if (new_password !== "" && password_confirmation !== "") {
        changePassword({ password: new_password, password_confirmation })
      }
    } else {
      if (current_password !== "" && new_password !== "" && password_confirmation !== "") {
        changePassword({ current_password, password: new_password, password_confirmation })
      }
    }
  }

  return (
    <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flexGrow: 1, padding: 16, justifyContent: "space-between", rowGap: 24 }}>
      <View style={{ rowGap: 16 }}>
        {user.is_default === 0 && (
          <Input onChangeText={(text) => setCurrentPassword(text)} label="Current Password" secureTextEntry />
        )}
        <Input onChangeText={(text) => setNewPassword(text)} label="New Password" secureTextEntry />
        <Input onChangeText={(text) => setPasswordConfirmation(text)} label="Confirm Password" secureTextEntry />
      </View>
      <Btn onPress={handleChangePassword} label={loading ? 'Saving' : 'Save Changes'} mode="contained" loading={loading} />
    </ScrollView>
  )
}

export default ChangePassword