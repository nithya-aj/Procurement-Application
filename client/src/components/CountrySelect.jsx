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
    />
  );
};

export default CountrySelect;
