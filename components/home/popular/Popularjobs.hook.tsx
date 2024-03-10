const { useState } = require("react")
import { useRouter } from "expo-router"
import { Job } from "../../../types"

const usePopularJob = () => {
  const router = useRouter()

  const [selectedJob, setSelectedJob] = useState(null)

  const handleCardPress = (item: Job) => {
    router.push(`/job-details/${item.job_id}`)
    setSelectedJob(item.job_id)
  }

  return {
    selectedJob,
    handleCardPress,
  }
}

export default usePopularJob
