
import React, { useState } from 'react';
import {StyleSheet, View,Text,TextInput,TouchableOpacity,Platform, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { propsStack } from '../../Routes/Stack/Models';
import { useNavigation } from '@react-navigation/native';

export const Home = () =>{
  const navigation = useNavigation<propsStack>()
  const [input, setInput] = useState('');

  return (
    <View style={style.container}>
      <Text style={style.title}>Olá, Fulano!</Text>
      <TextInput style={style.busca}  
        placeholder='Buscar RO'  
        value={input} 
        onChangeText={(texto => setInput(texto))}>
      </TextInput>
      <Icon name='search' size={21} style={style.searchIcon}/>
      <View style={style.bar}/> 

      <TouchableOpacity style={style.button}
        onPress={() => 
        navigation.navigate('Home')
        }>
        <Text style={style.enterButton}>Registro de Ocorrência</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.button}
        onPress={() => 
        navigation.navigate('Home')
        }>
        <Text style={style.enterButton}>Membros do Suporte</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.button}
        onPress={() => 
        navigation.navigate('CadastroRO')
        }>
        <Text style={style.enterButton}>Novo Registro de Ocorrência</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.button}
        onPress={() => 
        navigation.navigate('Home')
        }>
        <Text style={style.enterButton}>Administração do Sistema</Text>
      </TouchableOpacity>

      <View style={style.div}>
        <TouchableOpacity style={style.enterButton}>
        <Icon name='home' size={27} style={style.iconHome}
          onPress={() => 
            navigation.navigate('Login')
            }/>
        </TouchableOpacity>
   
        <TouchableOpacity style={style.enterButton}>
        <Icon name='notifications' size={27} style={style.iconNotif}
          onPress={() => 
            navigation.navigate('Login')
            }/>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const style = StyleSheet.create({

  searchIcon:{
    color: 'black',
    paddingLeft: 330,
    paddingBottom: 10,
  },
  
  busca:{
    textAlign: 'left',
    width: 300,
    height:40,
    marginBottom: -30,
    fontWeight: 'bold',
  },

  iconNotif:{
    paddingLeft: 70,
    color: 'white',
  },
  
  iconHome: {
    paddingLeft: 90,
    color: 'white',
  },

  div: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    height: 70,
    backgroundColor: '#2B3467',
    marginBottom: 10,
    marginTop: 160,
    borderRadius: 35,
  },

  title:{
    fontSize: 35,
    marginTop: 30,
    marginRight: 115,
    textAlign: 'left',
    color: 'black',
    fontWeight: 'bold',
  },

  input: {
    flex: 1,
    alignItems:'center',
    flexDirection:'row',
    backgroundColor: '#ffff',
    justifyContent:'space-between',
    margin:'auto',
    color: 'black',
    paddingLeft:6,
    width:300,
    height:40,
    marginBottom: 10,
    borderRadius:300,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },

  container: {
    backgroundColor: '#F9FbFa',
    alignItems: 'center',
    justifyContent: 'flex-start',
    ...Platform.select({
      ios: { fontFamily: 'Arial', }, 
      android: { fontFamily: 'Roboto' }}),
    paddingRight: 10, 
    height: 1000,
  },

  hyperlinkStyle: {
    color: '#72A2FA',
    marginTop: 25,
    fontSize: 12
  },

  button:{
    alignItems: 'center',
    width: 300,
    padding: 15,
    backgroundColor: '#72A2FA',
    marginBottom: 10,
    marginTop: 20,
    borderRadius: 7,
  },
  
  enterButton:{
    color: 'white',
    fontSize: 20,
  },

  bar:{
    backgroundColor: '#68696C',
    width: 290,
    height: 2,
    marginTop: -10
  }
});


export default Home;