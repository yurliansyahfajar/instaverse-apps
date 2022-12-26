import React, {useEffect} from "react";
import StoryForm from "../StoryForm";
import StoryList from "../StoryList";
import { Layout } from "antd";
import styles from "./style";
import { useDispatch } from "react-redux";
import { getStories } from '../../actions/stories';

const {Sider, Content} = Layout;

const Home = () => {

    // add dsipatch from redux to dispatch action
    const dispatch = useDispatch();

    // update dispatch by calling getStories function from actions and add them in useEffect.
    useEffect(()=>{
        dispatch(getStories());
    }, [dispatch]);

    return (
        <Layout>
            <Sider style={styles.sider} width={400}>
                <StoryForm />
            </Sider>
            <Content style={styles.content}>
                <StoryList />
            </Content> 
        </Layout>
    )
}

export default Home;