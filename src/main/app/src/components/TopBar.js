import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IceCreamIcon from "mdi-material-ui/IceCream";

export default function TopBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Avatar style={{backgroundColor: "transparent"}}>
                    <IceCreamIcon color="secondary"/>
                </Avatar>
                <Typography variant="h6" color="secondary">
                    Ice Cream Test
                </Typography>
            </Toolbar>
        </AppBar>
    );
}