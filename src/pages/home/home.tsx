import { useEffect, useState } from "react";

import {
  CircularProgress,
  Container,
  Grid,
  Pagination,
  Stack,
} from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { Filter, Item, Search } from "./components";
import { CountryApi } from "../../apis";
import { Country } from "../../types";

const Home = () => {
  const queryClient = useQueryClient();
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 8;

  const query = useQuery({
    queryKey: ["countries"],
    queryFn: CountryApi.getCountries,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (query.data) {
      queryClient.setQueryData(["countries"], query.data);
    }
  }, [query.data, queryClient]);

  const countries = query.data || [];

  const filteredCountries = countries.filter((country: Country) =>
    selectedRegion
      ? country.region.toLowerCase() === selectedRegion.toLowerCase()
      : true
  );

  const searchedCountry = filteredCountries
    .filter((country: Country) => {
      if (selectedCountry) {
        return country.name.common
          .toLowerCase()
          .includes(selectedCountry.toLowerCase());
      }

      return true;
    })
    .sort((a: Country, b: Country) => {
      if (a.name.common > b.name.common) {
        return 1;
      }

      if (a.name.common < b.name.common) {
        return -1;
      }

      return 0;
    });

  const handleRegionChange = (region: string) => {
    setSelectedRegion(region);
  };

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
  };

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const totalPages = Math.ceil(searchedCountry.length / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedCountries = searchedCountry.slice(startIndex, endIndex);

  return (
    <Container
      style={{
        marginTop: "3rem",
      }}
      maxWidth="xl"
    >
      <Grid
        container
        spacing={6}
        style={{
          height: "100%",
        }}
      >
        <Grid container item spacing={2}>
          <Grid item xs={12} md={9}>
            <Search onCountryChange={handleCountryChange} />
          </Grid>
          <Grid item xs={12} md={3}>
            <Filter onRegionChange={handleRegionChange} />
          </Grid>
        </Grid>
        {query.isLoading ? (
          <Grid
            item
            xs
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CircularProgress />
          </Grid>
        ) : (
          <>
            <Grid container item spacing={8}>
              {displayedCountries.map((country: Country) => (
                <Item country={country} key={country.name.common} />
              ))}
            </Grid>
            {displayedCountries.length > 0 && (
              <Grid container item display="flex" justifyContent="center">
                <Stack spacing={2} sx={{ justifyContent: "center" }}>
                  <Pagination
                    count={totalPages}
                    page={page}
                    onChange={(_, e) => handlePageChange(e)}
                  />
                </Stack>
              </Grid>
            )}
          </>
        )}
      </Grid>
    </Container>
  );
};

export default Home;
