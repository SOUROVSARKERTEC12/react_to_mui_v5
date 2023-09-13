import Box from "@mui/material/Box";
import {Share} from "../share/Share.jsx";
import {Post} from "../post/Post.jsx";

export const Feed = () => {
    return (
        <Box flex={5.5}>
            <Share/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </Box>
    )
}
