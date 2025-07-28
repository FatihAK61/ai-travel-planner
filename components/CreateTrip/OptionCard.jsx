import { View, Text } from "react-native";
import { Colors } from "../../constants/Colors";

export default function OptionCard({ option, selectedOption }) {
  return (
    <View
      style={[
        {
          padding: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: Colors.lightGray,
          borderRadius: 15,
        },
        selectedOption?.id == option?.id && { borderWidth: 0.8 },
      ]}
    >
      <View>
        <Text style={{ fontSize: 20, fontFamily: "NunitoBlack" }}>
          {option.title}
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontFamily: "Nunito",
            fontSize: 13,
            color: Colors.GRAY,
          }}
        >
          {option.desc}
        </Text>
      </View>
      <View style={{ alignSelf: "center" }}>
        <Text style={{ fontSize: 35 }}>{option.icon}</Text>
      </View>
    </View>
  );
}
