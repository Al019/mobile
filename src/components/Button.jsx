import { Text } from 'react-native'
import { Button } from 'react-native-paper'

const Btn = ({ label, onPress, loading, ...rest }) => {
  return (
    <Button onPress={onPress} contentStyle={{ height: 55 }} className='rounded-xl' loading={loading} disabled={loading} {...rest}>
      <Text className="text-sm font-psemibold">{label}</Text>
    </Button>
  )
}

export default Btn