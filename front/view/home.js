import React from 'react';
import { View, Text } from 'react-native';
import NavBar from '../components/navBar'; // Import your NavBar component

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <NavBar />
      
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcome to Home Screen</Text>
      </View>
    </View>
  );
}
