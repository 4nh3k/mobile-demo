import { LoginModal } from "@/components/LoginModal";
import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  const [isPayrollBtnVisible, setPayrollBtnVisible] = useState<boolean>(false);

  const onLoginClose = () => {
    console.log("onLoginClose");
    setPayrollBtnVisible(true);
    console.log(isPayrollBtnVisible);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      {!isPayrollBtnVisible && <LoginModal onClose={onLoginClose} />}

      {isPayrollBtnVisible && (
        <View className="mt-10 mx-6 bg-gray-50 p-6 rounded-xl flex flex-col">
          <View className="flex flex-col gap-1 mb-4">
            <Text className="text-sm">Identifier</Text>
            <TextInput
              className="bg-white p-2 text-sm border-2 border-gray-100 rounded-lg"
              placeholder="Type here..."
            />
          </View>
          <View className="flex flex-col gap-1 mb-4">
            <Text className="text-sm">Salary (VND)</Text>
            <TextInput
              className="bg-white p-2 text-sm border-2 border-gray-100 rounded-lg"
              placeholder="Type here..."
            />
          </View>
          <View className="flex flex-col gap-1 mb-4">
            <Text className="text-sm">Lowerbound (VND)</Text>
            <TextInput
              className="bg-white p-2 text-sm border-2 border-gray-100 rounded-lg"
              placeholder="Type here..."
            />
          </View>
          <View className="flex flex-col gap-1 mb-4">
            <Text className="text-sm">Upperbound (VND)</Text>
            <TextInput
              className="bg-white p-2 text-sm border-2 border-gray-100 rounded-lg"
              placeholder="Type here..."
            />
          </View>
          <TouchableOpacity activeOpacity={0.9}>
            <Text className="text-white font-bold mt-6 p-4 w-full h-fit bg-blue-500 self-center justify-center text-center align-middle rounded-lg">
              Prove
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
