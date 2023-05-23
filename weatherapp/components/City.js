import React, { useState } from 'react';
import { AntDesign,MaterialCommunityIcons  } from '@expo/vector-icons';

import {
  TextInput,
  Card,
  Button,
  Avatar,
  IconButton,
  TouchableOpacity,

} from 'react-native-paper';
import { View, Text, StyleSheet, Image,Platform, StatusBar ,ScrollView} from 'react-native';

import { FlatList } from 'react-native';
import cities from '../iller.json';

const MyComponent = ({ navigation }) => {
  const cityArray = Object.entries(cities).map(([id, name]) => ({ id, name }));

  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState(cityArray);

  function filterByName(cityArray, name) {
    var citys = cityArray.filter((city) =>
      city.name.toLowerCase().includes(name.toLowerCase())
    );
    setSearchResults(citys);
  }

  return (
        <View style={styles.container}>

    <Card >
      <TextInput
        label="Şehir Adı"
        value={searchText}
        onChangeText={(text) => {setSearchText(text) ,filterByName(cityArray, text)}}
      />
       
       </Card>
       <ScrollView>
      {searchResults &&
        searchResults.map((item, index) => (
          <Card key={index} onPress={() => navigation.navigate('Weathers',{name:item.name})}>
            <Card.Title
              title={item.name}
              left={(props) => <Avatar.Icon {...props} icon="map-marker" />}
              right={(props) => (
                <MaterialCommunityIcons name="weather-cloudy" size={24} color="black" />
                
              )}
            />
          </Card>
        ))}
         </ScrollView>
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   marginTop:StatusBar.currentHeight
  }
});
export default MyComponent;
