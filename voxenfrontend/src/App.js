import HomePage from "./home/HomePage";
import SaucePage from "./sauce/SaucePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </head>
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>Voxenfree</Typography>
          </Toolbar>
        </AppBar>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sauce" element={<SaucePage />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
