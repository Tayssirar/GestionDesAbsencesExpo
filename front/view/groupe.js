import React from 'react';
import { View, Text } from 'react-native';
import NavBar from '../components/navBar'; // Import your NavBar component

export default function Groupe() {
  return (
    <View style={{ flex: 1 }}>
      <NavBar />
      
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Groupe</Text>
      </View>
    </View>
  );
}
