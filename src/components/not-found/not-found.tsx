import { Container } from "@mui/material";

const NotFound = () => {
  return (
    <Container
      sx={{
        marginTop: "3rem",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      maxWidth="xl"
    >
      Page not found
    </Container>
  );
};

export default NotFound;
