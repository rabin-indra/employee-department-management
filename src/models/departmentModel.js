const dbConns = require("./../../config/dbconfig");



const Department = function (department) {
    this.dep_name = department.dep_name;
    this.dep_email = department.dep_email;
    this.dep_code = department.dep_code;
    
  };
  
  Department.create = (newDep, result) => {
    dbConns.query("INSERT INTO departments SET ?", newDep, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created: ", { id: res.insertId, ...newDep });
      result(null, { id: res.insertId, ...newDep });
    });
  };

  Department.updateById = (id, department, result) => {
    dbConns.query("UPDATE departments SET dep_name=?, dep_email=?, dep_code=? WHERE id = ?",
      [department.dep_name, department.dep_email, department.dep_code, id], (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
        }
        else {
          result(null, res);
        }
      });
  }

  Department.deleteById = (id, result) => {
    dbConns.query("DELETE FROM departments where id =?", [id], (err, res) => {
      if(err){
        console.log("error: ", err);
        result(null, err);
      }
      else{
        result(null, res);
      }
    });
  }

  Department.findAll = (result) => {
    let query = "SELECT * FROM departments";
  
    dbConns.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      result(null, res);
    });
  };


  Department.findById = (id, result) => {
    dbConns.query("SELECT * FROM departments where id = ? ", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      }
      else {
        result(null, res);
      }
    });
  }

  module.exports = Department;