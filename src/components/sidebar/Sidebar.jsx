import Box from "@mui/material/Box";
import {SidebarDrawer} from "./SidebarDrawer.jsx";


export const Sidebar = () => {
    return (
        <Box sx={{display: {xs:"none",sm:"block"}}}>
            <SidebarDrawer/>
        </Box>
    )
}
