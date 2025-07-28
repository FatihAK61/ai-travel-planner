import moment from "moment";
import { View, Text, Image, ScrollView } from "react-native";
import { Colors } from "../../constants/Colors";

export default function UserTripCard({ trip }) {
  const formatData = (data) => {
    return JSON.parse(data);
  };

  console.log(trip.tripData.photoRef);
  const uri =
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
    formatData(trip.tripData).locationInfo?.photoRef +
    "&key=" +
    process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY;
  return (
    <View style={{ marginTop: 15 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Image
          source={{ uri: uri }}
          style={{
            width: "120",
            height: "120",
            objectFit: "cover",
            borderRadius: 10,
          }}
        />
        <View>
          <Text style={{ fontFamily: "NunitoSemiBold", fontSize: 18 }}>
            {trip.tripPlan?.location}
          </Text>
          <Text
            style={{
              fontFamily: "NunitoSemiBold",
              fontSize: 15,
              color: Colors.GRAY,
            }}
          >
            {moment(formatData(trip.tripData).startDate).format("DD MMM yyyy")}
          </Text>
          <Text
            style={{
              fontFamily: "NunitoSemiBold",
              fontSize: 18,
              color: Colors.GRAY,
            }}
          >
            Travelling: {formatData(trip.tripData).traveller.title}
          </Text>
        </View>
      </View>
    </View>
  );
}
