"use client";

import styles from "../styles/SingleLocationMarker.module.scss";
import { HomePageContext } from "../../context/HomePageContext";
import { useContext } from "react";

interface SingleLocationMarkerType {
  locationTitle: string;
  apiLocationTitle: string;
  latitude: string;
  longitude: string;
  backgroundImage: string;
}

const SingleLocationMarker = ({
  locationTitle,
  apiLocationTitle,
  latitude,
  longitude,
  backgroundImage,
}: SingleLocationMarkerType) => {
  const SingleLocationMarker_styles = {
    backgroundImage: `url(${backgroundImage})`,
  };

  const { setModalOpen, setEditModalDetails } = useContext(HomePageContext);

  const editHandler = () => {
    setEditModalDetails({
      oldLatitude: "",
      oldLongitude: "",
      oldLocationTitle: locationTitle,
    });
    setModalOpen(true);
  };

  const deleteHandler = () => {
    fetch("/api/deleteMarker", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ locationTitle: locationTitle }),
    });
  };

  return (
    <div
      className={styles.SingleLocationMarker}
      style={SingleLocationMarker_styles}
    >
      <h3>{locationTitle}</h3>

      <div className={styles.details_container}>
        <p>{apiLocationTitle}</p>
        <p>Latitude:- {latitude}</p>
        <p>Longitude:-{longitude}</p>
      </div>

      <div className={styles.button_container}>
        <button
          className={styles.edit_btn}
          onClick={() => {
            editHandler();
          }}
        >
          Edit
        </button>
        <button className={styles.delete_btn}>Delete</button>
      </div>

      <div className={styles.blinds_cover}></div>
    </div>
  );
};

export default SingleLocationMarker;
