import React from "react";
import{TextField} from "@mui/material";
function Display({input}){
    return(
        <TextField  fullWidth variant="outlined" value={input} inputProps={{readonly:true,sx:{color:"white" ,fontSize:"1.5rem"}}} sx={{ marginBottom: 2, border:1 ,borderRadius:2}} />

    );
}
export default Display;``