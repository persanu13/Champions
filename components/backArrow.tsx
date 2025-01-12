import { useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { View, StyleSheet } from "react-native";

export default function BackArrow() {
  const router = useRouter();

  const handleBack = () => {
    router.back(); // Merge mereu la pagina anterioară
  };

  return (
    <View style={styles.arrowBack} onTouchEnd={handleBack}>
      <FontAwesome size={28} name="arrow-circle-left" color={"#fff"} />
    </View>
  );
}

const styles = StyleSheet.create({
  arrowBack: {
    position: "absolute",
    left: 10,
    top: 10,
  },
});
