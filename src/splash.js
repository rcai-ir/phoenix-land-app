import React from "react";
import LottieView from "lottie-react-native";

// interface SplashProps {
//     setIsLoading: Dispatch<SetStateAction<Boolean>>
// }


export default function Splash () {
    return (
        <LottieView
        source={require("../assets/splash.json")}
        style={{width: "100%", height: "100%"}}
        autoPlay
        loop={false}
        // onAnimationFinish={true}
        />
    )
}