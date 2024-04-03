import React, {
  forwardRef, useImperativeHandle, useRef, useState,
} from 'react';
import {
  TextInput, StyleSheet, TextInputProps, View, TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import theme from '../config/theme';
import {SvgProps} from "react-native-svg";

export type InputHandle = {
  getValue: ()=> string;
  onFocus: ()=> void;
  setValue?: (value: string) => void;
};

type InputProps = {
  backgroundColor?:string;
  placeholder?: string;
  secureTextEntry?: boolean;
  textAlign?: string;
  RightIcon?:React.ComponentType<SvgProps>;
  LeftIcon?:React.ComponentType<SvgProps>;
  bgColorLeftIcon?:string,
  bgColorRightIcon?:string,
  borderRadius?:number;
  onSubmit?: () =>void;
  rightIconOnSubmit?:()=>void;
  leftIconOnSubmit?:()=>void;
} & TextInputProps;

const TextField = forwardRef<InputHandle, InputProps>(
  ({
    backgroundColor,
    placeholder,
    secureTextEntry,
    textAlign,
    RightIcon,
    LeftIcon,
    bgColorLeftIcon,
    bgColorRightIcon,
    borderRadius,
    onSubmit,
    rightIconOnSubmit,
    leftIconOnSubmit,
    ...props
  }, ref) => {
    const [value, setValue] = useState('');
    const textInputRef = useRef<TextInput>(null);
    const { themeMode } = useSelector((state:any) => state.globalState);
    const mode = themeMode === 'light' ? theme.light : theme.dark;

    const styles = StyleSheet.create({

      container: {
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 40,
        width: '100%',
        backgroundColor: backgroundColor || mode.component,
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: borderRadius || 15,
        gap: 5,
      },
      textInput: {
        flex: 1,
        paddingRight: 10,
        paddingLeft: 2,
        color: mode.color,
        fontSize: 14,
        textAlign: 'left',
      },
      Icons: {
        paddingHorizontal: 15,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',

      },
      rightIcon: {
        backgroundColor: bgColorRightIcon || (backgroundColor || mode.component),
        borderTopRightRadius: borderRadius || 15,
        borderBottomRightRadius: borderRadius || 15,
      },
      leftIcon: {
        backgroundColor: bgColorLeftIcon || (backgroundColor || mode.component),
        borderTopLeftRadius: borderRadius || 15,
        borderBottomLeftRadius: borderRadius || 15,
      },
    });

    useImperativeHandle(ref, () => ({
      getValue: () => value,
      onFocus: () => textInputRef.current?.focus(),
      setValue: (newValue) => setValue(newValue),
    }));

    return (
      <View
        style={styles.container}
      >
        {
        RightIcon
          ? rightIconOnSubmit
            ? (
              <TouchableOpacity onPress={rightIconOnSubmit}>
                {
            value.length > 0
              ? (
                <View style={[styles.Icons, styles.rightIcon]}>
                  <RightIcon />
                </View>
              )
              : null
            }
              </TouchableOpacity>
            )
            : (
              <View
                style={[styles.Icons, styles.rightIcon]}
              >
                {value.length > 0 ? <RightIcon /> : null}
              </View>
            )
          : null
        }
        <TextInput
          style={styles.textInput}
          ref={textInputRef}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="black"
          onChangeText={setValue}
          textAlign={textAlign === 'left' && value.length > 0 ? 'left' : 'right'}
          returnKeyType={onSubmit ? 'next' : 'done'}
          onSubmitEditing={onSubmit}
          secureTextEntry={secureTextEntry}
          {...props}
        />
        {
        LeftIcon
          ? leftIconOnSubmit
            ? (
              <TouchableOpacity onPress={leftIconOnSubmit}>
                <View
                  style={[styles.Icons, styles.leftIcon]}
                >
                  <LeftIcon />
                </View>
              </TouchableOpacity>
            )
            : (
              <View
                style={[styles.Icons, styles.leftIcon]}
              >
                <LeftIcon />
              </View>
            )
          : null
    }
      </View>
    );
  },
);

export default TextField;
