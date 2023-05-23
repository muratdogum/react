import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image,Platform, StatusBar } from 'react-native';
import { Card, Appbar } from 'react-native-paper';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
import HourlyWeather from './slider';
const API_KEY = 'cc0bf3ae093748dc9a9195336232005';

const WeatherCard = ({ navigation }) => {
  const [weatherData, setWeatherData] = useState(null);
  const CITY = 'CITY_NAME';

  const route = useRoute();
  const { name } = route.params;
  const getWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${name}&lang=tr`
      );

      const data = response.data;
      setWeatherData(data);
      //console.log(data.current.condition.icon);
    } catch (error) {
      //console.error('Hata:', error.message);
    }
  };
  const [hourlyData, setHourlyData] = useState([]);
function getHourFromDateTime(dateTimeString) {
  const date = new Date(dateTimeString);
  const hour = date.getHours();
  const minute = date.getMinutes();

  const timeString = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
  return timeString;
}
  useEffect(() => {
    fetchWeatherData();
    getWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      // Hava durumu API'sinden verileri al
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${name}&lang=tr`
      );
      const data = response.data;
      //
      // Saatlik hava durumu verilerini al
      const hourlyData = data.forecast.forecastday[0].hour.map((hour) => ({
        time:hour.time.split(" ")[1],
        temperature: hour.temp_c,
        image: { uri:"https:"+ hour.condition.icon },
      }));
      console.log(data.forecast.forecastday[0].hour);
      // Saatlik verileri ayarla
      setHourlyData(hourlyData);
    } catch (error) {
      // console.error('Hava durumu verileri alınamadı:', error);
    }
  };
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
    
      {weatherData && (
        <Card style={styles.card}>
          
          <Card.Content>
            <Image
              source={{ uri:"https:"+weatherData.current.condition.icon }}
              style={styles.image}
            />
            <Text style={styles.title}>{weatherData.location.name}</Text>
            <Text style={styles.subtitle}>
              {weatherData.current.condition.text}
            </Text>
            <Text style={styles.temperature}>
              {weatherData.current.temp_c}°C
            </Text>
          </Card.Content>
          <View>
            <Text>Saatlik Hava Durumu</Text>
            <HourlyWeather hourlyData={hourlyData} />
          </View>
        </Card>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '95%',
    padding: 20,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  temperature: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 16,
    borderRadius: 8,
  },
});

export default WeatherCard;
