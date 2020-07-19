import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import Dialog from "@material-ui/core/Dialog";

export default function Spinner({open}) {
    return (
        <Dialog
            open={open}
            PaperProps={{
                style: {
                    backgroundColor: "unset",
                    boxShadow: "unset",
                    padding: "24px 0",
                },
            }}
        >
            <CircularProgress
                data-test="spinner"
                color="secondary"
                thickness={2}
                size={100}
            />
        </Dialog>
    );
}

Spinner.propTypes = {
    open: PropTypes.bool.isRequired
}