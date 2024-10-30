import { Box } from "@mui/material";
import AddButton from "../../components/AddButton";
import DataTable from "../../components/DataTable";
import { useEffect, useState } from "react";
import AddModal from "../../components/AddModal";
import SupplierForm from "./SupplierForm";
import { getSuppliers } from "../../api";

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

const Suppliers = () => {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    fetchSuppliers();
  };

  const fetchSuppliers = async () => {
    try {
      const response = await getSuppliers();
      const suppliersData = response.data.map((supplier) => ({
        supplierNo: supplier.supplierNo,
        supplierName: supplier.supplierName,
        address: supplier.address,
        taxNo: supplier.taxNo,
        country: supplier.country,
        mobileNo: supplier.mobileNo,
        email: supplier.email,
        status: supplier.status,
      }));
      setRows(suppliersData);
    } catch (error) {
      console.error("Error fetching suppliers:", error);
    }
  };

  useEffect(() => {
    fetchSuppliers();
  }, []);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <AddButton onClick={handleOpen} label="Supplier" />
        <DataTable data={rows} columns={columns} rowsPerPage={6} />
      </Box>
      {/* Form Modal */}
      <AddModal open={open} handleClose={handleClose} title="Add Supplier">
        <SupplierForm onClose={handleClose} />
      </AddModal>
    </>
  );
};

export default Suppliers;
