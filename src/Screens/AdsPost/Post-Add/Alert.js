import React, {useEffect } from "react";
import { Text, Image, View,StyleSheet } from 'react-native';



export default function Alert({ navigation }) {


  useEffect(() => {
    setTimeout(() => navigation.navigate('Home'), 3000);
  }, [])

  return (
    <View style={styles.container}>
      <Image source={require('../../../../assets/Images/bluecheck.png')} style={styles.img} />
      <View>
        <Text style={styles.heading}>
          Your post details has been shared succesfully !
        </Text>
      </View>
    </View>



  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20
  },
  img: {
    marginHorizontal: '25%',
    marginVertical: '15%',
    height: 195,
    width: '55%'
  },
  heading: {
    fontSize: 30,
    color: '#00008B',
    margin: '10%',
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 40
  },
  headingx: {
    margin: '3%',
    fontSize: 18,
    color: 'black',
    marginHorizontal: '10%'
  },
});