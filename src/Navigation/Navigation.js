import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Countries from '../Countries/Countries';
import Home from '../Screens/Home';
import Mobile from '../Screens/Sub Screens/Mobile';
import Cars from '../Screens/Sub Screens/Cars';
import Jobs from '../Screens/Sub Screens/Jobs';
import Services from '../Screens/Sub Screens/Services';
import Miscellaneous from '../Screens/Sub Screens/Miscellaneous';
import WelcomeScreen from '../Screens/WelcomeScreen';
import Profile from '../Screens/Profile/Profile';
import Signin from '../Screens/Profile/Signin';
import Signup from '../Screens/Profile/Signup';
import PrivacyPolicy from '../Screens/Profile/Privacy-Policy';
import PostAds from '../Screens/AdsPost/Post-Add/PostAd';
import Ad from '../Screens/AdsPost/Post-Add/Ad';
import MyAds from '../Screens/AdsPost/Post-Add/MyAds';
import Alert from '../Screens/AdsPost/Post-Add/Alert';
import AccountBalance from '../Screens/Account Balance/AccountBalance';
import DetailsScreen from '../Screens/Sub Screens/DetailsScreen';
import AllAdsScreen from '../Screens/Sub Screens/AllAdsScreen';
import ShowingInages from '../Screens/Sub Screens/ShowingInages';
import ContactUs from '../Screens/Profile/Contact-us';
import EditAd from '../Screens/AdsPost/EditAd';


const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='WelcomeScreen' screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Countries" component={Countries} />
        <Stack.Screen name="Mobile" component={Mobile} />
        <Stack.Screen name="Cars" component={Cars} />
        <Stack.Screen name="Jobs" component={Jobs} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="Miscellaneous" component={Miscellaneous} /> 

         <Stack.Screen name="AccountBalance" component={AccountBalance} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="AllAdsScreen" component={AllAdsScreen} />
        <Stack.Screen name="ShowingInages" component={ShowingInages} /> */}
{/* 


        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="Contact Us" component={ContactUs} />  */}


        <Stack.Screen name="PostAd" component={PostAds} /> 
        <Stack.Screen name="Ad" component={Ad} />
        <Stack.Screen name="MyAds" component={MyAds} />
        <Stack.Screen name="EditAd" component={EditAd} />
        <Stack.Screen name="Alert" component={Alert} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

