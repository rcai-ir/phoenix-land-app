import React, { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import theme from "@/config/theme";
import { useSelector } from "react-redux";
import HomeIcon from "../../assets/SVGs/Home.svg";
import HomeIconDisable from "../../assets/SVGs/HomeOutline.svg"
import Link1 from "../../assets/SVGs/nutrition.svg";
import Link1Disable from "../../assets/SVGs/nutritionOutline.svg";
import Link2 from "../../assets/SVGs/sport.svg";
import Link2Disable from "../../assets/SVGs/sportOutline.svg";
import Link3 from "../../assets/SVGs/analysisIcon.svg"
import Link3Disable from "../../assets/SVGs/analysisIconOutline.svg"


export default function ProfileScreen(){
    const [selectedIcon, setSelectedIcon] = useState("");
    const {themeMode} = useSelector((state:any)=>state.globalState);
    const mode = themeMode === "light" ? theme.light : theme.dark;


    const styles = StyleSheet.create({
        contaier: {
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        },
        navContainer: {
            position:"absolute",
            alignItems:"center",
            bottom:25,
        },
        navBar: {
            flexDirection: "row",
            backgroundColor:mode.component,
            width:"100%",
            justifyContent:"space-evenly",
            borderRadius: 50
        },
        iconBehave: {
            padding:15
        }
    })

    return(
        <View style={styles.contaier}>
            <View></View>
            <View></View>
            <View style={styles.navContainer}>
                <View style={styles.navBar}>
                    <Pressable 
                    onPress={()=>setSelectedIcon("HomeIcon")} 
                    style={styles.iconBehave}
                    android_ripple={{borderless:true, radius:20}}>
                        {selectedIcon==="HomeIcon"? <HomeIcon/> : <HomeIconDisable/>}
                    </Pressable>

                    <Pressable 
                    onPress={()=>setSelectedIcon("Link1")} 
                    style={styles.iconBehave}
                    android_ripple={{borderless:true, radius:20}}>
                        {selectedIcon==="Link1"? <Link1/> : <Link1Disable/>}
                    </Pressable>

                    <Pressable 
                    onPress={()=>setSelectedIcon("Link2")} 
                    style={styles.iconBehave}
                    android_ripple={{borderless:true, radius:20}}>
                        {selectedIcon==="Link2"? <Link2/> : <Link2Disable/>}
                    </Pressable>

                    <Pressable 
                    onPress={()=>setSelectedIcon("Link3")} 
                    style={styles.iconBehave}
                    android_ripple={{borderless:true, radius:20}}>
                        {selectedIcon==="Link3"? <Link3/> : <Link3Disable/>}
                    </Pressable>
                </View>
            </View>
        </View>
    )
}
