import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const Layout = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        overflow: "hidden",
        bgcolor: "background.default",
      }}
    >
      <Box sx={{ width: "14%" }}>
        <Sidebar />
      </Box>
      <Box sx={{ flexGrow: 1, width: "86%" }}>
        <Navbar />
        <Box sx={{ padding: 4 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
