import { Box } from "@mui/material";
import AddButton from "../../components/AddButton";
import DataTable from "../../components/DataTable";
import { useState } from "react";
import AddModal from "../../components/AddModal";
import SupplierForm from "./SupplierForm";

const columns = [
  { id: "supplierNo", label: "Supplier No" },
  { id: "supplierName", label: "Supplier Name" },
  { id: "address", label: "Address" },
  { id: "taxNo", label: "TAX No" },
  { id: "country", label: "Country" },
  { id: "mobileNo", label: "Mobile No" },
  { id: "email", label: "Email" },
  { id: "status", label: "Status" },
];

const rows = [
  {
    supplierNo: "S001",
    supplierName: "ABC Supplies",
    address: "123 Main St, Springfield, USA",
    taxNo: "US-123456789",
    country: "US",
    mobileNo: "+1 234-567-8901",
    email: "contact@abcsupplies.com",
    status: "Active",
  },
  {
    supplierNo: "S002",
    supplierName: "Global Traders",
    address: "456 Elm St, London, UK",
    taxNo: "GB-987654321",
    country: "GB",
    mobileNo: "+44 20 7946 0958",
    email: "info@globaltraders.co.uk",
    status: "Inactive",
  },
  {
    supplierNo: "S003",
    supplierName: "XYZ Wholesalers",
    address: "789 Oak Ave, Toronto, Canada",
    taxNo: "CA-112233445",
    country: "CA",
    mobileNo: "+1 416-555-0123",
    email: "sales@xyzwholesalers.ca",
    status: "Blocked",
  },
  {
    supplierNo: "S004",
    supplierName: "Supreme Goods",
    address: "321 Pine Rd, Sydney, Australia",
    taxNo: "AU-556677889",
    country: "AU",
    mobileNo: "+61 2 9876 5432",
    email: "support@supremegoods.com.au",
    status: "Active",
  },
  {
    supplierNo: "S005",
    supplierName: "Quality Items",
    address: "654 Maple St, Berlin, Germany",
    taxNo: "DE-998877665",
    country: "DE",
    mobileNo: "+49 30 12345678",
    email: "info@qualityitems.de",
    status: "Active",
  },
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
