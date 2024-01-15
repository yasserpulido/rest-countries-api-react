import { useEffect, useState } from "react";

import { Button, Chip, Container, Grid, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useQueryClient } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";

import { Country as CountryType } from "../../types";

const Country = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const countriesData: CountryType[] | undefined = queryClient.getQueryData([
    "countries",
  ]);
  const [country, setCountry] = useState<CountryType | undefined>(undefined);

  useEffect(() => {
    if (!countriesData) {
      navigate("/");
      return;
    }

    const countryNameFromPath =
      window.location.pathname.match(/\/country\/(.+)/)?.[1];

    const countryFound = countriesData?.find(
      (country: CountryType) =>
        country.name.common.toLowerCase().replace(/\s/g, "-") ===
        countryNameFromPath
    );

    if (!countryFound) {
      navigate("/");
      return;
    }

    setCountry(countryFound);
  }, [countriesData, navigate, location]);

  const getNativeName = () => {
    const nativeName = country?.name.nativeName;
    const nativeNameKeys = Object.keys(nativeName || {});

    if (nativeNameKeys.length > 0) {
      const firstKey = nativeNameKeys[0];
      return country?.name.nativeName[firstKey]?.common;
    }

    return "";
  };

  const getLanguage = () => {
    const languages = country?.languages;
    const languagesKeys = Object.keys(languages || {});

    if (languagesKeys.length > 0) {
      const firstKey = languagesKeys[0];
      return country?.languages[firstKey];
    }

    return "";
  };

  const getCurrency = () => {
    const currencies = country?.currencies;
    const currenciesKeys = Object.keys(currencies || {});

    if (currenciesKeys.length > 0) {
      const firstKey = currenciesKeys[0];
      return country?.currencies[firstKey].name;
    }

    return "";
  };

  const getCountryNameByCode = (code: string) => {
    const countryFound = countriesData?.find(
      (country: CountryType) => country.cca3 === code
    );

    return countryFound?.name.common;
  };

  const hasBorders = country?.borders;

  return (
    <Container
      style={{
        marginTop: "3rem",
      }}
      maxWidth="xl"
    >
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            startIcon={<KeyboardBackspaceIcon />}
            sx={{
              fontWeight: 300,
              fontSize: 16,
              textTransform: "capitalize",
              boxShadow: 1,
            }}
            onClick={() => navigate("/")}
          >
            Back
          </Button>
        </Grid>
        <Grid container item xs={12} spacing={10}>
          <Grid item xs={12} md={6}>
            {country?.flags.svg && (
              <img
                src={country?.flags.png}
                alt={country?.name.common}
                width="100%"
                height="100%"
              />
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              sx={{ height: "100%" }}
              rowSpacing={4}
            >
              <Grid item xs={12}>
                <Typography sx={{ fontWeight: 800, fontSize: 24 }}>
                  {country?.name.common}
                </Typography>
              </Grid>
              <Grid container item>
                <Grid item xs={12} md={6}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sx={{ display: "flex" }}>
                      <Typography
                        sx={{
                          fontWeight: 800,
                          fontSize: 16,
                          textTransform: "capitalize",
                        }}
                      >
                        Native Name:
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 300,
                          fontSize: 16,
                          textTransform: "capitalize",
                          marginLeft: 1,
                        }}
                      >
                        {[getNativeName()]}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex" }}>
                      <Typography
                        sx={{
                          fontWeight: 800,
                          fontSize: 16,
                          textTransform: "capitalize",
                        }}
                      >
                        Population:
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 300,
                          fontSize: 16,
                          textTransform: "capitalize",
                          marginLeft: 1,
                        }}
                      >
                        {country?.population.toLocaleString()}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex" }}>
                      <Typography
                        sx={{
                          fontWeight: 800,
                          fontSize: 16,
                          textTransform: "capitalize",
                        }}
                      >
                        Region:
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 300,
                          fontSize: 16,
                          textTransform: "capitalize",
                          marginLeft: 1,
                        }}
                      >
                        {country?.region}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex" }}>
                      <Typography
                        sx={{
                          fontWeight: 800,
                          fontSize: 16,
                          textTransform: "capitalize",
                        }}
                      >
                        Sub Region:
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 300,
                          fontSize: 16,
                          textTransform: "capitalize",
                          marginLeft: 1,
                        }}
                      >
                        {country?.subregion}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex" }}>
                      <Typography
                        sx={{
                          fontWeight: 800,
                          fontSize: 16,
                          textTransform: "capitalize",
                        }}
                      >
                        Capital:
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 300,
                          fontSize: 16,
                          textTransform: "capitalize",
                          marginLeft: 1,
                        }}
                      >
                        {country?.capital}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sx={{ display: "flex" }}>
                      <Typography
                        sx={{
                          fontWeight: 800,
                          fontSize: 16,
                          textTransform: "capitalize",
                        }}
                      >
                        Top Level Domain:
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 300,
                          fontSize: 16,
                          textTransform: "lowercase",
                          marginLeft: 1,
                        }}
                      >
                        {country?.tld[0]}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex" }}>
                      <Typography
                        sx={{
                          fontWeight: 800,
                          fontSize: 16,
                          textTransform: "capitalize",
                        }}
                      >
                        Currencies:
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 300,
                          fontSize: 16,
                          textTransform: "capitalize",
                          marginLeft: 1,
                        }}
                      >
                        {getCurrency()}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex" }}>
                      <Typography
                        sx={{
                          fontWeight: 800,
                          fontSize: 16,
                          textTransform: "capitalize",
                        }}
                      >
                        Languages:
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 300,
                          fontSize: 16,
                          textTransform: "capitalize",
                          marginLeft: 1,
                        }}
                      >
                        {getLanguage()}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sx={{ display: "flex" }}>
                <Grid container>
                  <Grid item xs>
                    <Typography
                      sx={{
                        fontWeight: 800,
                        fontSize: 16,
                        textTransform: "capitalize",
                      }}
                    >
                      Border Countries:
                    </Typography>
                  </Grid>
                  <Grid item xs={9}>
                    {hasBorders ? (
                      country?.borders.map((border) => (
                        <Chip
                          size="small"
                          key={border}
                          label={getCountryNameByCode(border)}
                          sx={{
                            fontWeight: 300,
                            fontSize: 14,
                            textTransform: "capitalize",
                            boxShadow: 1,
                            marginLeft: 1,
                            marginBottom: 1,
                          }}
                          variant="outlined"
                          onClick={() => {
                            navigate(
                              `/country/${getCountryNameByCode(border)
                                ?.toLowerCase()
                                .replace(/\s/g, "-")}`
                            );
                          }}
                        />
                      ))
                    ) : (
                      <Typography
                        sx={{
                          fontWeight: 300,
                          fontSize: 16,
                          marginLeft: 1,
                        }}
                      >
                        No border countries
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Country;
