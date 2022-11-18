import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Adding from "./components/Add";
function App() {
  const [like, setLike] = useState(0);
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        {/* navbar */}
        <Navbar like={like} />
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <Sidebar mode={mode} setMode={setMode} />
          <Feed like={like} setLike={setLike} />
          <Rightbar />
        </Stack>
        <Adding />
      </Box>
    </ThemeProvider>
  );
}

export default App;
