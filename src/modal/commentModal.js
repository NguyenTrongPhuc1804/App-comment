import { db, firebase } from "../firebase/firebase";
import { showToast } from "../help/toolkit";

export const commentModal = {
  addComment: async (message, idProduct) => {
    await db
      .collection("list-comment")
      .add({
        message,
        idProduct,
        listCommentChid: [],
        createAt: new Date(),
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        showToast("success", "comment success");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  },
  readComment: async (setListComment, idProduct, setLoading) => {
    setLoading(true);
    try {
      const data = await db
        .collection("list-comment")
        .where("idProduct", "==", idProduct)
        .onSnapshot((snapshot) =>
          setListComment(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              idProduct: doc.data().idProduct,
              message: doc.data().message,
              listCommentChid: doc.data().listCommentChid,
              createAt: doc.data().createAt.toDate().getTime(),
            }))
          )
        );
      setLoading(false);

      return data;
    } catch (e) {
      console.log(e.message);
      setLoading(false);
    }
  },
  replyComment: async (idComment, text) => {
    db.collection("list-comment")
      .doc(idComment)
      .update({ listCommentChid: text })
      .then((data) => {});
  },
  editComment: async (idComment, text) => {
    db.collection("list-comment")
      .doc(idComment)
      .update({ message: text })
      .then((data) => {
        showToast("success", "edit comment success ");
      });
  },
  deleteComment: async (idComment) => {
    db.collection("list-comment").doc(idComment).delete();
  },
};
