import { View, Text } from "react-native";
import React from "react";
import ReactContext from "./ReactContext";
import MyTab from "./MyTab";

const MyNavigation = () => {
  return (
    <ReactContext>
      <MyTab />
    </ReactContext>
  );
};

export default MyNavigation;
