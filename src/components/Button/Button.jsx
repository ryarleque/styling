import React from "react";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";
import { FaSearch } from 'react-icons/fa';

const Button = ({ variant, disabled, children }) => (
    <div className={styles.container}>

        <button
            className={`
            ${styles.button} ${styles[variant]} 
            ${disabled ? styles.disabled : ""}
        `}
            disabled={disabled}
        >
            {variant === 'icon' && (<FaSearch />)}
            <div className={variant === "default" ? styles.noWrapText :styles.truncated}>
                {children}
            </div>
        </button>
    </div>
);

Button.propTypes = {
    variant: PropTypes.oneOf(["default", "icon"]),
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default Button;