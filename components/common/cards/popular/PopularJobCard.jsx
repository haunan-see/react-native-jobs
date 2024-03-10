import React, { useState } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableHighlight,
} from "react-native"
import { COLORS, images } from "../../../../constants"
import styles from "./popularjobcard.style"
import usePopularJobCard from "./PopularJobCard.hook"

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  const { textColor, titleColor, handlePressIn, handlePressOut } =
    usePopularJobCard()

  return (
    <TouchableHighlight
      activeOpacity={0.6}
      style={styles.container}
      underlayColor={COLORS.tertiary}
      onPress={() => {
        handleCardPress(item)
      }}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <>
        <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
          <Image
            source={
              item.employer_logo ? { uri: item.employer_logo } : images.company
            }
            resizeMode="contain"
            style={styles.logoImage}
          />
        </TouchableOpacity>
        <Text
          style={{ ...styles.companyName, color: textColor }}
          numberOfLines={1}
        >
          {item.employer_name}
        </Text>

        <View style={styles.infoContainer}>
          <Text
            style={{ ...styles.jobName, color: titleColor }}
            numberOfLines={1}
          >
            {item.job_title}
          </Text>
          <Text style={{ ...styles.location, color: textColor }}>
            {item.job_country}
          </Text>
        </View>
      </>
    </TouchableHighlight>
  )
}

export default PopularJobCard
