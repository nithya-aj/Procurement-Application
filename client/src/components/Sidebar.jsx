import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { AiFillShopping } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { FaTag } from "react-icons/fa6";
import { Link } from "react-router-dom";

const navItems = [
  {
    icon: RiDashboardHorizontalFill,
    name: "Dashboard",
    url: "/",
  },
  {
    icon: HiUsers,
    name: "Suppliers",
    url: "/suppliers",
  },
  {
    icon: FaTag,
    name: "Items",
    url: "/items",
  },
  {
    icon: AiFillShopping,
    name: "Purchase",
    url: "/purchase",
  },
];

const Sidebar = () => {
  return (
    <Box
      sx={{
        p: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        borderRight: "1px solid #D7D9FF",
        height: "100%",
      }}
    >
      <Box
        sx={{
          background:
            "linear-gradient(90deg, rgba(49,41,173,1) 0%, rgba(106,111,154,1) 51%, rgba(176,179,230,1) 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        <Typography variant="h4" gutterBottom>
          SmartPro
        </Typography>
      </Box>
      <Box>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            color: "text.primary",
          }}
        >
          {navItems.map((item, id) => (
            <Link
              to={item.url}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItem
                key={id}
                sx={{
                  cursor: "pointer",
                  height: "3rem",
                  ":hover": {
                    border: "1px solid #B0B3E6",
                    borderRadius: "15px",
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: "1.8rem" }}>
                  <item.icon size={20} />
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{
                    fontSize: 20,
                    fontWeight: "medium",
                    letterSpacing: 0,
                  }}
                />
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
