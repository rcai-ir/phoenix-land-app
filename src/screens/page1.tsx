import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HomeIconDisable from '../../assets/SVGs/HomeOutline.svg';
import Avatar from '../../assets/SVGs/avatar.svg';

// import { useDispatch } from 'react-redux';


export default function Page1() {
    const assetData = [
        {
            icon: HomeIconDisable,
            title: "Asset Name1",
            value: 10,
        }, 
        {
            icon: HomeIconDisable,
            title: "Asset Name2",
            value: 12,
        },
        {
            icon: HomeIconDisable,
            title: "Asset Name3",
            value: 14,
        },
        {
            icon: HomeIconDisable,
            title: "Asset Name4",
            value: 16,
        }
    ]
    // const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <View style = {styles.top}>
                <View style={styles.image}>
                    <Avatar/>
                </View>
                <View>
                    <Text style={{fontSize:40, color:"blue"}}>Level 1</Text>
                </View>
            </View>
            
            
            <View style={styles.line}/>
            <View style={styles.buttom}> 
                {
                    assetData.map((item , index)=> {
                        return(
                            <View key={index} style={styles.item}>
                                <item.icon/>
                                <Text style={[styles.text, styles.itemText]}>{item.title}</Text>
                                <Text style={styles.text}>{item.value}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom:80,
        alignItems: 'center',
        justifyContent: 'center',
        margin:0
    },
    text: {
        fontSize: 20,
        color:"gray"
    },
    top: {
        width:"100%",
        alignItems:"center",
        margin:10
    },
    buttom: {
        width:"100%",
    },
    item: {
        flexDirection:"row",
        gap:10,
        alignItems:"center",
        justifyContent:"center",
        paddingVertical:10
    },
    itemText:{
        paddingRight:50
    },
    image: {
        width: 180,
        height:180,
        margin:5,
    },
    line: {
        marginVertical:20,
        height:3,
        width:"80%",
        backgroundColor:"gray",
        borderRadius:30
    }
});
