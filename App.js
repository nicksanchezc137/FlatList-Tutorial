/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {getMoviesFromApiAsync} from "./getMovies";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }
 
  componentDidMount() {
    getMoviesFromApiAsync().then((movies)=>this.setState({movies}))
  }
  movieView = (item)=>{
    return (
      <View style = {styles.movie_view}>
       <Text  style = {styles.movie_text}>Movie:{item.title}</Text>
       <Text  style = {styles.year_text}>Year:{item.releaseYear}</Text>
     </View>
    )
   }
  render() {
    const {movies} = this.state
    return (
     <View style = {styles.container}>
     <View style = {styles.header}>
       <Text style = {styles.header_text}> Awesome Movies List</Text>
      
      </View>
      <FlatList
        data={movies}
        renderItem={({ item }) => this.movieView(item)}
        keyExtractor={item => item.id}
      />
     </View>
    );
  }
}

 

const styles = StyleSheet.create({
  container:{
   backgroundColor:'#fff',
   flex:1
  },
  movie_view:{
   elevation:3,
   justifyContent:'center',
   alignItems:'center',
   padding:10,
   backgroundColor:"#fff",
   height:50,
   marginBottom:5,
   margin:3
  },
  header: {
     backgroundColor: '#2ECB95',
     elevation:3,
     justifyContent:'center',
     alignItems:'center',
     padding:10
  },
 
  year_text:{
    color:"#212121",
   fontSize:16,
   fontWeight:"bold"
  },
  movie_text:{
    color:"#212121",
    fontSize:18,
    fontWeight:"bold"
   },
  header_text:{
   color:'#fff',
   fontSize:24,
   fontWeight:"bold"
  },
  red: {
    color: 'red',
  },
});


export default App;
