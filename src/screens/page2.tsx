import React from "react"
import { StyleSheet, View , Text } from 'react-native';
import { useDispatch } from "react-redux";


export default function Page2 () {
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <Text style={styles.text}> page2</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
    text: {
        fontSize: 25,
    }
});