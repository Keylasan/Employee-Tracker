 use employees_db
INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');
 
INSERT INTO role
    (Title, Salary, Department_ID)
VALUES
    ('Sales Lead', 120000, 1),
    ('Salesperson', 110000, 1),
    ('Lead Engineer', 160000, 2),
    ('Software Engineer', 170000, 2),
    ('Account Manager', 160000, 3),
    ('Accountant', 130000, 3),
    ('Legal Team Lead', 300000, 4),
    ('Lawyer', 160000, 4);
 
INSERT INTO employee
    (First_name, Last_name, Role_ID, Manager_ID)
VALUES
    ('Betty', 'Brown', 1, NULL),
    ('Justin', 'Time', 2, 1),
    ('Benny', 'Palacios', 3, NULL),
    ('Keiser', 'Eigler', 4, 3),
    ('Carlitos', 'Piedras', 5, NULL),
    ('Omar', 'White', 6, 5),
    ('Larissa', 'Lourd', 7, NULL),
    ('Acilia', 'Kurdy', 8, 7);
