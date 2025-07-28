import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../../constants/Colors";
import { auth } from "../../../config/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

import Ionicons from "@expo/vector-icons/Ionicons";

const index = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const onSignIn = () => {
    if (!email || !password) {
      Alert.alert("Sign In", "Please enter all details.");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.replace("/myTrip");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          Alert.alert("Sign In", "Invalid email or password.");
        }
      });
  };

  return (
    <SafeAreaView>
      <View style={{ padding: 25 }}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text
          style={{ fontFamily: "NunitoExtraBold", fontSize: 30, marginTop: 15 }}
        >
          Let's Sign You In!
        </Text>
        <Text
          style={{
            fontFamily: "NunitoBlack",
            fontSize: 30,
            color: Colors.GRAY,
            marginTop: 20,
          }}
        >
          Welcome Back
        </Text>
        <Text
          style={{
            fontFamily: "NunitoRegular",
            fontSize: 30,
            color: Colors.GRAY,
            marginTop: 20,
          }}
        >
          You've been missed.
        </Text>

        <View style={{ marginTop: 30 }}>
          <Text style={{ fontFamily: "NunitoSemiBold" }}>Email</Text>
          <TextInput
            onChangeText={(val) => setEmail(val)}
            style={styles.input}
            placeholder="Enter Email Adress"
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <Text style={{ fontFamily: "NunitoSemiBold" }}>Password</Text>
          <TextInput
            secureTextEntry
            onChangeText={(val) => setPassword(val)}
            style={styles.input}
            placeholder="Enter Password"
          />
        </View>

        <TouchableOpacity
          onPress={onSignIn}
          style={{
            padding: 20,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 15,
            marginTop: 50,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "NunitoBold",
              color: Colors.WHITE,
              textAlign: "center",
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.replace("/(auth)/sign-up")}
          style={{
            padding: 20,
            borderRadius: 15,
            marginTop: 30,
            borderWidth: 1,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontFamily: "NunitoBold",
              color: Colors.PRIMARY,
              textAlign: "center",
            }}
          >
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
    fontFamily: "NunitoSemiBold",
    marginTop: 5,
  },
});
