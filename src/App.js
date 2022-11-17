import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import { Box, Stack } from "@mui/material";
import { useState } from "react";
import Adding from "./components/Add";
function App() {
  const [like, setLike] = useState(0);
  return (
    <Box>
      {/* navbar */}
      <Navbar like={like} />
      <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Sidebar />
        <Feed like={like} setLike={setLike} />
        <Rightbar />
      </Stack>
      <Adding />
    </Box>
  );
}

export default App;
