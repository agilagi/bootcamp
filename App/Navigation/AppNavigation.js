import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../Containers/HomeScreen'
import AddExpenseScreen from '../Containers/AddExpenseScreen'

const Stack = createStackNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LaunchScreen">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddExpense" component={AddExpenseScreen} options={{
          title: "Tambah Pengeluaran Baru"
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
