# Student Management REST API

A backend REST API for managing student data, built with **Node.js**, **Express**, and **Supabase** (a Backend-as-a-Service built on PostgreSQL). This project was created as part of a Cloud Computing course (Week 11: Backend as a Service) to practice using a BaaS platform instead of building and hosting a database from scratch.

## Features

- Create, read, update, and delete student records (CRUD)
- Retrieve a single student by ID
- Cloud-hosted PostgreSQL database managed through Supabase
- Clean separation of concerns: routes, controllers, and database connection
- Environment-based configuration with `dotenv`
- CORS enabled for use with any frontend

## Tech Stack

- Node.js (ES Modules)
- Express.js
- Supabase (`@supabase/supabase-js`)
- dotenv, cors

## Project Structure

    supabase-node-tutorial/
    ├── .env
    ├── package.json
    ├── server.js
    └── src/
        ├── db.js
        ├── routes/
        │   └── studentRoutes.js
        └── controllers/
            └── studentController.js

## API Endpoints

| Method | Endpoint             | Description          |
|--------|----------------------|----------------------|
| POST   | `/api/students`      | Add a new student    |
| GET    | `/api/students`      | Get all students     |
| GET    | `/api/students/:id`  | Get a student by ID  |
| PUT    | `/api/students/:id`  | Update a student     |
| DELETE | `/api/students/:id`  | Delete a student     |

### Example request body

    {
      "name": "Budi Santoso",
      "major": "Informatika",
      "gpa": 3.75
    }

## Getting Started

1. Clone the repository and install dependencies:

       npm install

2. Create a Supabase project and a `students` table with the columns `id` (int8, primary key), `name` (text), `major` (text), and `gpa` (numeric).

3. Create a `.env` file in the project root:

       SUPABASE_URL=your_supabase_project_url
       SUPABASE_KEY=your_supabase_anon_key

4. Start the server:

       node server.js

   The API will run at `http://localhost:3000`.

## Testing

Requests can be tested with the **REST Client** extension in VS Code using the included `students.http` file.

## Acknowledgements

Built following the Week 11 Backend as a Service (BaaS) practice material for IMT01306609 – Cloud Computing.