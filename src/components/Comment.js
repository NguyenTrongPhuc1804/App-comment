import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import DialogCus from "./DialogCus";
import { commentModal } from "../modal/commentModal";
import { AuthContext } from "../navigation/ReactContext";
import moment from "moment";

const Comment = ({
  message,
  idComment,
  listCommentChid,
  isChild,
  commentChild,
  createAt,
}) => {
  console.log(createAt);
  const { showDialog } = useContext(AuthContext);
  return (
    <>
      <View
        style={{
          padding: 10,
          backgroundColor: "#7752FE",
          borderRadius: 10,
          alignSelf: "flex-start",
          // marginBottom: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>{message}</Text>
        <Text style={{ color: "white", fontSize: 16 }}>
          {moment(createAt).format("HH:mm:ss")}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 6,
          paddingLeft: isChild ? 0 : 10,
          marginBottom: isChild ? 10 : 0,
        }}
      >
        {!isChild ? (
          <TouchableOpacity
            onPress={() =>
              showDialog(
                "reply",
                idComment,
                listCommentChid,
                commentChild,
                isChild,
                message
              )
            }
          >
            <Text style={{ color: "black" }}>reply</Text>
          </TouchableOpacity>
        ) : (
          <View />
        )}

        <TouchableOpacity
          onPress={() =>
            showDialog(
              "edit",
              idComment,
              listCommentChid,
              commentChild,
              isChild,
              message
            )
          }
        >
          <Text style={{ color: "black", marginHorizontal: 10 }}>edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            showDialog(
              "delete",
              idComment,
              listCommentChid,
              commentChild,
              isChild,
              message
            )
          }
        >
          <Text style={{ color: "black" }}>delete</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Comment;
