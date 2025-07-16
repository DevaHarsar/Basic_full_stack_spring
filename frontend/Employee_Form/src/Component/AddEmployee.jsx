import React, { useState } from 'react'
import axios from "axios"
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
const AddEmployee = () => {
    const[form,setform]=useState({
        empId:"",
        firstName:"",
        lastName:"",
        position:"",
        department:"",
        hireDate:"",
        salary:"",
        dateOfBirth: "",
        email: "",
        phoneNumber: "",
        address: ""
    })
    function handleChange(e)
    {
        const{name,value}=e.target;
        setform((data)=>({
            ...data,
            [name]:value
        }))

    }
   async function handlesubmit(e) {
           e.preventDefault();
         try {

            const check=await axios.get(`http://localhost:8080/getemployee/${form.empId}`)
            console.log(check)
            if(check.data!=null)
            {
              alert("The user already exist");
            }
            else{
              const response = await axios.post("http://localhost:8080/addEmployee", form);
              console.log("Employee saved:", response.data);
              alert("Employee saved"+form.firstName)
              
            }
        } catch (error) {
            const message= error.response.data.errors.map(err => `${err.field}: ${err.message}`);
            // console.error("Error saving employee:");
             alert(message.join("\n"))
        }

   } 
    
  return (
         <Container className="mt-4">
      <h2 className="text-center mb-4">Add Employee Details</h2>
      <Form onSubmit={handlesubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Employee ID</Form.Label>
              <Form.Control type="text" name="empId" value={form.empId} onChange={handleChange} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" name="firstName" value={form.firstName} onChange={handleChange} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" name="lastName" value={form.lastName} onChange={handleChange} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Position</Form.Label>
              <Form.Control type="text" name="position" value={form.position} onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Department</Form.Label>
              <Form.Control type="text" name="department" value={form.department} onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Hire Date</Form.Label>
              <Form.Control type="date" name="hireDate" value={form.hireDate} onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Salary</Form.Label>
              <Form.Control type="number" name="salary" value={form.salary} onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" name="dateOfBirth" value={form.dateOfBirth} onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={form.email} onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control as="textarea" rows={3} name="address" value={form.address} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default AddEmployee