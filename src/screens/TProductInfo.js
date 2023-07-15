import React, {Component} from 'react';
import {View,StyleSheet, Text, Image, TouchableOpacity, TextInput, ToastAndroid, BackHandler, StatusBar, Animated, Easing} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { tailorstyles } from './Style/Tailor_Home_Style';
import { customerstyles } from './Style/Customer_Home_Style';
import { findtailor } from './Style/Find_Tailor_Style';

import auth  from "@react-native-firebase/auth";
import firestore  from "@react-native-firebase/firestore";
export default class TProductInfo extends Component 
{    
  constructor(props) 
  {
    super(props);
    this.state = 
    {
      animatedValue: new Animated.Value(0),
      Category:"",
      CustMob:'',
      CustName: '',
      Inseam:'',
      BellBottomLength:'',
      Thigh:'',
      Knee:'',
      Waist:'',
      WaistToKnee:'',
      AnkleOpening:'',
    }    
  }  
  componentDidMount() {
    const id = auth().currentUser;
    firestore().collection('Tailor').doc(id.uid).get().then((docRef) => {
      // let name=docRef.data().Name;
        this.setState({CustMob:docRef.data().mob}),
        this.setState({CustName:docRef.data().cust}),
        this.setState({Category:docRef.data().category}),
        this.setState({Inseam:docRef.data().Inseam}),
        this.setState({BellBottomLength:docRef.data().BellBottomLength}),
        this.setState({Thigh:docRef.data().Thigh}),
        this.setState({Knee:docRef.data().Knee}),
        this.setState({Waist:docRef.data().Waist}),
        this.setState({WaistToKnee:docRef.data().WaistToKnee}),
        this.setState({AnkleOpening:docRef.data().AnkleOpening})

      });
      }
  render() 
  { 
    return(
    <View style={tailorstyles.container}>
      <View style={tailorstyles.upper}>
        <TouchableOpacity style={tailorstyles.Loginbutton}>
          <Image style={tailorstyles.logo} source={require('../assets/logo.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={tailorstyles.center}>
        <Text style={customerstyles.details}>Customer Details</Text>
        <Text style={customerstyles.details}>Customer Name: {this.state.CustName}</Text>
        <Text style={customerstyles.details}>Customer Mobile: {this.state.CustMob}</Text>
        <Text style={customerstyles.details}>Order of {this.state.Category}</Text>
        <Text style={customerstyles.details}>Measurement Details</Text>
        <Text style={customerstyles.details}>Inseam: {this.state.Inseam}</Text>
        <Text style={customerstyles.details}>BellBottomLength: {this.state.BellBottomLength}</Text>
        <Text style={customerstyles.details}>Thigh: {this.state.Thigh}</Text>
        <Text style={customerstyles.details}>Knee: {this.state.Knee}</Text>
        <Text style={customerstyles.details}>Waist: {this.state.Waist}</Text>
        <Text style={customerstyles.details}>WaistToKnee: {this.state.WaistToKnee}</Text>
        <Text style={customerstyles.details}>AnkleOpening: {this.state.AnkleOpening}</Text>
      </View>   
      <View style={customerstyles.bottom}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("TailorHome")}>
          <Image style={customerstyles.home} source={require('../assets/home.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("TailorSearch")}>
          <Image style={customerstyles.search} source={require('../assets/search.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("TailorCategory")}>
          <Image style={customerstyles.category} source={require('../assets/category.png')}></Image>
        </TouchableOpacity>
       
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("Profile_tailor")}>
          <Image style={customerstyles.profile} source={require('../assets/profile.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={customerstyles.bottomline}>
        <Text style={customerstyles.hometext}>Home</Text>
        <Text style={customerstyles.searchtext}>Search</Text>
        <Text style={customerstyles.categorytext}>Category</Text>
        
        <Text style={customerstyles.profiletext}>Profile</Text>
      </View>
    </View>    );
  }
}