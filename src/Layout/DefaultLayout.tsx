import {
  AppBar,
  Box,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import { BsBrightnessHigh } from "react-icons/bs";
import { MdBrightness2 } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function DefaultLayout({ children }: { children: React.ReactNode }) {
  const [Theme, setTheme] = React.useState(true);
  const provideTheme = createTheme({
    palette: {
      mode: Theme ? "light" : "dark",
    },
  });
  return (
    <ThemeProvider theme={provideTheme}>
      <Box>
        <AppBar position="fixed" color="inherit" sx={{ boxShadow: "none" }}>
          <Toolbar>
            <Typography
              variant="body1"
              color="inherit"
              sx={{ flexGrow: 1 }}
              fontSize={25}
              fontWeight={650}
            >
              Weather App
            </Typography>
            <Typography
              variant="body1"
              color="inherit"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Typography
              variant="body1"
              color="inherit"
              sx={{ flexGrow: 1 }}
              display="flex"
              justifyContent="end"
              gap={2}
            >
              <IconButton
                onClick={() => {
                  setTheme(!Theme);
                }}
              >
                {" "}
                {Theme ? <BsBrightnessHigh /> : <MdBrightness2 />}
              </IconButton>
              <IconButton href="https://github.com/develop-programs/weather_final.git">
                <FaGithub />
              </IconButton>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Paper
        sx={{
          flexGrow: 1,
          height: "100vh",
          overflowY: "auto",
        }}
      >
        {children}
      </Paper>
    </ThemeProvider>
  );
}

export default DefaultLayout;
