"use client";

import { createContext, useContext, useState } from "react";

const PopupContext = createContext({
  isPopupOpen: false,
  openPopup: () => {},
  closePopup: () => {},
});

export const usePopup = () => useContext(PopupContext);

export default function PopupProvider({ children }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <PopupContext.Provider value={{ isPopupOpen, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
}
