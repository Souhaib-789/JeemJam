import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'



export default function MyAds({ navigation }) {

    // const [isLoading, setLoading] = React.useState(true);
    // const [data, setData] = React.useState([]);
    // console.log('AHAAAAAAAAAAAAAAAA++++++>>>>>>', data)
    // React.useEffect(() => {
    //     fetch('https://www.jeemjam.com/api/show-ads/user/Abdul Razzaq')
    //         .then((response) => response.json())
    //         // console.log(response.data)
    //         // .then((json)=>setData(json.getads.filter(u=>u.category== naam)))
    //         .then((json) => setData(json.showAds))
    //         .catch((error) => console.error(error))
    //         .finally(() => setLoading(false));
    // }, []);

    const Mobiles = [
        { id: 1, title: 'Mobile Shop', country: 'Pakistan', category: 'Mobiles', subcategory: 'Oppo', phone: '0988888888', content: 'C2C e-commerce', name: 'Kamran', img: require('../../../../assets/Images/Mobiles/huawei.png') },
        { id: 2, title: 'Mobile Shop', country: 'Pakistan', category: 'Mobiles', subcategory: 'Oppo', phone: '0988888888', content: 'C2C e-commerce', name: 'iPhone', img: require('../../../../assets/Images/Mobiles/kk.png') },
        { id: 3, title: 'Mobile Shop', country: 'Pakistan', category: 'Mobiles', subcategory: 'Oppo', phone: '0988888888', content: 'C2C e-commerce', name: 'Oppo', img: require('../../../../assets/Images/Mobiles/oppo.png') },
        { id: 4, title: 'Mobile Shop', country: 'Pakistan', category: 'Mobiles', subcategory: 'Oppo', phone: '0988888888', content: 'C2C e-commerce', name: 'Huawei', img: require('../../../../assets/Images/Mobiles/huawei.png') },
        { id: 5, title: 'Mobile Shop', country: 'Pakistan', category: 'Mobiles', subcategory: 'Oppo', phone: '0988888888', content: 'C2C e-commerce', name: 'Nokia', img: require('../../../../assets/Images/Mobiles/nokia.png') },
    ]

    return (
        <View style={styles.container}>
            <View style={styles.headview}>
                <Text style={styles.heading}><FontAwesome5 onPress={() => navigation.goBack()} name='arrow-left' size={18} color={'white'} style={styles.topicon} solid />  My Ads</Text>
                <View style={styles.miniview}>
                    <FontAwesome name='user-circle-o' size={25} color={'white'} style={styles.topicon} solid onPress={() => navigation.navigate('Profile')} />
                </View>
            </View>

            <View style={styles.list}>
            <FlatList
                    data={Mobiles}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item, index }) => (
                        <View key={index} style={styles.listelem}>
                        <ScrollView>
                            <ScrollView style={{flexDirection: 'row'}}>
                            {/* <Image source={{ uri: item.img }} style={styles.img} /> */}
                            {/* <Image source={{ uri: item.img }} style={styles.img} />
                            <Image source={{ uri: item.img }} style={styles.img} />
                            <Image source={{ uri: item.img }} style={styles.img} />
                            <Image source={{ uri: item.img }} style={styles.img} /> */}
                             <Image source={ item.img } style={styles.img} />


                            </ScrollView>
                            

                            <Text style={styles.listtxt}>Title  :  {item.title} </Text><Text style={styles.amount}></Text>
                            <Text style={styles.listtxt}>Author    :  {item.author}</Text><Text style={styles.amount}></Text>
                            <Text style={styles.listtxt}>Country  :  {item.country} </Text><Text style={styles.amount}></Text>
                            <Text style={styles.listtxt}>Category  :  {item.category} </Text><Text style={styles.amount}></Text>
                            <Text style={styles.listtxt}>Sub-category  :  {item.sub_category} </Text><Text style={styles.amount}></Text>
                            <Text style={styles.listtxt}>Phone#  :  {item.phone}</Text><Text style={styles.amount}></Text>
                            <Text style={styles.listtxt}>Whatsapp  :  {item.whatsapp}</Text><Text style={styles.amount}></Text>
                            <Text style={styles.listtxt}>Content :  {item.content} </Text><Text style={styles.amount}></Text>

                        </ScrollView>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginLeft: '10%' }}>
                            {item.aproval == 'yes' ?
                                <Text style={{ marginRight: '10%', fontSize: 15, fontWeight: 'bold', marginVertical: '2%', color: 'green' }}>Approved</Text>
                                :
                                <Text style={{ marginRight: '10%', fontSize: 15, fontWeight: 'bold', marginVertical: '2%', color: 'red' }}>Not Approved</Text>
                             }

                            <FontAwesome name='edit' size={30} color={'#0000a5'} onPress={() => navigation.navigate('EditAd', item)} solid />
                            <FontAwesome name='trash' size={30} color={'#0000a5'} solid />
                        </View>
                    </View>
                    )}

                />
                


            </View>
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
        width: '80%',
        height: 450,
        borderRadius: 8,
        justifyContent: 'center',
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 1,
        marginVertical: '10%',
        marginHorizontal: '10%',
        elevation: 15,
        padding: 20
    },
    amount: {
        fontSize: 18,
        marginLeft: '4%',
        color: 'green'
    },
    img: {
        width: 90,
        height: 90,
        marginHorizontal: '3%',
        marginBottom: '5%'
    },
    empty: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: '40%',
        color: 'black',

    },
    listtxt: {
        fontSize: 18,
        marginLeft: '4%',
        marginTop: '2%',
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