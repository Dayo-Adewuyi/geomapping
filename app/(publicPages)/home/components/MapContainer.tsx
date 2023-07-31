"use client";

import styles from "../styles/MapContainer.module.scss";
import { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

const MapContainer = () => {
 
  const [selected, setSelected] = useState({lat : 6.5, lng: 3.3});

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();


  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: ["places"],
  });

  const center = useMemo(() => ({ lat: 6.5, lng: 3.3 }), []);

  if (!isLoaded) return <div className={styles.MapContainer}>Loading...</div>;

  const handleSelect = async (address: string) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSelect(e.target.value);
    }
  }
  return (
    <>
    
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName={styles.MapContainer}
      >
        {selected ? (
          <Marker position={selected} />
        ) : (
          <Marker position={center} />
        )}
      </GoogleMap>
    </>
  );
};

export default MapContainer;