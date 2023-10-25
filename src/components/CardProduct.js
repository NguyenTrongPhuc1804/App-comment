import { View, Text } from "react-native";
import React from "react";
import moment from "moment";

const CardProduct = ({ product }) => {
  return (
    <View
      style={{
        height: "auto",
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
        borderRadius: 10,
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
        {product.product}
      </Text>
      <View style={{ marginBottom: 10, flexDirection: "row" }}>
        <Text style={{ fontSize: 18 }}>
          Description : {product.product_description}
        </Text>
      </View>
      <View>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>
          Price : {product.product_price} $
        </Text>
        <Text style={{ fontSize: 18 }}>
          Create at : {moment(product.created_at).format("DD/MM/YYYY , h:mm a")}
        </Text>
      </View>
    </View>
  );
};

export default CardProduct;
