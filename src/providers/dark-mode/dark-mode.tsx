import { createContext, useContext, useMemo, useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material";

type DarkModeContextType = {
  toggleColorMode: () => void;
  isDarkMode: boolean;
};

const DarkModeContext = createContext<DarkModeContextType>({
  toggleColorMode: () => {},
  isDarkMode: false,
});

type Props = {
  children: React.ReactNode;
};

export const DarkModeProvider = ({ children }: Props) => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        console.log("toggleColorMode");
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: `"Nunito Sans", sans-serif`,
          fontSize: 14,
          fontWeightLight: 300,
          fontWeightRegular: 600,
          fontWeightMedium: 800,
        },
        palette: {
          mode,
          primary: {
            main: mode === "light" ? "#2b3945" : "#fafafa",
            dark: "#2b3945",
            light: "#fafafa",
            contrastText: "#fff",
          },
          background: {
            default: mode === "light" ? "#fafafa" : "#202c37",
            paper: mode === "light" ? "#ffffff" : "#2b3945",
          },
          text: {
            primary: mode === "light" ? "#111517" : "#ffffff",
          },
          grey: {
            500: "#858585",
          },
        },
      }),
    [mode]
  );

  return (
    <DarkModeContext.Provider
      value={{
        toggleColorMode: colorMode.toggleColorMode,
        isDarkMode: mode === "dark",
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeContext");
  }

  return context;
};
