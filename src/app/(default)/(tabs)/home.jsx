import { View, Text, ScrollView, TouchableOpacity, Image, RefreshControl } from 'react-native'
import User from '../../../components/User'
import { useCallback, useState } from 'react'
import { useAuthContext } from '../../../contexts/AuthContext'
import { router, useFocusEffect } from 'expo-router'
import { SecurityAlert } from '../../../components/Dialog'
import axios from '../../../api/axios'

const Home = () => {
  const { user } = useAuthContext()
  const [visible, setVisible] = useState(false)
  const [status, setStatus] = useState(null)
  const [refreshing, setRefreshing] = useState(false)

  useFocusEffect(
    useCallback(() => {
      if (user.is_default === 1) {
        setVisible(true)
      }
    }, [user])
  )

  useFocusEffect(
    useCallback(() => {
      getRecordStatus()
    }, [])
  )

  const getRecordStatus = async () => {
    await axios.get('/student/get-record-status')
      .then(({ data }) => {
        setStatus(data)
      })
  }

  const onRefresh = async () => {
    setRefreshing(true)
    await getRecordStatus()
    setRefreshing(false)
  }

  return (
    <>
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} contentContainerStyle={{ backgroundColor: "#DBEAFE80", flexGrow: 1, padding: 16 }}>
        <View style={{ rowGap: 24 }}>
          <User />
          <View className="space-y-4">
            <TouchableOpacity onPress={() => router.navigate('home/my-document')} className="bg-indigo-500/80 p-6 rounded-xl flex-row items-center justify-between">
              <View className="space-y-2">
                <Text className="text-white font-pbold text-xl">My Documents</Text>
                <Text className="text-xs text-white font-pregular">Submit documents</Text>
              </View>
              <Image resizeMode="contain" source={require('../../../assets/images/folders.png')} className="w-20 h-20" />
            </TouchableOpacity>
            {status && status === 'complete' && (
              <TouchableOpacity onPress={() => router.navigate('home/my-credential')} className="bg-yellow-500/80 p-6 rounded-xl flex-row items-center justify-between">
                <View className="space-y-2">
                  <Text className="text-white font-pbold text-xl">My Credentials</Text>
                  <Text className="text-xs text-white font-pregular">Request credentials</Text>
                </View>
                <Image resizeMode="contain" source={require('../../../assets/images/documents.png')} className="w-20 h-20" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>

      <SecurityAlert visible={visible} onPress={() => {
        setVisible(false)
        router.navigate('profile/setting/change-password')
      }} />
    </>
  )
}

export default Home