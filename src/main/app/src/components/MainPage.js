import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "mdi-material-ui/Magnify";
import getFlavors from "../api";
import IceCreamList from "./IceCreamList";
import YourOrderSection from "./YourOrderSection";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    },
    paper: {
        position: "relative",
        padding: theme.spacing(3),
    },
    backgroundStyle: {
        backgroundColor: theme.palette.primary.main,
    },
    iceCreamStyle: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.getContrastText(theme.palette.secondary.main),
    },
    resetButton: {
        position: "absolute",
        bottom: theme.spacing(2),
        right: theme.spacing(2)
    },
    searchButton: {
        color: theme.palette.common.white,
        boxShadow: "none",
    },
}));

const loadIceCream = (setIceCreams, filter = "") => {
    const response = getFlavors(filter);
    setIceCreams(response);
};

export default function MainPage({state, dispatch, setTheme}) {
    const [iceCreams, setIceCreams] = React.useState(null);
    const [searchText, setSearchText] = React.useState("");

    const classes = useStyles();

    React.useEffect(() => {
        if (!iceCreams) {
            loadIceCream(setIceCreams);
        }
    }, [iceCreams, setIceCreams]);

    const onSearchClick = () => {
        const response = getFlavors(searchText);
        setIceCreams(response);
    };

    const onEnter = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            onSearchClick();
        }
    };

    const onQuantityClick = (type, flavor) => () => {
        dispatch({type, payload: flavor});

        if (type === "increment") {
            setTheme(flavor);
        } else {
            if (state.flavors.length !== 0) {
                setTheme(state.flavors[state.flavors.length - 1]);
            } else {
                setTheme();
            }
        }
    };

    const onOptionClick = (type, value) => () => {
        dispatch({type, payload: value});
    };

    return (
        <Container className={classes.root} maxWidth="md">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={8}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h6">Flavors</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <TextField fullWidth
                                           color="secondary"
                                           label="Search for a flavor"
                                           placeholder="eg. Chocolate"
                                           variant="outlined"
                                           InputProps={{
                                                   endAdornment: <InputAdornment><IconButton data-test="search-btn" color="secondary" onClick={onSearchClick}><SearchIcon/></IconButton></InputAdornment>,
                                                   inputProps: {
                                                       "data-test": "search-input",
                                                   },
                                               }}
                                           InputLabelProps={{shrink: true}}
                                           value={searchText}
                                           onChange={(e) => setSearchText(e.target.value)}
                                           onKeyPress={onEnter}
                                />
                            </Paper>
                        </Grid>
                        <IceCreamList listOfIceCream={iceCreams} flavorItems={state.flavors} onQuantityClick={onQuantityClick}/>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h6">Your Order</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <YourOrderSection flavorItems={state.flavors}
                                              onClick={onOptionClick}
                                              selectedTopping={state.topping}
                                              selectedSauce={state.sauce}
                                              selectedContainer={state.container}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

MainPage.propTypes = {
    state: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    setTheme: PropTypes.func.isRequired,
}
