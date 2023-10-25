import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Dialog from "react-native-dialog";
import { AuthContext } from "../navigation/ReactContext";
import { showToast } from "../help/toolkit";
const DialogCus = () => {
  const {
    handleAddCommentChild,
    handleEditComment,
    handleDeleteComment,
    setVisible,
    visible,
    action,
    listCommentChid,
    idComment,
    commentChild,
    message,
  } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [actionComment, setActionComment] = useState("");

  const handleCancel = () => {
    setVisible(false);
  };

  const handleSave = (value) => {
    if (action !== "delete" && value.trim() === "") {
      showToast("danger", "Cannot be empty input");
      return;
    }
    setVisible(false);
    switch (action) {
      case "reply": {
        handleAddCommentChild(value, listCommentChid, idComment);
        break;
      }
      case "edit": {
        handleEditComment(value, listCommentChid, idComment, commentChild);
        break;
      }
      case "delete": {
        handleDeleteComment(value, listCommentChid, idComment, commentChild);
        break;
      }
    }
  };

  useEffect(() => {
    switch (action) {
      case "reply":
        setTitle("Reply comment");
        setActionComment("");

        break;
      case "edit":
        setTitle("Edit comment");
        setActionComment(message);
        break;
      case "delete":
        setTitle("Are you sure?");
        break;
      default:
        break;
    }
  }, [action, message]);

  return (
    <View style={styles.container}>
      <Dialog.Container visible={visible}>
        <Dialog.Description
          style={{
            color: "black",
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {title}
        </Dialog.Description>
        {action == "delete" ? (
          <Dialog.Description>
            Do you want to delete this comment?
          </Dialog.Description>
        ) : (
          <TextInput
            value={actionComment}
            onChangeText={(value) => setActionComment(value)}
            style={{
              width: "100%",
              height: 40,
              borderWidth: 1,
              padding: 10,
            }}
          />
        )}
        <Dialog.Button label="Cancel" onPress={() => handleCancel()} />
        <Dialog.Button
          label={action == "delete" ? "delete" : "save"}
          onPress={() => {
            setActionComment("");
            handleSave(actionComment);
          }}
        />
      </Dialog.Container>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
export default DialogCus;
