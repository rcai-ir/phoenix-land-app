import { ReactElement } from 'react';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Page3(): ReactElement {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> page3</Text>
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
