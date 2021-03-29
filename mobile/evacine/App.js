import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, Button } from 'react-native';
import AppDataService from './services/AppDataService';

export default function App() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [grupo, setGrupo] = useState(null);

  const handleAdd = async  event => {
    const pessoa = {
      nome: nome,
      cpf: cpf,
      telefone: telefone,
      email: email,
      idade: idade,
      dataNascimento: dataNascimento,
      grupo: { codigo: grupo },
    };
    await AppDataService.cadastrarPessoas(pessoa);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cadastro eVacine</Text>
      <TextInput style={styles.input} 
      placeholder="Nome" placeholderTextColor='#fff'
      onChangeText={ setNome } 
      value={nome}
      ></TextInput>

      <TextInput style={styles.input} 
      placeholder="Cpf" placeholderTextColor='#fff'
      onChangeText={setCpf}
      value={cpf}
      ></TextInput>

      <TextInput style={styles.input} 
      placeholder="Telefone" placeholderTextColor='#fff'
      onChangeText={setTelefone}
      value={telefone}
      ></TextInput>

      <TextInput style={styles.input} 
      placeholder="Email" placeholderTextColor='#fff'
      onChangeText={setEmail}
      value={email}
      ></TextInput>

      <TextInput style={styles.input} 
      placeholder="Idade" placeholderTextColor='#fff'
      onChangeText={setIdade}
      value={idade}
      ></TextInput>

      <TextInput style={styles.input} 
      placeholder="Data de Nascimento" placeholderTextColor='#fff'
      onChangeText={setDataNascimento}
      value={dataNascimento}
      ></TextInput>

      <TextInput style={styles.input} 
      placeholder="Grupo" placeholderTextColor='#fff'
      onChangeText={setGrupo}
      value={grupo}
      ></TextInput>
      
      <Button title="CADASTRAR"
      onPress={handleAdd}></Button>
     <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
      justifyContent: 'center',    
  },
  input: {
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#0D458D',
    fontSize: 20,
    color: '#fff',
    backgroundColor: '#0D458D',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 8,
  },
});
