import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import axios from "../../../axios";
function UserMange() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get("/api/user/getUserInfo").then((response) => {
      // console.log(response.data)
      setState(response.data);
    });
  }, []);
  return (
    <div className="row" style={{ height: "100vh" }}>
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="col-md-10">
        <h1>User Management</h1>
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Eamil</th>
            </tr>
          </thead>
          <tbody>
            {state.map((data, i) => {
              return (
                <tr>
                  <th scope="row">1</th>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserMange;
