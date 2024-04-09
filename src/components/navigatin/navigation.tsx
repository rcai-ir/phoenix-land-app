import React, { useRef } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { StyleSheet, TouchableOpacity } from 'react-native';
import theme from '@/config/theme';
import { Pages } from '@/utils/pages';
import BurgerMenu from '../../../assets/SVGs/burgerMenu.svg';
import  { BottomSheetRefProps } from './bottom-sheet';
// import BottomSheet from '@gorhom/bottom-sheet';

const Stack = createNativeStackNavigator();
type RootState = {
globalState: {
    themeMode: string;
    isLogined: boolean;
};
};

function Navigations() {
    const { themeMode, isLogined } = useSelector((state:RootState) => state.globalState);
    const mode = themeMode === 'light' ? theme.light : theme.dark;
    const ref = useRef<BottomSheetRefProps>(null);

    const styles = StyleSheet.create({
        button: {
            height: 50,
            borderRadius: 20,
            aspectRatio: 1,
            justifyContent:"center",
        },
        line: {
            width: '100%',
            height: 1,
            backgroundColor: mode.backgroundLight,
            alignSelf: 'center',
            marginVertical: 15,
            borderRadius: 3,
        },
        list: {
            flexDirection: 'row-reverse',
            paddingHorizontal: 20,
            alignItems: 'center',
        },
    });

    const handleChangeBottonSheet = async () => {
        const isActive = await ref?.current?.isActive();
        if (isActive) {
            ref?.current?.scrollTo(0);
        } else {
            ref?.current?.scrollTo(-350);
        }
    };

    // const snapPoints = useMemo(()=>['25%', '50%', '100%'],[]);
    // const bottomSheetRef = useRef<BottomSheet>(null);

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    statusBarColor: 'gray',
                }}
                initialRouteName={isLogined ? 'ProfileScreen' : 'LoginScreen'}
            >
                {Pages.map((page, index) => {
                    if (page.rule !== 'restricted' && isLogined) {
                        return (
                            <Stack.Screen
                                key={index}
                                name={page.name}
                                component={page.component}
                                options={{
                                    headerStyle: {
                                        backgroundColor: mode.header,
                                    },
                                    contentStyle: {
                                        backgroundColor: mode.background,
                                    },
                                    headerTintColor: mode.blueColor,
                                    headerTitleAlign: 'center',
                                    headerTitleStyle: {
                                        fontFamily: mode.fontFamily,
                                        fontSize: 15,
                                        color: 'black',
                                    },

                                    headerTitle: page.persianName,
                                    headerTransparent: false,
                                    autoHideHomeIndicator: false,
                                    headerBackVisible: page.name !== 'ProfileScreen',
                                    headerLeft:
                                        page.name === 'ProfileScreen' ? () => (
                                            <TouchableOpacity style={styles.button} onPress={handleChangeBottonSheet}>
                                                <BurgerMenu />
                                            </TouchableOpacity>
                                        )
                                            : undefined,
                                }}
                            />
                        );
                    } if (page.rule === 'restricted' && !isLogined) {
                        return (
                            <Stack.Screen
                                key={index}
                                name={page.name}
                                component={page.component}
                                options={{
                                    headerStyle: {
                                        backgroundColor: '#ffff',
                                    },
                                    contentStyle: {
                                        backgroundColor: 'white',
                                    },
                                    headerTintColor: 'red',
                                    headerTitleAlign: 'center',
                                    headerTitleStyle: {
                                        fontFamily: mode.fontFamily,
                                        fontSize: 15,
                                        color: 'black',
                                    },

                                    headerTitle: page.persianName,
                                    headerTransparent: false,
                                    autoHideHomeIndicator: false,
                                }}
                            />
                        );
                    }
                })}
            </Stack.Navigator>
            {/* <BottomSheet 
                ref={bottomSheetRef}
                snapPoints={snapPoints}
                index={1} 
            >
                <Text>hi</Text>
            </BottomSheet> */}
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
    );
}

export default Navigations;
