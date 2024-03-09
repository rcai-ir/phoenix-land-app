import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import Splash from './src/splash'
import { useState } from 'react';
import HomePage from './src/home-page';

export default function App() {
  const [isLoading, setIsloading] = useState<boolean>(true);

  return isLoading ? <Splash /> : <HomePage/>
=======

export default function App() {
  return (
    <View style={styles.container}>
      <Text>phoenix app!</Text>
      <StatusBar style="auto" />
    </View>
  );
>>>>>>> 02a05ec1127741223c1c9b3bbc0b5a25d1a0b95a
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
