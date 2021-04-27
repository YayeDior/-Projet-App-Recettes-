import React from 'react'
import {View,Image,Picker, Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from "@expo/vector-icons/Entypo"
import Product from '../components/Product'

export default class Home extends React.Component{
    state={
        city:""
    }
    render(){
        return(
           <ScrollView style={{backgroundColor:"#FFF"}}>
               <View style={{
                   flexDirection:"row",
                   alignItems:"center",
                   marginTop:40,
                   marginHorizontal:20
               }}>
                   <View style={{width:"10%"}}>
                       <Image
                            source={require('../images/1.png')}
                       />
                   </View>
                   <View style={{
                       width:"80%",
                       alignItems:"center"
                   }}>
      
                       </View>
                   <View style={{width:"10%"}}>
                        <Icon name="magnifying-glass" size={30}/>
                   </View>
               </View>
               
               
               <View style={{
                   paddingHorizontal:20,
                   marginTop:50
               }}>
                   <Text style={{
                       fontSize:30,
                       fontWeight:"bold"
                   }}>RecipeList</Text>
               </View>
               <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{marginTop:40}}
               >
                   <View style={{
                       alignItems:"center",
                       flexDirection:"row",
                       backgroundColor:"#f9dd7a",
                       marginHorizontal:15,
                       borderRadius:25,
                       paddingVertical:5,
                       paddingHorizontal:15
                   }}>
                       <Image
                        source={require('../images/5.png')}
                        style={{height:40,width:40}}
                       />
                       <Text style={{
                           fontWeight:"bold",
                           fontSize:18,
                           paddingLeft:10
                       }}>
                           Burgers
                       </Text>
                   </View>

                   <View style={{
                       alignItems:"center",
                       flexDirection:"row",
                       backgroundColor:"#e5e4eb",
                       marginHorizontal:15,
                       borderRadius:25,
                       paddingVertical:5,
                       paddingHorizontal:15
                   }}>
                       <Image
                        source={require('../images/7.png')}
                        style={{height:40,width:40}}
                       />
                       <Text style={{
                           fontWeight:"bold",
                           fontSize:18,
                           paddingLeft:10
                       }}>
                           Salade
                       </Text>
                   </View>

                   <View style={{
                       alignItems:"center",
                       flexDirection:"row",
                       backgroundColor:"#e5e4eb",
                       marginHorizontal:15,
                       borderRadius:25,
                       paddingVertical:5,
                       paddingHorizontal:15
                   }}>
                       <Image
                        source={require('../images/6.png')}
                        style={{height:40,width:40}}
                       />
                       <Text style={{
                           fontWeight:"bold",
                           fontSize:18,
                           paddingLeft:10
                       }}>
                           Pizza
                       </Text>
                   </View>

                   <View style={{
                       alignItems:"center",
                       flexDirection:"row",
                       backgroundColor:"#e5e4eb",
                       marginHorizontal:15,
                       borderRadius:25,
                       paddingVertical:5,
                       paddingHorizontal:15
                   }}>
                       <Image
                        source={require('../images/9.png')}
                        style={{height:40,width:40}}
                       />
                       <Text style={{
                           fontWeight:"bold",
                           fontSize:18,
                           paddingLeft:10
                       }}>
                           Riz au poisson
                       </Text>
                   </View>
            </ScrollView>
                   <View style={{
                       alignItems:"center",
                       marginHorizontal:20,
                       flexDirection:"row",
                       marginTop:40
                   }}>
                       <View style={{
                           width:"50%"
                       }}>
                           <Text style={{
                               fontSize:22,
                               fontWeight:"bold"
                           }}>New Products</Text>
                       </View>
                       <View style={{
                           width:"50%",
                           alignItems:"flex-end"
                       }}>
                           <Icon
                            name="dots-three-horizontal"
                            size={25}
                            color="#848385"
                           />
                       </View>
                   </View>
                  
                  
                   <View style={{
                       flexDirection:"row",
                       marginHorizontal:15,
                       marginTop:30,
                   }}>
                       <Product
                            image={require("../images/4.png")}
                            title="Bigmag"
                            price="6.99"
                            onPress={() => this.props.navigation.navigate('Detail')}
                       />
                           <Product
                            image={require("../images/7.png")}
                            title="Salade russe"
                            price="10"
                            onPress={() => this.props.navigation.navigate('Detail')}
                       />
                           <Product
                            image={require("../images/6.png")}
                            title="Margarita"
                            price="5.99"
                            onPress={() => this.props.navigation.navigate('Detail')}
                       />
                           <Product
                            image={require("../images/9.png")}
                            title="Riz au poisson rouge"
                            price="15"
                            onPress={() => this.props.navigation.navigate('Detail')}
                       />
                       <Product
                            image={require("../images/tc.png")}
                            title="Tacos"
                            price="8"
                            marginTop={25}
                       />
                   </View>

                   <View style={{
                       flexDirection:"row",
                       marginHorizontal:15,
                       marginTop:30,
                   }}>
                       <Product
                            image={require("../images/ml.png")}
                            title="Milkshake"
                            price="12"
                       />
                       <Product
                            image={require("../images/mf.png")}
                            title="Muffin"
                            price="10"
                            marginTop={25}
                       />
                   </View>
           </ScrollView>
        )
    }
}