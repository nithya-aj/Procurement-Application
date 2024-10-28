import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Suppliers from "./pages/Suppliers";
import Items from "./pages/Items";
import Purchase from "./pages/Purchase";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Layout from "./Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/items" element={<Items />} />
            <Route path="/purchase" element={<Purchase />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
