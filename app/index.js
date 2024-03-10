import { useState } from "react"
import { View, ScrollView, SafeAreaView, Text } from "react-native"
import { Stack, useRouter } from "expo-router"
import { COLORS, SIZES, images, icons } from "../constants"
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components"
import useRandomUser from "../hook/useRandomUser"

const Home = () => {
  const router = useRouter()
  const { userFullName, avatar, isLoading, error } = useRandomUser()
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "Home",
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimension="60%"
              onPress={() => router.navigate("Menu")}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={{ uri: avatar }}
              dimension="100%"
              onPress={() => router.navigate("Profile")}
            />
          ),
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome
            userFullName={userFullName}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`)
              }
            }}
          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default Home
