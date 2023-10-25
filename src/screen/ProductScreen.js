import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/Loading";

const ProductScreen = () => {
  const navigate = useNavigation();
  const [listProduct, setListProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const GetProduct = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://64c9c51cb2980cec85c26650.mockapi.io/products"
      );
      setListProduct(data);
      setLoading(false);
    } catch (e) {
      console.log(e.message);
      setLoading(false);
    }
  };

  const goProducDetail = (item) => {
    navigate.navigate("Product-detail", {
      product: item,
    });
  };
  useEffect(() => {
    GetProduct();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <View style={{ paddingVertical: 20 }}>
      <Text
        style={{
          textAlign: "center",
          marginBottom: 8,
          fontSize: 16,
          color: "red",
        }}
      >
        Ps: Tap on the product you want to see details
      </Text>
      <FlatList
        style={{ pad: 20 }}
        data={listProduct}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ paddingHorizontal: 20 }}
            onPress={() => goProducDetail(item)}
          >
            <Product product={item} />
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductScreen;
