import React, { Component } from 'react';
import { Table, Tag, Space, Button, message } from 'antd';
import PessoaDataService from '../service/PessoaDataService';

const { Column } = Table;
export default class ListaPessoas extends Component{
  constructor(props){
    super(props)
    this.state = {
      pessoas: [],
      message: null,
    }
  }

  componentDidMount(){
    this.refreshPessoas();
  }

  refreshPessoas(){
    PessoaDataService.retriveAllPessoas()
    .then(
      response => {
        console.log(response);
        this.setState({pessoas: response.data})
      }
    )
  }

  render(){
    return(
      <div className="container">
        <h2>PESSOAS CADASTRADAS</h2>
        <div className="container">
          <Table dataSource={this.state.pessoas}>
            <Column title="NOME" dataIndex="nome" key="nome" />
            <Column title="CPF" dataIndex="cpf" key="cpf" />
            <Column title="TELEFONE" dataIndex="telefone" key="telefone" />
            <Column title="EMAIL" dataIndex="email" key="email" />
            <Column title="VACINADA" dataIndex="isVacinada" key="isVacinada" />
            <Column title="ATUALIZAR" key="atualizar" />
          </Table>
        </div>
      </div>
    )
  }
}