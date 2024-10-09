// FilePicker.tsx

import React, { useState } from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  Alert,
  Pressable,
  GestureResponderEvent,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import SalaryAPI from "@/services/SalaryAPI";

// Enable logging: npx react-native log-android 

// Assuming 'results' contains the URI of the file you want to read

const FilePicker = () => {
  const [uri, setUri] = useState<string | undefined>(undefined);
  const [fileName, setFileName] = useState<string | undefined>(undefined);
  const [fileType, setFileType] = useState<string | undefined>(undefined);

  const handleFilePick = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: "*/*", // You can specify the type of files you want to allow
      copyToCacheDirectory: false, // Set to true if you want to keep the file in cache
    });

    const data = result.assets !== null ? result.assets[0] : null;
    if (data !== null) {
      console.log(data);
      if (
        data.mimeType !== undefined &&
        data.mimeType === "text/comma-separated-values"
      ) {
        setUri(data.uri);
        setFileName(data.name);
        setFileType(data.mimeType);
      } else {
        Alert.alert("Wrong file type", "The import file must be a csv file !");
      }
    } else {
      setFileName(undefined);
      setFileType("");
    }
  };

  const showSuccessAlert = () => {
    Alert.alert(
      "Success", // Title
      "Your file was uploaded successfully!", // Message
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }, // Button
      ]
    );
  };

  const handleSendFile = async (event: GestureResponderEvent) => {
    try {
      // Send the file using fetch (or you can use axios)
      const response = await SalaryAPI.uploadFile({
        uri: uri,
        name: fileName,
        type: fileType,
      });

      const data = response.data;
      if (data.error) {
        console.log("Error processing file in server:", data.message);
      } else {
        console.log("File uploaded successfully:", data.message);
        showSuccessAlert();
      }
    } catch (error) {
      console.error("Error uploading file during request:", error);
    }
  };

  return (
    <View className="w-64 h-fit pt-3 rounded-sm">
      <Button title="Pick a file" onPress={handleFilePick} />
      {fileName && (
        <View style={styles.fileInfo}>
          <Text style={styles.fileText}>File Name: {fileName}</Text>
          <Text style={styles.fileText}>File Type: {fileType}</Text>
        </View>
      )}
      <Pressable
        className="w-64 py-0 pt-3 "
        onPress={handleSendFile}
        style={{ opacity: 0.9 }}
      >
        <Text className="text-white font-bold mt-6 w-full py-3 h-fit bg-[#2894f4] self-center justify-center text-center align-middle rounded-lg">
          UPLOAD
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  fileInfo: {
    marginTop: 20,
    alignItems: "center",
  },
  fileText: {
    fontSize: 16,
    marginVertical: 4,
  },
});

export default FilePicker;
