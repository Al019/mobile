import { View, Text, ScrollView } from 'react-native'
import Input from '../../components/Input'
import Btn from '../../components/Button'
import { router } from 'expo-router'

const EmailVerification = () => {
  return (
    <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flexGrow: 1, padding: 16, rowGap: 24, justifyContent: "space-between" }}>
      <View style={{ rowGap: 24 }}>
        <View className="flex-row items-center justify-between space-x-2">
          <View className="flex-1 bg-blue-500 h-[6px] rounded-full"></View>
          <View className="flex-1 bg-blue-500 h-[6px] rounded-full"></View>
          <View className="flex-1 bg-gray-300 h-[6px] rounded-full"></View>
        </View>
        <View className="space-y-1">
          <Text className="text-gray-800 text-xl font-pbold">Email Verification</Text>
          <Text className="text-gray-700 text-sm font-pregular">Please enter the one-time password (OTP) that we sent to <Text className="text-gray-800 font-semibold">algaid@gmail.com</Text></Text>
        </View>
        <Input label="OTP" keyboardType="numeric" maxLength={6} />
      </View>
      <Btn onPress={() => router.navigate('/create-new-password')} label="Verify" mode="contained" />
    </ScrollView>
  )
}

export default EmailVerification