import QrCodeScanner from "@/components/QrCodeScanner";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Verifier() {
  const [qrData, setQrData] = useState<string | null>(null);
  const [proof, setProof] = useState<string>("");
  const [publicSignal, setPublicSignal] = useState<string>("");

  // Handle QR code data received from the scanner or image
  const handleQrCodeScanned = (data: string) => {
    try {
      const parsedData = JSON.parse(data); // Parse the QR code data as JSON
      setQrData(data);
      setProof(parsedData.proof || ""); // Set proof from parsed data
      setPublicSignal(parsedData.publicSignal || ""); // Set publicSignal from parsed data
      alert(`Scanned QR Code: ${data}`);
    } catch (error) {
      alert("Invalid QR code format");
    }
  };

  return (
    <View className="mt-10 mx-6 bg-gray-50 p-6 rounded-xl flex flex-col h-full">
      <View className="flex flex-col gap-1 mb-4">
        <Text className="text-sm">Proof</Text>
        <TextInput
          className="bg-white p-2 text-sm border-2 border-gray-100 rounded-lg"
          placeholder="Proof"
          editable={false}
          value={proof} // Bind to the proof state
        />
      </View>
      <View className="flex flex-col gap-1 mb-4">
        <Text className="text-sm">Public Signal</Text>
        <TextInput
          className="bg-white p-2 text-sm border-2 border-gray-100 rounded-lg"
          editable={false}
          placeholder="Public Signal"
          value={publicSignal} // Bind to the publicSignal state
        />
      </View>
      <QrCodeScanner onQrCodeScanned={handleQrCodeScanned} />

      {/* Display scanned data */}
      {qrData && <Text style={styles.text}>Scanned Data: {qrData}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginTop: 20,
    fontSize: 16,
    textAlign: "center",
  },
});
