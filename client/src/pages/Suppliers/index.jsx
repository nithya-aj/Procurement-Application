import { Box } from "@mui/material";
import AddButton from "../../components/AddButton";
import DataTable from "../../components/DataTable";
import { useState } from "react";
import AddModal from "../../components/AddModal";
import SupplierForm from "./SupplierForm";

const columns = [
  { id: "name", label: "Dessert (100g serving)" },
  { id: "calories", label: "Calories", align: "right" },
  { id: "fat", label: "Fat (g)", align: "right" },
];

const rows = [
  { name: "Donut", calories: 305, fat: 3.7 },
  { name: "Donut", calories: 452, fat: 25.0 },
  { name: "Donut", calories: 452, fat: 25.0 },
  { name: "Donut", calories: 452, fat: 25.0 },
  { name: "Donut", calories: 452, fat: 25.0 },
  { name: "Donut", calories: 452, fat: 25.0 },
  { name: "Donut", calories: 452, fat: 25.0 },
  { name: "Donut", calories: 452, fat: 25.0 },
  { name: "Donut", calories: 452, fat: 25.0 },
  { name: "Donut", calories: 452, fat: 25.0 },
  { name: "Donut", calories: 452, fat: 25.0 },
  { name: "Donut", calories: 452, fat: 25.0 },
  { name: "Donut", calories: 452, fat: 25.0 },
  { name: "Donut", calories: 452, fat: 25.0 },
  { name: "Donut", calories: 452, fat: 25.0 },
  { name: "Donut", calories: 452, fat: 25.0 },
  { name: "Donut", calories: 452, fat: 25.0 },
  { name: "Donut", calories: 452, fat: 25.0 },
  { name: "Donut", calories: 452, fat: 25.0 },
  { name: "Donut", calories: 452, fat: 25.0 },
];

const Suppliers = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <AddButton onClick={handleOpen} label="Supplier" />
        <DataTable data={rows} columns={columns} rowsPerPage={8} />
      </Box>
      {/* Form Modal */}
      <AddModal open={open} handleClose={handleClose} title="Add Supplier">
        <SupplierForm />
      </AddModal>
    </>
  );
};

export default Suppliers;
