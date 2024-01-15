import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useNavigate } from "react-router-dom";

import { useDarkMode } from "../../providers";

const Menu = () => {
  const navigate = useNavigate();
  const { toggleColorMode, isDarkMode } = useDarkMode();

  return (
    <AppBar
      position="static"
      enableColorOnDark
      sx={{
        backgroundColor: isDarkMode ? "#2b3945" : "#fafafa",
        color: isDarkMode ? "#ffffff" : "#111517",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            Where in the world?
          </Typography>
          <Button
            sx={{
              textTransform: "capitalize",
              fontWeight: "light",
            }}
            onClick={toggleColorMode}
            color="inherit"
          >
            <DarkModeIcon />
            Dark Mode
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Menu;
