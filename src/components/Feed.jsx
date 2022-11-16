import { Box } from "@mui/material";
import Post from "./Post";
const Feed = () => {
  const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <Box sx={{ display: { xs: "block", sm: "block" } }} flex={3} p={2}>
      {posts && posts.map((index) => <Post />)}
    </Box>
  );
};
export default Feed;
