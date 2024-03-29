import { useState } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native"
import { useRouter } from "expo-router"
import styles from "./popularjobs.style"
import { COLORS, SIZES } from "../../../constants"
import PopularJobCard from "../../common/cards/popular/PopularJobCard"
import useFetch from "../../../hook/useFetch"
import usePopularJob from "./Popularjobs.hook"

const Popularjobs = () => {
  // leave this here because we dont use hook within a hook
  const { data, isLoading, error } = useFetch("search", {
    query: "Developer",
    num_pages: 1,
  })

  const { selectedJob, handleCardPress } = usePopularJob()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>View all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong...</Text>
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs
