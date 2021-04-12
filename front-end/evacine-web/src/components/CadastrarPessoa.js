import React, { useState, useEffect } from 'react';
import { Form, Input, DatePicker, Button, Select } from 'antd';
import moment from 'moment';
import PessoaDataService from '../service/PessoaDataService';
import GruposDataService from '../service/GruposDataService';

const { Option } = Select;

export default function CadastrarPessoa() {

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [grupo, setGrupo] = useState(null);
  const [grupoDataState, setGrupoDataState] = useState([]);

  const handleAdd = async () => {    
     const pessoa = {
      nome: nome,
      cpf: cpf,
      telefone: telefone,
      email: email,
      idade: idade,
      dataNascimento: dataNascimento,
      grupo: { codigo :grupo }
    };
    console.log(pessoa);
    await PessoaDataService.cadastrarPessoas(pessoa);
  }

  useEffect(() => { 
    const getGroupData = async () => {
    const result = await GruposDataService.retriveAllGrupos();
    setGrupoDataState(result.data)
  };
  getGroupData();
  }, [])

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

  const onChangeEvent = (date) => {
    const dataN = moment(date._d).format("MMM Do YY");
    setDataNascimento(dataN);
  }

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
        value={nome}
        onChange={(event) => setNome(event.target.value)}
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
        value={cpf}
        onChange={(event) => setCpf(event.target.value)}     
        style={{
          width: 100,
        }}
      />      
      </Form.Item>

      <Form.Item name="date-picker" label="Data de Nascimento">
        <DatePicker              
        onChange={(event) => onChangeEvent(event)}/>
      </Form.Item>

      <Form.Item
        name="idade"
        label="Idade"        
      >
        <Input
        type="text"    
        value={idade}
        onChange={(event) => setIdade(event.target.value)}       
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
        value={email}
        onChange={(event) => setEmail(event.target.value)}      
        style={{
          width: 100,
        }}
      />  
      </Form.Item>

      <Form.Item
        name="grupo"
        label="Grupo"        
      >
        <Select 
        style={{ width: 120 }} 
        onChange={()=>setGrupo(value) }>       
        {grupoDataState.map(grupo => 
         <Option            
        value={grupo.codigo}
        onClick={(event) => setGrupo(event.target.value)}
        // style={{ width: 200 }}
        >
          { grupo.nome }
        </Option>
        )}
        
        </Select>
       
       
      </Form.Item>

       <Form.Item
        name="phone"
        label="Phone Number"        
      >
        <Input
        addonBefore={prefixSelector}
        name="telefone"       
        value={telefone}
        onChange={(event) => setTelefone(event.target.value)}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" 
        
        onClick={() => handleAdd()}>
          Cadastrar
        </Button>
      </Form.Item>

      </Form>
    )  

}