import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useState } from "react";
import { CreateTripContext } from "../context/CreateTripContext";

export default function RootLayout() {
  useFonts({
    NunitoBlack: require("../assets/fonts/Nunito-Black.ttf"),
    NunitoBold: require("../assets/fonts/Nunito-Bold.ttf"),
    NunitoExtraBold: require("../assets/fonts/Nunito-ExtraBold.ttf"),
    NunitoExtraLight: require("../assets/fonts/Nunito-ExtraLight.ttf"),
    NunitoLight: require("../assets/fonts/Nunito-Light.ttf"),
    NunitoMedium: require("../assets/fonts/Nunito-Medium.ttf"),
    NunitoRegular: require("../assets/fonts/Nunito-Regular.ttf"),
    NunitoSemiBold: require("../assets/fonts/Nunito-SemiBold.ttf"),
  });

  const [tripData, setTripData] = useState([]);
  return (
    <CreateTripContext.Provider value={{ tripData, setTripData }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </CreateTripContext.Provider>
  );
}
