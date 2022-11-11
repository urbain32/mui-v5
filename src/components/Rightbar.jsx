import { Box } from "@mui/material"

const Rightbar = () => {
  return (
    <Box
      bgcolor='lightblue'
      sx={{ display: { xs: 'none', sm: 'inline-block' } }}
      flex={3}
      p={2}
    >
      Rightbar
    </Box>
  );
}
export default Rightbar