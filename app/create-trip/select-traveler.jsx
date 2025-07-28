import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigation } from "expo-router";
import { Colors } from "../../constants/Colors";
import { SelectTravelesList } from "../../constants/Options";
import OptionCard from "../../components/CreateTrip/OptionCard";
import { CreateTripContext } from "../../context/CreateTripContext";

export default function SelectTraveler() {
  const navigation = useNavigation();
  const [selectedTraveller, setSelectedTraveller] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Select Traveler",
      headerBackTitle: "Search",
    });
  }, []);

  useEffect(() => {
    setTripData({
      ...tripData,
      traveller: selectedTraveller,
    });
  }, [selectedTraveller]);

  useEffect(() => {
    console.log(tripData);
  }, [tripData]);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 105,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text style={{ fontSize: 35, fontFamily: "NunitoBlack", marginTop: 12 }}>
        Who's Travelling ?
      </Text>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "NunitoBlack", fontSize: 22 }}>
          Choose your traveles
        </Text>
        <FlatList
          data={SelectTravelesList}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setSelectedTraveller(item)}
              style={{ marginVertical: 10 }}
            >
              <OptionCard option={item} selectedOption={selectedTraveller} />
            </TouchableOpacity>
          )}
        />
      </View>

      <TouchableOpacity
        style={{
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 20,
        }}
      >
        <Link
          style={{ width: "100%", textAlign: "center" }}
          href={"/create-trip/select-dates"}
        >
          <Text
            style={{
              textAlign: "center",
              color: Colors.WHITE,
              fontFamily: "NunitoBold",
              fontSize: 20,
            }}
          >
            Continue
          </Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
}
