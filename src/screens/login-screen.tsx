import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet, Alert } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { Authenticated } from 'types';
import Button from '@/components/button';
import TextField from '@/components/text-input';
import theme from '@/config/theme';

import {
    isLogin,
    setUserData,
    setRememberMe,
    setPersistLoginScreenData,
    userType
} from '@/state-management/actions/global-state-actions';
import { userLogin } from '@/state-management/actions/auth-actions';
import { userGetById } from '@/state-management/actions/user-actions';
import usernameIcon from '../../assets/SVGs/username.svg';
import passwordIcon from '../../assets/SVGs/Password.svg';
import unseenIcon from '../../assets/SVGs/unSeen.svg';
import viewIcon from '../../assets/SVGs/view.svg';
import { RootStackParamList } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';

type RootState = {
    globalState: {
    themeMode: string;
    rememberMe: boolean;
    persistLoginScreen: { username: string | null ; password: string | null };
    };
};

export type loginScreenProps = {
    navigation: StackNavigationProp<RootStackParamList>;
}

export default function LoginScreen (props:loginScreenProps) {
    const {navigation} = props;
    const { themeMode, rememberMe, persistLoginScreen } = useSelector((state:RootState) => state.globalState);
    const dispatch = useDispatch();
    const mode = themeMode === 'light' ? theme.light : theme.dark;
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    

    useEffect(() => {
        if (rememberMe && persistLoginScreen.username) {
            setUsername( persistLoginScreen.username);
        }
        if (rememberMe && persistLoginScreen.password) {
            setPassword(persistLoginScreen.password);
        }
    }, []);

    const handleSubmitForm = async () => {
        const loginData : Authenticated = {
            db:'healthup',
            login: username,
            password: password,
        };
        if (rememberMe) {
            dispatch(setPersistLoginScreenData({username, password}));
        }
        
        try {
            const response = await userLogin(loginData)(dispatch);
            if (response.data.result && response.status === 200) {
                
                const userData: Authenticated = {
                    db:'healthup',
                    password,
                    uid: response.data.result,
                };
                try {
                    const userDataResponse = await userGetById(userData)(dispatch);
                    if (userDataResponse && userDataResponse.status === 200) {
                        const uid = userDataResponse.data.result[0].id;
                        const { name } = userDataResponse.data.result[0];
                        const partner_id = userDataResponse.data.result[0].partner_id[0];
                        const data:userType = {
                            uid, name, partner_id, password,
                        };
                        await dispatch(isLogin(true));
                        await dispatch(setUserData(data));
                        navigation.navigate("ProfileScreen");
                    }
                } catch (error) {
                    if(typeof error ==="object" && error !== null && "message" in error){
                        const errorMsg = (error as Error).message; 
                        Alert.alert(errorMsg);
                        throw error;
                    } else {
                        throw new Error('Unknown error occurred');
                    }
                }
            } else {
                Alert.alert('نام کاربری و یا رمز عبور اشتباه است');
            }
        } catch (error) {
            if(typeof error ==="object" && error !== null && "message" in error){
                const errorMsg = (error as Error).message; 
                Alert.alert(errorMsg);
                throw error;
            } else {
                throw new Error('Unknown error occurred');
            }
        }
    };

    return (
        <View style={styles.container}>
            <TextField
                placeholder="نام کاربری را وارد نمایید"
                placeholderTextColor={mode.grayColor}
                value={username}
                onChangeText={setUsername}
                LeftIcon={usernameIcon}
                borderRadius={20}
                bgColorLeftIcon={mode.backgroundLight}
                textAlign="left"
            />
            <TextField
                
                placeholder="رمز عبور را وارد نمایید"
                secureTextEntry={!showPassword}
                placeholderTextColor={mode.grayColor}
                value={password}
                onChangeText = {setPassword}
                LeftIcon={passwordIcon}
                RightIcon={!showPassword ? unseenIcon : viewIcon}
                borderRadius={20}
                bgColorLeftIcon={mode.backgroundLight}
                rightIconOnSubmit={() => setShowPassword(!showPassword)}
                textAlign="left"
            />
            <Checkbox.Item
                label="من را به خاطر بسپار"
                status={rememberMe ? 'checked' : 'unchecked'}
                uncheckedColor={mode.grayColor}
                color={mode.greenColor}
                labelStyle={{
                    color: mode.grayColor,
                    fontFamily: mode.fontFamily,
                    fontSize: mode.fontSize.h4,
                }}
                style={{
                    paddingHorizontal: 0,
                    marginTop: -15,
                }}
                onPress={() => dispatch(setRememberMe(!rememberMe))}
            />
            <Button
                title="ورود"
                backgroundColor="green"
                color="white"
                onPress={handleSubmitForm}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '100%',
        fontFamily: 'iranSans',
        padding: 40,
    },
});