import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { Layout } from "antd";
import Home from './components/Home';
import AuthForm from './components/AuthForm';
import styles from "./style";
import AppBar from "./components/AppBar/AppBar";

const { Footer} =  Layout;

const App = () => {
    return (
        <BrowserRouter>
            <Layout style={styles.layout}>
                <AppBar />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/authform" element={<AuthForm />}/>
                </Routes>
                <Footer style={styles.footer}>2022 Instaverse</Footer>
            </Layout>
        </BrowserRouter> 
    )
}

export default App;