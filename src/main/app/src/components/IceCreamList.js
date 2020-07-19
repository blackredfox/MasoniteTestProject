import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IceCreamIcon from "mdi-material-ui/IceCream";
import InformationOutlineIcon from "mdi-material-ui/InformationOutline";
import MinusIcon from "mdi-material-ui/Minus";
import PlusIcon from "mdi-material-ui/Plus";
import AlertDialog from "./AlertDialog";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
        height: "100%"
    },
    iceCreamAvatar: {
        width: theme.spacing(5),
        height: theme.spacing(5),
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.main,
    },
    quantityButton: {
        width: theme.spacing(5),
        height: theme.spacing(5),
        color: theme.palette.secondary.main,
        border: "1px solid rgba(0, 0, 0, 0.26)",
        "&:disabled": {
            backgroundColor: "rgba(0, 0, 0, 0.04)",
            border: "none"
        }
    },
    spacing: {
        margin: `0 ${theme.spacing(1)}px`
    },
    infoButton: {
        padding: 0
    }
}));

export default function IceCreamList({listOfIceCream, flavorItems, onQuantityClick}) {
    const [openInfoDialog, setOpenInfoDialog] = React.useState(false);
    const [selectedFlavor, setSelectedFlavor] = React.useState(null);

    const classes = useStyles();

    const handleInfoClick = (flavor) => {
        setOpenInfoDialog(true);
        setSelectedFlavor(flavor);
    }

    if (!listOfIceCream) {
        return null;
    }

    return (
        <>
            <AlertDialog open={openInfoDialog}
                         title="Ingredients"
                         contentText={selectedFlavor ? selectedFlavor.ingredients.join(", ") : ""}
                         onClose={() => setOpenInfoDialog(false)}
                         onCloseText="Close"
            />
            {listOfIceCream.map((flavor, i) => {
                return (
                    <Grid key={i} item xs={12}>
                        <Paper className={classes.paper}>
                            <Grid data-test={"flavor-" + flavor.name.replace(/\s+/g, "-").toLowerCase()} container spacing={1}>
                                <Grid item xs={7}>
                                    <Grid container>
                                        <Grid item xs={3}>
                                            <Avatar className={classes.iceCreamAvatar}
                                                    style={{backgroundColor: flavor.color.primary, color: flavor.color.secondary}}
                                            >
                                                <IceCreamIcon/>
                                            </Avatar>
                                        </Grid>
                                        <Grid item xs={9}>
                                            <Typography data-test="flavor-name" variant="body2" gutterBottom><strong>{flavor.name}</strong></Typography>
                                            <Typography data-test="flavor-description" variant="body2" color="textSecondary" gutterBottom>{flavor.description}</Typography>
                                            <Typography data-test="flavor-allergens" variant="caption" color="textSecondary">Contains: {flavor.allergens.length === 0 ? "No Allergens" : flavor.allergens.join(", ")} </Typography>
                                            <IconButton data-test="info-btn" className={classes.infoButton} color="secondary" onClick={() => handleInfoClick(flavor)}>
                                                <InformationOutlineIcon fontSize="small"/>
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={5} container alignItems="center" justify="flex-end">
                                    <div>
                                        <IconButton data-test="minus-btn"
                                                    className={classes.quantityButton}
                                                    disabled={flavorItems.length === 0 || !flavorItems.find((item) => item.name === flavor.name)}
                                                    onClick={onQuantityClick("decrement", flavor)}
                                        >
                                            <MinusIcon fontSize="small"/>
                                        </IconButton>
                                        <Typography className={classes.spacing}
                                                    variant="body2"
                                                    component="span"
                                        >
                                            {flavorItems.filter((item) => item.name === flavor.name).length} Scoops</Typography>
                                        <IconButton data-test="plus-btn"
                                                    className={classes.quantityButton}
                                                    disabled={flavorItems.length === 3}
                                                    onClick={onQuantityClick("increment", flavor)}
                                        >
                                            <PlusIcon fontSize="small"/>
                                        </IconButton>
                                    </div>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                )
            })}
        </>
    );
}

IceCreamList.propTypes = {
    listOfIceCream: PropTypes.array,
    flavorItems: PropTypes.array.isRequired,
    onQuantityClick: PropTypes.func.isRequired,
}