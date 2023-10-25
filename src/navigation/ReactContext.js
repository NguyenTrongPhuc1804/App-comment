import { View, Text } from "react-native";
import React, { Children, createContext, useState } from "react";
import { commentModal } from "../modal/commentModal";
import { showToast } from "../help/toolkit";
export const AuthContext = createContext({});
const ReactContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [action, setAction] = useState(false);
  const [idComment, setIdComment] = useState(0);
  const [listCommentChid, setListCommentChid] = useState([]);
  const [commentChild, setCommentChild] = useState([]);
  const [child, setChild] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <AuthContext.Provider
      value={{
        loading,
        visible,
        action,
        message,
        setChild,
        setVisible,
        handleAddCommentChild: (value) => {
          const newListComment = [
            ...listCommentChid,
            { id: Date.now(), message: value },
          ];
          commentModal.replyComment(idComment, newListComment);
          showToast("success", "Reply comment successfully");
        },
        handleEditComment: (value) => {
          if (child) {
            let newListComment = [...listCommentChid];
            let index = listCommentChid?.findIndex(
              (item) => item.id === commentChild.id
            );
            if (index !== -1) {
              newListComment[index].message = value;
              commentModal.replyComment(idComment, newListComment);
            }
          } else {
            commentModal.editComment(idComment, value);
          }
          showToast("success", "Edit comment successfully ");
          setMessage("");
        },
        handleDeleteComment: (value) => {
          if (!child) {
            commentModal.deleteComment(idComment);
            showToast("success", "Delete Comment successfully");
          } else {
            let newListComment = [...listCommentChid];
            newListComment = newListComment.filter(
              (comment) => comment.id !== commentChild.id
            );
            commentModal.replyComment(idComment, newListComment);
            showToast("success", "Delete Comment successfully");
          }
        },
        showDialog: (
          value,
          idComment,
          listCommentChid,
          commentChild,
          isChild,
          message
        ) => {
          setAction(value);
          setVisible(true);
          setIdComment(idComment);
          setListCommentChid(listCommentChid);
          setCommentChild(commentChild);
          setChild(isChild);
          setMessage(message);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default ReactContext;
