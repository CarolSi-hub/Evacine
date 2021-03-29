import React, { Component } from 'react';
import { Form, Input, DatePicker, Button, Select } from 'antd';
import PessoaDataService from '../service/PessoaDataService';

const { Option } = Select;

export default class CadastrarPessoa extends Component{

constructor(props){
    super(props)
    this.state = {
      pessoas: [],
      message: null,
      pessoa: {
        nome: '',
        cpf: '',
        telefone: '',
        email: '',
        idade: '',
        dataNascimento: '',
        grupo: null,
      },
    }
  }

  handleAdd(pessoa){    
    PessoaDataService.cadastrarPessoas(pessoa);
  }

  handleData({ target: { name, value } }){
    this.setState({[name]: value})
  }


  render(){
    const { nome, cpf, telefone, email, idade, dataNascimento, grupo } = this.state.pessoa;
    const ddd = [
      61, 62, 64, 65, 66, 67, 
      82, 71, 73, 74, 75, 77,
      85, 88, 98, 99, 83, 81,
      87, 86, 89, 84, 79, 68,
      96, 92, 97, 91, 93, 94,
      69, 95, 63, 27, 28, 31, 
      32, 33, 34, 35, 37, 38,
      21, 22, 24, 11, 12, 13,
      14, 15, 16, 17, 18, 19,
      41, 42, 43, 44, 45, 46,
      51, 53, 54, 55, 47, 48,
      49
    ];

    const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >{
        (ddd.sort()).map((item) => 
          <Option value={item}>{item}</Option>
        )
      }
      </Select>
    </Form.Item>
  );

    return(

      <Form
        name="customized_form_controls"
      layout="inline"
      >

        <Form.Item
        name="nome"
        label="Nome Completo"        
      >
        <Input
        type="text" 
        name="nome"       
        value={nome}
        onChange={this.handleData}
        style={{
          width: 100,
        }}
      />      
      </Form.Item>

      <Form.Item
        name="cpf"
        label="Cpf"        
      >
        <Input
        type="text"   
        name="cpf"       
        value={cpf}
        onChange={this.handleData}     
        style={{
          width: 100,
        }}
      />      
      </Form.Item>

      <Form.Item name="date-picker" label="Data de Nascimento">
        <DatePicker />
      </Form.Item>

      <Form.Item
        name="idade"
        label="Idade"        
      >
        <Input
        type="text" 
        name="idade"       
        value={idade}
        onChange={this.handleData}       
        style={{
          width: 100,
        }}
      />  
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"        
      >
        <Input
        type="email"  
        name="email"       
        value={email}
        onChange={this.handleData}      
        style={{
          width: 100,
        }}
      />  
      </Form.Item>

       <Form.Item
        name="phone"
        label="Phone Number"        
      >
        <Input
        addonBefore={prefixSelector}
        name="telefone"       
        value={telefone}
        onChange={this.handleData}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={() => this.handleAdd(this.state.pessoa)}>
          Cadastrar
        </Button>
      </Form.Item>

      </Form>
    )
  }

}