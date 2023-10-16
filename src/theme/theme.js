import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
        primary: {
            main: "#FE4610",
            orangePrimary: "#FE4610",
            blackPrimery: "#001F29",
            grey: "#B9C0C1",
            pink: "#FFE1D8"
        }
    },
    typography: {
        fontFamily: ['Ubuntu'].join(''),
        color: "#001F29"
    },
})

export default theme;