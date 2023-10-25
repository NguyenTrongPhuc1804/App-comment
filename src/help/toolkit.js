import { showMessage } from "react-native-flash-message";
export const showToast = (type, message) => {
  showMessage({
    message,
    type,
  });
};
