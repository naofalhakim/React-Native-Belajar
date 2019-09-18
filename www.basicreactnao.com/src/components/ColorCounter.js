import React from 'react'
import {View, Text,TouchableOpacity, StyleSheet} from 'react-native'

const ColorCounter = ({bgColor,onIncrease,onDecrease}) =>{
    return (
        <View>
            <TouchableOpacity style={[styles.myButton,{backgroundColor:bgColor}]} 
            onPress={()=> onIncrease() }>
            <Text>More {bgColor}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.myButton,{backgroundColor:bgColor}]}
            onPress={()=> onDecrease()}>
            <Text>Less {bgColor}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFF'
    },
    myButton:{
        padding:14,
        alignItems:"center",
        margin:5,
    },
})

export default ColorCounter