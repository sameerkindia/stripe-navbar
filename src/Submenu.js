import React, { useState, useRef, useEffect } from "react";
import { useGlobleContext } from "./context";

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobleContext();
  const container = useRef(null);

  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);
  return (
    <aside className={`submenu ${isSubmenuOpen ? "show" : ""}`} ref={container}>
      <h4>{page}</h4>
      <div className={`submenu-center col-${links.length}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
