import React, {useState} from 'react'
import {StyleSheet, Text, TouchableOpacity, View, ScrollView, FlatList} from 'react-native'
import ColorCounter from './components/ColorCounter'

const SquareScreen = ()=>{
    const [red,setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)
    const [colorMix, setColorMix] = useState('rgb(0,0,0)')

    const [colors, setColors] = useState([])

    const INCREASE_VALUE = 10

    const setValidateColor = (color, change) =>{
        switch(color){
            case 'red' :
                red + change > 255 || red + change < 0 ? null : setRed(red + change)
                return
            case 'green' :
                    green + change > 255 || green + change < 0 ? null : setGreen(green + change)
                return
            case 'blue' :
                    blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
        }
    }

    return (
    <ScrollView style={{backgroundColor:'brown'}}>
        <Text style={styles.textColor}>Red = {red}</Text>
        <ColorCounter bgColor='red' 
            onIncrease={()=> {
                setValidateColor('red',INCREASE_VALUE)
                setColorMix(`rgb(${red},${green},${blue})`) 
        }}
            onDecrease={()=> 
                {
                    setValidateColor('red',-1 * INCREASE_VALUE)
                setColorMix(`rgb(${red},${green},${blue})`) 
                }}
        ></ColorCounter>

        <Text style={styles.textColor}>Green = {green}</Text>
        <ColorCounter bgColor='green' 
            onIncrease={()=> {
                setValidateColor('green',INCREASE_VALUE)
                setColorMix(`rgb(${red},${green},${blue})`) 
        }}
            onDecrease={()=> 
                {
                setValidateColor('green',-1*INCREASE_VALUE)
                setColorMix(`rgb(${red},${green},${blue})`) 
                }}
        ></ColorCounter>

        <Text style={styles.textColor}>Blue = {blue}</Text>
        <ColorCounter bgColor='blue' 
            onIncrease={()=> {
                setValidateColor('blue',INCREASE_VALUE)
                setColorMix(`rgb(${red},${green},${blue})`) 
        }}
            onDecrease={()=> 
                {
                setValidateColor('blue',-1*INCREASE_VALUE)
                setColorMix(`rgb(${red},${green},${blue})`) 
                }}
        ></ColorCounter>

        <View style={styles.container}>
            <View style={[styles.colorBox, {backgroundColor:colorMix}]}></View>
            <TouchableOpacity style={styles.blueButton} onPress={() =>
                {
                    setColors([...colors,colorMix])
                }
            }>
                <Text>Add Colors</Text>
            </TouchableOpacity>
        </View>

        <FlatList 
        keyExtractor = {(item)=>item}
        data={colors}
        renderItem={({item})=>{
            return(
            <View>
                <View style={[styles.colorBox, {backgroundColor:item}]}></View>        
            </View>
            )
        }}></FlatList>
    </ScrollView>
    )


}


const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
        padding:10,
        marginTop:10,
    },
    textColor:{
        marginLeft:20,
        marginVertical:10,
    },
    redButton:{
        backgroundColor:'red',
        padding:14,
        justifyContent:"center",
        margin:5,
    },
    greenButton:{
        backgroundColor:'green',
        padding:14,
        justifyContent:"center",
        margin:5,
    },

    blueButton:{
        backgroundColor:'blue',
        padding:14,
        justifyContent:"center",
        margin:5,
    },
    colorBox:{
        width:100,
        height:100
    }
})

export default SquareScreen