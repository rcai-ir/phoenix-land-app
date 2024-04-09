import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import theme from '../../config/theme';

type RootStackNavigatorParamsList = {
    Home: undefined;
    Details: undefined;
};

interface ToggleBottomSheetItemProps {
    action: () => void;
    title: string;
    navigationLink: keyof RootStackNavigatorParamsList;
}

type RootState = {
    globalState: {
    themeMode: string;
    };
};



const ToggleBottomSheetItem: React.FC<ToggleBottomSheetItemProps>=(props)=> {
    const { action, title, navigationLink } = props;
    const { themeMode } = useSelector((state:RootState) => state.globalState);
    const mode = themeMode === 'light' ? theme.light : theme.dark;
    const navigation = useNavigation<StackNavigationProp<RootStackNavigatorParamsList>>();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        text: {
            fontFamily: mode.fontFamily,
            fontSize: 13,
            color: mode.color,
        },
    });

    const handleSubmit = () => {
        navigation.navigate(navigationLink);
        action();
    };
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={handleSubmit}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

export default ToggleBottomSheetItem;
