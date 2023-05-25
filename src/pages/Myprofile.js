import React, { useState } from "react";
import Transactionhistory from "./Transactionhistory";
import { useNavigate } from "react-router-dom";

export default function Myprofile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userData")).user
  );
  return (
    <div className="container">
      <div className="main-body">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="Admin"
                    className="rounded-circle"
                    width={150}
                  />
                  <div className="mt-3">
                    <h4>{user?.name}</h4>
                    <h6>Section-{user?.section}</h6>
                    <h6>Branch-{user?.branch}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Full Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{user?.name}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">College ID</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {user?.collegeID}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Roll No</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{user?.rollno}</div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{user?.email}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Phone</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{user?.phoneno}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Attendance</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {user?.attendance}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Marks</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{user?.marks}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Class Performance</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {user?.classperformance}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Balance</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{user?.balance}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-12">
                    <a
                      className="btn btn-info"
                      onClick={() => {
                        localStorage.removeItem("userData");
                        localStorage.removeItem("token");
                        navigate("/");
                        window.location.reload();
                      }}
                    >
                      Log Out
                    </a>
                  </div>
                  <div className="col-sm-12">
                    <a
                      className="btn btn-info"
                      onClick={() => {
                        navigate("/transactionhistory");
                      }}
                    >
                      Transactionhistory
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
