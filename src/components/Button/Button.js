import React from "react";
import { string, func } from "prop-types";
import styles from "./Button.module.css";



export default function Button({ text, onClick, disabled }) {
    return (
        <button className={styles.button} onClick={onClick} disabled={disabled}>{text}</button>
    );
};


Button.propTypes = {
    text: string,
    onClick: func.isRequired,
};