import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import RecommendIcon from '@mui/icons-material/Recommend';
import {Favorite, FavoriteBorder, MoreVert, Share} from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export const Post = () => {
    return (
        <Card sx={{margin: 2}}>
            <CardHeader
                avatar={
                    <Avatar sx={{width: 42, height: 42, marginLeft: "7px"}}
                            src="public/assets/person/1.jpeg"
                    />
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert/>
                    </IconButton>
                }
                title="John Doe"
                subheader="September 14, 2022"
            />
            <CardContent>
                <Typography variant="body2">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the
                    mussels, if you like.
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                height="20%"
                image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Paella dish"
            />
            <CardActions disableSpacing>
                <Checkbox
                    icon={<FavoriteBorder/>}
                    checkedIcon={<Favorite sx={{color: "red"}}/>}
                />
                <Checkbox
                    icon={<RecommendIcon/>}
                    checkedIcon={<RecommendIcon sx={{color: "blue"}}/>}
                />
                <Typography>140 people likes it</Typography>
                <Typography marginLeft={25}>10 comments</Typography>
            </CardActions>
        </Card>
    )
}
