import { Box } from '@mui/material';

const Sidebar = () => {
  return (
    <Box
      bgcolor='rebeccapurple'
      sx={{ display: { xs: 'none', sm: 'inline-block' } }}
      flex={1}
      p={2}
    >
      Sidebar
    </Box>
  );
};
export default Sidebar;
