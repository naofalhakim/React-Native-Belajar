import React , {useState}from 'react'
import {StyleSheet, Button, View, FlatList} from 'react-native'

const ColorScreen =()=>{
    const [colors, setColors] = useState([])

    return(
    <View>
        <Button title='Add Color' onPress={()=> 
            setColors([...colors, randomRGB()]) // didalam setColors ini dia add/ append nilai color baru kedalam colors, yang di dapat dari fungsi randomRGB, cara addnya agak sedikit aneh, dengan nambahin 3 titik", ini karena kita lagi make state, bukan variable biasa, 
                                                // state ini digunakan ketika kita butuh perubahan instan, contohnya ketika melakukan input atau perubahan pada sebuah variable, maka saat itu juga dia akan berubah dan diupdate di view
            }></Button>
        <FlatList 
        keyExtractor ={(item)=>item}  // ini ngasih key isinya item
        data={colors} renderItem={
            ({item})=>{
                return(
                    <View style={[style.colorBox,{backgroundColor:item}]}></View>
                )
            }}></FlatList>
    </View>
    )
};

const randomRGB = () =>{
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`
};


const style = StyleSheet.create({
    colorBox:{
        width:100,
        height:100,
    }
})

export default ColorScreen