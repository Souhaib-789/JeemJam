import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, Touchable, TouchableOpacity, FlatList } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


export default function AllAdsScreen({ navigation, route }) {
    const [isLoading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const naam = route.params;
    console.log(data);

    React.useEffect(() => {
        fetch('https://www.jeemjam.com/api/get-ads-fetching')
            .then((response) => response.json())
            .then((json)=>setData(json.getads.filter(u=>u.category== naam)))
            // .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    



    // const options = [
    //     { id: 1,
    //     Title: 'KFC jobs in Dubai', 
    //     Author:"John",
    //     category:"Mobiles",
    //     subCate:"Huawei",
    //     Country:"Pakistan",
    //     des:"Urgently looking for staff recruitment. Store helper: 2000 AED Security guard: 3000 AED Store keeper 3200 AED. Contact on the given number.", 
    //     Mainimg: require('../../../assets/Images/ex.jpg'), 
    //     img1: require('../../../assets/Images/ex1.jpeg'),
    //     img2: require('../../../assets/Images/ex2.jpg'),
    //     img3: require('../../../assets/Images/ex3.jpg'),
    //     img4: require('../../../assets/Images/ex4.jpg'),
    //     phoneno: "+92 3456789123",
    //     WhatsAppeno: "+92 3456789123" },
    //     { id: 2,
    //         Title: 'Need English Teacher (Graduates & NQTs welcome)  in Dubai', 
    //         Author:"Mehwish",
    //         category:"Jobs",
    //         subCate:"Education & Teaching",
    //         Country:"UAE",
    //         des:"The successful candidate will have:\nA B.Ed or subject related degree and PGCE / PGDE or equivalent\nProven experience of teaching English at key stage 3-4 (NQTs welcome)\nSeptember availability\nThe ability to share your outstanding practice\nA creative and enthusiastic approach both in and out of the classroom\nExcellent IT and interpersonal communication skills to work closely with students and parent. \nPerson\nAll positions attract an excellent remuneration package including:\nCompetitive tax-free salary, individual fully furnished accommodation, free schooling, private medical insurance, annual airfares to country of residence and end of Service Gratuity.", 
    //         Mainimg: require('../../../assets/Images/example1.jpg'), 
    //         img1: require('../../../assets/Images/example.jpg'),
    //         img2: require('../../../assets/Images/example2.jpg'),
    //         img3: require('../../../assets/Images/example3.jpg'),
    //         img4: require('../../../assets/Images/example4.jpg'),
    //         phoneno: "+92 3456789123",
    //         WhatsAppeno: "+92 3456789123" },
    //         { id: 3,
    //             Title: 'KFC jobs in Dubai', 
    //             Author:"Essa",
    //             category:"SERVICES",
    //             subCate:"Business",
    //             Country:"Pakistan",
    //             des:"Urgently looking for staff recruitment. Store helper: 2000 AED Security guard: 3000 AED Store keeper 3200 AED. Contact on the given number.", 
    //             Mainimg: require('../../../assets/Images/ex1.jpeg'), 
    //             img1: require('../../../assets/Images/ex.jpg'),
    //             img2: require('../../../assets/Images/ex2.jpg'),
    //             img3: require('../../../assets/Images/ex3.jpg'),
    //             img4: require('../../../assets/Images/ex4.jpg'),
    //             phoneno: "+92 3453339123",
    //             WhatsAppeno: "+92 3453339123" },
    //             { id: 4,
    //                 Title: 'KFC jobs in Dubai', 
    //                 Author:"Allina",
    //                 category:"Miscellaneous",
    //                 subCate:"Furniture",
    //                 Country:"Iraq",
    //                 des:"Urgently looking for staff recruitment. Store helper:2000 AED Security guard: 3000 AED Store keeper 3200 AED. Contact on the given number.", 
    //                 Mainimg: require('../../../assets/Images/service.png'), 
    //                 img1: require('../../../assets/Images/service.png'),
    //                 img2: require('../../../assets/Images/service.png'),
    //                 img3: require('../../../assets/Images/service.png'),
    //                 img4: require('../../../assets/Images/service.png'),
    //                 phoneno: "+92 3456789555",
    //                 WhatsAppeno: "+92 3456789555" },
    //                 { id: 5,
    //                     Title: 'KFC jobs in Dubai', 
    //                     Author:"Danish",
    //                     category:"JOBS",
    //                     subCate:"Driver",
    //                     Country:"Saudia",

    //                     des:"Urgently looking for staff recruitment. Store helper: 2000 AED Security guard: 3000 AED Store keeper 3200 AED. Contact on the given number.", 
    //                     Mainimg: require('../../../assets/Images/notebook.jpg'), 
    //                     img1: require('../../../assets/Images/notebook.jpg'),
    //                     img2: require('../../../assets/Images/notebook.jpg'),
    //                     img3: require('../../../assets/Images/notebook.jpg'),
    //                     img4: require('../../../assets/Images/notebook.jpg'),
    //                     phoneno: "+92 3456789124",
    //                     WhatsAppeno: "+92 3456789124" },

    //     ]
// const gh = data.getads;
// console.log(gh)
    // const CurrentData = data.getads.filter(u => u.category == 'cars')
    // console.log('Yeh raha apna data =======>' , CurrentData)

    return (
        <View style={styles.container}>
            <View style={styles.headview}>
                <Text style={styles.heading}><FontAwesome5 onPress={() => navigation.goBack()} name='arrow-left' size={18} color={'white'} style={styles.topicon} solid />  Available Ads</Text>
                <View style={styles.miniview}>
                    <FontAwesome name='user-circle-o' size={25} color={'white'} style={styles.topicon} solid onPress={() => navigation.navigate('Profile')} />
                </View>
            </View>
            <View style={styles.list}>
        
                {/* {isLoading ? <Text>Loading...</Text> : */}

                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item, index }) => (
                        <View key={index} style={styles.subview}>
                            <View  style={{ padding: 15, }}>
                                <View style={styles.listelem}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('ShowingInages', {
                                            selectedImage: item
                                        })}>
                                        <Image style={styles.img} source={{uri: item.img}} />
                                    </TouchableOpacity>
                                    <View>
                                        <Text style={styles.headingtxt}>{item.title}</Text>
                                        <Text style={styles.destxt}>{item.country}</Text>
                                        <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen', { selectedItem: item })}  >
                                            <Text style={{ color: 'blue', fontWeight: '600', fontSize: 16, marginLeft: "1%", }} >More Show </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                        </View>
                    )}

                />

                {/* } */}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        flex: 1
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
        backgroundColor: 'white',
        width: '100%',
        height: "30%",
        borderRadius: 8,
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 1,
        padding: 5,
        elevation: 5,
        flex: 1,
        flexDirection: "row"
    },
    img: {
        height: 100,
        width: 100,
        marginLeft: '5%',
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
        fontWeight: '800',
        width: 200
    },
    destxt: {
        fontSize: 10,
        marginLeft: "1%",
        color: 'black',
        width: 200

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
    }


});



