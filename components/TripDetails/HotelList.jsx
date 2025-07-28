import { View, Text, FlatList } from "react-native";
import HotelCard from "./HotelCard";

export default function HotelList({ hotelList }) {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontFamily: "NunitoExtraBold", fontSize: 20 }}>
        🏨 Hotel Recommendation
      </Text>

      <FlatList
        style={{
          marginTop: 10,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={hotelList}
        renderItem={({ item, index }) => <HotelCard item={item} />}
      />
    </View>
  );
}
