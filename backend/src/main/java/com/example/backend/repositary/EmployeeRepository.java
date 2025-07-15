package com.example.backend.repositary;

import com.example.backend.model.Employee_Basic;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee_Basic,String> {
}
