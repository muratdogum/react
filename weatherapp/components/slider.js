import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Caption } from 'react-native-paper';

const HourlyWeather = ({ hourlyData }) => {


      console.log(hourlyData);
    
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {hourlyData.map((item, index) => (
         
          <Card key={index} style={styles.card}>
            <Card.Cover source={item.image} style={styles.image} />
            <Card.Content style={styles.cardContent}>
              <Title style={styles.time}>{item.time}</Title>
              <Caption style={styles.temperature}>{item.temperature}°C</Caption>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 200,
  },
  card: {
    marginHorizontal: 8,
    width: 100,
    elevation: 4,
  },
  cardContent: {
    alignItems: 'center',
    paddingBottom: 8,
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  temperature: {
    fontSize: 14,
    marginTop: 4,
  },
  image: {
    height: 100,
  },
});

export default HourlyWeather;
