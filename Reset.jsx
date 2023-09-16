import React, { useState } from 'react';
import {Image, Button, InputAccessoryView, ScrollView,Text, TextInput, View } from 'react-native';

const Form = () => {
  const inputAccessoryViewID = 'uniqueID';
  const initialText = '';
  const [text, setText] = useState(initialText);
  const [password, setPassword] = useState(initialText);
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
         Cambiar contraseña
        </Text>
 


</View>

<Image
  source={require('./Logo.png')} // Reemplaza 'tu_imagen.png' con la ruta de tu imagen
  style={{ width: 140, height: 140, alignSelf: 'center', marginTop: 50 }}
/>
      <ScrollView keyboardDismissMode="interactive">
        <TextInput
          style={{
            ...inputStyles,
            marginTop: 100, 
          }}
          inputAccessoryViewID={inputAccessoryViewID}
          onChangeText={setText}
          value={password}
          placeholder={'Nueva contraseña'}
        />

        <TextInput
          style={inputStyles}
          inputAccessoryViewID={inputAccessoryViewID}
          onChangeText={setText}
          value={password}
          placeholder={'Confirmar contraseña'}
        />


<View style={buttonContainerStyles}>
        <Button
          
          
          onPress={() => {
            if (isPasswordValid()) {
              // Realiza la acción de inicio de sesión aquí
            }
          }}
          title="Reset"
        />
         </View>

         <Text style={{ textAlign: 'center', marginTop: 10, color: 'red' }}>{error}</Text>

      </ScrollView>
      <InputAccessoryView nativeID={inputAccessoryViewID}>
        <Button onPress={() => setText(initialText)} title="Clear text" />
      </InputAccessoryView>
    </>
  );
};

export default Form;
