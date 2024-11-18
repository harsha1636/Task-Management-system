# Task-Management-system
CRUD operations related to task management system in Nodejs using express

# Task Management API
This is a Node.js-based Task Management API built with Express.js. The API allows you to perform CRUD operations on tasks, including retrieving, creating, updating, and deleting tasks. It also includes basic authentication for secure endpoints.

# Features
# CRUD Operations:
-Retrieve all tasks.<br/>-Retrieve a specific task by ID.<br/>-Create a new task.<br/>-Update an existing task.<br/>-Delete a task.

# Authentication: 
Basic authentication required for some endpoints.

# Validation:
-Input validation for task properties.<br/>-Ensures only valid statuses and formats are accepted.

# Additional Operations:
Mark a task as complete.

# Endpoints
# Authentication
Basic authentication is implemented using the Authorization header in the format:<br/>Authorization: Basic <Base64-encoded-username:password>

# Default credentials:
Username: Admin<br/>Password: password123

# Routes
# GET /tasks
Description: Retrieve all tasks.<br/>Response: Array of all tasks.
# GET /tasks/:id
Description: Retrieve a specific task by its ID.<br/>Parameters: id (integer, required).<br/>Response: The task with the given ID.
# POST /tasks/create
Description: Create a new task.
# Body
{<br/>"title": "string",<br/>"description": "string",<br/>"due_date": "YYYY-MM-DD",<br/>"status": "pending | in_progress | completed"<br/>}<br/>Response: The created task.
# PUT /tasks/:id
Description: Update an existing task.<br/>Parameters: id (integer, required).
# Body
{<br/>"title": "string",<br/>"description": "string",<br/>"due_date": "YYYY-MM-DD",<br/>"status": "pending | in_progress | completed"<br/>}
# DELETE /tasks/:id
Description: Delete a task.<br/>Parameters: id (integer, required).<br/>Response: No content (204).
# PATCH /tasks/:id/complete
Description: Mark a task as complete.<br/>Parameters: id (integer, required).<br/>Response: The updated task with status set to be completed.

# Middlewear
body-parser - Used to parse incoming request bodies as JSON.<br/>authenticate - Middleware to enforce Basic Authentication.

# Sample Task Structure
A task object contains the following fields:<br/>{<br/>"id": 1,<br/>"title": "Task title",<br/>"description": "Task description",<br/>"due_date": "2024-01-01T00:00:00.000Z",<br/>"status": "pending | in_progress | completed",<br/>"created_at": "2023-11-18T12:00:00.000Z",<br/>"updated_at": "2023-11-18T12:00:00.000Z"<br/>}
