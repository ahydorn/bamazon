-- Get rid of the database if it exists
DROP bamazon_db IF EXISTS;

-- Database creation
CREATE bamazon_db;

-- Use the newly created database
USE bamazon_db

-- Create product table
CREATE TABLE inventory (
    item_no INT(10) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(20) NOT NULL,
    price DECIMAL(6,2) NOT NULL,
    stock_quantity INT(5) NOT NULL,
    PRIMARY KEY(item_no)
);

INSERT INTO inventory (prodName, deptName, price, inStock)
VALUES ('No. 2 Pencil','',10.99,200),
('Bic Mechanical Pencil'),
('Zebra Mechanical Pencil'),
('Uniball Pen'),
('Drafting Pencil'),
('2mm Pencil'),
('5mm Pencil'),
('Sharpie'),
('')