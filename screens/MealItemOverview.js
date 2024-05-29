import {useState,useEffect} from 'react'
import { View,Text,Image, StyleSheet } from 'react-native'
import { MEALS } from '../Data/dummy-data'

const MealItemOverview = ({navigation,route}) => {
    const [item,setItem]=useState({})
    useEffect(()=>{
        const a=MEALS.find((meal)=>meal.id===route.params.mealItemId)
        setItem(a)
    },[])
  return (
    <View style={styles.container}>
        <Image source={{uri:item?.imageUrl}} style={styles.image}/>
        <Text style={styles.title}>{item?.title}</Text>
            <View style={styles.details}>
                <Text style={styles.detailText}>{item?.affordability}</Text>
                <Text  style={styles.detailText}>{item?.duration}m</Text>
                <Text  style={styles.detailText}>{item?.complexity}</Text>
            </View>
            <View>
                <Text style={styles.headerText}>Ingredients: </Text>
                <Text style={styles.headerDetails}>{item?.ingredients}</Text>
                {/* {item?.ingredients.map((ingre)=>{
                    return(
                        <Text>{ingre}</Text> 
                    )
                })} */}
            </View>
            <View>
                <Text style={styles.headerText}>Steps: </Text>
                <Text style={styles.headerDetails}>{item?.steps}</Text>
                {/* {item?.ingredients.map((ingre)=>{
                    return(
                        <Text>{ingre}</Text> 
                    )
                })} */}
            </View>
    </View>
  )
}
const styles=StyleSheet.create({
    image:{
        width:'100%',
        height:250,
        borderRadius:8
    },
    container:{
        margin:'2%'
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
        color:'white',
        marginBottom:5,
        marginTop:5,
        marginLeft:'auto',
        marginRight:'auto'
    },
    details:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginLeft:20,
        marginRight:20,
        marginBottom:10
    },
    detailText:{
        color:'white',
        fontSize:17
    },
    headerText:{
        color:'yellow',
        fontWeight:'bold',
        fontSize:19,
        marginBottom:10
    },
    headerDetails:{
        color:'white',
        paddingLeft:10,
        paddingRight:10,
        fontSize:17
    }
})
export default MealItemOverview