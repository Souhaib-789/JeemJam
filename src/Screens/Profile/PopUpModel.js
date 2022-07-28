import { View, FlatList, TouchableOpacity, Dimensions ,Text,Button, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState } from 'react';


export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

const PopUpModal = (props) => {
    const [selectedIndex, setSelectedIndex] = useState();
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                    setSelectedIndex(index)
                    setTimeout(()=>{
                        props.changeModelVisibility(false)

                    },300)
                    
                   
                    
                } }
                style={{
                    flex:1,
                    paddingVertical:10,
                   
                   
                
                 


                    width: "100%", marginTop: index == 0 ? "8%" : 0,
                    margin: 5, alignSelf: "center", height: "60%",
                    
                    alignItems: "center",
                    flexDirection: "row",

                }}
            >
                <View style={{
                    marginStart: "5%",
                    width: "15%",
                    height: "99%",
                    borderRadius: 50,
                    borderWidth: 1,
                    borderColor: "black",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <View style={{ width: "80%", height: "80%", alignSelf:'center' , backgroundColor: "#FF8C00", borderRadius: 10, display: selectedIndex == index ? "flex" : "none" }}></View>
                </View>
                <View >
                    <Text style={styles.TextStyle }>{item.text}</Text>
              </View>
            </TouchableOpacity>
        )
    }
  return (
    <View style={[styles.model, ] }>
       
        {/* <Button onPress={() => props.changeModelVisibility(false) } title={"heeeeeee"}/> */}
        <FlatList
            
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
             style={{flex:1,marginVertical:"7%", height:"100%"}}
                data={[{ id: "0", text: "Light Mode"}, { id: "1", text: "Dark Mode" },]}
                keyExtractor={(item, index) => { item.id }}
                renderItem={renderItem}
                

               
            />
            
        
    </View>
  )
}
const styles= StyleSheet.create({
    model:{
        
        backgroundColor:'white',
        borderRadius:4,
       
        margin:10,
        width:"70%",
        height:"25%",
        alignSelf:'center',
        alignItems:'center'

       
    },
    heading:{
        backgroundColor:'#FFFFFF',
        borderRadius:4,
        alignSelf:"center",
        width:"100%",
        height:"15%",
        alignItems:'center',
        justifyContent:'center'

    },
    headinhTextStyle:{
        color:'red',
        fontSize:20,
        alignSelf:'center',
        justifyContent:'center'
    },
    TextStyle:{
        fontSize:18,
        color:"black",
        flex:1,
        
       
        marginLeft:10

    }
    
})

export default PopUpModal
