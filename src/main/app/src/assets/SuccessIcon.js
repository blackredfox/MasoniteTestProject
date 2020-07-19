import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import CheckIcon from "mdi-material-ui/Check";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        textAlign: "center",
        color: "#65758C",
        width: "100%",
    },
    img: {
        width: theme.spacing(6),
        height: theme.spacing(6),
        position: "relative",
        margin: `0 auto ${theme.spacing(4)}px`,
    },
    rotateIcon: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: green[500]
    },
    layer: {
        width: theme.spacing(6),
        height: theme.spacing(6),
        position: "absolute",
        borderRadius: "4px",
        border: `0.5px solid #DEE5EE`,
        boxShadow:
            "0px 2px 2px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 3px -1px rgba(0, 0, 0, 0.12)",
        transform: "rotate(-10deg) translate(-50%, -50%)",
        top: "50%",
        left: "50%",
        background: "white",
        borderColor: "transparent",
    },
    topLayer: {
        zIndex: 10,
    },
    middleLayer: {
        zIndex: 5,
        transform: "rotate(-20deg) translate(-50%, -50%)",
    },
    bottomLayer: {
        zIndex: 0,
        background: "linear-gradient(135deg, #C4CFDD 0%, #65758C 100%)",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 0px 2px rgba(0, 0, 0, 0.14)",
        borderRadius: "3px",
        transform: "rotate(-30deg) translate(-50%, -50%)",
    },
}));

export default function SuccessIcon() {
    const classes = useStyles();

    return(
        <div className={classes.wrapper}>
            <div className={classes.img}>
                <div className={`${classes.layer} ${classes.topLayer}`}>
                    <CheckIcon className={classes.rotateIcon}/>
                </div>
                <div className={`${classes.layer} ${classes.middleLayer}`} />
                <div className={`${classes.layer} ${classes.bottomLayer}`} />
            </div>
        </div>
    );
}
