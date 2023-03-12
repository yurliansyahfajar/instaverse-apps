import React from "react";
import styles from "./style";
import { Card, Tooltip, Typography, Image } from "antd";
import { EditOutlined, DeleteTwoTone, HeartTwoTone } from "@ant-design/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { deleteStories, likeStories } from "../../actions/stories";
const { Meta } = Card;
const { Link, Paragraph, Text} =  Typography;

const Story = ({ story, setSelectedId }) => {
    const dispatch = useDispatch();
    const [expand, setExpand] = useState(true);

    const user = JSON.parse(localStorage.getItem("profile"));
    const userId = user?.result?._id;

    const cardAction = [
        <div style={styles.actions}>    
            <Tooltip
                placement="top"
                title="Like"
                color="magenta"
                onClick={()=>dispatch(likeStories(story._id, userId))}
            >
                <HeartTwoTone twoToneColor="Magenta" />
                &nbsp; {story.likes.length} &nbsp; 
            </Tooltip>
        </div>,

        <Tooltip
            placement="top"
            title="Edit"
        >
            <EditOutlined onClick={() =>{
                setSelectedId(story._id);
            }} />
        </Tooltip>,

        <Tooltip
            placement="top"
            title="Delete"
            color="red"
        >
            <DeleteTwoTone twoToneColor="red" onClick={()=> dispatch(deleteStories(story._id))} />
        </Tooltip>
    ];

    return (
        <Card
            style={styles.card}
            cover={<Image src ={story.image} />}
            actions={
                user?.result?._id === story?.userId ?
                cardAction : 
                user?.result ?
                    cardAction.slice(0, 1) :
                    null
            }
        >
            <Meta title={story.username} />
            <Paragraph
                style={{ margin:0 }}
                ellipsis={{
                    rows:2,
                    expandable:true,
                    symbol: "more",
                    onExpand:()=>{
                        setExpand(true);
                    },
                    onEllipsis: ()=>{
                        setExpand(false);
                    }
                }}
            >
                {story.caption} 
            </Paragraph>
            {expand ? 
                story.tags ?
                <Link href="">{story.tags.split(" ").map((tag)=> `#${tag} `)}</Link> :
                null
                : null
            }
                <br />
                <Text type="secondary">{moment(story.postDate).fromNow()}</Text>
        </Card>
    )
}

export default Story;