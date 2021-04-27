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