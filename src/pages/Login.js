import React, { useState } from 'react';

import { KeyboardAvoidingView, Platform, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import api from '../services/api';

import logo from '../assets/logo.png';

export default function Login({ navigation }) {
  const [user, setUser] = useState('');

  async function handleLogin() {
    const response = await api.post('/devs', { username: user });

    const { _id } = response.data;

    console.log(_id); 

    navigation.navigate('Main', { _id }); 
  }

  return (
    <KeyboardAvoidingView
    behavior="padding"
    enabled={Platform.OS === 'ios'}
    style={styles.container}
    >
      <Image source={logo} />

      <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      placeholder="Digite seu usuário no Github"
      placeholderTextColor="#999"
      style={styles.input}
      value={user}
      onChangeText={setUser}
      />

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text styles={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },

  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,
  },

  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#DF4723',
    borderRadius: 4,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});