import { useState } from "react";
import PropTypes from "prop-types";

const SidebarItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(item.isOpen === 1);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  if (item.childrens) {
    return (
      <div className={`sidebar-item ${isOpen ? "open" : ""}`}>
        <div className="sidebar-title" onClick={toggleOpen}>
          <span>
            {item.icon && <i className={item.icon}></i>}
            {item.title}
          </span>
          <i className={`bi-chevron-left toggle-btn icon-item ${isOpen ? "rotated" : ""}`}></i>
        </div>
        {isOpen && (
          <div className="sidebar-content">
            {item.childrens.map((child) => (
              <SidebarItem key={child.id || child.title} item={child} />
            ))}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <a href={item.path || "#"} className="sidebar-item plain">
        {item.icon && <i className={item.icon}></i>}
        {item.title}
      </a>
    );
  }
};

SidebarItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    path: PropTypes.string,
    isOpen: PropTypes.number,
    childrens: PropTypes.array,
  }).isRequired,
};

export default SidebarItem;
