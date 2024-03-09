import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './src/splash'
import { useState } from 'react';
import HomePage from './src/home-page';

export default function App() {
  const [isLoading, setIsloading] = useState<boolean>(true);

  return isLoading ? <Splash /> : <HomePage/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
