import { StatusBar } from 'react';
import { Button,StyleSheet, Text, View, TextInput } from 'react-native';
import Reset from './Reset';

//import Forgot from './Forgot';

export default function App() {

  return (
    <View style={styles.container}>
  
    <Reset/>


    
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28376D',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

