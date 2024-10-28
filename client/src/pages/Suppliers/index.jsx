import { Box } from "@mui/material";
import AddButton from "../../components/AddButton";
import DataTable from "../../components/DataTable";

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
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <AddButton label="Supplier" />
        <DataTable data={rows} columns={columns} rowsPerPage={8} />
      </Box>
    </>
  );
};

export default Suppliers;
