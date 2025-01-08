import { Redirect, Stack } from "expo-router"
import { ErrorMessage } from "../../components/Dialog"
import { useAuthContext } from "../../contexts/AuthContext"

const Authlayout = () => {
  const { user, visibleAlert, errorMessage, setVisibleAlert } = useAuthContext()

  if (user) {
    return <Redirect href="/home" />
  }

  return (
    <>
      {visibleAlert && (
        <ErrorMessage visible={visibleAlert} message={errorMessage} onDismiss={() => setVisibleAlert(false)} />
      )}
      <Stack screenOptions={{
        contentStyle: {
          backgroundColor: "white"
        },
        headerTitle: '',
        headerShadowVisible: false
      }}>
        <Stack.Screen name='sign-in' options={{
          headerShown: false
        }} />
        <Stack.Screen name='forgot-password' />
        <Stack.Screen name='email-verification' />
        <Stack.Screen name='create-new-password' options={{
          headerBackVisible: false
        }} />
      </Stack>
    </>
  )
}

export default Authlayout