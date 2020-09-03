import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

/*

// Old version
class App extends React.Component{
  constructor() {
    super()
    this.state = {counter: 0}
  }

  increaseCount = () => {
    this.setState(prevState =>  ({ counter: prevState.counter + 1}));
  }

  decreaseCount = () => {
    this.setState(prevState =>  ({ counter: prevState.counter - 1}));
  }

  render(){
    return (
      <View style={styles.container}>
        <Button style={styles.button} title="Increase" onPress={() => this.increaseCount()}/>
        <Button style={styles.button} title="Decrease" onPress={() => this.decreaseCount()}/>
        <Text>Current count {this.state.counter}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}
*/

/*
// useState version
export default function App(){
  const [counter, setCounter] = useState(0)
  return (
    <View style={styles.container}>
        <Button style={styles.button} title="Increase" onPress={() => setCounter(counter+1)}/>
        <Button style={styles.button} title="Decrease" onPress={() => setCounter(counter-1)}/>
        <Text>Current count {counter}</Text>
        <StatusBar style="auto" />
      </View>
  );
}
*/

export default function App(){
  const [number, setNumber] = useState(0)
  return (
    <View style={styles.container}>
        <Button style={styles.button} title="Randomize" onPress={() => setNumber(Math.floor(Math.random()*100) + 1)}/>
        <Text>Current number {number}</Text>
        <StatusBar style="auto" />
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: "green"
  },
  textinput: {
    color: "white",
    height: 50
  },
  inputView:{
    width:"70%",
    backgroundColor:"black",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  loginBtn:{
    width:"70%",
    backgroundColor:"black",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:20,
    padding: 20
  },
  loginText: {
    color: "white"
  }
});

//export default App;