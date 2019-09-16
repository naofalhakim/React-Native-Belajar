import React, {Component} from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';

const HomeScreen = (props)=>{
    
    return(
        <View>
            <TouchableOpacity style={styles.buttonFirst} onPress={()=>props.navigation.navigate('ImageScreen')}>
                <Text>Image Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonFirst} onPress={()=>props.navigation.navigate('Home')}>
                <Text>First Component</Text>
            </TouchableOpacity>
            <Button onPress={()=> props.navigation.navigate('Details')} title="List"></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonFirst:{
        backgroundColor:'orange',
        padding:10,
        alignItems:"center"
    }
})

export default HomeScreen;