import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Layout from "./Layout";
import Suppliers from "./pages/Suppliers";
import Items from "./pages/Items";
import Purchase from "./pages/Purchase";
import ItemDetails from "./pages/ItemDetails";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/items" element={<Items />} />
            <Route path="/items/:id" element={<ItemDetails />} />
            <Route path="/purchase" element={<Purchase />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
