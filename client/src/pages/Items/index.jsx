import { Box } from "@mui/material";
import AddButton from "../../components/AddButton";
import DataTable from "../../components/DataTable";
import ItemForm from "./ItemForm";
import AddModal from "../../components/AddModal";
import { useState } from "react";

const columns = [
  { id: "itemNo", label: "Item No" },
  { id: "itemName", label: "Item Name" },
  { id: "location", label: "Inventory Location" },
  { id: "brand", label: "Brand" },
  { id: "category", label: "Category" },
  { id: "supplier", label: "Supplier" },
  { id: "stockUnit", label: "Stock Unit", align: "right" },
  { id: "unitPrice", label: "Unit Price", align: "right" },
  { id: "status", label: "Status" },
];

const rows = [
  {
    itemNo: "ITM001",
    itemName: "Hammer",
    location: "Warehouse A",
    brand: "BrandX",
    category: "Tools",
    supplier: "Supplier A",
    stockUnit: "Pieces",
    unitPrice: 12.99,
    status: "Enabled",
  },
  {
    itemNo: "ITM002",
    itemName: "Drill",
    location: "Warehouse B",
    brand: "PowerTools",
    category: "Machinery",
    supplier: "Supplier B",
    stockUnit: "Pieces",
    unitPrice: 89.99,
    status: "Disabled",
  },
  {
    itemNo: "ITM003",
    itemName: "Screwdriver Set",
    location: "Warehouse C",
    brand: "Fixit",
    category: "Accessories",
    supplier: "Supplier C",
    stockUnit: "Sets",
    unitPrice: 24.5,
    status: "Enabled",
  },
  {
    itemNo: "ITM004",
    itemName: "Saw",
    location: "Warehouse A",
    brand: "SharpTools",
    category: "Tools",
    supplier: "Supplier A",
    stockUnit: "Pieces",
    unitPrice: 15.75,
    status: "Enabled",
  },
  {
    itemNo: "ITM005",
    itemName: "Wrench",
    location: "Warehouse B",
    brand: "BuildPro",
    category: "Tools",
    supplier: "Supplier D",
    stockUnit: "Pieces",
    unitPrice: 10.5,
    status: "Enabled",
  },
  {
    itemNo: "ITM006",
    itemName: "Ladder",
    location: "Warehouse C",
    brand: "StepMaster",
    category: "Accessories",
    supplier: "Supplier A",
    stockUnit: "Pieces",
    unitPrice: 75.0,
    status: "Disabled",
  },
];

const Items = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <AddButton onClick={handleOpen} label="Item" />
        <DataTable data={rows} columns={columns} rowsPerPage={8} />
      </Box>
      {/* Form Modal */}
      <AddModal open={open} handleClose={handleClose} title="Add Item">
        <ItemForm />
      </AddModal>
    </>
  );
};

export default Items;
