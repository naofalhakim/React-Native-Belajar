import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyComponents from './src/MyComponents';
import MyFlatList from './src/MyFlatList';
import HomeScreen from './src/HomeScreen';
import ImageScreen from './src/ImageScreen';
import CounterScreen from './src/CounterScreen';
import ColorScreen from './src/ColorScreen';
import SquareScreen from './src/SquareScreen';
import TextScreen from './src/TextScreen';
import BoxScreen from './src/components/BoxScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
  {
    Home: MyComponents,
    Details: MyFlatList,
    HomeScreen: HomeScreen,
    ImageScreen: ImageScreen,
    CounterScreen: CounterScreen,
    ColorScreen: ColorScreen,
    SquareScreen: SquareScreen,
    TextScreen: TextScreen,
    BoxScreen: BoxScreen,
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

