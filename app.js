var mysql = require("mysql");
var inquirer = require("inquirer");

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
  inquirer.prompt([
    {
      type: "list",
      name: "Menu_one",
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
  ]);
}
