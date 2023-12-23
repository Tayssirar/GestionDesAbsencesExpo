import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../view/home'; // Import your HomeScreen component
import Enseignant from '../view/enseignant'; // Import your Enseignant component
import Etudiant from '../view/etudiant'; // Import your Etudiant component
import Groupe from '../view/groupe'; // Import your Groupe component

const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Enseignant" component={Enseignant} />
      <Tab.Screen name="Etudiant" component={Etudiant} />
      <Tab.Screen name="Groupe" component={Groupe} />
    </Tab.Navigator>
  );
}
