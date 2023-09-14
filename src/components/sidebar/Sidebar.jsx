import Box from "@mui/material/Box";
import {Button, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {
    Bookmark,
    Chat,
    Group,
    HelpOutline,
    PlayCircleFilledOutlined,
    RssFeed,
    School,
    WorkOutline,
    Event
} from "@mui/icons-material";
import { Users } from "../../dummyData";
import {CloseFriend} from "../closeFriend/CloseFriend.jsx";


export const Sidebar = () => {
    return (
        <Box flex={3}>
            <Box position="fixed">
                <List
                    sx={{
                        marginBottom: "10px",
                        bgcolor: 'background.paper',
                        overflow: 'auto',
                        maxHeight: 605,
                        '& ul': { padding: 10 },
                    }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <RssFeed sx={{color: "#212121"}}/>
                            </ListItemIcon>
                            <ListItemText primary='Feed'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Chat sx={{color: "#212121"}}/>
                            </ListItemIcon>
                            <ListItemText primary='Chats'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PlayCircleFilledOutlined sx={{color: "#212121"}}/>
                            </ListItemIcon>
                            <ListItemText primary='Videos'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Group sx={{color: "#212121"}}/>
                            </ListItemIcon>
                            <ListItemText primary='Groups'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Bookmark sx={{color: "#212121"}}/>
                            </ListItemIcon>
                            <ListItemText primary='Bookmarks'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <HelpOutline sx={{color: "#212121"}}/>
                            </ListItemIcon>
                            <ListItemText primary='Questions'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <WorkOutline sx={{color: "#212121"}}/>
                            </ListItemIcon>
                            <ListItemText primary='Jobs'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Event sx={{color: "#212121"}}/>
                            </ListItemIcon>
                            <ListItemText primary='Events'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{marginBottom: "10px"}}>
                        <ListItemButton>
                            <ListItemIcon>
                                <School sx={{color: "#212121"}}/>
                            </ListItemIcon>
                            <ListItemText primary='Courses'/>
                        </ListItemButton>
                    </ListItem>
                    <Button variant='outlined'>Show More</Button>
                    <Divider sx={{marginTop: 1}}/>
                    {Users.map((u) => (
                        <CloseFriend key={u.id} user={u} />
                    ))}
                </List>
            </Box>
        </Box>
    )
}
