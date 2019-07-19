var inquirer = require('inquirer');
var mysql = require('mysql');
const cTable = require('console.table')

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazondb"
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as: " + connection.threadId + "\n");
    runSearch();
});

function runSearch() {
    console.log("\n\t-------------| Admin |---------------")
    inquirer.prompt([{
        type: 'list',
        message: '\n\tSelect an option: \n\n',
        choices: [
            "\t* View items for sale",
            "\t* View low inventory",
            "\t* Add stock to inventory",
            "\t* Add new item",
            "\t* Exit\n"
        ],
        name: "action"
    }]).then(function(answer) {
        switch (answer.action) {
            case "\t* View items for sale":
                viewItems();
                break;
            case "\t* View low inventory":
                viewLowInv();
                break;
            case "\t* Add stock to inventory":
                addToInv();
                break;
            case "\t* Add new item":
                addNewItem();
                break;
            case "Exit":
                process.exit(0);
                break;
        };
    });
};
const addNewItem = function() {
    console.log("\n\tAdding new item...\n");
    inquirer.prompt([{
        type: "input",
        message: "Enter the name of the new item.",
        name: "newItemName"
    }, {
        type: "input",
        message: "Enter department name for new item.",
        name: "newDeptName"
    }, {
        type: "input",
        message: "Enter price of new item",
        name: "newItemPrice"
    }, {
        type: "input",
        message: "How many will be stocked?",
        name: "newStockVal"
    }]).then(function(response) {
        console.log(response);
        connection.query(
            "INSERT INTO products SET ?", {
                item_name: response.newItemName,
                department_name: response.newDeptName,
                price: response.newItemPrice,
                stock_quantity: response.newStockVal
            },
            function(err, res) {
                if (err) throw err;
                console.log(res.affectedRows + "\n\tProduct inserted!\n");
                viewItems();
                runSearch();
            })
    })
};
const viewItems = function() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.table(res);
        runSearch();
    });
};
const viewLowInv = function() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        lowInventory = [];
        for (let i = 0; i < res.length; i++) {
            if (res[i].stock_quantity <= 5) {
                lowInventory.push(res[i]);
            }
        }
        console.table(lowInventory);
        runSearch();
    });
};
const addToInv = function() {
    inquirer.prompt([{
        type: "input",
        message: "What would you like to add?",
        name: "deptToAdd"
    }, {
        type: "input",
        message: "How many would you like to add?",
        name: "moreAdded"
    }]).then(function(response) {
        connection.query("SELECT * FROM products WHERE ?", { item_name: response.deptToAdd }, function(err, res) {
            if (err) throw err;
            console.log(res)
            var currentStock = res[0].stock_quantity;
            console.log(currentStock)
            connection.query("UPDATE products SET ? WHERE ?", [{ stock_quantity: parseInt(response.moreAdded) + parseInt(currentStock) },
                { item_name: response.deptToAdd }
            ], function(err, results) {
                if (err) throw err;
                viewItems();
            })

        })

    })
};