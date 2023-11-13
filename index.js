// Install Node, Inquirer, MySQL
const mysql = require('mysql2');
const inquirer = require('inquirer');

// Database connection configuration
const dbConfig = {
    host: 'localHost',
    user: 'root',
    password: 'benJiHappy222$',
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

displayMainMenu();

// Function to view all departments
function viewAllDepartments() {
    const query = 'SELECT department_name, id FROM department';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching departments:', err.message);
            return;
        }
    
    console.table(results);
    displayMainMenu();

    });
}

// Function to view all roles
function viewAllRoles() {
    const query = 'SELECT title, id, department_id, salary FROM role;';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching roles:', err.message);
            return;
        }

    console.table(results);
    displayMainMenu();

    });
}

// Function to view all employees
function viewAllEmployees() {
    const query = 
    'SELECT employee.id, first_name, last_name, title, department_name AS department, salary, manager_id FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id;';
    
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching roles:', err.message);
            return;
        }

    console.table(results);
    displayMainMenu();

    });
}

// Function to add department
function addDepartment() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'department-name',
                    message: 'Please enter the name of the department.',
                },
        ])
        .then((answers) => {
            const query = 'INSERT INTO department (department_name) VALUES (?)';

            connection.query(query, 
                [answers['department-name']], 
                (err) => {
                    if (err) {
                        console.error('Error adding department:', err.message);
                    return;
                    }

            console.log('Department added successfully.');
            displayMainMenu();
        });
    });
}

// Function to add role
function addRole() {
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
        name: 'department_id',
        message: 'Please enter the ID number of the department the role belongs to.',
        },
    ])
    .then((answers) => {
        console.log(answers.department_id);
        const query = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';

            connection.query(query, 
                [answers['role-name'], answers['role-salary'], answers['department_id']],
                (err) => {
                    if (err) {
                        console.error('Error adding role:', err.message);
                    return;
                    }

            console.log('Department added role.');
            displayMainMenu(); 
        });
});
}

// Function to add an employee
function addEmployee() {
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
        .then((answers) => {
            const query =
            'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';

            connection.query(
                query,
                [answers['employee-name'],
                answers['employee-surname'],
                answers['employee-role'],
                answers['employee-manager'],
                ],
                (err) => {
                    if (err) {
                        console.error('Error adding employee:', err.message);
                        return;
                    }

                    console.log('Employee added successfully.');
                    displayMainMenu(); // Display the main menu again
                }
            );
    });
}

// Function to update an employee role
function updateEmployeeRole() {

}