import axios from "axios";
import React, { useEffect, useState } from "react";
import Details from "./Details";

const ListEmployee = () => {
  const [items, setitems] = useState([]);
  const [pitems, psetitems] = useState([]);
  const [show, setshow] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "http://localhost:8080/getAll/Employees"
      );
      if (response != null) setitems(response.data);
    }

    fetchData();
  }, []);

  async function handleChange(id) {
    const response = await axios.get(`http://localhost:8080/getemployee/${id}`);
    psetitems(response.data);
    setshow(!show);
  }
  function click() {
    setshow(!show);
  }

  return (
    <>
      <h1>Employee List</h1>
      <table
        border={1}
        style={{
          borderCollapse: "collapse",
          width: "80%",
          textAlign: "left",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ padding: "10px" }}>Emp ID</th>
            <th style={{ padding: "10px" }}>First Name</th>
            <th style={{ padding: "10px" }}>Last Name</th>
            <th style={{ padding: "10px" }}>Email</th>
            <th style={{ padding: "10px" }}>Phone</th>
            <th style={{ padding: "10px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td style={{ padding: "10px" }}>{item.empId}</td>
              <td style={{ padding: "10px" }}>{item.firstName}</td>
              <td style={{ padding: "10px" }}>{item.lastName}</td>
              <td style={{ padding: "10px" }}>{item.email}</td>
              <td style={{ padding: "10px" }}>{item.phoneNumber}</td>
              <td style={{ padding: "10px" }}>
                <button onClick={() => handleChange(item.empId)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <>
        {show && (
          <div className="overlay">
            <div className="card">
              <h1>Hello {pitems.firstName + " " + pitems.lastName}</h1>
              <p>Emp id:{pitems.empId}</p>
              <p>Position:{pitems.position}</p> 
              <p>Department:{pitems.department}</p>
              <p>HireDate:{pitems.hireDate}</p> 
              <p>Salary:{pitems.salary}</p>
              <p>DateOfBirth{pitems.dateOfBirth}</p>
              <p>Email{pitems.email}</p> 
              <p>PhoneNumber:{pitems.phoneNumber}</p>
              <p>Address:{pitems.address}</p> 
              <button onClick={click}>close</button>
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default ListEmployee;
