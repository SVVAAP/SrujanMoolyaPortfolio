CREATE DATABASE firebase_react_node_app;
USE firebase_react_node_app;
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT CHECK (age >= 5 AND age <= 100),
    grade VARCHAR(10),
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO students (first_name, last_name, email, age, grade, address) VALUES
('John', 'Doe', 'john.doe@example.com', 15, '10th', '123 Main St, City A'),
('Jane', 'Smith', 'jane.smith@example.com', 17, '12th', '456 Elm St, City B'),
('Michael', 'Johnson', 'michael.johnson@example.com', 14, '9th', '789 Oak St, City C'),
('Emily', 'Davis', 'emily.davis@example.com', 16, '11th', '101 Pine St, City D'),
('Chris', 'Brown', 'chris.brown@example.com', 18, '12th', '202 Cedar St, City E'),
('Sarah', 'Wilson', 'sarah.wilson@example.com', 13, '8th', '303 Birch St, City F'),
('David', 'Miller', 'david.miller@example.com', 12, '7th', '404 Walnut St, City G'),
('Sophia', 'Anderson', 'sophia.anderson@example.com', 11, '6th', '505 Maple St, City H'),
('Daniel', 'Martinez', 'daniel.martinez@example.com', 10, '5th', '606 Cherry St, City I'),
('Olivia', 'Garcia', 'olivia.garcia@example.com', 9, '4th', '707 Redwood St, City J');

select * from students
