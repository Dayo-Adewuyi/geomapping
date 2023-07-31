"use client";

import styles from "../styles/EditModal.module.scss";
import { FormEvent, useEffect, useRef, useState, useContext } from "react";
import { HomePageContext } from "../../context/HomePageContext";

const EditModal = () => {
  let modalRef = useRef<HTMLFormElement>(null);
  const isFirstRender = useRef(true);
  const { setModalOpen, modalOpen, editModalDetails } =
    useContext(HomePageContext);

  const [newTitle, setnewTitle] = useState("");

  const data = {
    oldLocationTitle: editModalDetails.oldLocationTitle,
    newLocationTitle: newTitle,
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    fetch("/api/editMarker", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

  };

  useEffect(() => {
    const handleClick = (e: Event) => {
      if (isFirstRender.current) {
        isFirstRender.current = false;
        return;
      } else {
        if (modalOpen) {
          if (!modalRef?.current?.contains(e.target as HTMLDivElement)) {
            setModalOpen(false);
          }
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <>
      <form
        className={styles.EditModal}
        onSubmit={(event: FormEvent) => handleSubmit(event)}
        ref={modalRef}
      >
        <div className={styles.header}>
          <h3>Editing Location of {editModalDetails.oldLocationTitle}</h3>
          <p>Fill in the new name of location</p>
        </div>

        <div className={styles.title_container}>
          <label htmlFor="newTitle">New Location Title</label>
          <input
            type="text"
            id="newTitle"
            required
            placeholder="Enter New Title"
            value={newTitle}
            onChange={(e) => setnewTitle(e.target.value)}
          />
        </div>

        <div className={styles.button_container}>
          <button className={styles.edit_button}>Edit Task</button>
          <button
            className={styles.close_button}
            onClick={() => {
              setModalOpen(false);
            }}
          >
            Close
          </button>
        </div>
      </form>
    </>
  );
};

export default EditModal;
