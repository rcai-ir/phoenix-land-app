import React, {useRef} from "react";
import { Pages } from "@/utils/pages";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import theme from "@/config/theme";
import { useSelector } from "react-redux";
import {View, StyleSheet, TouchableOpacity } from "react-native";
import BurgerMenu from "../../../assets/SVGs/burgerMenu.svg";
import BottomSheet, { BottomSheetRefProps } from '../navigatin/bottom-sheet';
import BottomSheetContext from '../navigatin/bottom-sheet-context';
import { ListOfBottomSheet } from "./list-of-bottom-sheet";
import ToggleBottomSheetItem from "./toggle-account-details";





const Stack = createNativeStackNavigator();

const Navigations = () => {
    const {themeMode, isLogined} = useSelector((state:any)=>state.globalState);
    const mode = themeMode === "light" ? theme.light : theme.dark;
    const ref = useRef<BottomSheetRefProps>(null);

    const styles = StyleSheet.create({
        button: {
            height: 40,
            borderRadius: 20,
            aspectRatio:1,
        },
        line: {
            width: "100%",
            height:1,
            backgroundColor:mode.backgroundLight,
            alignSelf: "center",
            marginVertical: 15,
            borderRadius:3,
        },
        list: {
            flexDirection:"row-reverse",
            paddingHorizontal: 20,
            alignItems:"center",
        },    
    });

    const handleChangeBottonSheet = async ()=> {
        const isActive = await ref?.current?.isActive();
        if (isActive) {
            ref?.current?.scrollTo(0);
        } else {
            ref?.current?.scrollTo(-350);}
    };

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
                                headerBackVisible: page.name !== "ProfileScreen",
                                    headerLeft:
                                        page.name === "ProfileScreen" ? () => (
                                        <TouchableOpacity style={styles.button} onPress={handleChangeBottonSheet}>
                                            <BurgerMenu />
                                        </TouchableOpacity>
                                        ) 
                                        : undefined,
                            }}
                            />
                        )
                    }else if(page.rule ==="restricted" && !isLogined) {
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
            {/* <BottomSheet ref={ref}>
                <View style={{flex:1, backgroundColor:mode.background}}>
                <BottomSheetContext>
                    {ListOfBottomSheet.map((item:any, index:number)=> {
                        return(
                            <View key={index}>
                                <View style={styles.list}>
                                    <ToggleBottomSheetItem 
                                    title={item.persianName}
                                    navigationLink={item.navigationLink}
                                    action= {handleChangeBottonSheet}
                                    />
                                    <item.icon/>
                                </View>
                                <View style={[styles.line, {display: index + 1 === ListOfBottomSheet.length ? 'none': 'flex'}]}/>
                            </View>
                        )
                    })}
                </BottomSheetContext>
                </View>
            </BottomSheet>     */}
        </NavigationContainer>
    )
}

export default Navigations;