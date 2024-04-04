import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
// import theme from '../config/theme';
// import { useSelector } from "react-redux";

interface Props {
  title: string;
  onPress: () => void;
  backgroundColor? : string;
  color?: string;
  borderColor?:string,
  borderWidth?:number,
  // width ? :string,
}

function Button(props: Props) {
    const {
        title, onPress, backgroundColor, color, borderColor, borderWidth,
    } = props;
    // const {themeMode} = useSelector((state:any)=>state.globalState);
    // const mode = themeMode === "light" ? theme.light : theme.dark;
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                ...styles.container,
                backgroundColor: backgroundColor || '',
                borderColor: borderColor || '',
                borderWidth: borderWidth || 0,
            }}
        >
            <Text style={{
                color,
                // fontFamily:mode.fontFamily,
                fontSize: 14,
            }}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        height: 45,
        marginBottom: 8,
        width: '100%',
    },
});

export default Button;
