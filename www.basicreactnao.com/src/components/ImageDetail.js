import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native'

const ImageDetail = (props) =>{
    return(
        <TouchableOpacity style={styles.container}>
            <Image style={styles.myImage} source={props.img}></Image>
            <View style={styles.subContainer}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.subTitle}>{props.subtitle}</Text>
            </View>
        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        flex:1,
        justifyContent:"space-between",
        padding:10,
        backgroundColor:'gold',
        marginVertical:5,
    },
    subContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"space-around",
    }, myImage:{
        width:100,
        height:100
    }, title:{
        fontSize:24,
        fontWeight:"500",
        color:'#000'
    },subTitle:{
        fontSize:16,
        fontWeight:"normal",
        color:'#000'
    }

})

export default ImageDetail