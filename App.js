import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Image,
  Alert,
  View,
  SafeAreaView, //only for apple ios
  Button,
  Platform,
  Dimensions,
} from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  // console.log(require("./assets/icon.png"));

  console.log("Uygulama Çalıştırıldı.");

  // const handlePress = () => console.log("Tıklandı!");

  console.log(Dimensions.get("screen"));

  return <ViewImageScreen />;
}
// (<WelcomeScreen />),

// <View style={styles.container}>
//   <Text numberOfLines={1} onPress={handlePress}>
//     yenilendi. Merhaba. Ben Enes Turan bu uygulama ile birlikte gündelik
//     işlerinizi kolaylıkla yürütebilirsiniz.
//   </Text>

//   <Button
//     color="red"
//     title="bana tıkla"
//     onPress={() =>
//       Alert.prompt("Başlık", "Mesajım", (text) => console.log("text"))
//     }
//   />
// </View>
//}

// const styles = StyleSheet.create({
//   container: {
//     flex: 0.5,
//     backgroundColor: "dodgerblue",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

///alignItems: 'center',
/// justifyContent: 'center',

//  Alert.alert("selam",
// "merhaba",

//  [
//    { text: "Yes", onPress: () => console.log("Yes") },
//    { text: "No", onPress: () => console.log("No") },
//  ]
//  )
