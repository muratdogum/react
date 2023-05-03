
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/home';
import ChatRoom from './components/ChatRoom';
import ChatScreen from './components/ChatScreen';


import { Platform, StatusBar } from 'react-native';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <StatusBar translucent={true} backgroundColor={'#8A2BE2'}   />  
      <Stack.Navigator initialRouteName="ChatRoom"  screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ChatRoom" component={ChatRoom} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
