import * as React from 'react';
import { View, Image, StyleSheet, ImageBackground } from 'react-native';



export default function WelcomeScreen({ navigation }) {


    React.useEffect(() => {
        setTimeout(() => navigation.navigate('Countries'), 1000);
    }, [])

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/Images/welcome.png')} style={styles.img} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    img: {
        height: '100%',
        width: '100%',

    },
});



