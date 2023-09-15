import { StatusBar } from 'react';
import { Button,StyleSheet, Text, View, TextInput } from 'react-native';
import Form from './Form';

export default function App() {

  return (
    <View style={styles.container}>
    <Form/>
    
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

