
# CRUD  Backend API Documentation

This documentation provides instructions on how to install, run, and use the CRUD (Create, Read, Update, Delete) backend API built with Node.js for contacts.

## Table of Contents
1. [Installation](#installation)
2. [Running the Server](#running-the-server)
3. [API Endpoints](#api-endpoints)
   - [Create a Contact](#create-a-Contact)
   - [Read All Contacts](#read-all-Contacts)
   - [Read a Contact by ID](#read-a-Contact-by-id)
   - [Update a Contact](#update-a-Contact)
   - [Delete a Contact](#delete-a-Contact)

---

## Installation

To set up the CRUD backend API, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   ```

2. **Install Dependencies**

   Navigate to the project directory and install the required dependencies using npm:

   ```bash
   cd <project-directory>
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the project root and configure necessary environment variables such as database connection details.

   ```env
   PORT=4000
   DATABASE_URL=mysql://<user_name>:4605@localhost:3306/<databasename>
   ```

4. **Database Setup**

   Make sure you have a database set up  and update the `DATABASE_URL` in the `.env` file accordingly.

---

## Running the Server

To start the CRUD API server, run the following command:

```bash

npx prisma migrate dev 
npm run dev
```

By default, the server runs on port 4000, but you can change the port by modifying the `PORT` environment variable in the `.env` file.

---

## API Endpoints

### Create a Contact

**Endpoint:** `POST /api/v1/user`

**Request Body:**

```json
{
  "first_name": "Abhishek",
  "last_name": "shah",
  "email":"youremail@gmail.com",
  "message":"hi this side abhishek"
}
```

**Response:**

```json
{
	"id":"unique string"
  "first_name": "Abhishek",
  "last_name": "shah",
  "email":"youremail@gmail.com",
  "message":"hi this side abhishek",
  "created_at":"",
  "updated_at:""
}
```

### Read All Contacts

**Endpoint:** `GET /api/v1/user`

**Response:**

```json
[
  {
    "id":"unique string"
  "first_name": "Abhishek",
  "last_name": "shah",
  "email":"youremail@gmail.com",
  "message":"hi this side abhishek",
  "created_at":"",
  "updated_at:""
  },
  {
    "id":"unique string"
  "first_name": "Abhishek",
  "last_name": "shah",
  "email":"youremail@gmail.com",
  "message":"hi this side abhishek",
  "created_at":"",
  "updated_at:""
  },
  // ...
]
```

### Read a Contact by ID

**Endpoint:** `GET /api/v1/user/:id`

**Response:**

```json
{
  "id":"unique string"
  "first_name": "Abhishek",
  "last_name": "shah",
  "email":"youremail@gmail.com",
  "message":"hi this side abhishek",
  "created_at":"",
  "updated_at:""
}
```

### Update a Contact

**Endpoint:** `PATCH /api/v1/user/:id`

**Request Body:**

```json
{
   "first_name": "Abhishek",
  "last_name": "shah",
  "email":"youremail@gmail.com",
  "message":"hi this side abhishek"
}
```

**Response:**

```json
{
  "id":"unique string"
  "first_name": "Abhishek",
  "last_name": "shah",
  "email":"youremail@gmail.com",
  "message":"hi this side abhishek",
  "created_at":"",
  "updated_at:""
}
```

### Delete a Contact

**Endpoint:** `DELETE /api/v1/user/:id`

**Response:**

```json
{
  "message": "Contact with ID Contact_id has been deleted."
}
```

---

"# chat_server" 
"# chat_server" 
