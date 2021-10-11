import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import firebase from 'firebase';
import { DrawerItems } from 'react-navigation-drawer';


export default class CustomSidebarMenu extends Component{
    render() {
        return (
            <View style = {{flex: 1}}>
                <View> style = {styles.drawerItemsContainer}
                    <DrawerItems
                      {...this.props}
                    />
                </View>

                <TouchableOpacity style = {styles.logOutButton}
                onPress = {()=>{
                  this.props.navigation.navigate('LoginScreen')
                  firebase.auth().signOut()
                }}>
                  <Text style = {styles.logOutText}>
                    Logout
                  </Text>
                </TouchableOpacity>
            </View>
        )
    }
}


  
  var styles = StyleSheet.create({
    container : {
      flex:1
    },
    drawerItemsContainer:{
      flex:0.8
    },
    logOutContainer : {
      flex:0.2,
      justifyContent:'flex-end',
      paddingBottom:30
    },
    logOutButton : {
      height:30,
      width:'100%',
      justifyContent:'center',
      padding:10
    },
    logOutText:{
      fontSize: 30,
      fontWeight:'bold'
    }
  })
  