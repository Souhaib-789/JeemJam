import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'



export default function PostAds({ navigation }) {


    return (
        <View style={styles.container}>
            <View style={styles.headview}>
                <Text style={styles.heading}><FontAwesome5 onPress={() => navigation.goBack()} name='arrow-left' size={18} color={'white'} style={styles.topicon} solid />  Post your ad</Text>
                <View style={styles.miniview}>
                    <FontAwesome name='user-circle-o' size={25} color={'white'} style={styles.topicon} solid onPress={() => navigation.navigate('Profile')} />
                </View>
            </View>
            <TouchableOpacity  onPress={() => navigation.navigate('Ad')}>
                <View style={styles.listelem}>
                <FontAwesome name='plus' size={30} color={'black'} style={styles.topicon} solid onPress={() => navigation.navigate('Profile')} />
                    <Text style={styles.listtxt}>Post an ad </Text><Text style={styles.amount}></Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MyAds')} >
                <View style={styles.listelem}>
                <FontAwesome name='user' size={30} color={'black'} style={styles.topicon} solid  />
                    <Text style={styles.listtxt}>My Ads </Text><Text style={styles.amount}></Text>
                </View>
            </TouchableOpacity>
            <ScrollView style={styles.list}>



            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAF9F6',
        flex: 1,
        
    },
    listelem: {
        backgroundColor: '#F0F0F0',
        width: '60%',
        height: 130,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 1,
        marginVertical: '10%',
        marginHorizontal: '20%',
        elevation: 15,
    },
    amount: {
        fontSize: 18,
        marginLeft: '4%',
        color: 'green'
    },
    empty: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: '40%',
        color: 'black',

    },
    listtxt: {
        fontSize: 20,
        marginLeft: '4%',
        color: 'black'
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
        position: 'relative',
        left: '85%',
        bottom: '50%'
    },
    topicon: {
        margin: '1%'
    },
    heading: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: '5%'
    },
});
