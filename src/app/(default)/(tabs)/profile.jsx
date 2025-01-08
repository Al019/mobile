import { View, Text, ScrollView } from 'react-native'
import User from '../../../components/User'
import { List } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'
import { useAuthContext } from '../../../contexts/AuthContext'
import { router } from 'expo-router'

const Profile = () => {
  const { logout } = useAuthContext()

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: "#DBEAFE80", padding: 16 }}>
      <View style={{ rowGap: 16 }}>
        <User />
        <List.Item
          onPress={() => router.navigate('profile/setting')}
          title={() => <Text className="font-pregular text-sm">Settings</Text>}
          left={props => <Ionicons {...props} color='blue' name='settings-outline' size={24} />}
          right={props => <Ionicons {...props} name='chevron-forward-outline' size={20} />}
          borderless
          className="bg-white rounded-xl"
        />
        <List.Item
          onPress={() => logout()}
          title={() => <Text className="font-pregular text-sm">Logout</Text>}
          left={props => <Ionicons {...props} color='red' name='log-out-outline' size={24} />}
          right={props => <Ionicons {...props} name='chevron-forward-outline' size={20} />}
          borderless
          className="bg-white rounded-xl"
        />
      </View>
    </ScrollView>
  )
}

export default Profile