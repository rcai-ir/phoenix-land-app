import TextField from "@/components/text-input";
import React, {useRef, useEffect} from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Alert } from "react-native";
import Button from "@/components/button";
import { Checkbox } from 'react-native-paper';
import { useSelector, useDispatch } from "react-redux";
import { Authenticated } from 'types';
import theme from "@/config/theme";
import { 
    isLogin, 
    setUserData, 
    setRememberMe, 
    setPersistLoginScreenData 
} from '@/state-management/actions/global-state-actions';
import { userLogin } from "@/state-management/actions/auth-actions";
import { userGetById } from "@/state-management/actions/user-actions";
// import LeftIcon from "../../assets/SVGs/usrname.svg"; 



function LoginScreen(props:any) {
    const { userLogin, userGetById } = props;
    const usernameRef = useRef<any>(null);
    const passwordRef = useRef<any>(null);
    const {themeMode, rememberMe, persistLoginScreen} = useSelector((state:any)=>state.globalState);
    const dispatch = useDispatch();
    const mode = themeMode === "light" ? theme.light : theme.dark;

    useEffect(()=>{
        if(rememberMe && persistLoginScreen.username){
            usernameRef.current?.setValue(persistLoginScreen.username);
        }
        if(rememberMe && persistLoginScreen.password){
            passwordRef.current?.setValue(persistLoginScreen.password)
        }
    },[])

    const handleSubmitForm = async ()=>{
        const loginData : Authenticated = {
            db: "healthup",
            login: usernameRef.current?.getValue(),
            password: passwordRef.current?.getValue(),
        }
        if(rememberMe){
            dispatch(setPersistLoginScreenData({
                username: usernameRef.current?.getValue(),
                password: passwordRef.current?.getValue(),
            }))
        }
        try {
            const response = await userLogin(loginData);
            if(response.data.result && response.status===200){
                const userData: Authenticated = {
                    db: "healthup",
                    password: passwordRef.current?.getValue(),
                    uid:response.data.result,
                }
                try {
                    const userDataResponse = await userGetById(userData);
                    if(userDataResponse && userDataResponse.status===200){
                        const uid=userDataResponse.data.result[0].id;
                        const name= userDataResponse.data.result[0].name;
                        const partner_id=userDataResponse.data.result[0].partner_id[0];
                        const password = passwordRef.current?.getValue();
                        const data:any ={uid, name, partner_id, password};
                        await isLogin(true); 
                        await setUserData(data);
                        Alert.alert("this user is ok")
                    }

                }catch(error){
                    Alert.alert(error.message)
                }
            }
            console.log(response.data.result);
        }catch(error:any){
            Alert.alert(error.message)
            console.log(error)
        }
    }
    
    return (
        <View style={styles.container}>
            <TextField
            ref={usernameRef}
            placeholder="نام کاربری را وارد نمایید"
            // placeholderTextColor={""}
            onSubmit={()=>passwordRef.current?.onFocus()}
            // LeftIcon={LeftIcon}
            />
            <TextField
            ref={passwordRef}
            placeholder="رمز عبور را وارد نمایید"
            // placeholderTextColor={""}
            // LeftIcon={LeftIcon}
            />
            <Checkbox.Item
            label="من را به خاطر بسپار"
            status={rememberMe ? "checked" : "unchecked"}
            uncheckedColor={mode.grayColor}
            color={mode.greenColor}
            labelStyle={{
                color:mode.grayColor,
                fontFamily:mode.fontFamily,
                fontSize:mode.fontSize.h4
            }}
            style={{
                paddingHorizontal:0,
                marginTop:-15
            }}
            onPress={()=>dispatch(setRememberMe(!rememberMe))}
            />
            <Button
            title="ورود"
            backgroundColor={"green"}
            color={"white"}
            onPress={handleSubmitForm}
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '100%',
        fontFamily: 'iranSans',
        padding:40,
    }
})

const mapDispatchToProps = (dispatch:any) =>{
    return {
        userLogin: (credentials:Authenticated) => dispatch (userLogin(credentials)),
        userGetById: (credentials:Authenticated) => dispatch (userGetById(credentials)),
        setUserData: (data: any) => dispatch(setUserData(data)),
        isLogin: (data: boolean) => dispatch(isLogin(data)),
    }
}

export default connect(null, mapDispatchToProps)(LoginScreen)