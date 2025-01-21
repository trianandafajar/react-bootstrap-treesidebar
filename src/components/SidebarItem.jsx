import PropTypes from "prop-types";

const SidebarItem = ({ item }) => {
  const action = () => {
    const itemBar = document.getElementById("sideitem" + item.id);
    if (itemBar) {
      itemBar.classList.toggle("open");
    }
  };
  if (item.childrens) {
    return (
      <div
        id={"sideitem" + item.id}
        className={
          item.isOpen && item.isOpen == 1 ? "sidebar-item open" : "sidebar-item"
        }
      >
        <div className="sidebar-title" onClick={() => action()}>
          <span>
            {item.icon && <i className={item.icon}></i>}
            {item.title}
          </span>
          <i className="bi-chevron-left toggle-btn icon-item"></i>
        </div>
        <div className="sidebar-content">
          {item.childrens.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
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
  item: PropTypes.object.isRequired,
};

export default SidebarItem;
