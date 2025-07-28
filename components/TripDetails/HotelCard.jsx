import { View, Text, Image } from "react-native";
import { Colors } from "../../constants/Colors";
import { GetPhotoRef } from "../../services/GooglePlaceApi";
import { useEffect, useState } from "react";

export default function HotelCard({ item }) {
  const [photoRef, setPhotoRef] = useState();
  const GetGooglePhotoRef = async () => {
    const res = await GetPhotoRef(item.hotelName);
    setPhotoRef(res?.results[0]?.photos[0]?.photo_reference);
  };

  useEffect(() => {
    GetGooglePhotoRef();
  }, []);
  return (
    <View
      style={{
        marginRight: 10,
        width: 180,
        borderWidth: 0.9,
        borderRadius: 20,
        borderColor: Colors.lightGray,
      }}
    >
      <Image
        source={{
          uri:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
            photoRef +
            "&key=" +
            process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        }}
        style={{
          width: 180,
          height: 130,
          borderRadius: 20,
        }}
      />
      <View style={{ padding: 5 }}>
        <Text
          style={{
            fontFamily: "NunitoRegular",
            fontSize: 12,
            textAlign: "center",
          }}
        >
          {item.hotelName}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "NunitoRegular",
            }}
          >
            ⭐️ {item.rating}
          </Text>

          <Text
            style={{
              fontFamily: "NunitoRegular",
            }}
          >
            💰 {item.pricePerNight}
          </Text>
        </View>
      </View>
    </View>
  );
}
