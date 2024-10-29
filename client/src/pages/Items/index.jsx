import { Box } from "@mui/material";
import AddButton from "../../components/AddButton";
import DataTable from "../../components/DataTable";
import ItemForm from "./ItemForm";
import AddModal from "../../components/AddModal";
import { useEffect, useState } from "react";
import { getItems } from "../../api";

const columns = [
  { id: "itemNo", label: "Item No" },
  { id: "itemName", label: "Item Name" },
  { id: "location", label: "Inventory Location" },
  { id: "brand", label: "Brand" },
  { id: "category", label: "Category" },
  { id: "supplier", label: "Supplier" },
  { id: "stockUnit", label: "Stock Unit" },
  { id: "unitPrice", label: "Unit Price" },
  { id: "status", label: "Status" },
];

const Items = () => {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await getItems();
        console.log("Fetched items:", response.data);

        const itemsData = response.data.map((item) => ({
          itemNo: item.itemNo || "",
          itemName: item.itemName || "",
          location: item.inventoryLocation || "",
          brand: item.brand || "",
          category: item.category || "",
          supplier: item.supplier?.supplierName || "",
          stockUnit: item.stockUnit || "",
          unitPrice: item.unitPrice || 0,
          status: item.status || "",
        }));
        setRows(itemsData);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  const addItem = (newItem) => {
    setRows((prevRows) => [newItem, ...prevRows]);
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <AddButton onClick={handleOpen} label="Item" />
        <DataTable data={rows} columns={columns} rowsPerPage={6} />
      </Box>
      {/* Form Modal */}
      <AddModal open={open} handleClose={handleClose} title="Add Item">
        <ItemForm onClose={handleClose} onAddItem={addItem} />
      </AddModal>
    </>
  );
};

export default Items;
