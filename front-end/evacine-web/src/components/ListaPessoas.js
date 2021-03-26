import React, { Component } from 'react';
import { Table, Tag, Space, Button, message } from 'antd';

const { Column } = Table;
export default class ListaPessoas extends Component{
  constructor(props){
    super(props)
    this.state = {
      pessoas: [],
      message: null,
    }
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
          </Table>
        </div>
      </div>
    )
  }
}