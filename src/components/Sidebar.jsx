import { useState } from "react";
import SidebarItem from "./SidebarItem.jsx";
import { db } from "./db.js";

const Sidebar = () => {
  const [items] = useState(db); // Langsung inisialisasi tanpa useEffect

  return (
    <div className="sidebar shadow-sm bg-body-tertiary">
      {items.map((item) => (
        <SidebarItem key={item.id || item.title} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;
