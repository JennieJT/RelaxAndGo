import { createTheme } from "@mui/material";

const globalTheme = createTheme({
    palette:{
        primary:{
            main: "#bbf7d0",
        },
    },
    typography:{
        fontFamily:"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
        fontSize:14,
    }
});

export default globalTheme