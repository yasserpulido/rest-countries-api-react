import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Country } from "../../../../types";

type Props = {
  country: Country;
};

const Item = ({ country }: Props) => {
  const navigate = useNavigate();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{ height: "100%" }}
        onClick={() =>
          navigate(
            `/country/${country.name.common.toLowerCase().replace(" ", "-")}`
          )
        }
      >
        <CardActionArea>
          <CardMedia
            sx={{ height: 140 }}
            image={country.flags.png}
            title={country.name.official}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              sx={{
                fontWeight: "bold",
              }}
            >
              {country.name.common}
            </Typography>
            <Grid container direction="column">
              <Grid item xs={6}>
                <Typography variant="body2" component="div">
                  <Box fontWeight="fontWeightMedium" display="inline">
                    Population:
                  </Box>{" "}
                  {country.population.toLocaleString()}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" component="div">
                  <Box fontWeight="fontWeightMedium" display="inline">
                    Region:
                  </Box>{" "}
                  {country.region}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" component="div">
                  <Box fontWeight="fontWeightMedium" display="inline">
                    Capital:
                  </Box>{" "}
                  {country.capital}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Item;
