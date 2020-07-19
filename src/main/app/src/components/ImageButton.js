import React from "react";
import PropTypes from "prop-types";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import CheckCircleIcon from "mdi-material-ui/CheckCircle";

const useStyles = makeStyles((theme) => ({
    icon: {
        position: "absolute",
        right: "-10px",
        bottom: "-10px",
        backgroundColor: "white",
        borderRadius: "30px",
        zIndex: 1,
    },
}));

export default function ImageButton({selected, onClick, imgName, imgSrc}) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <ButtonBase
            data-test={imgName.toLowerCase().replace(/\s/g, '-') + "-btn"}
            focusRipple
            color="secondary"
            onClick={onClick}
            style={{
                position: "relative",
                border: `2px solid ${
                    selected ? theme.palette.secondary.main : theme.palette.divider
                }`,
                color: theme.palette.secondary.main,
                padding: "2px",
                borderRadius: "4px",
            }}
        >
            <img alt={imgName} src={imgSrc}/>
            {selected && <CheckCircleIcon className={classes.icon} color="secondary" fontSize="small"/>}
        </ButtonBase>
    );
}

ImageButton.propTypes = {
    selected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    imgName: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
}