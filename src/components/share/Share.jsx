import {Avatar, Divider, Paper, Stack, TextField} from "@mui/material";
import Button from '@mui/material-next/Button';
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {EmojiEmotions, Label, PermMedia, Room} from "@mui/icons-material";

const UserBox = styled(Box)({
    marginTop: "10px",
    display: 'flex',
    alignItems: 'center',
    gap: "10px",
    marginBottom: "20px",
})
export const Share = () => {
    return (
        <Paper sx={{marginLeft: 2, marginRight: 2}}>
            <UserBox>
                <Avatar sx={{width: 42, height: 42, marginLeft: "7px"}}
                        src="/assets/person/1.jpeg"
                />
                <TextField
                    sx={{width: "100%"}}
                    id="standard-multiline-static"
                    multiline
                    // rows={3}
                    placeholder="What's on your mind?"
                    // variant="standard"
                />
            </UserBox>
            <Divider/>
            <Stack direction="row" justifyContent="space-between" alignItems="center" marginLeft={1}>
                <PermMedia htmlColor="tomato"/>
                <Typography sx={{marginLeft:"-35px",fontSize: "14px", fontWeight: "500"}}>Photo or Video</Typography>
                <Label htmlColor="blue"/>
                <Typography sx={{marginLeft:"-35px",fontSize: "14px", fontWeight: "500"}}>Tag</Typography>
                <Room htmlColor="green"/>
                <Typography sx={{marginLeft:"-35px",fontSize: "14px", fontWeight: "500"}}>Location</Typography>
                <EmojiEmotions htmlColor="goldenrod"/>
                <Typography sx={{marginLeft:"-35px",fontSize: "14px", fontWeight: "500"}}>Feelings</Typography>
                <Button color="primary"
                        size="small"
                        variant="filled">
                    Share
                </Button>
            </Stack>
        </Paper>
    )
}
