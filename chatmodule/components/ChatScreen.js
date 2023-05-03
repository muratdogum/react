import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import styles from '../components/AppStayle';
import * as ImagePicker from 'expo-image-picker';
//import ImagePicker from 'react-native-image-picker';
import { Entypo } from '@expo/vector-icons'; 

const ChatScreen = ({navigation}) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [image, setImage] = useState(null);

  const sendMessage = () => {
    const newMessage = {
      type: 1,
      text: message,
      date: new Date(),
      image: image,
    };
    setMessages([...messages, newMessage]);
    setMessage('');
    setImage(null);
  };
  const sendMessageLeft = () => {
    const newMessage = {
      type: 2,
      text: message,
      date: new Date(),
      image: image,
    };
    setMessages([...messages, newMessage]);
    setMessage('');
    setImage(null);
  };
  const handleImagePick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      setImage(result.uri);
      console.log(result.uri);
    }
  };

  return (
    <View style={styles.containerChat}>
      
       <View style={styles.header}>
    <TouchableOpacity style={styles.menuButton}  onPress={() =>  navigation.goBack()}>
          <AntDesign name="back" size={24} color="black" />
        </TouchableOpacity>
  <View style={styles.profileContainer}>
    <Image
      source={require('../assets/mcd.jpg')}
      style={styles.profileImage2}
    />
    <View>
      <Text style={styles.name}>Murat Dogum</Text>
      <Text style={styles.status}>Online</Text>
    </View>
  </View>
  <TouchableOpacity style={styles.iconButton2}>
    <AntDesign name="search1" size={24} color="black" />
  </TouchableOpacity>

      </View>
      <View style={styles.messagesContainer}>
        <ScrollView>
          {messages.map((msg, index) =>
            msg.type == 1 ? (
              <View key={index} style={styles.messageRigt}>
                {msg.image && (
                  <Image
                    source={{ uri: msg.image }}
                    style={styles.messageImage}
                    resizeMode="cover"
                  />
                )}
                <Text style={styles.messageText}>{msg.text}</Text>
                <Text style={styles.messageDateRigt}>
                  {msg.date.toLocaleDateString()}{' '}
                  {msg.date.toLocaleTimeString()}
                </Text>
              </View>
            ) : (
              <View key={index} style={styles.messageLeft}>
                {msg.image && (
                  <Image
                    source={{ uri: msg.image }}
                    style={styles.messageImage}
                    resizeMode="cover"
                  />
                )}
                <Text style={styles.messageText}>{msg.text}</Text>
                <Text style={styles.messageDate}>
                  {msg.date.toLocaleDateString()}{' '}
                  {msg.date.toLocaleTimeString()}
                </Text>
              </View>
            )
          )}
        </ScrollView>
      </View>
      <View style={styles.inputContainerChat}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type your message here"
        />
        <TouchableOpacity onPress={handleImagePick}>
          <Text style={styles.sendButton}>
            <Entypo name="folder-images" size={24} color="#fff" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={sendMessage}>
          <Text style={styles.sendButton}>
            <FontAwesome name="send" size={24} color="#fff" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={sendMessageLeft}>
          <Text style={styles.sendButton}>
            <FontAwesome name="send" size={24} color="#fff" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;
