import { View, Text, Image } from "react-native";
import { Colors } from "../../constants/Colors";
import { useContext, useEffect, useState } from "react";
import { CreateTripContext } from "../../context/CreateTripContext";
import { AI_PROMPT } from "../../constants/Options";
import { chatSession } from "../../config/AiModel";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "expo-router";
import { auth, firestore } from "../../config/FirebaseConfig";

export default function GenerateTrip() {
  const { tripData, setTripData } = useContext(CreateTripContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const user = auth.currentUser;

  useEffect(() => {
    tripData && GenerateAiTrip();
  }, []);

  const GenerateAiTrip = async () => {
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      tripData?.locationInfo?.name
    )
      .replace("{totalDay}", tripData?.totalNoOfDays)
      .replace("{totalNight}", tripData?.totalNoOfDays - 1)
      .replace("{traveller}", tripData?.traveller?.title)
      .replace("{budget}", tripData?.budget)
      .replace("{totalDays}", tripData?.totalNoOfDays)
      .replace("{totalNight}", tripData?.totalNoOfDays - 1);

    const result = await chatSession.sendMessage(FINAL_PROMPT);
    setLoading(false);

    const tripRes = JSON.parse(result.response.text());
    const docId = Date.now().toString();
    const res = await setDoc(doc(firestore, "userTrips", docId), {
      userEmail: user.email,
      tripPlan: tripRes,
      tripData: JSON.stringify(tripData),
      docId: docId,
    });

    router.push("/(tabs)/myTrip");
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 105,
        backgroundColor: "#FFFFFF",
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "NunitoSemiBold",
          fontSize: 35,
          textAlign: "center",
        }}
      >
        Please wait...
      </Text>
      <Text
        style={{
          marginTop: 20,
          fontFamily: "NunitoSemiBold",
          fontSize: 20,
          textAlign: "center",
        }}
      >
        We are working to generate your dream trip...
      </Text>

      <Image
        style={{
          width: "100%",
          height: 180,
          objectFit: "contain",
          marginTop: 30,
          marginBottom: 30,
        }}
        source={require("../../assets/images/giphy.gif")}
      />
      <Text
        style={{
          fontFamily: "NunitoSemiBold",
          color: Colors.GRAY,
          fontSize: 20,
          textAlign: "center",
        }}
      >
        Do not go back ✈️
      </Text>
    </View>
  );
}
