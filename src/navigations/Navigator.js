<<<<<<< HEAD
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import List from '../screens/List'
import Detail from '../screens/Detail'

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown:false
}

const HomeStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>

            <Stack.Screen name="List" component={List}/>
            <Stack.Screen name="Detail" component={Detail}/>
        </Stack.Navigator>
    )
}
export default HomeStackNavigator;
||||||| empty tree
=======
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/Home'
import Detail from '../screens/Detail'

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown:false
}

const HomeStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Detail" component={Detail}/>
        </Stack.Navigator>
    )
}
export default HomeStackNavigator;
>>>>>>> cdc9b16b7e2e9c3b4591103de2c69f226265c150
