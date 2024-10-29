import Button from "@mui/material/Button";
import { IoAdd } from "react-icons/io5";

const AddButton = ({ onClick, label }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        alignSelf: "flex-end",
        color: "text.main",
        borderColor: "transparent",
        background: "#F5F5F5",
        boxShadow: "5px 5px 9px #e1e1e1, -5px -5px 9px #ffffff",
      }}
      variant="outlined"
      startIcon={<IoAdd />}
    >
      Add {label}
    </Button>
  );
};

export default AddButton;
