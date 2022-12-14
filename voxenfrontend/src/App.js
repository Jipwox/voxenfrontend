import HomePage from "./home/HomePage";
import SaucePage from "./sauce/SaucePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const theme = createTheme();

const rightStyle = {
  // This group of buttons will be aligned to the right
  background: "white",
  marginLeft: "auto",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
            <Typography variant="h6" color="inherit">
              Voxenfree
            </Typography>
            <Button color="success" sx={rightStyle}>
              Hi
            </Button>
        </Toolbar>
      </AppBar>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sauce" element={<SaucePage />} />
        </Routes>
      </Router>
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Voxenfree
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Patches
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
