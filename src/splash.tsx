<<<<<<< HEAD
import React from 'react';
=======
import React, { Dispatch, SetStateAction } from 'react';
>>>>>>> b250076a476487b39b736554ae7b95bcbf660f21
import LottieView from 'lottie-react-native';

interface SplashProps {
  setIsLoading?: any;
}

<<<<<<< HEAD
export default function Splash(props:SplashProps) {
  const { setIsLoading } = props;
  return (
    <LottieView
      source={require('../assets/splash.json')}
      style={{ width: '100%', height: '100%' }}
      autoPlay
      loop={false}
      resizeMode="contain"
      onAnimationFinish={() => setIsLoading && setIsLoading(false)}
    />
  );
=======
export default function Splash(props: SplashProps) {
    const { setIsLoading } = props;
    return (
        <LottieView
            source={require('../assets/splash.json')}
            style={{ width: '100%', height: '100%' }}
            autoPlay
            loop={false}
            resizeMode="contain"
            onAnimationFinish={() => setIsLoading && setIsLoading(false)}
        />
    );
>>>>>>> b250076a476487b39b736554ae7b95bcbf660f21
}
