import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function FlightInfo({ flightData }) {
  return (
    <View
      style={{
        marginTop: 20,
        borderWidth: 1,
        borderColor: Colors.lightGray,
        padding: 8,
        borderRadius: 15,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontFamily: "NunitoExtraBold", fontSize: 20 }}>
          ✈️ Flights
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.PRIMARY,
            padding: 6,
            width: 100,
            borderRadius: 8,
            marginTop: 15,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: Colors.WHITE,
              fontFamily: "NunitoSemiBold",
            }}
          >
            Book Here
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{ fontFamily: "NunitoSemiBold", fontSize: 18, marginTop: 8 }}
      >
        $ {flightData?.estimatedPrice}
      </Text>
      <Text style={{ fontFamily: "NunitoSemiBold", fontSize: 18 }}>
        Airline: {flightData?.airline}
      </Text>
    </View>
  );
}
