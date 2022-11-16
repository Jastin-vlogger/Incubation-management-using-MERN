import React from "react";
import { useCookies } from "react-cookie";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const navigate = useNavigate();
  const logOut = () => {
    removeCookie("jwt");
    navigate("/admin/login", { replace: true });
  };
  return (
    <section className="sidebar">
      <ul>
        <li>Application List</li>
        <li>Booking Slot</li>
        <li onClick={logOut}>LogOut</li>
      </ul>
    </section>
  );
}

export default Sidebar;
