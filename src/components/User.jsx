import { Ionicons } from '@expo/vector-icons'
import { View, Text, Image } from 'react-native'
import { List } from 'react-native-paper'
import UserMale from '../assets/images/user-male.png'
import UserFemale from '../assets/images/user-female.png'
import { useAuthContext } from '../contexts/AuthContext'

const User = () => {
  const { user } = useAuthContext()

  return (
    <List.Item
      title={() => <Text className="text-sm font-psemibold">{user.student.information.first_name} {user.student.information.last_name}</Text>}
      description={() => <Text className="font-pmedium text-xs">{user.student.id_number}</Text>}
      left={props => <Image {...props} source={user.student.information.gender.toLowerCase() === 'male' && UserMale || user.student.information.gender.toLowerCase() === 'female' && UserFemale} resizeMode='contain' className="w-12 h-12" />}
      right={props => <Ionicons {...props} name='chevron-forward-outline' size={20} />}
      borderless
      className="bg-white rounded-xl"
    />
  )
}

export default User