import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Avatar, Stack} from "@mui/material";
import Badge from "@mui/material/Badge";
import {styled} from "@mui/material/styles";
import {Users} from "../../dummyData.jsx";
import Online from "../online/Online.jsx";


const StyledBadge = styled(Badge)(({theme}) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));


export const Rightbar = () => {
    return (
        <Box flex={3}>
            <Box>
                <Stack direction="row" mt={1}>
                    <img src="assets/gift.png"
                         height="30px"
                         alt="birthday"
                         style={{marginTop: '2px', marginRight: '1px'}}
                    />
                    <Typography>
                        <b> Pola Foster </b> and <b> 3 other friends </b> hava a birthday today.
                    </Typography>
                </Stack>
                <img
                    src="assets/ad.png"
                    alt="ad"
                    width="100%"
                    style={{borderRadius: '10px', marginTop: '20px'}}
                />
                <Typography sx={{fontWeight: '600'}}>
                    Online Friends
                </Typography>
                {Users.map((u) => (
                    <Online key={u.id} user={u}/>
                ))}
            </Box>
        </Box>
    )
}
