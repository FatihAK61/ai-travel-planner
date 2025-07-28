import { View, Text, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/Colors";
import { useRouter } from "expo-router";

import Ionicons from "@expo/vector-icons/Ionicons";

export default function StartNewTripCard() {
  const router = useRouter();

  return (
    <View
      style={{
        padding: 20,
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        gap: 25,
      }}
    >
      <Ionicons name="location-sharp" size={24} color="black" />
      <Text
        style={{ fontSize: 25, fontFamily: "NunitoSemiBold", marginTop: 4 }}
      >
        No trips plannet yet
      </Text>

      <Text
        style={{
          fontSize: 18,
          fontFamily: "NunitoSemiBold",
          textAlign: "center",
        }}
      >
        Looks like its time to plan a new travel experience! Get started below.
      </Text>

      <TouchableOpacity
        onPress={() => router.push("/create-trip/search-place")}
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          paddingHorizontal: 30,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            fontFamily: "NunitoBold",
            fontSize: 17,
          }}
        >
          Start a new trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
