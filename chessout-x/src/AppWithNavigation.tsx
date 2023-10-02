import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';
import DetailsScreen from './Details';

const MyStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MyStack.Navigator>
        <MyStack.Screen name="Home" component={Home} />
        <MyStack.Screen name="Details" component={DetailsScreen} />
      </MyStack.Navigator>
    </NavigationContainer>
  );
}
