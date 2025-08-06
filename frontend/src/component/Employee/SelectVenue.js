import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { url } from "../common/constants";
import axios from "axios";
import authHeader from "../services/auth-header"
// import employeeService from '../services/employee.service';

const SelectVenue = () => {
  const history = useHistory();
  const [Venues, setVenues] = useState([]);
  const init = () => {
    axios.get(url + "/venue")
      .then(response => {
        console.log('Printing Venues data', response.data);
        setVenues(response.data);

      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }
  useEffect(() => {
    init();
  }, []);


  return (
    <div className="forms-container">
      <div className="py-5 text-black my-5">
        <div className="fw-bold pt-5 display-6">
          Venues
        </div>
        <div className="py-4 list-items">
          {Venues.map((venue) => (
            <div key={venue.id}>
              <div className="modern-detail-card p-4 mb-4 shadow-sm rounded bg-white">
                <h5 className="fw-bold mb-3">🏛️ {venue.name}</h5>
                <p className="mb-1">📍 Location: {venue.location}</p>
                <p className="mb-1">🏠 Address: {venue.address}</p>
                <p className="mb-1">👥 Capacity: {venue.maxCapacity}</p>
                <p className="mb-1">🏷️ Category: {venue.category}</p>
                <p className="mb-1">📞 Contact: {venue.contact}</p>
                <p className="mb-1">💰 Cost: ₹{venue.cost}</p>
                <p className="mb-0">📝 {venue.description}</p>
              </div>



              <br></br>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}

export default SelectVenue;
