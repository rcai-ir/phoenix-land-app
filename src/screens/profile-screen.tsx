import React, { useState } from 'react';
import {
    View, StyleSheet, Pressable} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import theme from '@/config/theme';
import HomeIcon from '../../assets/SVGs/Home.svg';
import HomeIconDisable from '../../assets/SVGs/HomeOutline.svg';
import Link1 from '../../assets/SVGs/nutrition.svg';
import Link1Disable from '../../assets/SVGs/nutritionOutline.svg';
import Link2 from '../../assets/SVGs/sport.svg';
import Link2Disable from '../../assets/SVGs/sportOutline.svg';
import Link3 from '../../assets/SVGs/analysisIcon.svg';
import Link3Disable from '../../assets/SVGs/analysisIconOutline.svg';
import { isLogin } from '@/state-management/actions/global-state-actions';
import Page1 from "@/screens/page1";
import Page2 from "@/screens/page2";
import Page3 from "@/screens/page3";

export type RootState = {
    globalState: {
        themeMode: string;
    };
};

export default function ProfileScreen() {
    const [selectedIcon, setSelectedIcon] = useState('HomeIcon');
    const [selectedPage, setSelectedPage] = useState("Page1")
    const { themeMode } = useSelector((state:RootState) => state.globalState);
    const mode = themeMode === 'light' ? theme.light : theme.dark;
    const dispatch = useDispatch();

    const styles = StyleSheet.create({
        contaier: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            margin:2
        },
        navContainer: {
            position: 'absolute',
            alignItems: 'center',
            bottom: 25,
        },
        navBar: {
            flexDirection: 'row',
            backgroundColor: mode.component,
            width: '100%',
            justifyContent: 'space-evenly',
            borderRadius: 50,
        },
        iconBehave: {
            padding: 15,
        },
    });

    return (
        <View style={styles.contaier}>
            <View style={{ width:"100%", height:"100%"}}>
                {
                    selectedPage === "Page1" 
                        ? <Page1/>
                        : selectedPage === "Page2"
                            ? <Page2/>
                            : <Page3/>
                }
            </View>
            <View style={styles.navContainer}>
                <View style={styles.navBar}>
                    <Pressable
                        onPress={() => {setSelectedIcon('HomeIcon'); setSelectedPage("Page1")}}
                        style={styles.iconBehave}
                        android_ripple={{ borderless: true, radius: 20 }}
                    >
                        {selectedIcon === 'HomeIcon' ? <HomeIcon /> : <HomeIconDisable />}
                    </Pressable>

                    <Pressable
                        onPress={() => {setSelectedIcon('Link1');setSelectedPage("Page2")}}
                        style={styles.iconBehave}
                        android_ripple={{ borderless: true, radius: 20 }}
                    >
                        {selectedIcon === 'Link1' ? <Link1 /> : <Link1Disable />}
                    </Pressable>

                    <Pressable
                        onPress={()=> { setSelectedIcon('Link2'); setSelectedPage("Page3")}}
                        style={styles.iconBehave}
                        android_ripple={{ borderless: true, radius: 20 }}
                    >
                        {selectedIcon === 'Link2' ? <Link2 /> : <Link2Disable />}
                    </Pressable>

                    <Pressable
                        onPress={() => { setSelectedIcon('Link3'); dispatch(isLogin(false)); }}
                        style={styles.iconBehave}
                        android_ripple={{ borderless: true, radius: 20 }}
                    >
                        {selectedIcon === 'Link3' ? <Link3 /> : <Link3Disable />}
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
