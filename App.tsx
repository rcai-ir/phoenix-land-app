import Splash from './src/splash'
import { useState, useEffect } from 'react';
import Navigations from '@/components/navigatin/navigation';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux';
import { store } from '@/state-management/store';


const LoadFont = async () => {
  await Font.loadAsync({
    iranSans: require('./assets/fonts/IRANSansXFaNum-Regular.ttf'),
  });
};


export default function App() {
  const [isLoading, setIsloading] = useState<boolean>(true);
  const [loadedData, setLoadedData] = useState(false);


  useEffect(() => {
    const fetchData = async ()=> {
      await LoadFont()
      .then(() => {
        setLoadedData(true);
        SplashScreen.hideAsync();
      })
      .catch(console.warn);
    }
    fetchData();
  }, []);
  
  if (!loadedData) {
    return null;
  }

  return isLoading 
  ? <Splash setIsLoading={setIsloading}/> 
  : <Provider store={store}>
      <Navigations/>
  </Provider>
}


