import React from "react";
import Button from "@mui/material/Button";
import { IoAdd } from "react-icons/io5";

const AddButton = ({ label }) => {
  return (
    <Button
      sx={{
        alignSelf: "flex-end",
        color: "text.primary",
        borderColor: "transparent",
        // borderRadius: "27px",
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
