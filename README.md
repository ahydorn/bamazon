# Bamazon Manager's View 📦

### **Overview**

---

### **Installation**

1. From terminal or git-terminal, navigate to your desired download directory and run the following:

    >`git clone https://github.com/ahydorn/bamazon.git`

2. After installation, navigate inside the newly downloaded folder and run `npm install` or `npm i`. Note that you will need to have `node` installed.

3. When complete, run the command `node bamazonManager.js`.

---

### **Usage**

Upon running the app, the user will be presented with a menu containing the following options. 

  * View Products for Sale
  * View Low Inventory
  * Add to Inventory
  * Add New Product

Use the `arrow keys` to highlight each option, then press `enter` or `return`.

**View items for sale**
![image]("./assets/images/items-for-sale.jpg")
If a users selects this option, the app should list every available item, including the each item's ID, name, price, and in-stock quantity.

**View low inventory**
![image](link)
Selecting this option will list all items with an inventory count lower than five.

**Add to inventory**
![image](link)
If a user selects this option, the app will prompt the user to increase the available inventory by the quantity specified.

**Add new item**
![image](link)
If a user selects this option, it should allow the manager to add a new product to the store's inventory.

---

### Technologies Used

* Javascript
* Node
* MySQL
* Inquirer
