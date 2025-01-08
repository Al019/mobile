import { Redirect, Stack } from "expo-router"
import { useAuthContext } from "../../contexts/AuthContext"
import { ErrorMessage } from "../../components/Dialog"

const DefaultLayout = () => {
  const { user, visibleAlert, errorMessage, setVisibleAlert } = useAuthContext()

  if (!user) {
    return <Redirect href="/sign-in" />
  }

  return (
    <>
      {visibleAlert && (
        <ErrorMessage visible={visibleAlert} message={errorMessage} onDismiss={() => setVisibleAlert(false)} />
      )}
      <Stack screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name='(tabs)' />
        <Stack.Screen name='(pages)' />
      </Stack>
    </>
  )
}

export default DefaultLayout