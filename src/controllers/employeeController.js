const Employee = require('./../models/employeeModel');

exports.create = (req, res) => {
    const employee = {
        fname : req.body.fname,
        lname : req.body.lname,
        post : req.body.post,
        email : req.body.email,
        salary : req.body.salary,
        dep_ids : req.body.dep_ids
    }
    Employee.create(employee, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Employee."
          });
        else res.send(data);
      });
}

exports.findByDep = (req, res) => {
  Employee.findByDep(req.body.dep_name, (err, employee) => {
    if (err)
      res.send(err);
    res.json(employee);
  });
};

exports.findBySal = (req, res) => {
  Employee.findBySal(req.body.salary, (err, employee) => {
    if (err)
      res.send(err);
    res.json(employee);
  });
};

exports.findAll = (req, res) => {
  Employee.findAll((err, employee) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving employee."
      });
    else res.send(employee);
  });
};

exports.findById = (req, res) => {
  Employee.findById(req.params.id, (err, employee) => {
    if (err)
      res.send(err);
    res.json(employee);
  });
};

exports.deleteById = (req, res) => {
  Employee.deleteById(req.params.id, (err, employee) => {
    if(err)
    res.send(err);
    res.json({
      message: "Employee successfully deleted"
    });
    
  });
}

exports.updateById = (req, res) => {
  Employee.updateById(req.params.id, new Employee(req.body), (err, employee) => {
    if (err)
   res.send(err);
   res.json({ 
     message: 'Employee successfully updated' 
    });
   });
}