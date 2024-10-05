import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  GestureResponderEvent,
} from "react-native";

import React, { useState } from "react";
import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useRouter } from 'expo-router'; 

export default function TabTwoScreen() {
  const insets = useSafeAreaInsets();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPayrollBtnVisible, setPayrollBtnVisible] = useState<boolean>(false);

  const onInputChange = (setter: any) => (text: any) => {
    setter(text); // Update the specific state variable
  };

  const handleSubmit = () => {
    // Basic validation
    if (!username || !password) {
      Alert.alert("Validation Error", "Please fill out all fields");
      return;
    }
    if (username == "TEST" && password == "TEST") {
      Alert.alert("Login successfully");
      setPayrollBtnVisible(true);
    } else {
      Alert.alert(
        "Validation Error",
        "Username or password is wrong, please try again"
      );
      return;
    }
  };

  const handleBack = (event: GestureResponderEvent) => {
    setPayrollBtnVisible(false);
  }

  const router = useRouter();

  const handleNavigate = () => {
    //_sitemap allow to see every route possible
    // router.navigate('/_sitemap');
    router.navigate('/import');
  };

  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      {!isPayrollBtnVisible && (
        <View className="mt-10 mx-6 bg-gray-50 p-6 rounded-xl flex flex-col">
          <Text className="text-center text-2xl mb-6 font-bold">Sign in</Text>
          <View className="flex flex-col gap-1 mb-4">
            <Text className="text-sm">Username</Text>
            <TextInput
              className="bg-white p-2 text-sm border-2 border-gray-100 rounded-lg"
              placeholder="Type here..."
              value={username}
              onChangeText={onInputChange(setUsername)}
            />
          </View>

          <View className="flex flex-col gap-1 mb-4">
            <Text className="text-sm">Password</Text>
            <TextInput
              className="bg-white p-2 text-sm border-2 border-gray-100 rounded-lg"
              placeholder="Type here..."
              secureTextEntry={true}
              value={password}
              onChangeText={onInputChange(setPassword)}
            />
          </View>
          <TouchableOpacity activeOpacity={0.9} onPress={handleSubmit}>
            <Text className="text-white font-bold mt-6 p-4 w-full h-fit bg-blue-500 self-center justify-center text-center align-middle rounded-lg">
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {isPayrollBtnVisible && (
        <View className="mt-10 mx-6 p-6 rounded-xl flex flex-col flex-1 pb-12">
          <View className="my-auto">
            <View className="mx-12">
              <TouchableOpacity activeOpacity={0.9} onPress={handleNavigate}>
                <Text className="text-white font-bold mt-6 p-4 w-full h-fit bg-slate-500 self-center justify-center text-center align-middle rounded-lg">
                  Upload Payroll
                </Text>
              </TouchableOpacity>
            </View>
            <View className="mx-12">
              <TouchableOpacity activeOpacity={0.9} onPress={handleBack}>
                <Text className="text-white font-bold mt-6 p-4 w-full h-fit bg-slate-500 self-center justify-center text-center align-middle rounded-lg">
                  BACK
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
