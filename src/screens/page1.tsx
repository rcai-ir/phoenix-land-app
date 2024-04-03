import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
<<<<<<< HEAD
// import { useDispatch } from 'react-redux';

export default function Page1() {
  // const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.text}> page1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
  },
=======
import { useDispatch } from 'react-redux';

export default function Page1() {
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <Text style={styles.text}> page1</Text>
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
>>>>>>> b250076a476487b39b736554ae7b95bcbf660f21
});
