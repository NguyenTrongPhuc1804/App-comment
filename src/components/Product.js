import { View, Text } from "react-native";
import React from "react";
import moment from "moment/moment";

const Product = ({ product }) => {
  return (
    <View style={{ width: "100%" }}>
      <View
        style={{
          backgroundColor: "#ffffff",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          padding: 10,
          marginBottom: 20,
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
          {product?.product}
        </Text>
        <View>
          <Text style={{ fontSize: 18 }}>
            Price : {product.product_price} $
          </Text>
          <Text style={{ fontSize: 18 }}>
            Date : {moment(product.created_at).format("DD/MM/YYYY , h:mm a")}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Product;
