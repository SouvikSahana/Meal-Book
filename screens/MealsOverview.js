import {View,Text, FlatList, Image, StyleSheet,Pressable} from 'react-native'
import { CATEGORIES, MEALS } from '../Data/dummy-data'
import { useState, useEffect } from 'react'

const renderMeal=(itemData,navigation)=>{
    const handlePress=()=>{
        navigation.navigate('MealDetailOverview',{mealItemId:itemData.id, title:itemData.title})
    }
    return(
        <Pressable style={styles.itemContainer} onPress={handlePress}>
            <Image source={{uri:itemData.imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{itemData.title}</Text>
            <View style={styles.details}>
                <Text>{itemData.affordability}</Text>
                <Text>{itemData.duration}m</Text>
                <Text>{itemData.complexity}</Text>
            </View>
            </Pressable>
    )
}
const MealsOverview = ({navigation,route}) => {
    const [displayedData,setDisplayedData] = useState([])
   

    useEffect(()=>{
        const filter=route.params.categoryId;
        const data= MEALS.filter((meal)=>meal.categoryIds.indexOf(filter)>=0)
        const categoryTitel= CATEGORIES.find((data=>data.id===filter)).title
        setDisplayedData(data)
        navigation.setOptions({
            title: categoryTitel
        });
    },[])
  return (
   <View>
    <FlatList data={displayedData} renderItem={(itemData)=>renderMeal(itemData.item,navigation)} />
   </View>
  )
}

const styles=StyleSheet.create({
    image:{
        width:'100%',
        height:250
    },
    title:{
        fontWeight:'bold',
        fontSize:17,
        color:'grey',
        marginBottom:5,
        marginTop:5,
        marginLeft:'auto',
        marginRight:'auto'
    },
    itemContainer:{
        // marginLeft:'auto',
        // marginRight:'auto',
        // width:'90%'
        margin:'3%',
        backgroundColor:'white',
        borderRadius:8,
        overflow:'hidden',
        elevation:8
    },
    details:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginLeft:20,
        marginRight:20,
        marginBottom:10
    }
})
export default MealsOverview