import React from "react";
import styles from "./FactCard.module.scss";
import PropTypes from "prop-types";

const FactCard = ({ variant, children }) => (
  <div className={`${styles.factCard} ${styles[variant]}`}>
    {children}
  </div>
);

FactCard.propTypes = {
  variant: PropTypes.oneOf(["default", "border"]),
  children: PropTypes.node.isRequired,
};

export default FactCard;