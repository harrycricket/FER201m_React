import "./App.scss";
import Navigation from "./container/navigation/Navigation";
import Footer from "./container/footer/Footer";
import Main from "./container/main/Main";
import { Routes, Route } from "react-router-dom";
import Detail from "./container/player-detail/Detail";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import React, { useMemo, useState } from "react";
import getDesignTokens from "./container/theme/themeMui";
import ContactUs from "./container/contact-us/ContactUs";
import AboutUs from "./container/about-us/AboutUs";
import News from "./container/news/News";
import AddPlayer from "./container/add-player/AddPlayer";

function App() {
  const [mode, setMode] = useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <Box
        colorMode={colorMode}
        sx={{
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Navigation colorMode={colorMode} />
        <Box
          sx={{
            minHeight: "100vh",
            backgroundColor: theme.palette.background.default,
            position: "relative",
          }}
        >
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/detail/:id" element={<Detail />}></Route>
            <Route path="/contact" element={<ContactUs />}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
            <Route path="/news" element={<News />}></Route>
            <Route path="/add" element={<AddPlayer />}></Route>
          </Routes>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
