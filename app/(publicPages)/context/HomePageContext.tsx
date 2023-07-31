"use client";

import React, { createContext, useState } from "react";

type EditModalDetailsType = {
  oldLocationTitle: string;
  oldLatitude: string;
  oldLongitude: string;
};

type HomePageContextProviderProps = {
  children: React.ReactNode;
};

type HomePageContextType = {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  editModalDetails: EditModalDetailsType;
  setEditModalDetails: React.Dispatch<
    React.SetStateAction<EditModalDetailsType>
  >;
};

export const HomePageContext = createContext({} as HomePageContextType);

export default function HomePageContextContextProvider({
  children,
}: HomePageContextProviderProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalDetails, setEditModalDetails] =
    useState<EditModalDetailsType>({
      oldLocationTitle: "",
      oldLatitude: "",
      oldLongitude: "",
    });

  return (
    <HomePageContext.Provider
      value={{
        modalOpen,
        setModalOpen,
        editModalDetails,
        setEditModalDetails,
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
}
