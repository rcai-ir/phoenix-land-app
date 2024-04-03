import React, { useRef, useEffect, useState } from 'react';
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
} from '@/state-management/actions/global-state-actions';
import { userLogin } from '@/state-management/actions/auth-actions';
import { userGetById } from '@/state-management/actions/user-actions';
import usernameIcon from '../../assets/SVGs/username.svg';
import passwordIcon from '../../assets/SVGs/Password.svg';
import unseenIcon from '../../assets/SVGs/unSeen.svg';
import viewIcon from '../../assets/SVGs/view.svg';



export default function LoginScreen(props:any) {
  const { navigation } = props;
  const usernameRef = useRef<string| any>(null);
  const passwordRef = useRef<string | any>(null);
  const { themeMode, rememberMe, persistLoginScreen } = useSelector((state:any) => state.globalState);
  const dispatch = useDispatch();
  const mode = themeMode === 'light' ? theme.light : theme.dark;
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (rememberMe && persistLoginScreen.username) {
      usernameRef.current?.setValue(persistLoginScreen.username);
    }
    if (rememberMe && persistLoginScreen.password) {
      passwordRef.current?.setValue(persistLoginScreen.password);
    }
  }, []);

  const handleSubmitForm = async () => {
    const loginData : Authenticated = {
      //TODO: maso, 2024: This is the backend option keep it with backend URL
      db: 'dpq15',
      login: usernameRef.current?.getValue(),
      password: passwordRef.current?.getValue(),
    };
    if (rememberMe) {
      dispatch(setPersistLoginScreenData({
        username: usernameRef.current?.getValue(),
        password: passwordRef.current?.getValue(),
      }));
    }
    try {
      const response = await userLogin(loginData)(dispatch);
      if (response.data.result && response.status === 200) {
        const userData: Authenticated = {
          //TODO: maso, 2024: This is the backend option keep it with backend URL
          db: 'dpq15',
          password: passwordRef.current?.getValue(),
          uid: response.data.result,
        };
        try {
          const userDataResponse = await userGetById(userData)(dispatch);
          if (userDataResponse && userDataResponse.status === 200) {
            const uid = userDataResponse.data.result[0].id;
            const { name } = userDataResponse.data.result[0];
            const partner_id = userDataResponse.data.result[0].partner_id[0];
            const password = passwordRef.current?.getValue();
            const data:any = {
              uid, name, partner_id, password,
            };
            await dispatch(isLogin(true));
            await dispatch(setUserData(data));
            navigation.push('ProfileScreen');
          }
        } catch (error:any) {
          Alert.alert(error.message);
        }
      } else {
        Alert.alert('نام کاربری و یا رمز عبور اشتباه است');
      }
    } catch (error:any) {
      Alert.alert(error.message);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextField
        ref={usernameRef}
        placeholder="نام کاربری را وارد نمایید"
        placeholderTextColor={mode.grayColor}
        onSubmit={() => passwordRef.current?.onFocus()}
        LeftIcon={usernameIcon}
        borderRadius={20}
            // bgColorLeftIcon={mode.backgroundLight}
        textAlign="left"
      />
      <TextField
        ref={passwordRef}
        placeholder="رمز عبور را وارد نمایید"
        secureTextEntry={!showPassword}
        placeholderTextColor={mode.grayColor}
        LeftIcon={passwordIcon}
        RightIcon={!showPassword ? unseenIcon : viewIcon}
        borderRadius={20}
            // bgColorLeftIcon={mode.backgroundLight}
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
