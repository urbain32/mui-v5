import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { itemData } from "../utils/data";
import Conversation from "./Conversation";
const Rightbar = () => {
  return (
    <Box sx={{ display: { xs: "none", sm: "block" } }} flex={2} p={2}>
      <Box position='relative' width={300}>
        <Typography variant='h6' fontWeight={100} mb={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt='Remy Sharp'
            src='https://material-ui.com/static/images/avatar/1.jpg'
          />
          <Avatar
            alt='Travis Howard'
            src='https://material-ui.com/static/images/avatar/2.jpg'
          />
          <Avatar
            alt='Cindy Baker'
            src='https://material-ui.com/static/images/avatar/3.jpg'
          />
          <Avatar alt='Agnes Walker' src='' />
          <Avatar
            alt='Trevor Henderson'
            src='https://material-ui.com/static/images/avatar/6.jpg'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://material-ui.com/static/images/avatar/7.jpg'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://material-ui.com/static/images/avatar/8.jpg'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://material-ui.com/static/images/avatar/7.jpg'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://material-ui.com/static/images/avatar/8.jpg'
          />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} alt={item.title} loading='lazy' />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant='h6' fontWeight={100} mb={2}>
          Latest conversation
        </Typography>
        <Conversation />
      </Box>
    </Box>
  );
};
export default Rightbar;
