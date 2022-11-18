import {
  Close,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
  DateRange,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Modal as Modale,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
const StyledModal = styled(Modale)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 10,
  marginBottom: "20px",
});
const Modal = ({ open, setOpen }) => {
  return (
    <StyledModal
      open={open}
      onClose={(e) => setOpen(false)}
      aria-labelledby='child-modal-title'
      aria-describedby='child-modal-description'>
      <Box width={400} height={300} borderRadius={5} p={3} bgcolor='whitesmoke'>
        <Close
          onClick={() => setOpen(false)}
          sx={{
            ":hover": {
              color: "red",
              backgroundColor: "lightGrey",
              borderRadius: "100px",
            },
            color: "grey",
          }}
        />

        <Typography variant='h6' color='gray' textAlign='center'>
          Create Post.
        </Typography>
        <UserBox>
          <Avatar
            alt='Remy Sharp'
            src='https://material-ui.com/static/images/avatar/1.jpg'
            sx={{ width: 30, height: 30 }}
          />
          <Typography variant='span' fontWeight={500}>
            Remy Sharp
          </Typography>
        </UserBox>
        <TextField
          sx={{ width: "100%" }}
          id='standard-multiline-static'
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant='standard'
        />
        <Stack direction='row' gap='10px' mt={2} mb={2}>
          <EmojiEmotions color='primary' />
          <Image color='secondary' />
          <VideoCameraBack color='success' />
          <PersonAdd color='error' />
        </Stack>
        <ButtonGroup
          fullWidth
          variant='contained'
          aria-label='outlined primary button group'>
          <Button>Post</Button>
          <Button sx={{ width: "80px" }} variant='outlined'>
            <DateRange />
          </Button>
        </ButtonGroup>
      </Box>
    </StyledModal>
  );
};

export default Modal;
