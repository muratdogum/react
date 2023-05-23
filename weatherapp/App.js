import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/City';
import Weathers from './components/Weathers';

import { Platform, StatusBar } from 'react-native';

const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <StatusBar translucent={true} backgroundColor={'#8A2BE2'} />

        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Weathers" component={Weathers} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
