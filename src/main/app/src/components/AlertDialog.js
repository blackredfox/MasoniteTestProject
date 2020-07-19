import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Typography from "@material-ui/core/Typography";
import CheckCircleIcon from "mdi-material-ui/CheckCircle";

const useStyles = makeStyles((theme) => ({
    borderColor: {
        padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
        borderTop: `3px solid ${theme.palette.divider}`
    }
}));

export default function AlertDialog(props) {
    const {
        open,
        title,
        contentText,
        options,
        onClose,
        onCloseText = "Cancel",
        onAddClick,
    } = props;
    const [value, setValue] = React.useState(null);

    const classes = useStyles();

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Dialog open={open}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent className={classes.borderColor}>
                <Typography gutterBottom>{contentText}</Typography>
                {options && <FormControl component="fieldset">
                    <RadioGroup value={value} onChange={handleChange}>
                        {options.map((option, i) => (
                            <FormControlLabel key={i} value={option.name} control={<Radio checkedIcon={<CheckCircleIcon/>}/>} label={option.name}/>
                        ))}
                    </RadioGroup>
                </FormControl>}
            </DialogContent>
            <DialogActions>
                <Button data-test="close-btn"
                        variant="outlined"
                        color="secondary"
                        onClick={onClose}
                >
                    {onCloseText}
                </Button>
                {onAddClick && <Button
                    data-test="add-btn"
                    style={value && {color: "white"}}
                    variant="contained"
                    color="secondary"
                    disabled={!value}
                    onClick={() => onAddClick(options.find((option) => option.name === value))}
                >
                    Add
                </Button>}
            </DialogActions>
        </Dialog>
    );
}

AlertDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    contentText: PropTypes.string,
    options: PropTypes.array,
    onClose: PropTypes.func.isRequired,
    onAddClick: PropTypes.func,
}
