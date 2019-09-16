import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const nama = 'Naofal'

const ExerciseFirst = ()=>{
    return(
        <View style={style.container}>
            <Text style={style.myText}>My Name is : {nama}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex:1,
    },
    myText:{
        fontSize:24,
        fontWeight:"600",
    }
})

export default ExerciseFirst;
    
