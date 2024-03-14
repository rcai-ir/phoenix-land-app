import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useDispatch } from 'react-redux';

export default function HomePage() {
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>home page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 25
    }
});
