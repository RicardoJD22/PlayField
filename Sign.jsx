import React, { useState } from 'react';
import {Image, Button, InputAccessoryView, ScrollView,Text, TextInput, View } from 'react-native';

const Form = () => {
  const inputAccessoryViewID = 'uniqueID';
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const isPasswordValid = () => {
    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres');
      return false;
    }
    setError('');
    return true;
  };

  const inputStyles = {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 20, 
  };

  const buttonContainerStyles = {
    marginTop: 50, 
  };

  const textContainerStyles = {
    marginTop: 150, 
  };


  return (
    <>


<View style={buttonContainerStyles}>
<Text style={{ textAlign: 'center', fontSize:30, marginTop: 10, color: 'white' }}>
         Crear Cuenta
        </Text>
 


</View>

<Image
  source={require('./Logo.png')} 
  style={{ width: 140, height: 140, alignSelf: 'center', marginTop: 50 }}
/>


      <ScrollView keyboardDismissMode="interactive">
      <TextInput
          style={{
            ...inputStyles,
            marginTop: 10, 
          }}
          inputAccessoryViewID={inputAccessoryViewID}
          onChangeText={setText}
          value={text}
          placeholder={'Nombre de usuario'}
        />
        
        <TextInput
          style={{
            ...inputStyles,
            marginTop: 20, 
          }}
          inputAccessoryViewID={inputAccessoryViewID}
          onChangeText={setText}
          value={email}
          placeholder={'Correo electrónico'}
        />

        <TextInput
          style={inputStyles}
          inputAccessoryViewID={inputAccessoryViewID}
          onChangeText={setText}
          value={password}
          placeholder={'Contraseña'}
        />


<View style={buttonContainerStyles}>
        <Button
          
          
          onPress={() => {
           
          }}
          title="Crear cuenta"
        />
         </View>
         <Text style={{ textAlign: 'center', marginTop: 10, color: 'red' }}>{error}</Text>

{/* Agregar un texto debajo del botón */}
<Text style={{ textAlign: 'center', marginTop: 10, color: 'white' }}>
          O iniciar sesión
        </Text>

      </ScrollView>
      <InputAccessoryView nativeID={inputAccessoryViewID}>
        <Button onPress={() => setText(initialText)} title="Clear text" />
      </InputAccessoryView>
    </>
  );
};

export default Form;
