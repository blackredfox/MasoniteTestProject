import React from "react";
import MaskedInput from "react-text-mask";

export function CardNumberMaskCustom(props) {
    const {inputRef, ...other} = props;

    return (
        <MaskedInput
            {...other}
            ref={ref => {
                inputRef(ref ? ref.inputElement : null);
            }}
            keepCharPositions
            mask={[
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
            ]}
            placeholderChar={"\u2000"}
        />
    );
}

export function ExpirationMaskCustom(props) {
    const {inputRef, ...other} = props;

    return (
        <MaskedInput
            {...other}
            ref={ref => {
                inputRef(ref ? ref.inputElement : null);
            }}
            keepCharPositions
            mask={[
                /\d/,
                /\d/,
                "/",
                /\d/,
                /\d/,
            ]}
            placeholderChar={"\u2000"}
        />
    );
}

export function CvcMaskCustom(props) {
    const {inputRef, ...other} = props;

    return (
        <MaskedInput
            {...other}
            ref={ref => {
                inputRef(ref ? ref.inputElement : null);
            }}
            keepCharPositions
            mask={[
                /\d/,
                /\d/,
                /\d/,
            ]}
            placeholderChar={"\u2000"}
        />
    );
}

export function ZipCodeMaskCustom(props) {
    const {inputRef, ...other} = props;

    return (
        <MaskedInput
            {...other}
            ref={ref => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[/\d/, /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={"\u2000"}
        />
    );
}
