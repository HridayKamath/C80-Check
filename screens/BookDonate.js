import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import db from '../config';
import firebase from 'firebase';
import AppHeader from '../components/AppHeader';
import { ListItem } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class BookDonate extends Component {

  constructor(){
    super();
    this.state = {
      requestedBooksList: [],
    },
    this.requestedRef = null;
  }

  

getRequestedBookList = () => {
  this.requestedRef = db.collection('requested_books').onSnapshot(
    (snapshot) => {
      var requestedBooksList = snapshot.docs.map(
      (document) => document.data()
      );
      //console.log(document)
      this.setState({
        requestedBooksList: requestedBooksList
      });
    },
    
  error => {this.requestedRef()}
  );
}

componentDidMount(){
  this.getRequestedBookList()
}

componentWillUnmount(){
  this.requestedRef();
}



keyExtractor = (item, index) => index.toString();

renderItem = ({item, index}) => {
  console.log(item.book_name);
  console.log(index);
    return (
        <ListItem
        key = {index}
        title={item.book_name}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        subtitle={item.reason_to_request}
        subtitleStyle={{ color: 'black' }}
        leftElement = {
          <Image style={{ height: 50, width: 50, }} source={{ uri: item.imageLink, }} /> 
      }
        rightElement={ 
        <TouchableOpacity style = {{backgroundColor: 'blue'}}>
        
          <Text style={{ color: 'black', fontFamily: 'Georgia' }}>
            View

            </Text> 
            </TouchableOpacity> }
        
        bottomDivider
        />
    )
}

  render(){
      var {requestedBookList} = this.state;

    return (
        <SafeAreaProvider>
      <View style = {{margin: 200}}>
          <AppHeader title = {'Donate Books'}/>

          {(this.state.requestedBooksList.length != 0)?(
          
          
              <FlatList
              keyExtractor = {this.keyExtractor}
              data = {this.state.requestedBooksList}
              renderItem = {this.renderItem}
              />
              ):

              (
          <View style = {{marginTop: 100}}>
          <Text>
              List of all Requested Books
              </Text>
          </View>
          
          )}
      <Text>
      Book Donate Screen
      </Text>
      </View>
      </SafeAreaProvider>
    )
  }
}
