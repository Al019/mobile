import { useState } from 'react'
import { Text } from 'react-native'
import { TextInput } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'

const Input = ({ label, onChangeText, secureTextEntry, ...rest }) => {
  const [showPass, setShowPass] = useState(false)

  return (
    <TextInput
      label={<Text className="font-pregular text-sm text-gray-700">{label}</Text>}
      onChangeText={onChangeText}
      mode='outlined'
      right={secureTextEntry && <TextInput.Icon onPress={() => setShowPass(!showPass)} icon={() => <Ionicons size={24} name={!showPass ? 'eye-off-outline' : 'eye-outline'} color="#1f2937" />} />}
      secureTextEntry={secureTextEntry && !showPass}
      outlineStyle={{ borderRadius: 12 }}
      contentStyle={{ fontFamily: "Poppins-Medium", color: "#1f2937", fontSize: 14 }}
      className="h-[55px]"
      {...rest}
    />
  )
}

export default Input