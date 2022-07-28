import React from 'react'
import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { contactUs } from '../../Apis/Api';
import { Loading } from '../Components/Loader';


export default function ContactUs({ navigation }) {
    const [subject, setsubject] = React.useState()
    const [message, setmessage] = React.useState()
    const [email, setemail] = React.useState()
    const [phone, setphone] = React.useState()
    const [name, setname] = React.useState()
    const [loading, setloading] = React.useState(false)
    const [msg, setmsg] = React.useState('')


    const sendMessage = async () => {
            setloading(true)
            setmsg('')
            let data = {}
            data['name'] = name
            data['email'] = email
            data['phone_number'] = phone
            data['subject'] = subject
            data['message'] = message

            try {
                const res = await contactUs(data)
                console.log(res);
                console.log(res.data.message)

                if (res.data.message == 'Your Message has been send Successfully!') {
                    console.log('Contact message sent successfully!')
                    alert('Your Message has been send Successfully!')
                    setloading(false)
                    navigation.navigate('Profile')
                }
                else {
                    setmsg(res.data.message)
                    setloading(false)
                }
            } catch (error) {
                console.log('Error arrived', error.message)
                setloading(false)
                }
    }


    return (
        <View style={styles.container}>
            <View style={styles.headview}>
                <Text style={styles.heading}><FontAwesome5 onPress={() => navigation.goBack()} name='arrow-left' size={18} color={'white'} style={styles.topicon} solid />  Contact Us</Text>
            </View>
            <View style={styles.iconview}>
                <FontAwesome5 name='envelope' size={60} color={'black'} style={styles.topicon} solid />
            </View>
            <ScrollView style={styles.View1}>
            <Text style={{ color: 'red' }}>{msg}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setname}
                    value={name}

                    placeholder=" NAME"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setemail}
                    value={email}
                    placeholder=" EMAIL"
                />
                 <TextInput
                    style={styles.input}
                    onChangeText={setphone}
                    value={phone}
                    placeholder=" PHONE"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setsubject}
                    value={subject}
                    placeholder=" SUBJECT"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setmessage}
                    value={message}
                    placeholder=" MESSAGE"
                />
                <Loading visible={loading} />
                <TouchableOpacity style={styles.login} onPress={sendMessage}
                >
                    <Text style={styles.logintxt}>SEND</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAF9F6',
        flex: 1
    },
    View1: {
        padding: 20,
        marginBottom: '10%'
    },
    input: {
        width: '90%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        margin: '4%'
    },
    login: {
        backgroundColor: 'blue',
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '50%',
        marginTop: '15%',
        borderRadius: 10
    },
    logintxt: {
        padding: 10,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    signup: {
        fontSize: 15,
        color: 'black'
    },
    btntxt: {
        color: 'black',
        fontSize: 17
    },
    headview: {
        backgroundColor: '#0000a5',
        height: '8%',
        padding: 10,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    heading: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: '3%'
    },
    iconview: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '8%'
    }





});



