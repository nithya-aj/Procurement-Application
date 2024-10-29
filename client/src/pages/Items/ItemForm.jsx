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
import React, { useState } from "react";
import { BiSolidImageAdd } from "react-icons/bi";

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

const ItemForm = () => {
  const [age, setAge] = React.useState("");
  const [selectedImages, setSelectedImages] = useState([]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedImages(files);
  };

  return (
    <form>
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
          />
          <TextField
            required
            id="filled-required"
            label="Location"
            variant="filled"
            sx={{ ...textFieldStyles }}
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
          />
          <TextField
            required
            id="filled-required"
            label="Category"
            variant="filled"
            sx={{ ...textFieldStyles }}
          />
        </Box>
        <FormControl
          variant="standard"
          sx={{ m: 1, minWidth: 120, ...textFieldStyles }}
        >
          <InputLabel id="demo-simple-select-standard-label">
            Supplier
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={age}
            onChange={handleChange}
            label="Supplier"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          variant="standard"
          sx={{ m: 1, minWidth: 120, ...textFieldStyles }}
        >
          <InputLabel id="demo-simple-select-standard-label">
            Stock Unit
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={age}
            onChange={handleChange}
            label="Stock Unit"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <TextField
          required
          id="filled-required"
          label="Unit price"
          variant="filled"
          sx={{ ...textFieldStyles }}
        />
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            sx={{
              ...textFieldStyles,
              alignSelf: "flex-start",
              mt: 2,
              minWidth: "9.5rem",
            }}
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<BiSolidImageAdd />}
          >
            Add Images
            <VisuallyHiddenInput
              type="file"
              onChange={handleImageChange}
              multiple
            />
          </Button>
          {/* Displaing selected images */}
          <Box sx={{ display: "flex", flexWrap: "wrap", mt: 2 }}>
            {selectedImages.length > 0 &&
              selectedImages.map((image, index) => (
                <Box
                  key={index}
                  component="img"
                  src={URL.createObjectURL(image)}
                  alt={`Selected Image ${index + 1}`}
                  sx={{
                    width: "38px",
                    height: "38px",
                    objectFit: "cover",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    marginRight: "8px",
                    marginBottom: "8px",
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
            defaultValue={"enabled"}
          >
            <FormControlLabel
              value="enabled"
              control={<Radio />}
              label="Enabled"
            />
            <FormControlLabel
              value="disabled"
              control={<Radio />}
              label="Disabled"
            />
          </RadioGroup>
        </FormControl>
        <Button
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
