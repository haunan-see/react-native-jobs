import { View, Text, TouchableOpacity, Image, Linking } from "react-native"
import { SIZES, icons } from "../../../constants"
import styles from "./footer.style"

const Footer = ({ url }) => {
  return (
    <View style={{ margin: SIZES.small, ...styles.container }}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={icons.heartOutline}
          resizeMode="contain"
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer
