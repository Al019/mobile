import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from '../../assets/images/occ-logo.png'
import Input from '../../components/Input'
import { Ionicons } from '@expo/vector-icons'
import Btn from '../../components/Button'
import { useState } from 'react'
import { router } from 'expo-router'
import { useAuthContext } from '../../contexts/AuthContext'

const SignIn = () => {
  const [toggle, setToggle] = useState(false)
  const [email_address, setEmailAddress] = useState("")
  const [id_number, setIdNumber] = useState("")
  const [password, setPassword] = useState("")
  const { login, loading } = useAuthContext()

  const handleLogin = () => {
    if (!toggle) {
      if (email_address !== "" && password !== "") {
        login({ student_email_address: email_address, password })
      }
    } else {
      if (id_number !== "" && password !== "") {
        login({ id_number, password })
      }
    }
  }

  return (
    <SafeAreaView className="flex-1">
      <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flexGrow: 1, padding: 16, rowGap: 24, justifyContent: "space-between" }}>
        <View className="space-y-6">
          <View className="flex-row items-center space-x-2">
            <Image resizeMode='contain' source={Logo} className="h-12 w-12" />
            <View className="w-1 h-full bg-gray-800 rounded-full" />
            <Text className="text-gray-800 font-pbold text-sm tracking-widest">
              Opol{'\n'}Community{'\n'}College
            </Text>
          </View>
          <View className="space-y-1">
            <Text className="text-gray-800 text-2xl font-pblack">Hello, Welcome!</Text>
            <Text className="text-gray-700 text-sm font-pregular">Please login your account.</Text>
          </View>
          <View style={{ rowGap: 16 }}>
            <Input onChangeText={(value) => {
              if (!toggle) {
                setEmailAddress(value)
              } else {
                setIdNumber(value)
              }
            }} label={!toggle ? 'Email Address' : 'ID Number'} keyboardType={!toggle ? 'email-address' : 'numeric'} />
            <View style={{ rowGap: 8 }}>
              <Input onChangeText={(value) => setPassword(value)} label="Password" secureTextEntry />
              <View className="flex-row justify-end">
                <TouchableOpacity onPress={() => router.navigate('/forgot-password')} className="flex-row items-center space-x-[1px]">
                  <Text className="text-sm font-pmedium text-blue-500">Forgot Password</Text>
                  <Ionicons size={16} name="chevron-forward-outline" color="#3b82f6" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={{ rowGap: 16 }}>
          <Btn onPress={handleLogin} label={loading ? 'Logging in' : 'Login'} mode="contained" loading={loading} />
          <View className="flex-row items-center">
            <View className="flex-1 h-[1px] bg-gray-500" />
            <Text className="text-gray-700 mx-3 text-center text-sm font-pregular">or</Text>
            <View className="flex-1 h-[1px] bg-gray-500" />
          </View>
          <Btn onPress={() => setToggle(!toggle)} label={!toggle ? 'Login via ID Number' : 'Login via Email Address'} mode="outlined" />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn