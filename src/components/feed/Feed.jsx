import Box from "@mui/material/Box";
import {Share} from "../share/Share.jsx";
import {Post} from "../post/Post.jsx";
import { Posts } from "../../dummyData.jsx";

export const Feed = () => {
    return (
        <Box flex={5.5}>
            <Share/>
            {Posts.map((p) => (
                <Post key={p.id} post={p} />
            ))}
        </Box>
    )
}
