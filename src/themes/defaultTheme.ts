import { createTheme, ThemeOptions } from "@mui/material/styles";

const themeOptions : ThemeOptions = {
    palette: {
        mode: "dark"
    }
}

export const theme = createTheme(themeOptions)