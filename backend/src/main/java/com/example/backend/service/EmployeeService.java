package com.example.backend.service;

import com.example.backend.model.Employee_Basic;
import com.example.backend.repositary.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    @Autowired
    EmployeeRepository employeeRepository;
    public List<Employee_Basic> getAll()
    {
        return employeeRepository.findAll();
    }
    public Optional<Employee_Basic> getItemById(String id)
    {
        return employeeRepository.findById(id);
    }
    public ResponseEntity<Employee_Basic> addEmployee(Employee_Basic employee)
    {
        Employee_Basic saved = employeeRepository.save(employee);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }
    public Employee_Basic updateEmployee(Employee_Basic employee,String id)
    {
        Employee_Basic modified=employeeRepository.findById(id).orElse(null);
         if(modified!=null)
         {
            modified.setFirstName(employee.getFirstName());
            modified.setLastName(employee.getLastName());
            modified.setDateOfBirth(employee.getDateOfBirth());
            modified.setEmail(employee.getEmail());
            modified.setPhoneNumber(employee.getPhoneNumber());
            modified.setAddress(employee.getAddress());
            modified.setPosition(employee.getPosition());
            modified.setDepartment(employee.getDepartment());
            modified.setHireDate(employee.getHireDate());
            modified.setSalary(employee.getSalary());
         }
         return  employeeRepository.save(modified);

    }
}
