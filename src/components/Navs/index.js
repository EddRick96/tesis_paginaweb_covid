import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  TableOutlined,
  DashboardOutlined,
} from '@ant-design/icons';
import RoutesApp from '../../Router';
import { Link } from 'react-router-dom';

const { Header, Sider, Content, Footer } = Layout;

class SiderBar extends React.Component {

    state = {
        collapsed: false,
    };
    
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const closeDrawer = key => event => {
            let region=key
            this.setState({ open: false });
            localStorage.setItem('region', region)
          };
        //ReactDOM.render(<TableData/>,nueva=closeDrawer)
        
        return(
            <Layout className='body-page'>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<HomeOutlined />}>
                            <Link to="/">Inicio</Link> 
                        </Menu.Item>
                        <Menu.Item key="2" icon={<TableOutlined />}>
                            <Link to="/tabla">Tabla</Link> 
                        </Menu.Item>
                        <Menu.Item key="3" icon={<DashboardOutlined />}>
                            <Link to="/dashboard">Dashboard</Link> 
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background header">
                        <div>
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                            })}
                        </div>
                        <Menu theme="light" mode="horizontal" value= { this.state.selectedItem } onChange={ this.menuClicked }>
                            <Menu.Item key="1" onClick={closeDrawer("Costa")}>Costa</Menu.Item>
                            <Menu.Item key="2" onClick={closeDrawer("Sierra")}>Sierra</Menu.Item>
                            <Menu.Item key="3" onClick={closeDrawer("Oriente")}>Oriente</Menu.Item>
                            <Menu.Item key="4" onClick={closeDrawer("Galápagos")}>Galápagos</Menu.Item>
                        </Menu>
                    </Header>
                    <Breadcrumb className='site-layout-breadcrumb'>
                        <Breadcrumb.Item>Inicio</Breadcrumb.Item>
                        <Breadcrumb.Item>Lista</Breadcrumb.Item>
                        <Breadcrumb.Item>Aplicación</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content className='site-layout-background content'>
                        <div className="site-layout-content">
                            <RoutesApp numberProvince={20}/>
                        </div>
                    </Content>
                    <Footer className='footer-page'>Tesis ©2022 Creado por Erick Bolaños</Footer>
                </Layout>
            </Layout> 
        )
    }
}

export default SiderBar