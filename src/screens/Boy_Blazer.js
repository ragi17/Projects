import React,{Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { outfitstyles } from './Style/Outfit_Style';
export default class Boy_Blazer extends Component {
  constructor(props) 
  {
      super(props);
      this.state = 
      {
        animatedValue: new Animated.Value(0),
      }    
  }
  render() 
  { 
    return(  
      
      <View>
        <View>
          <Image style={outfitstyles.img} source={require('../assets/blazer.jpeg')}></Image>
        </View>   
            <Text style={outfitstyles.rupee}>₹700</Text>
            <Text style={outfitstyles.ps}>Product Specification</Text>
            <Text style={outfitstyles.pt}>Product Name: Blazer</Text>
            <Text style={outfitstyles.pt}>Product Type: Clothing</Text>
            <Text style={outfitstyles.stock}>In Stock</Text>
        <View>
            <TouchableOpacity style={outfitstyles.buy} onPress={() => this.props.navigation.navigate("BoyBlazerMeas")}>
                        <Text style={outfitstyles.buytext}>Buy</Text>
            </TouchableOpacity>
        </View>
        </View>
     
    );
  }
}