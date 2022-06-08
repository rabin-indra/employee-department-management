const Department = require('./../models/departmentModel');

exports.create = (req, res) => {
    const department = {
        dep_name : req.body.dep_name,
        dep_email : req.body.dep_email,
        dep_code : req.body.dep_code
    }
    Department.create(department, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Department."
          });
        else res.send(data);
      });
}

exports.updateById = (req, res) => {
  Department.updateById(req.params.id, new Department(req.body), (err, department) => {
    if (err)
   res.send(err);
   res.json({ 
     message: 'Department successfully updated' 
    });
   });
}

exports.deleteById = (req, res) => {
  Department.deleteById(req.params.id, (err, department) => {
    if(err)
    res.send(err);
    res.json({
      message: "Department successfully deleted"
    });
    
  });
}

exports.findAll = (req, res) => {
  Department.findAll((err, department) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving department."
      });
    else
     res.send(department);
    // console.log(department);
    
  });
};

exports.findById = (req, res) => {
  Department.findById(req.params.id, (err, department) => {
    if (err)
      res.send(err);
    res.json(department);
  });
};


