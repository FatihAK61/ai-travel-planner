import { useContext, useEffect } from "react";
import { View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { router, useNavigation } from "expo-router";
import { Colors } from "../../constants/Colors";
import { CreateTripContext } from "../../context/CreateTripContext";

export default function SearchPlace() {
  const navigation = useNavigation();
  const { tripData, setTripData } = useContext(CreateTripContext);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Search Place",
      headerBackTitle: "My Trips",
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
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        onFail={(err) => console.log(err)}
        onPress={(data, details = null) => {
          setTripData({
            locationInfo: {
              name: data.description,
              coordinates: details?.geometry.location,
              photoRef: details?.photos[0]?.photo_reference,
              url: details?.url,
            },
          });

          router.push("/create-trip/select-traveler");
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          language: "tr",
        }}
        styles={{
          textInputContainer: {
            borderWidth: 0.5,
            borderRadius: 20,
            marginTop: 25,
            padding: 5,
          },
          textInput: {
            fontFamily: "NunitoBlack",
            paddingHorizontal: 15,
          },
        }}
      />
    </View>
  );
}
