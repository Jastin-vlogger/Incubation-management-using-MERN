import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

function BookSlot() {
  const [choose, setChoose] = useState({});
  let [slots, setSlots] = useState({
    A: [],
    B: [],
    C: [],
    D: [],
    E: [],
    F: [],
    G: [],
    H: [],
  });
  const A = [{}, {}, {}, {}];
  const B = [{}, {}, {}, {}];
  const C = [{}, {}, {}, {}];
  const D = [{}, {}, {}, {}];
  const E = [{}, {}, {}, {}];

  return (
    <React.Fragment>
      <div className="row" style={{ height: "100vh" }}>
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <h1>Book Slots</h1>
          <div className="d-flex ">
            <div className="d-flex mb-3 flex-fill text-center">
              {A.map((slotItem, index) => {
                console.log(index);
                return (
                  <div
                    onClick={() => setChoose({ slot: "A", index: index })}
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    key={index}
                    className="p-2 flex-fill text-white m-1"
                    style={{
                      height: "120px",
                      width: "50px",
                      background: (slotItem.company && "#5C8C46") || "#889C9B",
                    }}
                  >
                    <p>{slotItem.company || "Add new company"}</p>
                  </div>
                );
              })}
            </div>

            <div className=" m-1" style={{ width: "15px" }}></div>
            <div className="d-flex mb-3 flex-fill text-center align-middle">
              {B.map((slotItem, index) => {
                return (
                  <div
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    key={index}
                    className="p-2 flex-fill text-white m-1"
                    style={{
                      height: "120px",
                      width: "50px",
                      background: (slotItem.company && "#5C8C46") || "#889C9B",
                    }}
                  >
                    <p>{slotItem.company || "Add new company"}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" m-1" style={{ width: "100%", height: "10px" }}></div>
          <div className="d-flex ">
            <div className="d-flex mb-3 flex-fill text-center">
              {D.map((slotItem, index) => {
                return (
                  <div
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    key={index}
                    className="p-2 flex-fill text-white m-1"
                    style={{
                      height: "120px",
                      width: "50px",
                      background: (slotItem.company && "#5C8C46") || "#889C9B",
                    }}
                  >
                    <p>{slotItem.company || "Add new company"}</p>
                  </div>
                );
              })}
            </div>
            <div className=" m-1" style={{ width: "15px" }}></div>
            <div className="d-flex mb-3 flex-fill text-center align-middle">
              {C.map((slotItem, index) => {
                return (
                  <div
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    key={index}
                    className="p-2 flex-fill text-white m-1"
                    style={{
                      height: "120px",
                      width: "50px",
                      background: (slotItem.company && "#5C8C46") || "#889C9B",
                    }}
                  >
                    <p>{slotItem.company || "Add new company"}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalScrollableTitle">
                Choose Company
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="container">
              <div className="form-group">
                <select className="browser-default custom-select mb-3">
                  <option value="">Remove Company</option>
                </select>
              </div>
            </div>

            <div className="modal-footer">
              <Link
                to="/admin/bookinSlots"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Submit
              </Link>
              <Link
                to="/admin/bookinSlots"
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BookSlot;
