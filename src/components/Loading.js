import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { COLOR } from "../until/color";

const Loading = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size="large" color={COLOR.primary} />
    </View>
  );
};

export default Loading;
