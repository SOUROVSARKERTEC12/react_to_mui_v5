import Topbar from "../../components/topbar/Topbar.jsx";
import {Stack} from "@mui/material";
import {Sidebar} from "../../components/sidebar/Sidebar.jsx";
import {Feed} from "../../components/feed/Feed.jsx";
import {Rightbar} from "../../components/rightbar/Rightbar.jsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Profile = () => {
    return (
        <>
            <Topbar/>
            <Stack flex={3} mt={8}>
                <Sidebar/>
                <Box marginLeft={30}>
                    <img
                        src="assets/post/3.jpeg"
                        alt=""
                        style={{width:"100%", height:"250px", objectFit:"cover"}}
                    />
                    <img
                        className="profileUserImg"
                        src="assets/person/7.jpeg"
                        alt=""
                        style={{height:"150px",
                            width:"155px",
                            borderRadius:"50%",
                            objectFit:"cover",
                            position:'absolute',
                            left:'15%',
                            right:'0',
                            margin:"auto",
                            top:"225px",
                            border:"3px solid white"
                    }}
                    />
                    <Box mt={8} ml={53} mb={3}>
                        <Typography variant="h6">Safak Kocaoglu</Typography>
                        Hello my friends
                    </Box>
                    <Stack direction='row'>
                        <Feed/>
                        <Rightbar profile/>
                    </Stack>
                </Box>
            </Stack>
        </>
    )
}
