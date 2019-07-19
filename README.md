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
![image](https://user-images.githubusercontent.com/40612623/61552247-25adfe00-aa0c-11e9-8d94-295f5122a002.png)

If a users selects this option, the app should list every available item, including the each item's ID, name, price, and in-stock quantity.

**View low inventory**
![image](https://user-images.githubusercontent.com/40612623/61552255-2a72b200-aa0c-11e9-878b-253f54059262.png)

Selecting this option will list all items with an inventory count lower than five.

**Add to inventory**
![image](https://user-images.githubusercontent.com/40612623/61552233-1af36900-aa0c-11e9-9472-1d1a03ea1b61.png)

If a user selects this option, the app will prompt the user to increase the available inventory by the quantity specified.

**Add new item**
![image](https://user-images.githubusercontent.com/40612623/61552264-2f376600-aa0c-11e9-8055-f88bd31c65aa.png)

If a user selects this option, it should allow the manager to add a new product to the store's inventory.

---

### Technologies Used

* Javascript
* Node
* MySQL
* Inquirer


