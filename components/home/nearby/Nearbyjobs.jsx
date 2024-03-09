import { useState } from "react"
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native"
import { useRouter } from "expo-router"
import styles from "./nearbyjobs.style"
import { COLORS, SIZES } from "../../../constants"
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard"
import useFetch from "../../../hook/useFetch"
import { data } from "../popular/data"

const Nearbyjobs = () => {
  const router = useRouter()
  // const { isLoading, error } = useFetch("search", {
  //   query: "React Developer",
  //   num_pages: 1,
  // })
  const isLoading = false
  const error = false

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
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
          data?.map((job) => (
            <NearbyJobCard
              key={`nearby-job-${job?.job_id}`}
              job={job}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  )
}

export default Nearbyjobs
