import React, {useEffect, useState} from "react";
import StoryForm from "../StoryForm";
import StoryList from "../StoryList";
import { Layout } from "antd";
import styles from "./style";
import { useDispatch } from "react-redux";
import { getStories } from '../../actions/stories';

const {Sider, Content} = Layout;

const Home = () => {
    const [selectedId, setSelectedId] = useState(null);

    // add dsipatch from redux to dispatch action
    const dispatch = useDispatch();

    // update dispatch by calling getStories function from actions and add them in useEffect.
    useEffect(()=>{
        dispatch(getStories());
    }, [dispatch]);

    return (
        <Layout>
            <Sider style={styles.sider} width={400}>
                <StoryForm  selectedId={selectedId} setSelectedId={setSelectedId}/>
            </Sider>
            <Content style={styles.content}>
                <StoryList setSelectedId={setSelectedId} />
            </Content> 
        </Layout>
    )
}

export default Home;