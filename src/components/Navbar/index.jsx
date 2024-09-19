import { useState } from "react";
import "./Navbar.css";
import { DISPLAY, DOWN } from "../../assets/icon";

export default function Navbar({ filter, setFilter }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav>
        <h5 onClick={() => setShowMenu(!showMenu)}>
          <span>
            <img src={DISPLAY} alt="display" />
          </span>
          Display
          <span>
            <img src={DOWN} alt="down" />
          </span>
        </h5>
      </nav>
      <div className={`sort-menu ${showMenu ? "" : "sort-hide"}`}>
        <div className="sort-input">
          <label>Grouping</label>
          <select
            value={filter.grouping}
            onChange={(a) => setFilter("grouping", a.target.value)}
          >
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className="sort-input">
          <label>Ordering</label>
          <select
            value={filter.ordering}
            onChange={(a) => setFilter("ordering", a.target.value)}
          >
            <option value="title">Title</option>
            <option value="priority">Priority</option>
          </select>
        </div>
      </div>
    </>
  );
}
