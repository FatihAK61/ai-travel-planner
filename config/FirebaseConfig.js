import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEIzJozzP7YrOKmN_dy6m5ODlyAM670Kc",
  authDomain: "my-travel-app-f79b9.firebaseapp.com",
  projectId: "my-travel-app-f79b9",
  storageBucket: "my-travel-app-f79b9.firebasestorage.app",
  messagingSenderId: "695783264536",
  appId: "1:695783264536:web:1a056a035058048199ce6d",
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const firestore = getFirestore(app);
