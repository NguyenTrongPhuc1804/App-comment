import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import FlashMessage from "react-native-flash-message";
import "react-native-gesture-handler";
import MyNavigation from "./src/navigation";
import MyTab from "./src/navigation/MyTab";
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <MyNavigation />
      <FlashMessage position="top" />
    </SafeAreaView>
  );
}
