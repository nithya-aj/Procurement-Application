import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useState } from "react";
import CountrySelect from "../../components/CountrySelect";

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

const SupplierForm = () => {
  const [country, setCountry] = useState("");

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
            label="Email"
            variant="filled"
            type="email"
            sx={{ ...textFieldStyles }}
          />
        </Box>
        <TextField
          required
          id="filled-required"
          label="Address"
          variant="filled"
          sx={{ ...textFieldStyles }}
        />
        <TextField
          required
          id="filled-required"
          label="Tax Number"
          variant="filled"
          sx={{ ...textFieldStyles }}
        />
        <CountrySelect selected={country} onChange={setCountry} />
        <TextField
          required
          id="filled-required"
          label="Mobile Number"
          variant="filled"
          type="tel"
          sx={{ ...textFieldStyles }}
        />
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" sx={{ pt: 2 }}>
            Status
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue={"active"}
          >
            <FormControlLabel
              value="active"
              control={<Radio />}
              label="Active"
            />
            <FormControlLabel
              value="inactive"
              control={<Radio />}
              label="Inactive"
            />
            <FormControlLabel
              value="blocked"
              control={<Radio />}
              label="Blocked"
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

export default SupplierForm;
