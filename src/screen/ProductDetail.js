import { View, TextInput, TouchableOpacity, FlatList } from "react-native";
import React, {
  useCallback,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import { useRoute } from "@react-navigation/native";
import moment from "moment";
import CardProduct from "../components/CardProduct";
import { Ionicons } from "@expo/vector-icons";
import { commentModal } from "../modal/commentModal";
import CommentBox from "../components/CommentBox";
import { COLOR } from "../until/color";
import { showToast } from "../help/toolkit";
import DialogCus from "../components/DialogCus";
import { AuthContext } from "../navigation/ReactContext";
import Loading from "../components/Loading";
const ProductDetail = () => {
  const route = useRoute();
  const { visible } = useContext(AuthContext);
  const { product } = route.params;
  const idProduct = product.id;
  const [message, setMessage] = useState("");
  const [listComment, setListComment] = useState([]);
  const [loading, setLoading] = useState(true);
  const listCommentSort = useCallback(
    listComment.sort((a, b) => {
      return a.createAt - b.createAt;
    }),
    [listComment]
  );
  // console.log(listCommentSort, "123", listComment);
  const handleAddComment = () => {
    if (message == "") {
      showToast("danger", "Message cannot be empty");
      return;
    }
    commentModal.addComment(message, idProduct);
    setMessage("");
  };
  useLayoutEffect(() => {
    commentModal.readComment(setListComment, idProduct, setLoading);
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <View style={{ padding: 10, flex: 1 }}>
      <DialogCus visible={visible} />
      <CardProduct product={product} />
      <View
        style={{
          position: "relative",
          flex: 1,
        }}
      >
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 20,
            paddingBottom: 60,
            overflow: "hidden",
            flex: 1,
          }}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={listCommentSort}
            renderItem={({ item }) => <CommentBox message={item} />}
          />
        </View>

        <View
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <TextInput
            value={message}
            onChangeText={(value) => setMessage(value)}
            style={{
              width: "85%",
              height: 40,
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              backgroundColor: "white",
            }}
          />
          <TouchableOpacity onPress={() => handleAddComment()}>
            <Ionicons name="send" size={24} color={COLOR.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;
