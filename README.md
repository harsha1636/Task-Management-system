# Task-Management-system
CRUD operations related to task management system in Nodejs using express

# Task Management API
This is a Node.js-based Task Management API built with Express.js. The API allows you to perform CRUD operations on tasks, including retrieving, creating, updating, and deleting tasks. It also includes basic authentication for secure endpoints.

# Features
# CRUD Operations:
-Retrieve all tasks.< br / >
-Retrieve a specific task by ID.
-Create a new task.
-Update an existing task.
-Delete a task.

# Authentication: 
Basic authentication required for some endpoints.

# Validation:
-Input validation for task properties.
-Ensures only valid statuses and formats are accepted.

# Additional Operations:
Mark a task as complete.

# Endpoints
# Authentication
Basic authentication is implemented using the Authorization header in the format:
Authorization: Basic <Base64-encoded-username:password>

# Default credentials:
Username: Admin
Password: password123

# Routes
# GET /tasks
Description: Retrieve all tasks.
Response: Array of all tasks.
# GET /tasks/:id
Description: Retrieve a specific task by its ID.
Parameters: id (integer, required).
Response: The task with the given ID.
# POST /tasks/create
Description: Create a new task.
# Body
{
  "title": "string",
  "description": "string",
  "due_date": "YYYY-MM-DD",
  "status": "pending | in_progress | completed"
}
Response: The created task.
# PUT /tasks/:id
Description: Update an existing task.
Parameters: id (integer, required).
# Body
{
  "title": "string",
  "description": "string",
  "due_date": "YYYY-MM-DD",
  "status": "pending | in_progress | completed"
}
# DELETE /tasks/:id
Description: Delete a task.
Parameters: id (integer, required).
Response: No content (204).
# PATCH /tasks/:id/complete
Description: Mark a task as complete.
Parameters: id (integer, required).
Response: The updated task with status set to be completed.

# Middlewear
body-parser - Used to parse incoming request bodies as JSON.
authenticate - Middleware to enforce Basic Authentication.

# Sample Task Structure
A task object contains the following fields:
{
  "id": 1,
  "title": "Task title",
  "description": "Task description",
  "due_date": "2024-01-01T00:00:00.000Z",
  "status": "pending | in_progress | completed",
  "created_at": "2023-11-18T12:00:00.000Z",
  "updated_at": "2023-11-18T12:00:00.000Z"
}
