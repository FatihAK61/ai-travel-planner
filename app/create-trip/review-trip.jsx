import { useNavigation, useRouter } from "expo-router";
import { useContext, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/Colors";
import { CreateTripContext } from "../../context/CreateTripContext";

import moment from "moment";

export default function RevievTrip() {
  const navigation = useNavigation();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Review Trip",
      headerBackTitle: "Select Budget",
    });
  }, []);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 105,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text style={{ fontFamily: "NunitoBlack", fontSize: 35, marginTop: 15 }}>
        Review your trip
      </Text>

      <View style={{ marginTop: 15 }}>
        <Text style={{ fontFamily: "NunitoSemiBold", fontSize: 20 }}>
          Before generating your trip, please review your selection.
        </Text>

        <View
          style={{
            marginTop: 40,
            display: "flex",
            flexDirection: "row",
            gap: 18,
          }}
        >
          <Text
            style={{
              fontSize: 30,
            }}
          >
            📍
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "NunitoMedium",
                fontSize: 18,
                color: Colors.GRAY,
              }}
            >
              Destionation
            </Text>
            <Text style={{ fontFamily: "NunitoBlack", fontSize: 18 }}>
              {tripData?.locationInfo?.name}
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            gap: 18,
          }}
        >
          <Text
            style={{
              fontSize: 30,
            }}
          >
            🗓️
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "NunitoMedium",
                fontSize: 18,
                color: Colors.GRAY,
              }}
            >
              Travel Date
            </Text>
            <Text style={{ fontFamily: "NunitoBlack", fontSize: 18 }}>
              {moment(tripData?.startDate).format("DD MMM") +
                " To " +
                moment(tripData?.endDate).format("DD MMM") +
                " "}
              ({tripData?.totalNoOfDays} days)
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            gap: 18,
          }}
        >
          <Text
            style={{
              fontSize: 30,
            }}
          >
            🚎
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "NunitoMedium",
                fontSize: 18,
                color: Colors.GRAY,
              }}
            >
              Who is traveling
            </Text>
            <Text style={{ fontFamily: "NunitoBlack", fontSize: 18 }}>
              {tripData?.traveller?.title}
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            gap: 18,
          }}
        >
          <Text
            style={{
              fontSize: 30,
            }}
          >
            💰
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "NunitoMedium",
                fontSize: 18,
                color: Colors.GRAY,
              }}
            >
              Budget
            </Text>
            <Text style={{ fontFamily: "NunitoBlack", fontSize: 18 }}>
              {tripData?.budget}
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => router.replace("/create-trip/generate-trip")}
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 60,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: Colors.WHITE,
            fontFamily: "NunitoBold",
            fontSize: 20,
          }}
        >
          Build My Trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
