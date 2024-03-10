import React, {Dispatch, SetStateAction} from "react";
import LottieView from "lottie-react-native";

interface SplashProps {
    setIsLoading?: Dispatch<SetStateAction<boolean>>;
}


export default function Splash (props:SplashProps) {
    const {setIsLoading} = props
    return (
        <LottieView
        source={require("../assets/splash.json")}
        style={{width: "100%", height: "100%"}}
        autoPlay
        loop={false}
        resizeMode="contain"
        onAnimationFinish={()=>setTimeout(()=> setIsLoading(false), 1000)}
        />
    )
}