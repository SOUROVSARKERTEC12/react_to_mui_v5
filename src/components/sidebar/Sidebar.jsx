import Box from "@mui/material/Box";
import {SidebarDrawer} from "./SidebarDrawer.jsx";


export const Sidebar = () => {
    return (
        <Box flex={3} sx={{display: {xs:"none",sm:"block"}}}>
            <SidebarDrawer/>
        </Box>
    )
}
