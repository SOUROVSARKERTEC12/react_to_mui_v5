import Topbar from "../../components/topbar/Topbar.jsx";
import {Sidebar} from "../../components/sidebar/Sidebar.jsx";
import {Feed} from "../../components/feed/Feed.jsx";
import {Rightbar} from "../../components/rightbar/Rightbar.jsx";
import {Stack} from "@mui/material";
import {Profile} from "../profile/Profile.jsx";
import Login from "../login/Login.jsx";
import Register from "../register/Register.jsx";

export const Home = () => {
    return (
        <>
            {/*<Topbar/>*/}
            {/*<Stack direction="row" mt={8} justifyContent="space-between">*/}
            {/*    <Sidebar/>*/}
            {/*    <Feed/>*/}
            {/*    <Rightbar/>*/}
            {/*</Stack>*/}
            {/*<Profile/>*/}
            {/*<Login/>*/}
            <Register/>
        </>
    )
}
