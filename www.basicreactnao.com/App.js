import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyComponents from './src/MyComponents';
import MyFlatList from './src/MyFlatList';
import HomeScreen from './src/HomeScreen';
import ImageScreen from './src/ImageScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
  {
    Home: MyComponents,
    Details: MyFlatList,
    HomeScreen: HomeScreen,
    ImageScreen: ImageScreen,
  },
  {
    initialRouteName: 'HomeScreen',
    defaultNavigationOptions: {
      title:'App',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default createAppContainer(AppNavigator);

const style = StyleSheet.create({
  container:{
    flex:1,
    padding:10
  }
})

