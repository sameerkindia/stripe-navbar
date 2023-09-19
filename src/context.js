import React, { useState, useContext, createContext } from "react";
import sublinks from "./data";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  function openSidebar() {
    setIsSidebarOpen(true);
  }
  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  function openSubmenu(text, coordinates) {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  }
  function closeSubmenu() {
    setIsSubmenuOpen(false);
  }

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        openSidebar,
        closeSidebar,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useGlobleContext() {
  return useContext(AppContext);
}
