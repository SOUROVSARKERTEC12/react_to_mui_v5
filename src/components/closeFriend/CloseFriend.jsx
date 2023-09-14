import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import {Avatar} from "@mui/material";
import Typography from "@mui/material/Typography";

const UserBox = styled(Box)({
    marginTop: "10px",
    display: 'flex',
    alignItems: 'center',
    gap: "10px",
    marginBottom: "20px",
})
export const CloseFriend = ({user}) => {
    return (
        <Box>
            <UserBox>
                <Avatar sx={{width: 32, height: 32}}
                        src={user.profilePicture}
                />
                <Typography variant="span">{user.username}</Typography>
            </UserBox>
        </Box>
    )
}
