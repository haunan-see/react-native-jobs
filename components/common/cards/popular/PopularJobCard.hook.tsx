const { useState } = require("react")
import { COLORS } from "../../../../constants"

const usePopularJobCard = () => {
  const [textColor, setTextColor] = useState(COLORS.gray)
  const [titleColor, setTitleColor] = useState(COLORS.primary)

  const handlePressIn = () => {
    setTextColor(COLORS.white)
    setTitleColor(COLORS.white)
  }

  const handlePressOut = () => {
    setTextColor(COLORS.gray)
    setTitleColor(COLORS.primary)
  }

  return {
    textColor,
    titleColor,
    handlePressIn,
    handlePressOut,
  }
}

export default usePopularJobCard
