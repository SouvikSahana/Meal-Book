import {View, StyleSheet, FlatList, Pressable, Text} from 'react-native'
import {CATEGORIES} from "../Data/dummy-data"

const renderCategoryItem=(itemData,navigation)=>{
    const handleItem=()=>{
        return navigation.navigate("MealOverview", {
            categoryId: itemData.id
        })
    }
    return (
        <View style={styles.gridItem}>
            <Pressable onPress={handleItem} style={{flex:1,backgroundColor:itemData.color, borderRadius:8}} android_ripple={{color:'#ccc'}}>
                <View style={styles.innerContainer}>
                    <Text style={styles.fontStyle}>{itemData.title}</Text>
                </View>
            </Pressable>
        </View>
    )
}
const CategoryScreen = ({navigation}) => {
  return (
   <FlatList data={CATEGORIES} keyExtractor={(item,index)=>item.id}  numColumns={2} renderItem={(itemData)=> renderCategoryItem(itemData.item, navigation)}/>
  )
}

const styles= StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width:0, height:2},
        shadowRadius: 8,
        backgroundColor:'white',
        overflow: 'hidden'
    },
    innerContainer:{
        flex:1,
        padding:16,
        justifyContent:'center',
        alignItems:'center'
    },
    fontStyle:{
        fontWeight:'bold',
        fontSize:18
    }
})
export default CategoryScreen