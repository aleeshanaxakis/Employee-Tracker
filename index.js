// Install Node, Inquirer 8.2.4 (npm i inquirer@8.2.4) + MySQL
const mysql = require('mysql2');
const inquirer = require('inquirer');

// Similar to table of contents in readme, have a link to view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
// TO DO: Add # to these for links
const landingPage = `
- View all departments
- View all roles
- View all employees
- Add a department
- Add a role
- Add an employee
- Update an employee role
`;

// View all departments > Formatted table showing department names and department ids (we learned this recently)
// View all roles > Job title, role id, department, salary
// View all employees > Formatted table showing employee data

    // Schema should contain the following three tables: department, role, employee

    // You might want to use a separate file that contains functions for performing specific SQL queries you'll need to use. A constructor function or class could be helpful for organizing these. 

    // You might also want to include a seeds.sql file to pre-populate your database, making the development of individual features much easier.

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
        message: "Please enter the employee's last name.";
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