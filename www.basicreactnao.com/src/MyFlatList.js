import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const ListScreen = () =>{
    const friendsList =[
        {name : 'Friend#1',
    address:'Karang Anyar', key:'1'},
    {name : 'Friend#2',
    address:'Solo', key:'2'},
    {name : 'Friend#3',
    address:'Malang', key:'3'},
    {name : 'Friend#4',
    address:'Gorontalo', key:'4'},
    {name : 'Friend#5',
    address:'Malaysia', key:'5'},
    {name : 'Friend#6',
    address:'Bandung', key:'6'},
    {name : 'Friend#7',
    address:'Banyuwangi', key:'7'},
    {name : 'Friend#8',
    address:'Probolinggo', key:'8'},
    ];
        
    return(
        <FlatList                                
            data={friendsList}
            renderItem={({item}) => {
                //isi dari argument element adalah ini=> (element) === { item: {name:'',address:''}, index:0}
                //nah kalo isinya argumen adlah item maka isinya gini => ({item}) === {name:'',address:''}
                return(
                <View style={{backgroundColor:'pink'}}>
                    <Text style={styles.myText}>Nama Teman saya adalah = {item.name}</Text>
                    <Text style={styles.myText}>Alamat Teman saya adalah = {item.address}</Text>
                </View>
                )
            }}/>     
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'pink'
    },
    myText:{
        marginVertical:30,
        color:'black',
        fontWeight:"600",
        
    }
});

export default ListScreen;