import { Tabs } from "expo-router";
import { Colors } from "../../constants/Colors";

import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarStyle: { backgroundColor: "#e8e2e2" },
      }}
    >
      <Tabs.Screen
        options={{
          tabBarLabel: "My Trip",
          tabBarIcon: ({ color }) => (
            <Ionicons name="location-sharp" size={24} color={color} />
          ),
        }}
        name="myTrip"
      />
      <Tabs.Screen
        options={{
          tabBarLabel: "Discover",
          tabBarIcon: ({ color }) => (
            <Ionicons name="globe-sharp" size={24} color={color} />
          ),
        }}
        name="discover"
      />
      <Tabs.Screen
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="people-circle" size={24} color={color} />
          ),
        }}
        name="profile"
      />
    </Tabs>
  );
}
