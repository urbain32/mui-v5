import { MoreVert, Share, Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardHeader,
  Typography,
  CardActions,
  IconButton,
  CardMedia,
  CardContent,
  Checkbox,
} from "@mui/material";

const Post = ({ like, setLike }) => {
  return (
    <Card sx={{ margin: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label='recipe'>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVert />
          </IconButton>
        }
        title='Shrimp and Chorizo Paella'
        subheader='September 14, 2016'
      />
      <CardMedia
        component='img'
        height='300px'
        image='https://source.unsplash.com/random'
        alt='Paella dish'
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          onClick={() => {
            setLike(like + 1);
          }}
          aria-label='add to favorites'>
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label='share'>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
