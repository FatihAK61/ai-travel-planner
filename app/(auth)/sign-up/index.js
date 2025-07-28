import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Colors } from "../../../constants/Colors";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/FirebaseConfig";

import Ionicons from "@expo/vector-icons/Ionicons";

const index = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");

  const onCreateAccount = () => {
    if (!email && !password && !fullName) {
      Alert.alert("Login", "Please enter all details.");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        router.replace("/myTrip");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView>
      <View style={{ padding: 25 }}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <Text
          style={{ fontFamily: "NunitoExtraBold", fontSize: 30, marginTop: 15 }}
        >
          Create New Account
        </Text>

        <View style={{ marginTop: 30 }}>
          <Text style={{ fontFamily: "NunitoSemiBold" }}>Full Name</Text>
          <TextInput
            onChangeText={(val) => setFullName(val)}
            style={styles.input}
            placeholder="Enter Full Name"
          />
        </View>

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
          onPress={onCreateAccount}
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
            Create Account
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.replace("/(auth)/sign-in")}
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
            Sign In
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
