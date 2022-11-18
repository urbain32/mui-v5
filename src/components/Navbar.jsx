import { Pets, Notifications } from "@mui/icons-material";
import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";
const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  // one way to make our page rsponsive
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "5px",
}));
const Navbar = ({ like }) => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position='sticky'>
      <StyledToolBar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
          PET DEV
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase color='red' placeholder='search' />{" "}
        </Search>
        <Icons>
          <Badge badgeContent={like ? like : "4"} color='error'>
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color='error'>
            <Notifications />
          </Badge>
          <Avatar
            onClick={(e) => setOpen(true)}
            sx={{ width: 30, height: 30 }}
            src='http://lnnk.in/htfo'
          />
        </Icons>
        {/* another way to make our page rsponsive  using sx*/}
        <UserBox
          onClick={(e) => setOpen(true)}
          sx={{ display: { xs: "flex", sm: "none" } }}>
          <Typography variant='span'>Hi, Urban</Typography>
          <Avatar sx={{ width: 30, height: 30 }} src='http://lnnk.in/htfo' />
        </UserBox>
      </StyledToolBar>
      <Menu
        sx={{
          top: "35px",
        }}
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}>
        <MenuItem onClick={(e) => setOpen(false)}>Profile</MenuItem>
        <MenuItem onClick={(e) => setOpen(false)}>My account</MenuItem>
        <MenuItem onClick={(e) => setOpen(false)}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
export default Navbar;
