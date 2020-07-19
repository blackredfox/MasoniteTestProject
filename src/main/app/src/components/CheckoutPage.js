import React, {Fragment} from "react";
import {Link, Redirect, useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import NavigateNextIcon from "mdi-material-ui/ChevronRight";
import EditIcon from "mdi-material-ui/Pencil";
import Spinner from "./Spinner";
import SuccessIcon from "../assets/SuccessIcon";
import states from "../assets/states";
import {CardNumberMaskCustom, CvcMaskCustom, ExpirationMaskCustom, ZipCodeMaskCustom} from "../utils/textMasks";
import {countItems} from "../utils/utilityFunctions";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
    },
    divider: {
        margin: `0 -${theme.spacing(2)}px`,
    },
    spacing: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
    },
    marginTop: {
        marginTop: theme.spacing(1),
    },
    iconColor: {
        color: theme.palette.secondary.main,
    }
}));

export default function CheckoutPage({cart, dispatch, setTheme}) {
    const [cardNumber, setCardNumber] = React.useState("");
    const [cvc, setCVC] = React.useState("");
    const [expiration, setExpiration] = React.useState("");
    const [cardholderName, setCardholderName] = React.useState("");
    const [billingAddress, setBillingAddress] = React.useState("");
    const [city, setCity] = React.useState("");
    const [state, setState] = React.useState("");
    const [zip, setZip] = React.useState("");
    const [complete, setComplete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const classes = useStyles();
    const history = useHistory();

    if (cart.flavors.length === 0) {
        return <Redirect push to="/"/>
    }

    const onCompleteOrderClick = async () => {
        setIsLoading(true);
        setTimeout(async () => {
            setIsLoading(false);
            setComplete(true)
        }, 4000);
    }

    const onCreateNewOrderClick = () => {
        history.push("/");
        dispatch({type: "reset"});
        setTheme();
    }

    let formattedCart = [
        cart.container,
        ...Object.entries(countItems(cart.flavors)).map(([key, value]) => ({name: `${key} x ${value}`, price: value * 2.00}))
    ]

    if (cart.topping) {
        formattedCart.push(cart.topping);
    }
    if (cart.sauce) {
        formattedCart.push(cart.sauce);
    }

    let totalPrice = 0;
    formattedCart.forEach((item) => totalPrice += item.price);

    const onChange = (setValue) => (e) => {
        setValue(e.target.value);
    }

    const handleTextChange = (setValue) => (e) => {
        if (!e.target.value.match(/\d+/g)) {
            setValue(e.target.value);
        }
    }

    if (complete) {
        return (
            <Container className={classes.root} maxWidth="sm">
                <Paper className={classes.root}>
                    <Grid className={classes.spacing} container item direction="column" justify="center" alignItems="center">
                        <SuccessIcon/>
                        <Typography variant="body1">Order Completed!</Typography>
                        <Typography variant="body2" color="textSecondary" gutterBottom>Thank you for your purchase. You will receive it in <strong>10 minutes.</strong></Typography>
                        <Button data-test="create-new-order-btn"
                                className={classes.marginTop}
                                variant="outlined"
                                onClick={onCreateNewOrderClick}
                        >
                            Create New Order
                        </Button>
                    </Grid>
                </Paper>
            </Container>
        );
    }

    return (
        <>
            <Spinner open={isLoading}/>
            <Container className={classes.root} maxWidth="sm">
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small"/>}>
                    <Link data-test="create-your-order-breadcrumb" color="inherit" to="/">
                        Create Your Order
                    </Link>
                    <Typography color="textPrimary">Checkout</Typography>
                </Breadcrumbs>
                <Paper className={classes.root}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1" component="span">Ice Cream Item #1</Typography>
                            <IconButton data-test="edit-btn"
                                        color="secondary"
                                        component={Link}
                                        to="/"
                            >
                                <EditIcon/>
                            </IconButton>
                        </Grid>
                        <Grid item xs={12} sm={6} container spacing={1}>
                            {formattedCart.map((item, i) => (
                                <Fragment key={i}>
                                    <Grid item xs={6}>
                                        <Typography data-test={item.name.toLowerCase().replace(/\s/g, '-') + "-label"} variant="caption">{item.name}</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography data-test={"item-price-label-" + i} variant="caption" align="right" component="div">${item.price}</Typography>
                                    </Grid>
                                </Fragment>
                            ))}
                            <Grid item xs={12}>
                                <Divider/>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="caption" color="textSecondary">Total</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography data-test="total-price-label" variant="h5" align="right">${totalPrice}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider className={classes.divider}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>Payment</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth
                                       color="secondary"
                                       label="Card Number"
                                       placeholder="####-####-####-####"
                                       InputLabelProps={{shrink: true}}
                                       InputProps={{
                                           inputComponent: CardNumberMaskCustom,
                                           inputProps: {
                                               "data-test": "card-number-input",
                                           },
                                       }}
                                       value={cardNumber || ""}
                                       onChange={onChange(setCardNumber)}
                            />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <TextField fullWidth
                                       color="secondary"
                                       label="Expiration"
                                       placeholder="MM/YY"
                                       InputLabelProps={{shrink: true}}
                                       InputProps={{
                                           inputComponent: ExpirationMaskCustom,
                                           inputProps: {
                                               "data-test": "expiration-input",
                                           },
                                       }}
                                       value={expiration || ""}
                                       onChange={onChange(setExpiration)}
                            />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <TextField fullWidth
                                       color="secondary"
                                       label="CVC"
                                       placeholder="###"
                                       InputLabelProps={{shrink: true}}
                                       InputProps={{
                                           inputComponent: CvcMaskCustom,
                                           inputProps: {
                                               "data-test": "cvc-input",
                                           },
                                       }}
                                       value={cvc || ""}
                                       onChange={onChange(setCVC)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth
                                       color="secondary"
                                       label="Cardholder Name"
                                       placeholder="John Doe"
                                       InputLabelProps={{shrink: true}}
                                       InputProps={{
                                           inputProps: {
                                               "data-test": "card-name-input",
                                           },
                                       }}
                                       value={cardholderName || ""}
                                       onChange={handleTextChange(setCardholderName)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth
                                       color="secondary"
                                       label="Billing Address"
                                       placeholder="Enter your street address"
                                       InputLabelProps={{shrink: true}}
                                       InputProps={{
                                           inputProps: {
                                               "data-test": "billing-input",
                                           },
                                       }}
                                       value={billingAddress || ""}
                                       onChange={onChange(setBillingAddress)}
                            />
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <TextField fullWidth
                                       color="secondary"
                                       label="City"
                                       placeholder="Enter your city"
                                       InputLabelProps={{shrink: true}}
                                       InputProps={{
                                           inputProps: {
                                               "data-test": "city-input",
                                           },
                                       }}
                                       value={city || ""}
                                       onChange={handleTextChange(setCity)}
                            />
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <TextField fullWidth
                                       color="secondary"
                                       select
                                       label="State"
                                       InputLabelProps={{shrink: true}}
                                       SelectProps={{
                                           classes: {
                                               icon: classes.iconColor
                                           },
                                           displayEmpty: true,
                                           inputProps: {
                                               "data-test": "state-select",
                                           },
                                       }}
                                       value={state || ""}
                                       onChange={onChange(setState)}
                            >
                                <MenuItem disabled value="">Select a state</MenuItem>
                                {states.map((option) => (
                                    <MenuItem key={option} value={option}>{option}</MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField fullWidth
                                       color="secondary"
                                       label="Zip"
                                       placeholder="Zip code"
                                       InputLabelProps={{shrink: true}}
                                       InputProps={{
                                           inputComponent: ZipCodeMaskCustom,
                                           inputProps: {
                                               "data-test": "zip-input",
                                           },
                                       }}
                                       value={zip || ""}
                                       onChange={onChange(setZip)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Divider className={classes.divider}/>
                        </Grid>
                        <Grid item xs={12} container justify="flex-end">
                            <Button
                                data-test="complete-order-btn"
                                variant="contained"
                                color="secondary"
                                disabled={!cardNumber || !expiration || !cvc || !cardholderName || !billingAddress || !city || !state || !zip}
                                onClick={onCompleteOrderClick}>
                                Complete Order
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    );
}

CheckoutPage.propTypes = {
    cart: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    setTheme: PropTypes.func.isRequired,
}
