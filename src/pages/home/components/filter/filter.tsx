import { useState } from "react";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const REGIONS = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

type Props = {
  onRegionChange: (region: string) => void;
};

const Filter = ({ onRegionChange }: Props) => {
  const [filter, setFilter] = useState("");

  const handleRegionChange = (e: SelectChangeEvent<string>) => {
    const region = e.target.value;
    setFilter(region);
    onRegionChange(region);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="filter">Filter by Region</InputLabel>
      <Select
        labelId="filter"
        id="filter"
        value={filter}
        label="Filter by Region"
        onChange={handleRegionChange}
      >
        {REGIONS.map((region) => (
          <MenuItem key={region} value={region}>
            {region}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Filter;
