import { Box, Skeleton, Stack } from "@mui/material";
import { useState } from "react";
import Post from "./Post";
const Feed = ({ like, setLike }) => {
  const posts = [1, 2, 3, 4];
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <Box p={{ xs: 0, md: 2 }} flex={4}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant='text' height={100} />
          <Skeleton variant='text' height={20} />
          <Skeleton variant='text' height={20} />
          <Skeleton variant='rectangular' height={300} />
        </Stack>
      ) : (
        <>
          {posts &&
            posts.map((row, index) => (
              <Post key={index} like={like} setLike={setLike} />
            ))}
        </>
      )}
    </Box>
  );
};
export default Feed;
