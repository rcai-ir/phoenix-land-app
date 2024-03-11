import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {TextInput, StyleSheet, TextInputProps, View, TouchableOpacity} from 'react-native';
import  theme  from '../config/theme';
import { useSelector } from "react-redux";



export type InputHandle={
getValue: ()=> string;
onFocus: ()=> void;
setValue?: (value: string) => void;
}

type InputProps ={
placeholder?: string;
secureTextEntry?: boolean;
textAlign?: string;
RightIcon?:any;
LeftIcon?:any;
bgColorLeftIcon?:string,
bgColorRightIcon?:string,
onSubmit?: () =>void;
rightIconOnSubmit?:()=>void;
leftIconOnSubmit?:()=>void;
} & TextInputProps;

const TextField = forwardRef<InputHandle, InputProps>(
({
    placeholder, 
    secureTextEntry, 
    textAlign, 
    RightIcon, 
    LeftIcon, 
    bgColorLeftIcon, 
    bgColorRightIcon,
    onSubmit,
    rightIconOnSubmit,
    leftIconOnSubmit,
    ...props 
}, ref )=>{
    const [value, setValue] = useState('');
    const textInputRef = useRef<TextInput>(null);
    const {themeMode} = useSelector((state:any)=>state.globalState);
    const mode = themeMode === "light" ? theme.light : theme.dark;

    const styles = StyleSheet.create({
    
    container:{
    flexDirection:"row-reverse",
    justifyContent:"flex-start",
    alignItems:'center',
        height:40,
        width: "100%",
        backgroundColor:"white",
        borderWidth:1,
        marginBottom:20,
        borderRadius:15,
        gap:5,
    },
    textInput:{
    flex:1,
        paddingRight:10,
        paddingLeft:10,
        color: "green",
        direction:'rtl',
        fontSize:14,
    },
    Icons: {
        paddingHorizontal:15,
        height:"100%", 
        justifyContent:"center", 
        alignItems:"center",
        
    },
    rightIcon:{
    backgroundColor:bgColorRightIcon ? bgColorRightIcon : mode.component,
    borderTopRightRadius:15,
    borderBottomRightRadius:15, 
    },
    leftIcon:{
    backgroundColor: bgColorLeftIcon ? bgColorLeftIcon : mode.component,
    borderTopLeftRadius:15,
    borderBottomLeftRadius:15, 
    }
})

useImperativeHandle(ref, ()=>({
    getValue: () => value,
    onFocus: ()=> textInputRef.current?.focus(),
    setValue: (newValue) => setValue(newValue),
}));

return(
    <View 
    style={styles.container}>
    {
        RightIcon 
        ? rightIconOnSubmit
        ? <TouchableOpacity onPress={rightIconOnSubmit}>
        <View 
        style={[styles.Icons, styles.rightIcon]}>
            <RightIcon/>
        </View>
        </TouchableOpacity>
        : <View 
        style={[styles.Icons, styles.rightIcon]}>
            <RightIcon />
        </View>
        : null
        }
        <TextInput
        style={styles.textInput}
        ref={textInputRef}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={"black"}
        onChangeText={setValue}
        textAlign= {textAlign === 'left' && value.length>0 ? "left" : "right" }
        returnKeyType={onSubmit ? "next" : "done"}
        onSubmitEditing={onSubmit}
        secureTextEntry={secureTextEntry}
        {...props}
        />
        {
        LeftIcon 
        ? leftIconOnSubmit 
        ? <TouchableOpacity onPress={leftIconOnSubmit}>
            <View 
            style={[styles.Icons ,styles.leftIcon]}>
            <LeftIcon />
            </View>
        </TouchableOpacity> 
        : <View 
        style={[styles.Icons ,styles.leftIcon]}>
            <LeftIcon />
        </View>
        : null
    }
</View>
);
});



export default TextField;