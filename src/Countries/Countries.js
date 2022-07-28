import React, { useState } from "react";
import { Text, Image, View, StyleSheet, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { data } from "./Countries-Data";


export default function Countries({ navigation }) {

    const [country, setcountry] = useState();
    const selectHandler = (value) => {
        setcountry(value);
        console.log(country )
    }
   
    return (
        <View style={styles.container}>
            <View style={styles.headview}>
                <Text style={styles.heading}>
                    <FontAwesome5 onPress={() => navigation.goBack()} name='arrow-left' size={18} color={'white'} style={styles.topicon} solid />  Choose Country</Text>
            </View>
            <ScrollView style={styles.list}>
                {data.map((item, index) => {
                    return (
                        <Pressable
                            style={
                                item.name === country ? styles.selected : styles.unselected
                            } key={index}
                            onPress={()=>navigation.navigate("Home",{SelectedCountry:item})}>
                            <View style={styles.optionview}>
                                <Image source={item.img} style={styles.img} />
                                <Text style={
                                    item.name === country ? styles.optionx : styles.option
                                }> {item.name}</Text>
                            </View>
                        </Pressable>
                    );
                })}
               
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAF9F6',
        flex: 1
    },
    headview: {
        backgroundColor: '#0000a5',
        height: '8%',
        padding: 10,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    miniview: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    icon: {
        marginLeft: '5%',
    },
    heading: {
        fontSize: 20,
        color: 'white',
        marginLeft: '2%'
    },
    list: {
        padding: 20,
        marginBottom: '10%'
    },
    headingx: {
        margin: '3%',
        fontSize: 18,
        color: 'black',
        marginHorizontal: '10%',
    },
    headingxx: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#F08000',
    },
    subview: {
        marginTop: '15%',
        backgroundColor: 'white',
        width: '95%',
        height: 350,
        elevation: 10,
        borderRadius: 20,
        marginBottom: '3%',
        padding: 20
    },
    bottomcard: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: '5%'
    },
    unselected: {
        backgroundColor: '#eee',
        margin: 5,
        borderRadius: 10,

    },
    selected: {
        backgroundColor: '#FFFDD0',
        margin: 6,
        padding: 8,
        borderRadius: 10,

    },
    option: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        marginLeft: '5%'
    },
    optionx: {
        fontSize: 21,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: '5%'
    },
    img: {
        width: 50,
        height: 30,
    },
    optionview: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },


});