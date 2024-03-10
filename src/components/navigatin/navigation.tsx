import React from "react";
import { Pages } from "@/utils/pages";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import theme from "@/config/theme";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const Navigations = () => {
    const {themeMode, isLogined} = useSelector((state:any)=>state.globalState);
    const mode = themeMode === "light" ? theme.light : theme.dark;

    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                statusBarColor:"gray"
            }}
            initialRouteName={isLogined ? "HomeScreen" : "LoginScreen"}
            >
                {Pages.map((page, index)=>{
                    if (page.rule !== "restricted" && isLogined){
                        return(
                            <Stack.Screen
                            key={index} 
                            name={page.name} 
                            component={page.component}
                            options={{
                                headerStyle: {
                                    backgroundColor: "#ffff",
                                },
                                contentStyle:{
                                    backgroundColor:"blue",
                                },
                                headerTintColor: "red",
                                headerTitleAlign: 'center',
                                headerTitleStyle: {
                                    fontFamily: mode.fontFamily,
                                    fontSize: 15,
                                    color: "black",
                                },
                                
                                headerTitle: page.persianName,
                                headerTransparent: false,
                                autoHideHomeIndicator: false,
                            }}
                            />
                        )
                    }else {
                        return (
                            <Stack.Screen
                            key={index} 
                            name={page.name} 
                            component={page.component}
                            options={{
                                headerStyle: {
                                    backgroundColor: "#ffff",
                                },
                                contentStyle:{
                                    backgroundColor:"white",
                                },
                                headerTintColor: "red",
                                headerTitleAlign: 'center',
                                headerTitleStyle: {
                                    fontFamily: mode.fontFamily,
                                    fontSize: 15,
                                    color: "black",
                                },
                                
                                headerTitle: page.persianName,
                                headerTransparent: false,
                                autoHideHomeIndicator: false,
                            }}
                            />
                        )
                    }
                })}
            </Stack.Navigator>      
        </NavigationContainer>
    )
}

export default Navigations;