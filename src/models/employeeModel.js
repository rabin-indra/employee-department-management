const dbConns = require("./../../config/dbconfig")

const Employee = function (employee) {
    this.fname = employee.fname;
    this.lname = employee.lname;
    this.post = employee.post;
    this.email = employee.email;
    this.salary = employee.salary;
    this.dep_ids = employee.dep_ids;
  };
  
  Employee.create = (newEmp, result) => {
    dbConns.query("INSERT INTO employees SET ?", newEmp, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created: ", { id: res.insertId, ...newEmp });
      result(null, { id: res.insertId, ...newEmp });
    });
  };

  Employee.findByDep = (dep_name, result) => {
    dbConns.query(`SELECT concat(employees.fname," ",employees.lname) as name
    FROM employees
    LEFT JOIN departments
    ON employees.dep_ids = departments.id
    where dep_name = ?`, dep_name, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      }
      else {
        result(null, res);
      }
    });
  }

  Employee.findBySal = (salary, result) => {
    dbConns.query(`SELECT departments.dep_name , count(employees.id) as employee
    FROM departments
    LEFT JOIN employees
    ON departments.id = employees.dep_ids
    where employees.salary >= ?
    GROUP BY dep_name`, salary, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      }
      else {
        result(null, res);
      }
    });
  }

  Employee.findAll = (result) => {
    let query = `SELECT * FROM employees`;
  
    dbConns.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      result(null, res);
    });
  };

  Employee.findById = (id, result) => {
    dbConns.query("SELECT * FROM employees where id = ? ", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      }
      else {
        result(null, res);
      }
    });
  }


  Employee.deleteById = (id, result) => {
    dbConns.query("DELETE FROM employees where id =?", [id], (err, res) => {
      if(err){
        console.log("error: ", err);
        result(null, err);
      }
      else{
        result(null, res);
      }
    });
  }

  

  Employee.updateById = (id, employee, result) => {
    dbConns.query("UPDATE emp_dep.employees SET fname= ?, lname= ?, post= ?, email=?, salary= ?, dep_ids =? WHERE id = ?",
      [employee.fname, employee.lname, employee.post, employee.email, employee.salary, employee.dep_ids, id], (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
        }
        else {
          result(null, res);
        }
      });
  }











  module.exports = Employee;