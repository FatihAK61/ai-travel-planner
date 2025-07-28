import { View, Text } from "react-native";

export default function PlannedTrip({ details }) {
  return (
    <View style={{ marginTop: 8 }}>
      <Text
        style={{
          fontFamily: "NunitoExtraBold",
          fontSize: 20,
        }}
      >
        🏕️ Planned Trip
      </Text>
      <Text></Text>
    </View>
  );
}
