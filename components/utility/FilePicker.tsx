// FilePicker.tsx

import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

const FilePicker = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileType, setFileType] = useState<string | null>(null);

  const handleFilePick = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: '*/*', // You can specify the type of files you want to allow
      copyToCacheDirectory: false, // Set to true if you want to keep the file in cache
    });

    const data = result.assets !== null ? result.assets[0] : null;
    if (data !== null) {
      if (data.mimeType !== undefined && data.mimeType === 'text/csv'){
        setFile(file);
        setFileName(data.name);
        setFileType(data.mimeType !== undefined ? data.mimeType : null);
        console.log(data); 
      }
      else{
        Alert.alert("Wrong file type", "The import file must be a csv file !");
      }
    } else {
      setFileName(null);
      setFileType('');
    }
  };

  return (
    <View className='w-full h-fit p-3'>
      <Button title="Pick a file" onPress={handleFilePick} />
      {fileName && (
        <View style={styles.fileInfo}>
          <Text style={styles.fileText}>File Name: {fileName}</Text>
          <Text style={styles.fileText}>File Type: {fileType}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  fileInfo: {
    marginTop: 20,
    alignItems: 'center',
  },
  fileText: {
    fontSize: 16,
    marginVertical: 4,
  },
});

export default FilePicker;
