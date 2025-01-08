import { Ionicons } from '@expo/vector-icons'
import { Text, View } from 'react-native'
import { Button, Dialog, Portal } from 'react-native-paper'

const ErrorMessage = ({ visible, message, onDismiss }) => {
  return (
    <Portal>
      <Dialog visible={visible} dismissable={false} className="bg-white rounded-xl">
        <Dialog.Title className="text-xl font-pmedium text-gray-800">Error Message!</Dialog.Title>
        <Dialog.Content>
          <Text className="text-sm font-pregular text-gray-700">{message}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onDismiss}>
            <Text className="text-sm font-pregular">Okay</Text>
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  )
}

const SecurityAlert = ({ visible, onPress }) => {
  return (
    <Portal>
      <Dialog visible={visible} dismissable={false} className="bg-white rounded-xl">
        <Dialog.Title className="text-xl font-pmedium text-gray-800 text-center">Security Alert!</Dialog.Title>
        <Dialog.Content>
          <View className="items-center space-y-3">
            <Ionicons name='lock-closed' size={50} color='red' />
            <Text className="text-sm font-pregular text-gray-700">Please change your password.</Text>
          </View>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onPress} mode='contained' className="w-full">
            <Text className="text-sm font-pregular">Change Password</Text>
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  )
}

export { ErrorMessage, SecurityAlert }