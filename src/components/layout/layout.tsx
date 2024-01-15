import { Outlet } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { Menu } from "../menu";

const Layout = () => (
  <>
    <Menu />
    <Outlet />
    <Box
      component="footer"
      sx={{
        py: 4,
        mt: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="caption">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Developed by{" "}
        <a href="https://www.frontendmentor.io/profile/yasserpulido">
          Yasser Pulido
        </a>
        .
      </Typography>
    </Box>
  </>
);

export default Layout;
