import React, {useState} from 'react';
import {StyleSheet, StatusBar, View, TextInput} from 'react-native';
import {Keyboard, SafeAreaView} from 'react-native';
import Toast from 'react-native-toast-message';
import base64 from 'react-native-base64';
import Header from 'Header';
import Button from 'Button';

export default function App() {
  const [input, setInput] = useState();
  const regex = /^[a-zA-Z0-9\+\/=]*$/;

  const encode = function() {
    Keyboard.dismiss();
    Toast.hide();

    if (!input) {
      showToast("Nothing to do");
      return;
    }

    const encoded = base64.encode(input);
    setInput(encoded);
  };

  const decode = function() {
    Keyboard.dismiss();
    Toast.hide();

    if (!input) {
      showToast("Nothing to do");
      return;
    }

    if (!regex.test(input)) {
      showToast("Invalid Base64");
      return;
    }

    try {
      const decoded = base64.decode(input);
      setInput(decoded);
    } catch (error) {
      console.log(error.message);
      showToast("Invalid Base64");
    }
  };

  const onInput = function(text) {
    Toast.hide();
    setInput(text);
  };

  const showToast = (text) => {
    Toast.show({
      type: 'error',
      text1: text,
      visibilityTime: 2000,
      position: 'bottom'
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <View style={styles.content}>
        <View style={styles.controls}>
          <Button title="Encode" onPress={encode} />
          <Button title="Decode" onPress={decode} />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.textInput}
            multiline={true}
            value={input}
            placeholder="type or paste text"
            onChangeText={onInput} />
        </View>

      </View>
      <Toast />
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  content: {
    backgroundColor: '#eee',
  },
  controls: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: "space-around"
  },
  input: {
    margin: 5,
  },
  textInput: {
    padding: 10,
    margin: 15,
    fontSize: 20,
    borderBottomColor: '#3F51B5',
    borderBottomWidth: 2,
  }
});
