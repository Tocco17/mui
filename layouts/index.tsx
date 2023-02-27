import { ReactElement } from "react";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import { theme } from "@/src/themes/defaultTheme";
import { NextPageWithLayout } from "@/src/types";

interface DefaultLayout {
    children: ReactElement
}

export function Layout({children}: DefaultLayout) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )
}

export const withDefaultLayout = <T extends NextPageWithLayout>(Page: T) => {
    Page.getLayout = (children) => <Layout>{children}</Layout>

    return Page
}