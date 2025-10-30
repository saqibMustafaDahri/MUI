import { createTheme } from "@mui/material/styles";
const theme = createTheme({
    palette: {
        primary: {
            main: "#c5c6c7",
        },
        secondary: {
            main: "#2e7d32",
        },
        error: {
            main: "#d32f2f",
        },
        background: {
            default: "black",
            paper: "#595959",
        },
        history: {
            main: "#ffffff",
        },
    },
    typography: {
        fontFamily: "'Poppins', sans-serif",
        h5: {
            fontWeight: 600,
            color: "#fff",
        },

        button: {
            textTransform: "none",
            fontWeight: "bold",
            height: 50,
            width: 75,
            marginLeft: 9,
            fontSize: 20,

        },
    },
    shape: {
        borderRadius: 5,
    },
    // paper: {
    //     width: 380,
    //     maxHeight: 350,
    //     height: 1800,
    //     overflowY: "auto",
    //     position: "absolute",
    //     top: 60,
    //     left: "50%",
    //     transform: "translateX(-50%)",
    //     backgroundColor: "primary",
    //     padding: 2,
    //     borderRadius: 2,
    //     zIndex: 10,
    //     marginTop: 9

    // },

});


export default theme;