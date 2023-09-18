import React, { useState } from 'react';
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    IconButton,
    Typography,
} from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import { Users } from '../../dummyData';

export const Post = ({ post }) => {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };

    return (
        <Grid item xs={12} sm={12} md={4} lg={12}>
            <Card sx={{ margin: 2 }}>
                <CardHeader
                    avatar={
                        <Avatar
                            sx={{ width: 42, height: 42, marginLeft: '7px' }}
                            src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
                        />
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title={Users.filter((u) => u.id === post?.userId)[0].username}
                    subheader={post.date}
                />
                <CardContent>
                    <Typography variant="body2">{post?.desc}</Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    height="auto"
                    width="100%"
                    image={post.photo}
                    alt="Paella dish"
                />
                <CardActions disableSpacing>
                    <img
                        height="18px"
                        src="assets/like.png"
                        onClick={likeHandler}
                        alt=""
                    />
                    <img
                        height="18px"
                        src="assets/heart.png"
                        onClick={likeHandler}
                        alt=""
                    />
                    <Typography> {like} people like it</Typography>
                    <Typography marginLeft={33}>{post.comment} comments</Typography>
                </CardActions>
            </Card>
        </Grid>
    );
};
