import React from 'react';
import {
    Avatar,
    Divider,
    Paper,
    Stack,
    TextField,
    Button,
    Typography,
} from '@mui/material';
import {
    EmojiEmotions,
    Label,
    PermMedia,
    Room,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const UserBox = styled(Box)({
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '20px',
});

export const Share = () => {
    return (
        <Paper sx={{ marginLeft: 2, marginRight: 2 }}>
            <UserBox>
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ marginBottom: '10px' }}
                >
                    <Avatar
                        sx={{ width: '42px', height: '42px' }}
                        src="/assets/person/1.jpeg"
                    />
                    <TextField
                        sx={{ width: '100%' }}
                        id="standard-multiline-static"
                        multiline
                        placeholder="What's on your mind?"
                    />
                </Stack>
            </UserBox>
            <Divider />
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ marginLeft: 1 }}
            >
                <Stack direction="column" alignItems="center" spacing={1}>
                    <PermMedia htmlColor="tomato" />
                    <Typography
                        sx={{
                            fontSize: '14px',
                            fontWeight: '500',
                            textAlign: 'center',
                        }}
                    >
                        Photo or Video
                    </Typography>
                </Stack>
                <Stack direction="column" alignItems="center" spacing={1}>
                    <Label htmlColor="blue" />
                    <Typography
                        sx={{
                            fontSize: '14px',
                            fontWeight: '500',
                            textAlign: 'center',
                        }}
                    >
                        Tag
                    </Typography>
                </Stack>
                <Stack direction="column" alignItems="center" spacing={1}>
                    <Room htmlColor="green" />
                    <Typography
                        sx={{
                            fontSize: '14px',
                            fontWeight: '500',
                            textAlign: 'center',
                        }}
                    >
                        Location
                    </Typography>
                </Stack>
                <Stack direction="column" alignItems="center" spacing={1}>
                    <EmojiEmotions htmlColor="goldenrod" />
                    <Typography
                        sx={{
                            fontSize: '14px',
                            fontWeight: '500',
                            textAlign: 'center',
                        }}
                    >
                        Feelings
                    </Typography>
                </Stack>
                <Button
                    color="primary"
                    size="small"
                    variant="contained"
                    sx={{
                        fontSize: '14px',
                        fontWeight: '500',
                        textTransform: 'capitalize',
                    }}
                >
                    Share
                </Button>
            </Stack>
        </Paper>
    );
};
