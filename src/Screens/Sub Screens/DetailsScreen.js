import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, Touchable, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { options } from './AllAdsScreen';




export default function DetailsScreen({ navigation, route }) {
    // const images = options.filter(item=>item.Title==selectedItem.Title)
    // console.log(images);

    const [selectedItem, setSelectedItem] = React.useState(null)
    const [profileimage, setprofileimage] = React.useState('https://icon-library.com/images/user-image-icon/user-image-icon-18.jpg');
    React.useEffect(() => {
        let { selectedItem } = route.params
        setSelectedItem(selectedItem)
    }, [])




    return (
        <View style={styles.container}>
            <View style={styles.headview}>
                <Text style={styles.heading}><FontAwesome5 onPress={() => navigation.goBack()} name='arrow-left' size={18} color={'white'} style={styles.topicon} solid />  Details</Text>
                <View style={styles.miniview}>
                    <FontAwesome name='user-circle-o' size={25} color={'white'} style={styles.topicon} solid onPress={() => navigation.navigate('Profile')} />
                </View>
            </View>
            <ScrollView style={styles.listelem} >

                <TouchableOpacity
                    onPress={() => navigation.navigate('ShowingInages', {
                        selectedImage: selectedItem
                    })}>

                    <Image style={styles.img} source={{ uri: selectedItem?.img }}
                    />
                    <FontAwesome name='angle-double-right' size={60} color={'black'} style={{ alignSelf: "flex-end", marginTop: 50, marginEnd: 20, position: 'absolute' }} solid onPress={() => navigation.navigate('ShowingInages', {
                        selectedImage: selectedItem
                    })} />
                </TouchableOpacity>
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.destxt}>{selectedItem?.content}</Text>
                    <Text style={styles.destxt}>{selectedItem?.sub_category}</Text>
                </View>
                <View style={styles.ContantContainer}>
                    <View style={styles.userContainer}>

                        <Image source={{ uri: profileimage }} style={styles.Profileimg} />


                        <Text style={[styles.ContactText, { marginRight: 130 }]}>{selectedItem?.author}</Text>

                    </View>
                    <View style={styles.WhatsAppContainer}>
                        <FontAwesome name='whatsapp' size={25} color={'white'} style={styles.topicon} solid />
                        <Text style={[styles.ContactText, { marginRight: 100 }]}>{selectedItem?.whatsapp}</Text>
                    </View>
                    <View style={styles.NumberContainer}>
                        <MaterialIcons name='add-call' size={25} color={'white'} style={styles.topicon} solid />
                        <Text style={[styles.ContactText, { marginRight: 100 }]}>{selectedItem?.phone}</Text>
                    </View>












                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        flex: 1
    },
    ContantContainer: {
        backgroundColor: '#D3D3D3',
        height: "90%",
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginVertical: 20,


    },
    userContainer: {
        backgroundColor: '#1E90FF',
        height: 50,
        width: '90%',
        marginVertical: 20,
        justifyContent: "space-around",
        alignItems: 'center',
        borderRadius: 4,
        flexDirection: 'row'

    },
    NumberContainer: {
        backgroundColor: '#4169E1',
        height: 50,
        width: '90%',
        marginVertical: 20,
        justifyContent: "space-around",
        alignItems: 'center',
        borderRadius: 4,
        flexDirection: 'row'

    },
    ContactText: {
        fontSize: 20,
        margin: "1%",
        color: 'white',
        fontWeight: '600'




    },
    WhatsAppContainer: {
        backgroundColor: '#8A9A5B',
        height: 50,
        width: '90%',
        marginVertical: 20,
        justifyContent: "space-around",
        alignItems: 'center',
        borderRadius: 4,
        flexDirection: 'row'

    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
        height: 60,
        width: '100%',
    },
    ImageStyle: {
        padding: 10,
        margin: 20,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    listelem: {
        backgroundColor: '#D3D3D3',
        width: '100%',
        height: "90%",


        padding: 5,
        elevation: 5,


    },
    img: {
        height: 160,
        width: "100%",

        resizeMode: 'stretch',
        alignItems: 'center',
    },
    imgx: {
        height: "80%",
        width: 70,
        marginLeft: '2%',
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    picview: {
        flexDirection: 'row',
        padding: 10
    },
    topimg: {
        height: 30,
        width: 50,
        marginLeft: '5%',
    },
    headingtxt: {
        fontSize: 18,
        margin: "1%",
        color: 'black',
        fontWeight: '800'
    },
    destxt: {
        fontSize: 17,
        marginLeft: "1%",
        color: 'black',
        width: "100%",
        marginVertical: 20,


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
        left: 310,
        bottom: '12%',
        flexDirection: 'row'
    },
    topicon: {
        margin: '1%'
    },
    heading: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: '3%'
    },

    subview: {
        marginTop: '10%',
    },
    pay: {
        backgroundColor: '#D4F1F4',
        width: '40%',
        height: 100,
        borderRadius: 20,
        elevation: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,

    },
    middleheader: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    middletxt: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
    },
    pop: {
        borderColor: 'black',
        borderWidth: 1,
        marginTop: '13%'
    },
    Profileimg: {
        height: '170%',
        width: '30%',
        marginEnd: 100,

        borderRadius: 90
    }


});



