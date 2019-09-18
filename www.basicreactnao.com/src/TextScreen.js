import React, {useState} from 'react'
import {StyleSheet, View,Text, TextInput, TouchableOpacity } from 'react-native'

const TextScreen = ()=>{
    const [active, setActive] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(true)
    const [active4, setActive4] = useState(false)

    return(
        <View>
            <TextInput style={active ? styles.inputTextActive:styles.inputText} 
            onFocus={()=>setActive(true)} 
            onBlur={()=>setActive(false)}
            placeholder="input here" autoCapitalize="none"
            autoCorrect={false}
            
            onChangeText={(char)=>{(char !== "")? setActive3(true):setActive3(false)}}
            ></TextInput>

            <TextInput style={active2 ? styles.inputTextActive2:styles.inputText} 
            onFocus={()=>setActive2(true)} 
            onBlur={()=>setActive2(false)}
            placeholder="input here" 
            autoCapitalize="none"
            autoCorrect={false}
            
            onChangeText={(char)=>{(char !== "")? setActive4(true):setActive4(false)}}
            ></TextInput>
 
             <TouchableOpacity style={ (active3 && active4) ? styles.buttonOn:styles.buttonOff} >
                 <Text>Button Qyu</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inputText:{
        padding:14,
        fontSize:14,
        borderColor:'black',
        borderWidth:1,
    },
    inputTextActive:{
        padding:14,
        fontSize:14,
        borderColor:'red',
        borderWidth:1,
    },
    inputTextActive2:{
        padding:14,
        fontSize:14,
        borderColor:'green',
        borderWidth:1,
    },
    buttonOff:{
        backgroundColor:'grey',
        fontSize:14,
        fontWeight:"normal"
    },
    buttonOn:{
        backgroundColor:'green',
        fontSize:14,
        fontWeight:"600"
    }
})

export default TextScreen