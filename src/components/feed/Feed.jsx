import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Share } from '../share/Share.jsx';
import { Post } from '../post/Post.jsx';
import { Posts } from '../../dummyData.jsx';

export const Feed = () => {
    return (
        <Grid container>
            <Grid item xs={12} md={8} lg={12}>
                <Share />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {Posts.map((p) => (
                        <Post key={p.id} post={p} />
                    ))}
                </Box>
            </Grid>
        </Grid>
    );
};
