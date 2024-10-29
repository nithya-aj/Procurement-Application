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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [taxNumber, setTaxNumber] = useState("");
  const [country, setCountry] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [status, setStatus] = useState("active");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const supplierData = {
      name,
      email,
      address,
      taxNumber,
      country,
      mobileNumber,
      status,
    };
    console.log(supplierData, "supplierData");
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            required
            id="filled-required"
            label="Email"
            variant="filled"
            type="email"
            sx={{ ...textFieldStyles }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <TextField
          required
          id="filled-required"
          label="Address"
          variant="filled"
          sx={{ ...textFieldStyles }}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <TextField
          required
          id="filled-required"
          label="Tax Number"
          variant="filled"
          sx={{ ...textFieldStyles }}
          value={taxNumber}
          onChange={(e) => setTaxNumber(e.target.value)}
        />
        <CountrySelect selected={country} onChange={setCountry} />
        <TextField
          required
          id="filled-required"
          label="Mobile Number"
          variant="filled"
          type="tel"
          sx={{ ...textFieldStyles }}
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
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
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default SupplierForm;
