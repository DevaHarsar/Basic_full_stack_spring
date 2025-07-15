import React from 'react';

const Details = ({ data }) => {
  return (
    <>
      <h1>{data.empId}</h1>
      <p><strong>Name:</strong> {data.firstName} {data.lastName}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Phone:</strong> {data.phoneNumber}</p>
      <p><strong>Department:</strong> {data.department}</p>
      <p><strong>Position:</strong> {data.position}</p>
      <p><strong>DOB:</strong> {data.dateOfBirth}</p>
      <p><strong>Address:</strong> {data.address}</p>
      <p><strong>Position:</strong> {data.position}</p>
    </>
  );
};

export default Details;
