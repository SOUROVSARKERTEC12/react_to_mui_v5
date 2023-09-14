import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {ImageList, ImageListItem, ImageListItemBar, Stack} from "@mui/material";
import {Users} from "../../dummyData.jsx";
import Online from "../online/Online.jsx";


export const Rightbar = ({profile}) => {
    const HomeRightbar = () => {
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
    const ProfileRightbar = () => {
        return (
            <Stack mr={7}>
                <Typography variant="h6">User Information</Typography>
                <Typography variant="body2"><b>City:</b> New York</Typography>
                <Typography variant="body2"><b>From:</b> Madrid</Typography>
                <Typography variant="body2"><b>Relationship:</b> Single</Typography>
                <Box mt={5}>
                    <Typography variant="h6">Friend List</Typography>
                    <Box sx={{ width: 300, height: 450, overflowY: 'scroll' }}>
                        <ImageList variant="masonry" cols={2} gap={8}>
                            {Users.map((item) => (
                                <ImageListItem key={item.id}>
                                    <img
                                        src={item.profilePicture}
                                        alt={item.username}
                                        loading="lazy"
                                    />
                                    <ImageListItemBar position="below" title={item.username} />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                </Box>
            </Stack>
        )
    }

    return (
        <>
            {profile ? <ProfileRightbar/> : <HomeRightbar/>}
        </>
    )

}
