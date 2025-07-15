package com.example.backend.controller;


import com.example.backend.model.Employee_Basic;
import com.example.backend.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;
    @GetMapping("/getAll/Employees")
    public List<Employee_Basic> getAllEmployee()
    {
          return employeeService.getAll();
    }
    @GetMapping("/getemployee/{id}")
    public Optional<Employee_Basic> getEmployee(@PathVariable String id)
    {
        return employeeService.getItemById(id);
    }

    @PostMapping("/addEmployee")
    public Employee_Basic addEmployee(@RequestBody Employee_Basic employee)
    {
        return  employeeService.addEmployee(employee);
    }
    @PutMapping("/updateEmployee/{id}")
    public Employee_Basic updateEmployee(@RequestBody Employee_Basic employee,@PathVariable String id)
    {
        return  employeeService.updateEmployee(employee,id);
    }
}
