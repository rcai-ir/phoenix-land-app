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
}
export default BottomSheetContext;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
});
