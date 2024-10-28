import { Box } from "@mui/material";
import AddButton from "../../components/AddButton";

const Items = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <AddButton label="Item" />
    </Box>
  );
};

export default Items;
