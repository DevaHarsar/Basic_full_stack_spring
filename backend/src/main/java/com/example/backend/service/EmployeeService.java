package com.example.backend.service;

import com.example.backend.model.Employee_Basic;
import com.example.backend.repositary.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
    public Employee_Basic addEmployee(Employee_Basic employee)
    {
//        System.out.println("The add employee clicked"+employee);
        return employeeRepository.save(employee);
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
