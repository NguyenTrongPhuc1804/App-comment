import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductScreen from "../screen/ProductScreen";
import ProductDetail from "../screen/ProductDetail";

const Stack = createStackNavigator();
const MyTab = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Product">
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen
          name="Product-detail"
          component={ProductDetail}
          options={({ route }) => ({
            title: route.params.product.product,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyTab;
