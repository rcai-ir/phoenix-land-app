import React from "react";
import { ScrollView, StyleSheet } from "react-native";



function BottomSheetContext(props:any){
    return(
        <ScrollView style={styles.container}>
                {props.children}
        </ScrollView>
    )
}
export default BottomSheetContext;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:20,
    }
})