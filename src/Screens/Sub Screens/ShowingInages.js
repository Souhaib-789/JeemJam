import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, Touchable, TouchableOpacity, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'



const ShowingInages = ({navigation, route}) => {
    const { screenwidth } = Dimensions.get('window');
   
    
   
    const [selectedImage,setselectedImage] = React.useState(null)
    const [profileimage, setprofileimage] = React.useState('https://icon-library.com/images/user-image-icon/user-image-icon-18.jpg');
   
    React.useEffect(()=>{
        let {selectedImage} = route.params
        setselectedImage(selectedImage)
        console.log(selectedImage);
    },[])
    const AdsImg=selectedImage;
   
    
  return (
   
   
     <ScrollView 
     
    
     horizontal= {true}
    
    >
        
        <View style={styles.listelem}>
        
       

                            <Image style={styles.img} source={selectedImage?.Mainimg} 
                           />
                           <FontAwesome name='angle-double-right' size={60} color={'black'} style={{paddingLeft:290, position:'absolute', paddingBottom:120}} solid 
                              />
                            <View style={styles.dotView}>
                                  <FontAwesome name='circle' size={15} color={'green'} style={{margin:5}} solid />
                                  <FontAwesome name='circle' size={15} color={'white'} style={{margin:5}} solid />
                                  <FontAwesome name='circle' size={15} color={'white'} style={{margin:5}} solid />
                                  <FontAwesome name='circle' size={15} color={'white'} style={{margin:5}} solid />
                                  <FontAwesome name='circle' size={15} color={'white'} style={{margin:5}} solid />

                                  </View>

                                
                                 
                                    </View>

                                   
                                

                                   

                                    <View style={styles.listelem}>
                                    <Image style={styles.img} source={selectedImage?.img1} 
                                    />
                                     <FontAwesome name='angle-double-right' size={60} color={'black'} style={{paddingLeft:290, position:'absolute', paddingBottom:120}} solid 
                             />
                                    <View style={styles.dotView}>
                                  <FontAwesome name='circle' size={15} color={'white'} style={{margin:5}} solid />
                                  <FontAwesome name='circle' size={15} color={'green'} style={{margin:5}} solid />
                                  <FontAwesome name='circle' size={15} color={'white'} style={{margin:5}} solid />
                                  <FontAwesome name='circle' size={15} color={'white'} style={{margin:5}} solid />
                                  <FontAwesome name='circle' size={15} color={'white'} style={{margin:5}} solid />

                                  </View></View>

                                     <View style={styles.listelem}>
                                    <Image style={styles.img} source={selectedImage?.img2} 
                                    />
                                     <FontAwesome name='angle-double-right' size={60} color={'black'} style={{paddingLeft:290, position:'absolute', paddingBottom:120}} solid 
                              />
                                    <View style={styles.dotView}>
                                  <FontAwesome name='circle' size={15} color={'white'} style={{margin:5}} solid />
                                  <FontAwesome name='circle' size={15} color={'white'} style={{margin:5}} solid />
                                  <FontAwesome name='circle' size={15} color={'green'} style={{margin:5}} solid />
                                  <FontAwesome name='circle' size={15} color={'white'} style={{margin:5}} solid />
                                  <FontAwesome name='circle' size={15} color={'white'} style={{margin:5}} solid />

                                  </View></View>

                                     <View style={styles.listelem}>
                                    <Image style={styles.img} source={selectedImage?.img3} 
                                    />
                                     <FontAwesome name='angle-double-right' size={60} color={'black'} style={{paddingLeft:290, position:'absolute', paddingBottom:120}} solid 
                              />
                                    <View style={styles.dotView}>
                                  <FontAwesome name='circle' size={15} color={'white'} style={{margin:5}} solid />
                                  <FontAwesome name='circle' size={15} color={'white'} style={{margin:5}} solid />
                                  <FontAwesome name='circle' size={15} color={'white'} style={{margin:5}} solid />
                                  <FontAwesome name='circle' size={15} color={'green'} style={{margin:5}} solid />
                                  <FontAwesome name='circle' size={15} color={'white'} style={{margin:5}} solid />

                                  </View></View>

                                     <View style={styles.listelem}>
                                    <Image style={styles.img} source={selectedImage?.img4} 
                                    /> 
                                     <FontAwesome name='angle-double-right' size={60} color={'black'} style={{paddingLeft:290, position:'absolute', paddingBottom:120}} solid 
                               />
                                    <View style={styles.dotView}>
                                  <FontAwesome name='circle' size={15} color={'white'} style={{margin:5}} solid />
                                  <FontAwesome name='circle' size={15} color={'white'} style={{margin:5}} solid />
                                  <FontAwesome name='circle' size={15} color={'white'} style={{margin:5}} solid />
                                  <FontAwesome name='circle' size={15} color={'white'} style={{margin:5}} solid />
                                  <FontAwesome name='circle' size={15} color={'green'} style={{margin:5}} solid />

                                  </View>
                                   </View>


               
                   
                       
                            




</ScrollView>
   
  )
}

export default ShowingInages

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1
    },
    
    listelem: {
        
        width: '100%',
        alignItems: 'flex-start',
        backgroundColor: 'black',
        flex: 1,
        marginTop:20,
        marginHorizontal:2,
        justifyContent: 'center',
    },
    img: {
        height: '60%',
        width: '90%',
        marginEnd:340,
        backgroundColor: 'black',
        resizeMode: 'stretch',
        marginHorizontal:15,
       
    },
    dotView: {
       
        marginLeft: '35%',
        resizeMode: 'stretch',
        alignItems: 'center',
        flexDirection:'row',
        marginTop: 50,
    },
    picview:{
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
       margin:"1%",
        color: 'black',
        fontWeight:'800'
    },
    destxt: {
        fontSize: 10,
       marginLeft:"1%",
        color: 'black',
        width:"34%"
       
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
        height: '90%',
        width: '90%',
       marginEnd:100,
        
        borderRadius: 90}



});
