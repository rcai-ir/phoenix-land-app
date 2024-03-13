import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import  theme  from '../../config/theme';
import { useNavigation } from "@react-navigation/native";
import { useSelector } from 'react-redux';


function ToggleBottomSheetItem (props:any){
    const { action, title, navigationLink} = props;
    const {themeMode} = useSelector((state:any)=>state.globalState);
    const mode = themeMode === "light" ? theme.light : theme.dark;
    const navigation:any = useNavigation();

    const styles = StyleSheet.create({
        container: {
            flex:1
        },
        text: {
            fontFamily: mode.fontFamily,
            fontSize: 13,
            color:mode.color
        }
    })

    const handleSubmit = () => {
        navigation.navigate(navigationLink)
        action();
    }
    return (
        <TouchableOpacity 
        style={styles.container}
        onPress={handleSubmit}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ToggleBottomSheetItem;