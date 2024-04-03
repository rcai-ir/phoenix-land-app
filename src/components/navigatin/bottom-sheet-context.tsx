<<<<<<< HEAD
import React, {ReactNode } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

interface BottomSheetContextProps {
  children: ReactNode;
}

function BottomSheetContext(props:BottomSheetContextProps) {
  return (
    <ScrollView style={styles.container}>
      {props.children}
    </ScrollView>
  );
=======
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

function BottomSheetContext(props: any) {
    return <ScrollView style={styles.container}>{props.children}</ScrollView>;
>>>>>>> b250076a476487b39b736554ae7b95bcbf660f21
}
export default BottomSheetContext;

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: {
    flex: 1,
    margin: 20,
  },
=======
    container: {
        flex: 1,
        margin: 20
    }
>>>>>>> b250076a476487b39b736554ae7b95bcbf660f21
});
