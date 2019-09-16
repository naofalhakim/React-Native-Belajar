import React from 'react';
import {Text, View, StyleSheet, Image, FlatList} from 'react-native'
import ImageDetail from './components/ImageDetail'
import MyIcon from '../assets/icon.png'
import MySplash from '../assets/splash.png'

const ImageScreen = () =>{

    const listImage = [
        {image:{MyIcon}, key:'1', title:'Image 1', subTitle:'Deskripsi Image 1'},
        {image:{MySplash}, key:'2', title:'Image 2', subTitle:'Deskripsi Image 2'},
        {image:{MySplash}, key:'3', title:'Image 3', subTitle:'Deskripsi Image 3'},
    ]

    return(
        <View style={styles.container}>
            <FlatList data={listImage} renderItem={({item}) => {
                return(
                    <ImageDetail img={item.image} title={item.title} subtitle={item.subTitle}/>
                )
            }}></FlatList>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        flex:1,
        justifyContent:"space-between"
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

export default ImageScreen