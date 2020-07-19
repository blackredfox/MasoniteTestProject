import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import CheckoutPage from "./components/CheckoutPage";
import CssBaseline from "@material-ui/core/CssBaseline";
import MainPage from "./components/MainPage";
import TopBar from "./components/TopBar";
import {defaultTheme, typographyTheme} from "./themeStyles";
import waffleConeSrc from "./assets/images/waffle-cone.png";

const initialState = {
    flavors: [],
    topping: null,
    sauce: null,
    container: {
        name: "Waffle Cone",
        src: waffleConeSrc,
        price: 2.00
    },
};

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            state.flavors.push(action.payload)
            return state;
        case "decrement":
            const index = state.flavors.findIndex((flavor) => flavor.name === action.payload.name);
            state.flavors.splice(index, 1);
            return state;
        case "topping":
            return {
                ...state,
                topping: action.payload
            };
        case "sauce":
            return {
                ...state,
                sauce: action.payload
            };
        case "container":
            return {
                ...state,
                container: action.payload
            };
        case "reset":
            return {
                ...initialState,
                flavors: []
            };
        default:
            return state;
    }
}

export default function App() {
    const [theme, setTheme] = React.useState(defaultTheme);
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const handleSettingTheme = (flavor) => {
        if (flavor) {
            setTheme({
                palette: {
                    primary: {
                        main: flavor.color.primary,
                    },
                    secondary: {
                        main: flavor.color.secondary,
                    }
                },
            });
        } else {
            setTheme(defaultTheme);
        }
    };

    return (
        <ThemeProvider theme={createMuiTheme({...theme, ...typographyTheme})}>
            <CssBaseline/>
            <TopBar/>
            <main>
                <Router>
                    <Switch>
                        <Route exact path="/checkout">
                            <CheckoutPage cart={state} dispatch={dispatch} setTheme={handleSettingTheme}/>
                        </Route>
                        <Route path="/">
                            <MainPage state={state} dispatch={dispatch} setTheme={handleSettingTheme}/>
                        </Route>
                    </Switch>
                </Router>
            </main>
        </ThemeProvider>
    );
}
