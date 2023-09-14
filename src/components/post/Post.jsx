import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {MoreVert} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import {useState} from "react";
import { Users } from "../../dummyData";

// eslint-disable-next-line react/prop-types
export const Post = ({post}) => {

    const [like,setLike] = useState(post.like)
    const [isLiked,setIsLiked] = useState(false)

    const likeHandler =()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

    return (
        <Card sx={{margin: 2}}>
            <CardHeader
                avatar={
                    <Avatar sx={{width: 42, height: 42, marginLeft: "7px"}}
                            src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
                    />
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert/>
                    </IconButton>
                }
                title={Users.filter((u) => u.id === post?.userId)[0].username}
                subheader={post.date}
            />
            <CardContent>
                <Typography variant="body2">
                    {post?.desc}
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                height="20%"
                image={post.photo}
                alt="Paella dish"
            />
            <CardActions disableSpacing>
                <img height="18px" src="assets/like.png" onClick={likeHandler} alt="" />
                <img height="18px" src="assets/heart.png" onClick={likeHandler} alt="" />
                <Typography> {like} people likes it</Typography>
                <Typography marginLeft={33}>{post.comment} comments</Typography>
            </CardActions>
        </Card>
    )
}
