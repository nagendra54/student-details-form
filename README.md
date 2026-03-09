Student Details Form :

 Project Overview:

The "Student Details Form" is a simple web application that allows users to add and manage student information.
The application uses **HTML, JavaScript, and JSON Server** to simulate a backend API where student data is stored.

This project demonstrates how a frontend form can interact with a backend API to "store and retrieve data".

Technologies Used:

* "HTML" – For building the user interface
* "JavaScript" – For handling form submission and API calls
* "JSON Server" – To create a fake REST API for storing student data
* "Fetch API / Axios" – To send requests to the server
* "Git & GitHub" – For version control

Project Structure

student-details-form

│
├── index.html        # Student form UI
├── student.js        # Handles form submission and API calls
├── db.json           # Fake database for JSON Server
├── package.json      # Project configuration
└── README.md         # Project documentation
```

Setup and Installation

--> Clone the repository

```
git clone https://github.com/nagendra54/student-details-form.git
```

### 2️⃣ Navigate to the project folder

```
cd student-details-form
```

### 3️⃣ Install JSON Server

```
npm install -g json-server
```

### 4️⃣ Start the JSON Server

```
json-server --watch db.json --port 3000
```

Server will run at:

```
http://localhost:3000
```

---

## 📡 API Endpoints

| Method | Endpoint      | Description            |
| ------ | ------------- | ---------------------- |
| GET    | /students     | Get all students       |
| POST   | /students     | Add a new student      |
| DELETE | /students/:id | Delete a student       |
| PUT    | /students/:id | Update student details |

Example endpoint:

```
http://localhost:3000/students
```

---

## 🚀 Features

* Add new student details
* Store data using JSON Server
* Fetch and display student records
* Simple frontend form interaction with API
* Lightweight project for learning **frontend + API communication**

---

## 📷 Example Student Data

```
{
  "students": [
    {
      "id": 1,
      "name": "Nagendra",
      "email": "nagendra@gmail.com",
      "course": "React"
    }
  ]
}
```

---

 Learning Outcomes

This project helps understand:

* Form handling in JavaScript
* REST API basics
* Fetching and sending data to APIs
* Using JSON Server as a mock backend
* Basic full-stack interaction

---

Author

"Nagendra Mani Putthambaka"

GitHub:
https://github.com/nagendra54
