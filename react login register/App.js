
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/home';
import LoginScreen from './components/login';
import RegisterScreen from './components/register';


import { Platform, StatusBar } from 'react-native';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <StatusBar translucent={true} backgroundColor={'#8A2BE2'}   />  
      <Stack.Navigator initialRouteName="Login"  screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
