import { Layout, Menu } from 'antd';
import ListaPessoas from '../components/ListaPessoas';
import CadastrarPessoa from '../components/CadastrarPessoa';
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;
export default function Home() {
  return (
    <div>
     <Layout className="layout">
      <Header>
        <div className="logo">
          <Menu 
          theme="dark" 
          mode="horizontal"
          defaultSelectedKeys={['1']} >
            <Menu.Item key="1">Home</Menu.Item>            
          </Menu>
        </div>
      </Header>
      <CadastrarPessoa />
      <Content style={{padding: '0 50px'}}>
        <div className="site-layout-content">
          <ListaPessoas></ListaPessoas>
        </div>
      </Content>
      <Footer style={{textAlign: 'center'}}>
        Evacine
      </Footer>
     </Layout>
    </div>
  );
}
