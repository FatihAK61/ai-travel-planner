import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../constants/Colors";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  return (
    <View>
      <Image
        style={{ width: "100%", height: 550 }}
        source={require("../assets/images/login.jpg")}
      />

      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
            fontFamily: "NunitoExtraBold",
            marginTop: 10,
          }}
        >
          AI Travel Planner
        </Text>
        <Text
          style={{
            fontFamily: "NunitoLight",
            fontSize: 17,
            textAlign: "center",
            color: Colors.GRAY,
            marginTop: 20,
          }}
        >
          Discover your next adventure effortlessly. Personalized itineraries at
          your fingertips. Travel smarter with AI-Driven insights.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/(auth)/sign-in")}
        >
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontFamily: "NunitoExtraBold",
              fontSize: 17,
            }}
          >
            Sign In With Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: "100%",
    padding: 25,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: "20%",
  },
});
