// Install Node, Inquirer, MySQL
const mysql = require('mysql2');
const inquirer = require('inquirer');

// Database connection configuration
const dbConfig = {
    host: 'your-database-host',
    user: 'your-username',
    password: 'benJiHapp*****',
    database: 'hr_tracker',
};

// Make the connection
const connection = mysql.createConnection(dbConfig);

// Function to display the main menu
function displayMainMenu() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'menuChoice',
                message: 'Please choose an option:',
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Update an employee role',
                    'Exit',
                ],
            },
        ])
        .then((answer) => {
            // Perform actions based on the user's choice
            switch (answer.menuChoice) {
                case 'View all departments':
                    viewAllDepartments();
                    break;

                case 'View all roles':
                    viewAllRoles();
                    break;
    
                case 'View all employees':
                    viewAllEmployees();
                    break;
    
                case 'Add a department':
                    addDepartment();
                    break;
    
                case 'Add a role':
                    addRole();
                    break;
    
                case 'Add an employee':
                    addEmployee();
                    break;
                
                    case 'Update an employee role':
                    updateEmployeeRole();
                    break;

                case 'Exit':
                    console.log('Exiting the application.');
                    connection.end();
                    break;

                    default:
                        console.log('Invalid choice. Please try again.');
                        displayMainMenu()
            }
        });
}

// Function to view all departments
function viewAllDepartments() {
    const query = 'SELECT department_name, id FROM hr_tracker';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching departments:', err.message);
            return;
        }
    
    console.table(results);

    connection.end();
    });
}

// View all roles > Job title, role id, department, salary
function viewAllRoles() {
    const query = 'SELECT title, id, department_id, salary FROM role;'

    console.table(results);
}

// View all employees > Formatted table showing employee data
function viewAllEmployees() {
    const query = 'SELECT employee.id, first_name, last_name, title, name AS department, salary, manager_id FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id;'

    console.table(results);
}

// Add a department > Prompted to enter the name of the department , which is then added to the database
inquirer
.prompt([
    {
        type: 'input',
        name: 'department-name',
        message: 'Please enter the name of the department.',
    },
])
.then(() => {

});
// Add a role > Prompted to enter info, added to database
inquirer
.prompt([
    {
        type: 'input',
        name: 'role-name',
        message: 'Please enter the title of the role.',
    },
    {
        type: 'input',
        name: 'role-salary',
        message: 'Please enter the salary of the role.',
    },
    {
        type: 'input',
        name: 'role-department',
        message: 'Please enter the department the role belongs to.',
    },
])
.then(() => {

});
// Add an employee > Prompted to enter info, added to database
inquirer
.prompt([
    {
        type: 'input',
        name: 'employee-name',
        message: "Please enter the employee's first name.",
    },
    {
        type: 'input',
        name: 'employee-surname',
        message: "Please enter the employee's last name.",
    },
    {
        type: 'input',
        name: 'employee-role',
        message: "Please enter the employee's role.",
    },
    {
        type: 'input',
        name: 'employee-manager',
        message: "Please enter the name of the employee's manager."
    },
])
.then(() => {

});

// Update an employee role > Prompted to select an employee to update & input new role , added to database
