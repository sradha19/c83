import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import {Card, Icon, ListItem} from 'react-native-elements';
import MyHeader from '../components/MyHeader';
import db from '../config';
import firebase from 'firebase';

export default class MyDonations extends React.Component {
    constructor(){
        super()
        this.state = {
            userId: firebase.auth().currentUser.email,
            AllDonations: []
        }
        this.requestRef = null
    }

    static navigationOptions = {header: null};

    getAllDonations=()=>{
   this.requestRef = db.collection("AllDonations").where("donorId",'==',this.state.donorId)
   .onSnapshot((snapshot)=>{
       var AllDonations = snapshot.docs.map(document=>document.data())
       this.setState({
           AllDonations: AllDonations
       })
   })
       
    }
keyExtractor = (item,index)=>index.toString()
renderItem = ({item, i})=>(
  <ListItem
  key = {i}
  title = {item.bookName}
  subtitle = {"requestedBy:" + item.requestedBy + "\Nstatus:" + item.requestStatus}
  leftElement = {<Icon name = "Book" type = "font-awesome" />}
  titleStyle = {{color: 'black', fontWeight: 'bold'}}
  rightElement = {
  <TouchableOpacity>
    <Text>Send Book</Text>
  </TouchableOpacity>
  } 
  bottomDivider
  />
)

  render(){
  return (
    <View>
      <MyHeader navigation = {this.props.navigation} title = "My Donations" />
      <View>
        {this.state.AllDonations.length === 0
        ?(<Text>List of all Book Donations</Text>)
        :(<FlatList 
          keyExtractor = {this.keyExtractor}
          data = {this.state.AllDonations}
          renderItem = {this.renderItem}
        /> )
        }
      </View>
    </View>
  );
  }

}

const styles = StyleSheet.create({
 
});
