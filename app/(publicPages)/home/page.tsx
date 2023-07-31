"use client";

import {
  MapContainer,
  CreateMarker,
  SingleLocationMarker,
  EditModal,
} from "./components";
import styles from "./page.module.scss";
import { HomePageContext } from "../context/HomePageContext";
import { useContext } from "react";

import barcelona_bg from "./images/barcelona.jpg";
import athens_bg from "./images/athens.jpg";
import london_bg from "./images/london.jpg";
import nokton_bg from "./images/nokton.jpeg";
import paris_bg from "./images/paris.jpg";
import vatican_bg from "./images/vatican.jpg";
import abuja_bg from "./images/abuja.jpg";
import kano_bg from "./images/kano.jpeg";
import lagos_bg from "./images/lagos.jpg";
import olumo_bg from "./images/olumo.jpg";

const HomePage = () => {
  const savedLocations = [
    {
      locationTitle: "Office",
      apiLocationTitle: "Barcelona",
      latitude: "string",
      longitude: "string",
    },
    {
      locationTitle: "Office",
      apiLocationTitle: "Barcelona",
      latitude: "string",
      longitude: "string",
    },
    {
      locationTitle: "Office",
      apiLocationTitle: "Barcelona",
      latitude: "string",
      longitude: "string",
    },
    {
      locationTitle: "Office",
      apiLocationTitle: "Barcelona",
      latitude: "string",
      longitude: "string",
    },
    {
      locationTitle: "White House",
      apiLocationTitle: "Kano",
      latitude: "string",
      longitude: "string",
    },
    {
      locationTitle: "Cousin's Mansion",
      apiLocationTitle: "Lagos",
      latitude: "string",
      longitude: "string",
    },
    {
      locationTitle: "Cousin's Mansion",
      apiLocationTitle: "Lagos",
      latitude: "string",
      longitude: "string",
    },
    {
      locationTitle: "Cousin's Mansion",
      apiLocationTitle: "Lagos",
      latitude: "string",
      longitude: "string",
    },
    {
      locationTitle: "Cousin's Mansion",
      apiLocationTitle: "Lagos",
      latitude: "string",
      longitude: "string",
    },
  ];

  const backgroundImages = [
    barcelona_bg,
    lagos_bg,
    athens_bg,
    abuja_bg,
    london_bg,
    nokton_bg,
    paris_bg,
    vatican_bg,
    kano_bg,
    olumo_bg,
  ];

  const { modalOpen } = useContext(HomePageContext);

  return (
    <div className={styles.HomePage}>
      <header>
        <h2>Create a Marker on the map</h2>
        <p>Save, edit and delete your favorite locations</p>
      </header>

      <div className={styles.main_container}>
        <section className={styles.map_container}>
          <MapContainer />
        </section>

        <section className={styles.controls_container}>
          <CreateMarker />
          {/* <Search /> */}
          <div className={styles.saved_locations_container}>
            {savedLocations?.map((location, index) => {
              return (
                <>
                  <SingleLocationMarker
                    key={`${location.longitude}${index}`}
                    apiLocationTitle={location.apiLocationTitle}
                    locationTitle={location.locationTitle}
                    latitude={location.latitude}
                    longitude={location.longitude}
                    backgroundImage={
                      backgroundImages[index % backgroundImages.length]?.src
                    }
                  />
                </>
              );
            })}
          </div>
        </section>
      </div>
      {modalOpen ? (
        <div className={styles.modal_Container}>
          <EditModal />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default HomePage;
