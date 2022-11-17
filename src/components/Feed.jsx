import { Box } from "@mui/material";
import Post from "./Post";
const Feed = ({ like, setLike }) => {
  const posts = [1, 2, 3, 4];
  return (
    <Box sx={{ display: { xs: "block", sm: "block" } }} flex={3} p={2}>
      <Box position='relative'>
        {posts &&
          posts.map((row, index) => (
            <Post key={index} like={like} setLike={setLike} />
          ))}
      </Box>
    </Box>
  );
};
export default Feed;
