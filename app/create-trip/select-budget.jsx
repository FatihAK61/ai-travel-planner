import { router, useNavigation, useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import { Colors } from "../../constants/Colors";
import { SelectBudgetOptions } from "../../constants/Options";
import OptionCard from "../../components/CreateTrip/OptionCard";
import { CreateTripContext } from "../../context/CreateTripContext";

export default function SelectBudget() {
  const router = useRouter();
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Select Budget",
      headerBackTitle: "Select Dates",
    });
  }, []);

  useEffect(() => {
    selectedOption &&
      setTripData({
        ...tripData,
        budget: selectedOption?.title,
      });
  }, [selectedOption]);

  const onClickContinue = () => {
    if (!selectedOption) {
      Alert.alert("Select Budget", "Please select a budget!");
      return;
    }

    router.push("/create-trip/review-trip");
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
      <Text style={{ fontFamily: "NunitoBold", fontSize: 35, marginTop: 15 }}>
        Budget
      </Text>

      <View style={{ marginTop: 15 }}>
        <Text style={{ fontFamily: "NunitoSemiBold", fontSize: 18 }}>
          Choose spending habits for your trip..
        </Text>

        <FlatList
          data={SelectBudgetOptions}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setSelectedOption(item)}
              style={{ marginVertical: 10 }}
            >
              <OptionCard option={item} selectedOption={selectedOption} />
            </TouchableOpacity>
          )}
        />
      </View>

      <TouchableOpacity
        onPress={onClickContinue}
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
