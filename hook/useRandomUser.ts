import { useState, useEffect, useMemo } from "react"
import axios from "axios"
import { Result } from "../types"
import Config from "react-native-config"

const apiKey = Config.API_KEY

const useRandomUser = () => {
  const [userData, setUserData] = useState<Result[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const options = {
    method: "GET",
    url: "https://random-user-api.p.rapidapi.com/api",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "random-user-api.p.rapidapi.com",
    },
  }

  const fetchUserData = async () => {
    setIsLoading(true)

    try {
      const response = await axios.request(options)

      if (response) {
        setUserData(response.data.results)
        setIsLoading(false)
      }
    } catch (error: any) {
      setError(error)
      // alert("Error fetching data...")
    } finally {
      setIsLoading(false)
    }
  }

  const userFullName = useMemo(
    () =>
      userData[0]?.name?.title +
      " " +
      userData[0]?.name?.first +
      " " +
      userData[0]?.name?.last,
    [userData]
  )

  const avatar = useMemo(() => userData[0]?.picture?.large, [userData])

  useEffect(() => {
    fetchUserData()
  }, [])

  const refetch = () => {
    setIsLoading(false)
    fetchUserData()
  }

  return {
    userFullName,
    avatar,
    isLoading,
    error,
    refetch,
  }
}

export default useRandomUser
