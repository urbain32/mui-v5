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
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
const Navbar = () => {
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
      display:"flex"
    }
  }));
  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "5px",
  }));
  return (
    <AppBar position='sticky'>
      <StyledToolBar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
          PET DEV
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder='search' />{" "}
        </Search>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color='error'>
            <Notifications />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} src='http://lnnk.in/htfo' />
        </Icons>
        {/* another way to make our page rsponsive  using sx*/}
        <UserBox sx={{ display: { xs: "flex", sm: "none" } }}>
          <Typography variant='span'>Hi, Urban</Typography>
          <Avatar sx={{ width: 30, height: 30 }} src='http://lnnk.in/htfo' />
        </UserBox>
      </StyledToolBar>
    </AppBar>
  );
};
export default Navbar;
