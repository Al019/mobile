import { View, Text, ScrollView } from 'react-native'
import Input from '../../components/Input'
import Btn from '../../components/Button'
import { router } from 'expo-router'

const ForgotPassword = () => {
  return (
    <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flexGrow: 1, padding: 16, rowGap: 24, justifyContent: "space-between" }}>
      <View style={{ rowGap: 24 }}>
        <View className="flex-row items-center justify-between space-x-2">
          <View className="flex-1 bg-blue-500 h-[6px] rounded-full"></View>
          <View className="flex-1 bg-gray-300 h-[6px] rounded-full"></View>
          <View className="flex-1 bg-gray-300 h-[6px] rounded-full"></View>
        </View>
        <View className="space-y-1">
          <Text className="text-gray-800 text-xl font-pbold">Forgot Password</Text>
          <Text className="text-gray-700 text-sm font-pregular">Please enter your email address, and we'll send you a one-time password (OTP) for verification.</Text>
        </View>
        <Input label="Email Address" keyboardType="email-address" />
      </View>
      <Btn onPress={() => router.navigate('/email-verification')} label="Send" mode="contained" />
    </ScrollView>
  )
}

export default ForgotPassword