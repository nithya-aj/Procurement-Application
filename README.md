# Procurement Application

A fullstack procurement application built for managing Suppliers, Items, and Purchase Orders. This project is developed using **React** and **Node.js** with **MongoDB** as the database, and utilizes **Material UI** for styling. 

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Modules](#modules)
- [Setup and Installation](#setup-and-installation)
- [Screenshots](#screenshots)

---

## Features
- **Supplier Management**: Manage supplier data with fields like Supplier No., Name, Country, and Status.
- **Item Management**: Handle item details, including name, price, supplier, and stock information.
- **Purchase Order Management**: Create and view purchase orders with detailed item and price breakdowns.
- **Export and Print Purchase Orders**: Export orders to Excel or print them for record-keeping.

## Technologies Used

### Frontend
- **React**: For building the user interface.
- **Material UI**: For UI components and styling.
- **react-flag-select**: For country selection in the Supplier module.

### Backend
- **Node.js**: For server-side processing.
- **Express.js**: For handling API requests.
- **MongoDB**: As the database to store application data.
- **UUID**: For generating unique IDs for items, suppliers, and orders.

---

## Modules

### 1. Supplier Module
- Fields:
  - **Supplier No** (auto-generated)
  - **Supplier Name**
  - **Address**
  - **TAX No**
  - **Country** (Dropdown)
  - **Mobile No**
  - **Email**
  - **Status** (Active/Inactive/Blocked)

### 2. Item Module
- Fields:
  - **Item No** (auto-generated)
  - **Item Name**
  - **Inventory Location**
  - **Brand**
  - **Category**
  - **Supplier** (Dropdown list of active suppliers)
  - **Stock Unit** (Dropdown)
  - **Unit Price**
  - **Item Images** (Supports multiple image uploads)
  - **Status** (Enabled/Disabled)

### 3. Purchase Order Module
- Fields:
  - **Order No** (auto-generated)
  - **Order Date** (default: current date)
  - **Supplier Name** (Dropdown list of active suppliers)
  - **Item List**:
    - **Item No, Name, Stock Unit, Unit Price, Packing Unit, Order Qty, Item Amount, Discount, Net Amount**
  - **Summary**:
    - **Item Total** (readonly)
    - **Discount** (readonly)
    - **Net Amount** (calculated as Item Total - Discount)

---

## Setup and Installation

### Prerequisites
- Node.js
- MongoDB (local instance or cloud database)

### Instructions
1. Clone the repository:
   
   ```bash
   git clone https://github.com/nithya-aj/Procurement-Application.git

3. Navigate to the project directory:
   
   ```bash
   cd procurement-application
4. Create a .env file in the server directory with the following content:
   
   ```bash
   PORT=<PORT>
   MONGO_URL=<place here your db url>
   BASE_URL=http://localhost:<PORT>

5. Install backend dependencies:
   
   ```bash
   cd server
   npm install
6. Install frontend dependencies:
   
   ```bash
   cd ../client
   npm install
7. Start the backend server in development mode using nodemon:
   
   ```bash
   cd ../server
   nodemon
8. Start the frontend development server:
   
    ```bash
   cd ../client
   npm run dev

## Screenshots
![UI Screenshot](assets/suppliers.png)
![UI Screenshot](assets/items.png)
![UI Screenshot](assets/itemDetails.png)

