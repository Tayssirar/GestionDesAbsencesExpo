import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity} from 'react-native';
import {styles} from "../styles/styles";
import axios from "axios"
import { useNavigation } from '@react-navigation/native';

export default function Identifier() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', {
        "email":email,
        "password":password,
      });
      // Handle success response
      console.log('Login successful:', response.data);
      navigation.navigate('Home');
      // You can handle navigation or other actions upon successful login
    } catch (error) {
      console.error('Login error:', error.message);
      // Handle login error, show message to the user, etc.
    }
  };


  return (

      <View style={styles.container}>
        <Text > Login</Text>
        <View style={styles.inputView}>
        <TextInput style={styles.TextInput} 
        placeholder="Email." onChangeText={(email) => setEmail(email)}/>
        </View>
        <Text > Password</Text>
        <View style={styles.inputView}>
        <TextInput style={styles.TextInput} placeholder="Password."  onChangeText={(password) => setPassword(password)}
        />
        </View>
      <TouchableOpacity onPress={handleLogin}> 
      <Text  style={styles.loginBtn} >LOGIN</Text> 
      </TouchableOpacity> 
      </View>

  )
}


