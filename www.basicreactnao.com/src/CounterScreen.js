import React, {useState} from 'react'
import {StyleSheet, Text, View, Button, } from 'react-native'

const CounterScreen = ()=>{

    // let counter = 0
    const [counter, setCounter] = useState(0)

    return(
        <View>
            <Button title='Increase' onPress={()=> {
                setCounter(counter + 1) // ini cuman assign dan replace isi sebelumnya
            }}></Button>
            <Button title='Decrease' onPress={()=> {
                setCounter(counter - 1)
            }}></Button>
            <Text>Nilai Counter = {counter}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

})

export default CounterScreen