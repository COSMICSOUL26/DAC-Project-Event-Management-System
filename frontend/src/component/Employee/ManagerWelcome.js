import React, { useEffect, useState } from "react";
// import "./LoginRegister.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { url } from '../common/constants';
import { SiEventstore } from "react-icons/si";
import { FaEdit } from "react-icons/fa";
import { MdEditCalendar, MdOutlinePreview } from "react-icons/md";

const ManagerWelcome = () => {
  const state = [
    {
      id: 1,
      icon: <MdEditCalendar className="commonIcons2" />,
      heading: "View & Register Employees",
      link: "viewemployees"
    },
    {
      id: 2,
      icon: <MdOutlinePreview className="commonIcons2" />,
      heading: "View & Update Assigned Events",
      link: "viewevent"
    },
    {
      id: 3,
      icon: <FaEdit className="commonIcons2" />,
      heading: "All the Availble Services",
      link: "viewallservices"
    }
  ];

  const [uname, setUname] = useState();
  const init = () => {
    const token = JSON.parse(localStorage.getItem("jwttoken"));
    axios.get(url + "/nameaccess", { headers: { "authorization": `Bearer ${token}` } })
      .then(Response => {
        console.log('Printing User name', Response.data);
        setUname(Response.data);
      })
      .catch(error => {

        console.log(uname)
        console.log('Something went wrong', error);
      })
  }

  useEffect(() => {
    init();
  }, []);

  return (
    // <div className=" position-absolute top-50 start-50 translate-middle h-100 w-100">
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
      <div className="fw-bold display-6 mb-5 text-center">
        Welcome, {uname}
      </div>
      <div className="row justify-content-center w-100">
        {state.map((info) => (
          <div className="col-12 col-md-4 d-flex justify-content-center mb-4" key={info.id}>
            <Link className="text-decoration-none text-dark" to={info.link}>
              <div className="modern-card text-center p-5">
                <div className="icon-wrapper mb-4">{info.icon}</div>
                <h5 className="card-heading">{info.heading}</h5>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagerWelcome;
