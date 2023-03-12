import React, {useEffect} from "react";
import {Card, Form, Input, Typography, Button} from "antd";
import { useDispatch, useSelector } from "react-redux";
import FileBase64 from "react-file-base64";
import styles from "./style";
import { createStories, updateStories } from "../../actions/stories";
import { Link } from "react-router-dom";



const { Title } = Typography;

const StoryForm = ({selectedId, setSelectedId}) => {
    const story = useSelector((state)=> selectedId ? state.stories.find(story => story._id === selectedId) :  null);
   
    //insert form hooks from antd
    const[form] = Form.useForm();
    
    //use dispatch
    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem("profile"));
    const username = user?.result?.username;
    const userId = user?.result?._id;
   

    const onSubmit = (formValues) => {
        selectedId ? 
        dispatch(updateStories(selectedId, {...formValues, username})) :
        dispatch(createStories({...formValues, username, userId}));    

        reset();
    };

    useEffect(()=>{
        if(story) {
            form.setFieldsValue(story);
        }
    },[story, form]);

    const reset = () => {
        form.resetFields();
        setSelectedId(null);
    }

    if (!user) {
        return (
            <Card>
                <Title level={4} >
                   <span style={styles.formTitle}>
                        Welcome to Instaverse!
                   </span> <br />
                   Please <Link to="/authform">login</Link> or{" "}
                   <Link to="/authform">register</Link>  for sharing instant moments or ideas.
                </Title>
            </Card>
        )
    }

    return (
        <Card style={styles.formCard}
            title={
                <Title level={4} style={styles.formTitle}>
                    {selectedId ? "Editing" : "Share"} a Story
                </Title>
            }
        >
            <Form
                form={form}
                labelCol={{ span:6 }}
                wrapperCol={{ span:16 }}
                layout="horizontal"
                size="middle"
                onFinish={onSubmit}
            >
                <Form.Item name="caption" label="Caption" rules={[{ required: true}]}>
                    <Input.TextArea allowClear autoSize={{ minRows:2, maxRows:6}} />
                </Form.Item>

                <Form.Item name="tags" label="Tags">
                    <Input.TextArea allowClear autoSize={{ minRows:2, maxRows:6}} />
                </Form.Item>

                <Form.Item name="image" label="Image" rules={[{ required: true}]}>
                    <FileBase64
                        type="file"
                        multiple={false}
                        onDone={(e)=>{
                            form.setFieldsValue({
                                image: e.base64
                            })
                        }}
                    />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        span: 16,
                        offset: 6
                    }}
                >
                    <Button
                        type="primary"
                        block
                        htmlType="submit"
                    >
                        Share
                    </Button>
                </Form.Item>
                { !selectedId ? null :
                    <Form.Item
                        wrapperCol={{
                            span: 16,
                            offset: 6
                        }}
                    >
                        <Button
                            type="primary"
                            block
                            htmlType="button"
                            danger
                            onClick={reset}
                        >
                            Discard
                        </Button>
                    </Form.Item>
                }   
            </Form>
        </Card>
    )
}

export default StoryForm;