const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");



var rolesArray = [];
var managersArray = [];
// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "employees_db"
});







// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
  roleChoices();
  managersChoices();
});

function start() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "firstMenu",
        message: "What would you like to do?",
        choices: [
          "View all employees",
          "View Departments",
          "View employees' roles",
          "Add employee",
          "Add roles",
          "Add departments",
          "Update employee roles"
        ]
      }
    ])
    .then(function(results) {
      if (results.firstMenu === "View all employees") {
        viewEmployees();
      } else if (results.firstMenu === "View Departments") {
        viewDepartments();
      } else if (results.firstMenu === "View employees' roles") {
        viewRoles();
      } else if (results.firstMenu === "Add employee") {
        addEmployee();
      } else if (results.firstMenu === "Add roles") {
        addRoles();
      } else if (results.firstMenu === "Add departments") {
        addDepartments();
      } else if (results.firstMenu === "Update employee roles") {
        updateEmployeeRoles();
      }
    });
}

function viewEmployees() {
  connection.query("SELECT * FROM employee", function(err, res) {
    console.table(res);
    start();
  });
}

function viewDepartments() {
  connection.query("SELECT * FROM department", function(err, res) {
    console.table(res);
    start();
  });
}

function viewRoles() {
  connection.query("SELECT * FROM role", function(err, res) {
    console.table(res);
    start();
  });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "First_name",
        message: "Enter new employees' first name: "
      },
      {
        type: "input",
        name: "Last_name",
        message: "Enter new employee's last name: "
      },
      {
        type: "list",
        name: "Role_ID",
        message: "Select new employee's role: ",
        choices: rolesArray
      },
      {
        type: "list",
        name: "Manager_ID",
        message: "Select the corresponding Manager: ",
        choices: managersArray
      }
    ])
    .then(function(results) {
      connection.query(
        "INSERT INTO employee SET ?",
        {
          First_name: results.First_name,
          Last_name: results.Last_name,
          Role_ID: results.Role_ID,
          Manager_ID: results.Manager_ID
        },
        function(err) {
          if (err) throw err;
          console.log("New employee was added successfully!");

          start();
        }
      );
    });
}

function roleChoices() {
    connection.query("SELECT * FROM role", function(err, res) {
      for (let i = 0; i < res.length; i++) {
        rolesArray.push(res[i].Title);
      }
    });
  }





  function managersChoices() {
    connection.query("SELECT * FROM employee WHERE Role_ID='1' ", function(err, res) {
      for (let i = 0; i < res.length; i++) {
        managersArray.push(res[i].Title);
      }
    });
  }



function addRoles() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "Title",
        message: "Enter New Role: "
      },
      {
        type: "input",
        name: "Salary",
        message: "Enter New Role's Salary: "
      },
      {
        type: "input",
        name: "Department_ID",
        message: "Enter its corresponding Department ID: "
      }
    ])
    .then(function(results) {
      connection.query(
        "INSERT INTO role SET ?",
        {
          Title: results.Title,
          Salary: results.Salary,
          Department_ID: results.Department_ID
        },
        function(err) {
          if (err) throw err;
          console.log("New role was added successfully!");

          start();
        }
      );
    });
}
