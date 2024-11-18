import express from 'express';
import tasks, { addTask, getTasks } from './tasks.js';
import bodyParser from 'body-parser';

const PORT= 8080;    // setting the port value
const app=express();
  
// Middleware to parse JSON request bodies
app.use(bodyParser.json());

//Base Auth for post endPoint
const authenticate = (req, res,next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
        return res.status(401).json({ message: "Authorization header missing" });
    }

    const base64Credentials=authHeader.split(' ')[1];
    const credentials= Buffer.from(base64Credentials, 'base64').toString('ascii');
    const[username,password]=credentials.split(':');

    // Validate username and password
    const validUsername = "Admin";
    const validPassword = "password123";
  
    if (username === validUsername && password === validPassword) {
        next(); // User is authenticated
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};
app.use(authenticate);

// Retrieve all tasks
app.get("/tasks", (req, res) => {
    res.status(200).json(tasks);
    console.log(tasks);
});

// GET :Retrieve a specific task by ID
app.get("/tasks/:id", (req, res) => {
    const taskId =parseInt(req.params.id);
    if (isNaN(taskId)) {
        return res.status(400).json({ message: "Invalid task ID" });
      }
    const task = tasks.find((t) => t.id === taskId);
    console.log(task);
    if(!task){
        return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
});

// POST: Add a new task and with basic authentication
app.post("/tasks/create",authenticate,(req, res) => {
    const { title, description, due_date, status } = req.body;

        //  validation for specific properties
        if (!title) return res.status(400).json({ message: "Title is required" });
        if (!description) return res.status(400).json({ message: "Description is required" });
        if (!due_date) return res.status(400).json({ message: "Due date is required" });
        if (!status) return res.status(400).json({ message: "Status is required" });
    
        // Check if the status is valid
        const validStatuses = ["pending", "in_progress", "completed"];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ message: "Invalid status" });
        }

    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      due_date: new Date(due_date),
      status,
      created_at: new Date(),
      updated_at: new Date(),
    };
    addTask(newTask);
    console.log(getTasks());
    tasks.push(newTask);
    res.status(201).json(newTask);
  });  

// PUT /tasks/:id: Update an existing task
app.put("/tasks/:id",authenticate,(req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find((t) => t.id === taskId);
    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }
    const { title, description, due_date, status } = req.body;
    const validStatuses = ["pending", "completed", "in-progress"];
    const isValidDate = (date) => !isNaN(new Date(date).getTime());

    if (title !== undefined && typeof title !== "string") {
        return res.status(400).json({ message: "Title must be a string" });
    }
    if (description !== undefined && typeof description !== "string") {
        return res.status(400).json({ message: "Description must be a string" });
    }
    if (due_date !== undefined && !isValidDate(due_date)) {
        return res.status(400).json({ message: "Invalid due date" });
    }
    if (status !== undefined && !validStatuses.includes(status)) {
        return res.status(400).json({ message: `Status must be one of: ${validStatuses.join(", ")}` });
    }

    if(title)task.title = title;
    if (description) task.description = description;
    if (due_date) task.due_date = new Date(due_date);
    if (status) task.status = status;

  task.updated_at = new Date();
  console.log(tasks);
  res.status(200).json(task);
});

// DELETE /tasks/:id: Delete a task
app.delete("/tasks/:id", (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex((t) => t.id === taskId);
    //Returns -1 if no task matches.
    if (taskIndex === -1) {
      return res.status(404).json({ message: "Task not found" });
    }
  
    tasks.splice(taskIndex, 1);
    console.log(tasks);
    res.status(204).send();
});

// PATCH /tasks/:id/complete: Mark a task as complete
app.patch("/tasks/:id/complete", (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find((t) => t.id === taskId);
  
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.status = "completed";
    task.updated_at = new Date();
    console.log(tasks);
    res.status(200).json(task);
  });

// starting the Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

