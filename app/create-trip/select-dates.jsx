import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import { CreateTripContext } from "../../context/CreateTripContext";

import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";

export default function SelectDates() {
  const navigation = useNavigation();
  const router = useRouter();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Select Dates",
      headerBackTitle: "Travellers",
    });
  }, []);

  const onDateChange = (date, type) => {
    if (type == "START_DATE") {
      setStartDate(moment(date));
    } else {
      setEndDate(moment(date));
    }
  };

  const onDateSelectionContinue = () => {
    if (!startDate && !endDate) {
      Alert.alert("Select Date", "Please select start and end dates!");
      return;
    }

    const totalNoOfDays = endDate.diff(startDate, "days");
    setTripData({
      ...tripData,
      startDate: startDate,
      endDate: endDate,
      totalNoOfDays: totalNoOfDays + 1,
    });

    router.push("/create-trip/select-budget");
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 105,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "NunitoBlack",
          fontSize: 35,
          marginTop: 15,
        }}
      >
        Travel Dates
      </Text>

      <View style={{ marginTop: 22 }}>
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          maxRangeDuration={5}
          selectedRangeStyle={{
            backgroundColor: Colors.PRIMARY,
          }}
          selectedDayTextStyle={{
            color: Colors.WHITE,
          }}
        />
      </View>

      <TouchableOpacity
        onPress={onDateSelectionContinue}
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 30,
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
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
