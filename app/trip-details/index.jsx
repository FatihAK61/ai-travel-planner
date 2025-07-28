import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Colors } from "../../constants/Colors";
import moment from "moment";
import FlightInfo from "../../components/TripDetails/FlightInfo";
import HotelList from "../../components/TripDetails/HotelList";
import PlannedTrip from "../../components/TripDetails/PlannedTrip";

export default function TripDetails() {
  const navigation = useNavigation();
  const { trip } = useLocalSearchParams();
  const [tripDetails, setTripDetails] = useState([]);
  const formatData = (data) => {
    try {
      const result = JSON.parse(data);
      return result;
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
      headerBackTitle: "My Trips",
    });

    setTripDetails(JSON.parse(trip));
  }, []);
  return (
    tripDetails && (
      <ScrollView>
        <Image
          source={{
            uri:
              "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
              formatData(tripDetails.tripData)?.locationInfo?.photoRef +
              "&key=" +
              process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          }}
          style={{
            width: "100%",
            height: 310,
          }}
        />

        <View
          style={{
            padding: 15,
            backgroundColor: Colors.WHITE,
            height: "100%",
            marginTop: -30,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          <Text
            style={{
              fontFamily: "NunitoBold",
              fontSize: 25,
            }}
          >
            {tripDetails?.tripPlan?.location}
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "NunitoSemiBold",
                fontSize: 15,
                color: Colors.GRAY,
              }}
            >
              {moment(formatData(tripDetails.tripData)?.startDate).format(
                "DD MMM yyyy"
              )}
            </Text>

            <Text
              style={{
                fontFamily: "NunitoSemiBold",
                fontSize: 15,
                color: Colors.GRAY,
              }}
            >
              -{" "}
              {moment(formatData(tripDetails.tripData)?.endDate).format(
                "DD MMM yyyy"
              )}
            </Text>
          </View>

          <Text
            style={{
              fontFamily: "NunitoSemiBold",
              fontSize: 15,
              color: Colors.GRAY,
            }}
          >
            🚌 {formatData(tripDetails.tripData)?.traveller?.title}
          </Text>

          <FlightInfo flightData={tripDetails?.tripPlan?.flightDetails} />
          <HotelList hotelList={tripDetails?.tripPlan?.hotelOptions} />
          <PlannedTrip details={tripDetails?.tripPlan?.dailyItinerary} />
        </View>
      </ScrollView>
    )
  );
}
