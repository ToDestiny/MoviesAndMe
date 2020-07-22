// Navigation/Navigation.js

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../Components/Search';
import FilmDetail from '../Components/FilmDetail';

function HomeScreen() {
  return (
    <Search/>
  );
}

function FilmDetailView() {
  return (
    <FilmDetail/>
  );
}

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Rechercher" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;