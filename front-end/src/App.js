import React from "react";
import { Layout, Image, Typography } from "antd";
import Logo from './assets/images/instaverse-logo.png'
import Home from './components/Home';
import styles from "./style";


const { Title } = Typography;
const { Header, Footer} =  Layout;

const App = () => {
    return (
        <Layout style={styles.layout}>
            <Header style={styles.header}>
                <Image style={styles.image} width={45} src={Logo} alt=""></Image>
                &nbsp;
                <Title style={styles.title}>Instaverse</Title>
            </Header>
            <Home />
            <Footer style={styles.footer}>2022 Instaverse</Footer>
        </Layout>
    )
}

export default App;