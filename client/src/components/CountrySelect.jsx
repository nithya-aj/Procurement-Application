import ReactFlagsSelect from "react-flags-select";

const CountrySelect = ({ selected, onChange }) => {
  return (
    <ReactFlagsSelect
      selected={selected}
      onSelect={onChange}
      placeholder="Select a country"
      searchable
      searchPlaceholder="Search countries"
      className="menu-flags"
      selectProps={{
        style: {
          width: "100%",
          backgroundColor: "red",
          border: "none", // Remove border
          outline: "none", // Remove default outline
          borderBottom: "1px solid", // Add a bottom border
          borderRadius: "0px", // No border radius
          paddingTop: "12px", // Padding for top
          paddingBottom: "12px", // Padding for bottom
          color: "#000", // Text color
          fontSize: "16px", // Font size
        },
      }}
    />
  );
};

export default CountrySelect;
