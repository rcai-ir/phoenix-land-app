import React from "react";
import { Pages } from "@/utils/pages";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import theme from "@/config/theme";
import { useSelector } from "react-redux";
import { StyleSheet, TouchableOpacity } from "react-native";
import BurgerMenu from "../../../assets/SVGs/burgerMenu.svg"

const Stack = createNativeStackNavigator();

const Navigations = () => {
    const {themeMode, isLogined} = useSelector((state:any)=>state.globalState);
    const mode = themeMode === "light" ? theme.light : theme.dark;

    const handleChangeBottonSheet = async ()=> {
        console.log("ok")
        // const isActive = await ref?.current?.isActive();
        // if (isActive) {
        //     ref?.current?.scrollTo(0);
        // } else {
        //     ref?.current?.scrollTo(-350);}
    };

    const styles = StyleSheet.create({
        button:{

        }
    })

    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                statusBarColor:"gray"
            }}
            initialRouteName={isLogined ? "ProfileScreen" : "LoginScreen"}
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
                                    backgroundColor: mode.header,
                                },
                                contentStyle:{
                                    backgroundColor:mode.background,
                                },
                                headerTintColor: mode.blueColor,
                                headerTitleAlign: 'center',
                                headerTitleStyle: {
                                    fontFamily: mode.fontFamily,
                                    fontSize: 15,
                                    color: "black",
                                },
                                
                                headerTitle: page.persianName,
                                headerTransparent: false,
                                autoHideHomeIndicator: false,
                                headerBackVisible: page.name !== "HomeScreen",
                                    headerLeft:
                                        page.name === "HomeScreen" ? () => (
                                        <TouchableOpacity style={styles.button} onPress={handleChangeBottonSheet}>
                                            <BurgerMenu />
                                        </TouchableOpacity>
                                        ) 
                                        : undefined,
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