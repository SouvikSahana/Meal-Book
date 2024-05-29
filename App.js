import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, Dimensions, Platform,} from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import MealsOverview from './screens/MealsOverview';
import MealItemOverview from './screens/MealItemOverview';

const Stack= createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style='light' />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='MealCategories' component={CategoryScreen} options={{
          title:"Meal Category",
          headerStyle:{backgroundColor:'#7C2714'},
          headerTintColor:'white',
          contentStyle:{backgroundColor:'#975B4F'}
        }}/>
        <Stack.Screen name='MealOverview' component={MealsOverview} options={({route,navigation})=>{
          return {
            title: route.params.categoryId,
          headerStyle:{backgroundColor:'#7C2714'},
          headerTintColor:'white',
          contentStyle:{backgroundColor:'#975B4F'}
          }
        }}/>
        <Stack.Screen name='MealDetailOverview' component={MealItemOverview} options={({route,navigation})=>{
          return {
            title: route.params.title,
          headerStyle:{backgroundColor:'#7C2714'},
          headerTintColor:'white',
          contentStyle:{backgroundColor:'#975B4F'}
          }
        }}/>
      </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 50,
  },

});
