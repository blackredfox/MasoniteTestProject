import React from "react";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MinusIcon from "mdi-material-ui/Minus";
import PlusIcon from "mdi-material-ui/Plus";
import AlertDialog from "./AlertDialog";
import ImageButton from "./ImageButton";
import Spinner from "./Spinner";
import cupSrc from "../assets/images/cup.png";
import sugarConeSrc from "../assets/images/sugar-cone.png";
import waffleConeSrc from "../assets/images/waffle-cone.png";
import {countItems} from "../utils/utilityFunctions";

const useStyles = makeStyles((theme) => ({
    spacing: {
        "& > button": {
            marginRight: theme.spacing(2),
        }
    },
    purchaseButton: {
        boxShadow: "none",
        color: "white"
    }
}));

const sampleContainers = [
    {
        name: "Waffle Cone",
        src: waffleConeSrc,
        price: 2.00
    },
    {
        name: "Sugar Cone",
        src: sugarConeSrc,
        price: 1.00
    },
    {
        name: "Cup",
        src: cupSrc,
        price: 0.50
    },
];

const toppings = [
    {
        "name": "Almonds",
        "price": 0.27
    },
    {
        "name": "Brownie Bits",
        "price": 0.27
    },
    {
        "name": "Chocolate Chips",
        "price": 0.27
    },
    {
        "name": "Gummy Bears",
        "price": 0.27
    },
    {
        "name": "Peanut Butter Chips",
        "price": 0.27
    },
    {
        "name": "Sprinkles",
        "price": 0.27
    },
];

const sauces = [
    {
        "name": "Butterscotch",
        "price": 0.50
    },
    {
        "name": "Caramel",
        "price": 0.50
    },
    {
        "name": "Chocolate",
        "price": 0.50
    },
    {
        "name": "Hot Fudge",
        "price": 0.50
    },
    {
        "name": "Strawberry",
        "price": 0.50
    },
];


export default function YourOrderSection({flavorItems, selectedTopping, selectedSauce, selectedContainer, onClick}) {
    const [openToppingsDialog, setOpenToppingsDialog] = React.useState(false);
    const [openSaucesDialog, setOpenSaucesDialog] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const classes = useStyles();
    const history = useHistory();
    let counts = countItems(flavorItems);
    let totalPrice = 0;
    //TODO Preselect container
    let cart = [
        selectedContainer,
        ...Object.entries(counts).map(([key, value]) => ({name: `${key} x ${value}`, price: value * 2.00}))
    ]

    if (selectedTopping) {
        cart.push(selectedTopping);
    }
    if (selectedSauce) {
        cart.push(selectedSauce);
    }

    cart.forEach((item) => totalPrice += item.price);

    const onBuyIceCreamClick = async () => {
        setIsLoading(true);
        setTimeout(async () => {
            setIsLoading(false);
            history.push("/checkout");
        }, 3000);
    }

    return (
        <>
            <AlertDialog open={openToppingsDialog}
                         title="Add a Topping?"
                         contentText="Add a topping to your ice cream for an additional $0.27"
                         onClose={() => setOpenToppingsDialog(false)}
                         onAddClick={(value) => {
                             onClick("topping", value)();
                             setOpenToppingsDialog(false);
                         }}
                         options={toppings}
            />
            <AlertDialog open={openSaucesDialog}
                         title="Add a Sauce?"
                         contentText="Add a sauce to your ice cream for an additional $0.50"
                         onClose={() => setOpenSaucesDialog(false)}
                         onAddClick={(value) => {
                             onClick("sauce", value)();
                             setOpenSaucesDialog(false);
                         }}
                         options={sauces}
            />
            <Spinner open={isLoading}/>
            <Paper>
                <List>
                    <ListItem data-test="add-topping-btn" button={!selectedTopping} onClick={() => !selectedTopping && setOpenToppingsDialog(true)}>
                        {!selectedTopping && <ListItemIcon>
                            <PlusIcon color="secondary"/>
                        </ListItemIcon>}
                        <ListItemText primaryTypographyProps={{color: "secondary"}} primary={selectedTopping ? selectedTopping.name : "Add a Topping"}/>
                        {selectedTopping &&
                        <ListItemSecondaryAction><IconButton data-test="minus-topping-btn" onClick={onClick("topping", null)}><MinusIcon color="secondary"/></IconButton></ListItemSecondaryAction>}
                    </ListItem>
                    <ListItem data-test="add-sauce-btn" button={!selectedSauce} onClick={() => !selectedSauce && setOpenSaucesDialog(true)}>
                        {!selectedSauce && <ListItemIcon>
                            <PlusIcon color="secondary"/>
                        </ListItemIcon>}
                        <ListItemText primaryTypographyProps={{color: "secondary"}} primary={selectedSauce ? selectedSauce.name : "Add a Sauce"}/>
                        {selectedSauce &&
                        <ListItemSecondaryAction><IconButton data-test="minus-sauce-btn" onClick={onClick("sauce", null)}><MinusIcon color="secondary"/></IconButton></ListItemSecondaryAction>}
                    </ListItem>
                    <ListItem className={classes.spacing}>
                        {sampleContainers.map((item, i) => (
                            <ImageButton key={i}
                                         selected={item.name === selectedContainer.name}
                                         onClick={onClick("container", item)}
                                         imgName={item.name}
                                         imgSrc={item.src}
                            />
                        ))}
                    </ListItem>
                    <Divider style={{margin: "8px 0"}}/>
                    <ListItem>
                        <Grid container>
                            <Grid item xs={4}>
                                <Typography variant="caption">Flavors</Typography>
                            </Grid>
                            <Grid item xs={8} container direction="column">
                                {flavorItems.length === 0
                                    ? <Typography data-test="no-flavors-label" variant="caption" color="textPrimary">No flavors selected</Typography>
                                    : Object.entries(counts).map(([key, value], i) => (
                                            <Typography key={i} data-test={"cart-item-" + i} variant="caption" color="textPrimary">{key} x {value}</Typography>
                                        )
                                    )
                                }
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem>
                        <Grid container>
                            <Grid item xs={4}>
                                <Typography variant="body2">Total</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography data-test="total-price-label" variant="h6">${totalPrice}</Typography>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem>
                        <Button data-test="checkout-btn"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={classes.purchaseButton}
                                disabled={flavorItems.length === 0}
                                onClick={onBuyIceCreamClick}
                        >
                            Buy Ice Cream
                        </Button>
                    </ListItem>
                </List>
            </Paper>
        </>
    );
}

YourOrderSection.propTypes = {
    flavorItems: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    selectedTopping: PropTypes.object,
    selectedSauce: PropTypes.object,
    selectedContainer: PropTypes.object,
}
