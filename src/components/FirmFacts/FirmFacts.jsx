import React from "react";
import styles from "./FirmFacts.module.scss";
import FactCard from "../FactCard/FactCard";
import Button from "../Button/Button";

const FirmFacts = () => (
  <div className={styles.container}>
    <div className={styles.title}>Firm Facts</div>
    <div className={styles.cardContainer}>
      <FactCard variant="default">
        <Button variant="icon">This is a two line button that terminates with...</Button>
      </FactCard>
      <FactCard variant="default">
        <Button variant="icon">This is a two line button that terminates with multiple lines</Button>
      </FactCard>
      <FactCard variant="default">
        <Button variant="default">This is a one line button</Button>
      </FactCard>
      <FactCard variant="default">
        <Button variant="icon">This is a two line button that terminates with multiple lines</Button>
      </FactCard>

      <FactCard variant="border">
        <Button variant="icon">This is a two line button that terminates with multiple lines</Button>
      </FactCard>
      <FactCard variant="border">
        <Button variant="icon" disabled>This is a two line button that terminates with multiple lines</Button>
      </FactCard>
      <FactCard variant="border">
        <Button variant="icon">This is a two line button that terminates with multiple lines</Button>
      </FactCard>
    </div>
  </div>
);

export default FirmFacts;
