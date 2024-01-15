import React, { useState } from "react";

import { FormControl, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  onCountryChange: (country: string) => void;
};

const Search = ({ onCountryChange }: Props) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onCountryChange(search.trim());
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth>
        <TextField
          placeholder="Search for a country..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          value={search}
          variant="outlined"
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            "@media (min-width: 900px)": {
              width: 500,
            },
          }}
        />
      </FormControl>
    </form>
  );
};

export default Search;
