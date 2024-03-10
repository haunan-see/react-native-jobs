import { useState } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native"
import { useRouter } from "expo-router"
import { icons, SIZES } from "../../../constants"
import styles from "./welcome.style"

const jobTypes = ["Full Time", "Part Time", "Contract", "Freelance"]

const Welcome = ({ userFullName, searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter()
  const [activeJobType, setActiveJobType] = useState(jobTypes[0])

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello {userFullName},</Text>
        <Text style={styles.welcomeMessage}>Welcome to Job App</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="Search for jobs"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            style={styles.searchBtnImage}
            // resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item)
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  )
}

export default Welcome
