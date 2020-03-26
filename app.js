const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
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


function viewEmployees(){
connection.query("SELECT * FROM employee",function(err, res){
console.table(res);
})
}
    

  