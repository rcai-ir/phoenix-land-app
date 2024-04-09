import React from 'react';
import LottieView from 'lottie-react-native';

interface SplashProps {
    setIsLoading?:(isLoading:boolean)=>void;
}


const Splash: React.FC<SplashProps> = ({setIsLoading})=> {
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
}

export default Splash
