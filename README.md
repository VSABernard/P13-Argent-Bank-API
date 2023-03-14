![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

# P13-Argent-Bank-API
Code for project 13 of the front-end path : use an API for a bank user account with React

### **_Presentation_**
The project is about a new start-up bank, Argent Bank, which is trying to break into the industry and needs help setting up its app.

This project is divided into several phases:
* Phase 1: **User Authentication** - Creation of a web application allowing customers to log in and manage their accounts and profile.
  What the app should do :
  1. User can visit homepage
  2. User can login to the system
  3. User can log out of the system
  4. User can only see their own profile information after successfully logging in
  5. User can modify the profile and keep the data in the database.
  
* Phase 2: **Transactions** - This would be to specify the API endpoints needed for a possible second mission once we have completed the first.
  [See here](https://app.swaggerhub.com/apis/VERONICASTEVANIA/bank-argent_api_documentation/1.0.0).

###  **_Prerequisites_**
Argent Bank uses the following tech stack:
* [Node.js v12](https://nodejs.org/en/)
* [MongoDB Community Server](https://www.mongodb.com/try/download/community)

### **_Install the app_**
1. Fork and clone [this repository](https://github.com/VSABernard/P13-Argent-Bank-API.git). 
2. Install all dependencies
3. Start populate database with two users
>>**_npm run populate-db_**     
4. Start the backend on port 3000
>>**_npm run dev:server_**
5. Start the frontend on port 3001 
>>**_npm start_**

### **_Populated Database Data_**
Once you run the populate-db script, you should have two users in your database:
1. **Tony Stark**
* First Name: Tony
* Last Name: Stark
* Email: tony@stark.com
* Password: password123

2. **Steve Rogers**
* First Name: Steve,
* Last Name: Rogers,
* Email: steve@rogers.com,
* Password: password456

### **_Design Assets_**
* Static HTML and CSS has been created for most of the site and is located in: **/designs**.
* For some of the dynamic features, like toggling user editing, there is a mock-up for it in **/designs/wireframes/edit-user-name.png**.
* And for the API model that you will be proposing for transactitons, the wireframe can be found in **/designs/wireframes/transactions.png**.
