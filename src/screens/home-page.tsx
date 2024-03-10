import React from "react"
import { StyleSheet, View , Text } from 'react-native';
export default function HomePage () {
return (
    <View style={styles.container}>
        <Text style={styles.text}>home page</Text>
    </View>
)
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    text: {
        fontSize: 25,
    }
});