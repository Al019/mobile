import { Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router"
import { Image, Text, View } from "react-native"
import { Badge, IconButton } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"
import Logo from '../../../assets/images/occ-logo.png'

const TabIcon = ({ label, icon, color, focused }) => (
  <View className="items-center">
    <Ionicons name={icon} size={24} color={color} />
    <Text className={`text-sm font-pmedium ${focused ? 'text-blue-500' : 'text-gray-500'}`}>{label}</Text>
  </View>
)

const TabLayout = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: "#3b82f6",
      headerShadowVisible: false,
      tabBarShowLabel: false,
      headerTitleAlign: "center",
      headerTitleStyle: {
        textTransform: "capitalize"
      },
      tabBarStyle: {
        height: 70,
        position: "absolute",
        shadowColor: "transparent",
        borderColor: "transparent",
      }
    }}>
      <Tabs.Screen
        name="home"
        options={{
          header: () => (
            <SafeAreaView className="bg-blue-100/50">
              <View className="px-4 pt-4 flex-row justify-between items-center">
                <View className="flex-row items-center space-x-1">
                  <Image resizeMode='contain' source={Logo} className="h-10 w-10" />
                  <Text className="text-2xl text-blue-700 font-pbold tracking-widest">OCC</Text>
                </View>
                <View>
                  <Badge className="absolute z-10 bg-red-500">
                    <Text className="font-pregular">1</Text>
                  </Badge>
                  <IconButton
                    icon="bell"
                    iconColor="orange"
                    size={24}
                    containerColor="white"
                    className="rounded-xl"
                  />
                </View>
              </View>
            </SafeAreaView>
          ),
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={focused ? 'home' : 'home-outline'} label="Home" color={color} focused={focused} />
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={focused ? 'person' : 'person-outline'} label="Profile" color={color} focused={focused} />
          ),
          headerTitle: () => (
            <Text className="text-lg font-psemibold">Profile</Text>
          )
        }}
      />
    </Tabs>
  )
}

export default TabLayout