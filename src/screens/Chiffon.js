import React,{Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated, Text } from 'react-native';
import { fabricstyles } from './Style/Fabric_Style';
export default class Chiffon extends Component {
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
          <Image style={fabricstyles.img} source={require('../assets/chiffon.png')}></Image>
        </View>   
            <Text style={fabricstyles.rupee}>₹120</Text>
            <Text style={fabricstyles.ps}>Product Specification</Text>
            <Text style={fabricstyles.pt}>Product Name: Chiffon Fabric</Text>
            <Text style={fabricstyles.pt}>Product Size: 1 meter</Text>
            <Text style={fabricstyles.pt}>Product Type: Fabric</Text>
            <Text style={fabricstyles.pt}>Colors Available: Aqua, Light Pink, Apple Green</Text>
            <Text style={fabricstyles.pt}>Pattern: Self Design</Text>
            <Text style={fabricstyles.stock}>In Stock</Text>
        <View>
            <TouchableOpacity style={fabricstyles.buystitch}>
                        <Text onPress={() => this.props.navigation.navigate("CustomerCategory")} style={fabricstyles.buystitchtext}>Buy and Stitch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={fabricstyles.buy}>
                        <Text onPress={() => this.props.navigation.navigate("FindMerchant")} style={fabricstyles.buytext}>Buy</Text>
            </TouchableOpacity>
        </View>
        </View>
     
    );
  }
}