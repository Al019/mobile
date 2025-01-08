import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../components/Button'
import { Redirect, router } from 'expo-router'
import { useAuthContext } from '../contexts/AuthContext'

const Welcome = () => {
  const { user } = useAuthContext()

  if (user) {
    return <Redirect href="/home" />
  }

  return (
    <SafeAreaView>
      <Button onPress={() => router.navigate('/sign-in')} label="Get Started" mode="contained" />
    </SafeAreaView>
  )
}

export default Welcome