import React,{Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { outfitstyles } from './Style/Outfit_Style';
export default class Shervani extends Component {
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
          <Image style={outfitstyles.img} source={require('../assets/shervani.jpg')}></Image>
        </View>   
            <Text style={outfitstyles.rupee}>₹1200</Text>
            <Text style={outfitstyles.ps}>Product Specification</Text>
            <Text style={outfitstyles.pt}>Product Name: Sherwani</Text>
            <Text style={outfitstyles.pt}>Product Type: Clothing</Text>
            <Text style={outfitstyles.stock}>In Stock</Text>
        <View>
            <TouchableOpacity style={outfitstyles.buy} onPress={() => this.props.navigation.navigate("ShervaniMeas")}>
                        <Text style={outfitstyles.buytext}>Buy</Text>
            </TouchableOpacity>
        </View>
        </View>
     
    );
  }
}