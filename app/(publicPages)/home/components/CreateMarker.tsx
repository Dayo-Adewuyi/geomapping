"use client";

import styles from "../styles/CreateMarker.module.scss";
import { useState } from "react";
const CreateMarker = () => {
  const [address, setAddress] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const data = {
      address: address,

    };

    fetch("/api/createMarker", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setAddress("");
  };

  return (
    <form className={styles.CreateMarker}>
      <input type="text" placeholder="Enter your Location name" />
      <button className={styles.create_button} onClick={handleSubmit}>Create</button>
    </form>
  );
};

export default CreateMarker;
