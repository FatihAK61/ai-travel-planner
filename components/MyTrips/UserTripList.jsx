import moment from "moment";
import UserTripCard from "./UserTripCard";

import { View, Text, Image, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/Colors";
import { useRouter } from "expo-router";

export default function UserTripList({ userTrips }) {
  const router = useRouter();
  const latestTrip = JSON.parse(userTrips[0].tripData);
  const uri =
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
    latestTrip?.locationInfo?.photoRef +
    "&key=" +
    process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY;
  return (
    userTrips && (
      <View>
        <View style={{ marginTop: 20 }}>
          {latestTrip?.locationInfo?.photoRef ? (
            <Image
              source={{ uri: uri }}
              style={{
                width: "100%",
                height: 240,
                objectFit: "cover",
                borderRadius: 20,
              }}
            />
          ) : (
            <Image
              source={require("../../assets/images/travel.jpeg")}
              style={{
                width: "100%",
                height: 240,
                objectFit: "cover",
                borderRadius: 20,
              }}
            />
          )}

          <View style={{ marginTop: 10 }}>
            <Text style={{ fontFamily: "NunitoSemiBold", fontSize: 20 }}>
              {userTrips[0]?.tripPlan?.location}
            </Text>
            <View
              style={{
                marginTop: 10,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "NunitoSemiBold",
                  fontSize: 15,
                  color: Colors.GRAY,
                }}
              >
                {moment(latestTrip.startDate).format("DD MMM yyyy")}
              </Text>
              <Text
                style={{
                  fontFamily: "NunitoSemiBold",
                  fontSize: 15,
                  color: Colors.GRAY,
                }}
              >
                🚌 {latestTrip.traveller.title}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/trip-details",
                  params: {
                    trip: JSON.stringify(userTrips[0]),
                  },
                })
              }
              style={{
                backgroundColor: Colors.PRIMARY,
                padding: 15,
                borderRadius: 15,
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  color: Colors.WHITE,
                  textAlign: "center",
                  fontFamily: "NunitoBold",
                  fontSize: 20,
                }}
              >
                See your plan
              </Text>
            </TouchableOpacity>
          </View>

          {userTrips.map((trip, index) => (
            <UserTripCard trip={trip} key={index} />
          ))}
        </View>
      </View>
    )
  );
}
