import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { useEffect, useState } from "react";

import Ionicons from "@expo/vector-icons/Ionicons";
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { auth, firestore } from "../../config/FirebaseConfig";
import { Colors } from "../../constants/Colors";
import UserTripList from "../../components/MyTrips/UserTripList";
import { useRouter } from "expo-router";

export default function MyTrip() {
  const [userTrips, setUserTrips] = useState([]);
  const user = auth.currentUser;
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    user && GetMyTrips();
  }, [user]);

  const GetMyTrips = async () => {
    setLoading(true);
    setUserTrips([]);
    const q = query(
      collection(firestore, "userTrips"),
      where("userEmail", "==", user?.email)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setUserTrips((prev) => [...prev, doc.data()]);
    });

    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{
          padding: 5,
          backgroundColor: "#eef0d6",
          height: "100%",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontFamily: "NunitoBold", fontSize: 30 }}>
            My Trips
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/create-trip/search-place")}
          >
            <Ionicons name="add-circle" size={40} color="black" />
          </TouchableOpacity>
        </View>
        {loading && <ActivityIndicator size={"small"} color={Colors.PRIMARY} />}
        {userTrips?.length == 0 ? (
          <StartNewTripCard />
        ) : (
          <UserTripList userTrips={userTrips} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eef0d6",
  },
});
