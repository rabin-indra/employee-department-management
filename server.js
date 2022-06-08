const express = require("express");
const app = express();

const employeeRoute = require("./src/routes/employeeRoute");
const departmentRoute = require("./src/routes/departmentRoute");

app.get("/", (req, res) => {
    res.send("Employee-Department Application to manage Employee");
});

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/emp', employeeRoute);
app.use('/dep', departmentRoute);


const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Listening to server at http://localhost:${PORT}`);
});