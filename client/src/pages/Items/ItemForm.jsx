import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  styled,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { BiSolidImageAdd } from "react-icons/bi";
import { createItem, getActiveSuppliers } from "../../api";

const textFieldStyles = {
  backgroundColor: "transparent",
  "& .MuiInputLabel-root": { color: "text.main" },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "text.main",
  },
  "& .MuiFilledInput-root": {
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
    },
  },
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ItemForm = ({ onClose }) => {
  const [itemName, setItemName] = useState("");
  const [inventoryLocation, setInventoryLocation] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [selectedSupplier, setSelectedSupplier] = useState("");
  const [stockUnit, setStockUnit] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [status, setStatus] = useState("Enabled");
  const [selectedImages, setSelectedImages] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    const fetchActiveSuppliers = async () => {
      try {
        const response = await getActiveSuppliers();
        setSuppliers(response.data);
      } catch (error) {
        console.error("Error fetching suppliers:", error);
      }
    };
    fetchActiveSuppliers();
  }, []);

  const handleSupplierChange = (event) =>
    setSelectedSupplier(event.target.value);

  const handleStockUnitChange = (event) => {
    const value = event.target.value;
    setStockUnit(value);
  };

  const handleImageChange = (event) =>
    setSelectedImages(Array.from(event.target.files));

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("itemName", itemName);
    formData.append("inventoryLocation", inventoryLocation);
    formData.append("brand", brand);
    formData.append("category", category);
    formData.append("supplier", selectedSupplier);
    formData.append("stockUnit", stockUnit);
    formData.append("unitPrice", unitPrice);
    formData.append("status", status);

    selectedImages.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const response = await createItem(formData);
      console.log("Item Created:", response.data);
      setSelectedImages([]);
      onClose();
    } catch (error) {
      console.error("Error creating item:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TextField
            required
            id="filled-required"
            label="Name"
            variant="filled"
            sx={{ ...textFieldStyles }}
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <TextField
            required
            id="filled-required"
            label="Location"
            variant="filled"
            sx={{ ...textFieldStyles }}
            value={inventoryLocation}
            onChange={(e) => setInventoryLocation(e.target.value)}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TextField
            required
            id="filled-required"
            label="Brand"
            variant="filled"
            sx={{ ...textFieldStyles }}
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          <TextField
            required
            id="filled-required"
            label="Category"
            variant="filled"
            sx={{ ...textFieldStyles }}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </Box>
        <FormControl
          variant="standard"
          sx={{ m: 1, minWidth: 120, ...textFieldStyles }}
        >
          <InputLabel>Supplier</InputLabel>
          <Select
            value={selectedSupplier}
            onChange={handleSupplierChange}
            label="Supplier"
          >
            {suppliers.map((supplier) => (
              <MenuItem key={supplier.supplierNo} value={supplier._id}>
                {supplier.supplierName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          variant="standard"
          sx={{ m: 1, minWidth: 120, ...textFieldStyles }}
        >
          <InputLabel>Stock Unit</InputLabel>
          <Select
            value={stockUnit}
            onChange={handleStockUnitChange}
            label="Stock Unit"
          >
            <MenuItem value="pieces">Pieces</MenuItem>
            <MenuItem value="sets">Sets</MenuItem>
            <MenuItem value="boxes">Boxes</MenuItem>
          </Select>
        </FormControl>

        <TextField
          required
          id="filled-required"
          label="Unit price"
          type="number"
          variant="filled"
          sx={{ ...textFieldStyles }}
          value={unitPrice}
          onChange={(e) => setUnitPrice(e.target.value)}
        />
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, pt: 2 }}>
          <Button
            component="label"
            variant="contained"
            startIcon={<BiSolidImageAdd />}
            sx={{ ...textFieldStyles, minWidth: "9.5rem" }}
          >
            Add Images
            <VisuallyHiddenInput
              type="file"
              onChange={handleImageChange}
              multiple
            />
          </Button>

          <Box sx={{ display: "flex", flexWrap: "wrap", mt: 2 }}>
            {selectedImages.map((image, index) => (
              <Box
                key={index}
                component="img"
                src={URL.createObjectURL(image)}
                alt={`Selected ${index + 1}`}
                sx={{
                  width: 38,
                  height: 38,
                  objectFit: "cover",
                  borderRadius: 2,
                  m: 1,
                }}
              />
            ))}
          </Box>
        </Box>

        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" sx={{ pt: 2 }}>
            Status
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <FormControlLabel
              value="Enabled"
              control={<Radio />}
              label="Enabled"
            />
            <FormControlLabel
              value="Disabled"
              control={<Radio />}
              label="Disabled"
            />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          sx={{
            alignSelf: "flex-end",
            borderColor: "secondary.accent",
            color: "text.main",
          }}
          variant="contained"
        >
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default ItemForm;
