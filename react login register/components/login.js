import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ToastAndroid
} from 'react-native';

import axios from 'axios';
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios
      .post(`uri`, {
        email: username,
        password: password,
      }) // link parametresi
      .then((res) => {
        var json = res.data;
        console.log(json);
        if (json.code == 200) {
             ToastAndroid.show(json.message, ToastAndroid.LONG);
             navigation.navigate('Home');
        } else if (json.code == 403) {
             ToastAndroid.show(json.message, ToastAndroid.SHORT);
        } else {
             ToastAndroid.show(json.message, ToastAndroid.SHORT);

        }
      });

    navigation.navigate('Home')
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/mcd.jpg')} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#9C9C9C"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#9C9C9C"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginBottom: 30,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 50,
    borderRadius: 25,
    paddingLeft: 20,
    fontSize: 16,
    backgroundColor: '#F3F3F3',
    marginVertical: 10,
  },
  loginButton: {
    width: 300,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#8A2BE2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signupText: {
    color: '#9C9C9C',
    fontSize: 16,
  },
  signupButton: {
    marginLeft: 5,
  },
  signupButtonText: {
    color: '#8A2BE2',
    fontSize: 16,
  },
});

export default LoginScreen;
