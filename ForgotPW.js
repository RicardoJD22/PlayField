import { StatusBar } from 'react';
import { Button,StyleSheet, Text, View, TextInput } from 'react-native';

//import Sign from './Sign';
import Forgot from './Forgot';

export default function App() {

  return (
    <View style={styles.container}>
  
    <Forgot/>


    
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
