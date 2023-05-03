import React from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from '../components/AppStayle';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

const ChatRoomsScreen = ({navigation}) => {
  const chatRooms = [
    { id: '1', name: 'Room 1', lastMessage: 'Hello', lastMessageDate: '2022-03-29', image: require('../assets/mcd.jpg') },
    { id: '2', name: 'Room 2', lastMessage: 'How are you?', lastMessageDate: '2022-03-27', image:require('../assets/mcd.jpg') },
    { id: '3', name: 'Room 3', lastMessage: 'Good morning!', lastMessageDate: '2022-03-26', image: require('../assets/mcd.jpg') },
    { id: '4', name: 'Room 4', lastMessage: 'Hi there', lastMessageDate: '2022-03-25', image:require('../assets/mcd.jpg') },
    { id: '5', name: 'Room 5', lastMessage: 'Bye', lastMessageDate: '2022-03-24', image: require('../assets/mcd.jpg') },
  ];

  const renderChatRoom = ({ item }) => (
    
    <TouchableOpacity style={styles.chatRoomContainer} onPress={() => navigation.navigate('ChatScreen')}>
      <Image source={item.image} style={styles.chatRoomImage} />
      <View style={styles.chatRoomTextContainer}>
        <Text style={styles.chatRoomName}>{item.name}</Text>
        <Text style={styles.chatRoomLastMessage}>{item.lastMessage}</Text>
      </View>
      <Text style={styles.chatRoomLastMessageDate}>{item.lastMessageDate}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container6}>
     <View style={styles.containerChat}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.menuButton}  onPress={() =>  navigation.goBack()}>
          <AntDesign name="back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Ara"
            placeholderTextColor="#888"
          />
        </View>
        <TouchableOpacity style={styles.iconButton}  onPress={() => navigation.navigate('NotificationList')}>
          <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
        
      
      
      </View>
    
      <FlatList
        data={chatRooms}
        renderItem={renderChatRoom}
        keyExtractor={item => item.id}
      />
    </View>
    </View>
  );
};



export default ChatRoomsScreen;
