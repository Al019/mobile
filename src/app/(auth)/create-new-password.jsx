import { View, Text, ScrollView } from 'react-native'
import Input from '../../components/Input'
import Btn from '../../components/Button'

const CreateNewPassword = () => {
  return (
    <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flexGrow: 1, padding: 16, rowGap: 24, justifyContent: "space-between" }}>
      <View style={{ rowGap: 24 }}>
        <View className="flex-row items-center justify-between space-x-2">
          <View className="flex-1 bg-blue-500 h-[6px] rounded-full"></View>
          <View className="flex-1 bg-blue-500 h-[6px] rounded-full"></View>
          <View className="flex-1 bg-blue-500 h-[6px] rounded-full"></View>
        </View>
        <View className="space-y-1">
          <Text className="text-gray-800 text-xl font-pbold">Create New Password</Text>
          <Text className="text-gray-700 text-sm font-pregular">Please make a new password.</Text>
        </View>
        <View style={{ rowGap: 16 }}>
          <Input label="Password" secureTextEntry />
          <Input label="Confirm Password" secureTextEntry />
        </View>
      </View>
      <Btn label="Save Changes" mode="contained" />
    </ScrollView>
  )
}

export default CreateNewPassword