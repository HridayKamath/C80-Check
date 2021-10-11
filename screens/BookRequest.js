import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, KeyboardAvoidingView } from 'react-native';
import db from '../config.js';
import firebase from 'firebase';
import AppHeader from '../components/AppHeader';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default class BookRequest extends Component {

  constructor(){
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      bookName: ' ',
      reasonToRequest: '',
    }
  }

  createUniqueId(){
    return Math.random().toString(36).substring(7);
  }



  addRequest =(bookName,reasonToRequest)=>{
    var userId = this.state.userId
    var randomRequestId = this.createUniqueId()
    db.collection('requested_books').add({
        "user_id": userId,
        "book_name":bookName,
        "reason_to_request":reasonToRequest,
        "request_id"  : randomRequestId,
    })

    this.setState({
        bookName :'',
        reasonToRequest : ''
    })

    return (alert("Book Requested Successfully"));
  }


  render(){
    var {bookName, reasonToRequest} = this.state;

    return (
      <SafeAreaProvider>
      <View>
        <AppHeader title= {'Request Books'}/>
        <KeyboardAvoidingView>

          <CustomInput 
          label = {'Book Name'}
          placeholder = {"Write Book Name"}
          placeholderTextColor = {'red'}
          onChangeText = {(text)=>{this.setState({bookName: text})}}
    
          />

         <CustomInput 
          label = {'Reason'}
          placeholder = {'Write here'}
          placeholderTextColor = {'red'}
          multiline = {true}
          onChangeText = {(text)=>{this.setState({reasonToRequest: text})}}
          
          
          />

        </KeyboardAvoidingView>

          <CustomButton style = {styles.button}
           title = {'Request Book'}
           onPress = {()=>{this.addRequest(this.state.bookName, this.state.reasonToRequest)}}
          />

          
      <Text>
      Book Request Screen
      </Text>
      </View>
      </SafeAreaProvider>
    )
  }
}

const styles = StyleSheet.create({
  keyBoardStyle : {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  input:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:80
    },
  }
)
