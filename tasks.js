let tasks = [
    {
      id: 1,
      title: "Setup project structure",
      description: "Organize folders and files for the new Node.js project.",
      due_date: new Date("2024-11-20"),
      status: "in_progress",
      created_at: new Date("2024-11-15T10:00:00Z"),
      updated_at: new Date("2024-11-16T12:00:00Z"),
    },
    {
      id: 2,
      title: "Develop API endpoints",
      description: "Implement RESTful API for user management.",
      due_date: new Date("2024-11-25"),
      status: "pending",
      created_at: new Date("2024-11-15T11:00:00Z"),
      updated_at: new Date("2024-11-15T11:00:00Z"),
    },
    {
      id: 3,
      title: "Write unit tests",
      description: "Ensure 80% test coverage for API endpoints.",
      due_date: new Date("2024-11-28"),
      status: "pending",
      created_at: new Date("2024-11-15T12:00:00Z"),
      updated_at: new Date("2024-11-15T12:00:00Z"),
    },
    {
      id: 4,
      title: "Setup CI/CD pipeline",
      description: "Configure GitHub Actions for automated testing and deployment.",
      due_date: new Date("2024-11-30"),
      status: "pending",
      created_at: new Date("2024-11-15T13:00:00Z"),
      updated_at: new Date("2024-11-15T13:00:00Z"),
    },
    {
      id: 5,
      title: "Deploy application",
      description: "Deploy the application to the production server.",
      due_date: new Date("2024-12-05"),
      status: "completed",
      created_at: new Date("2024-11-15T14:00:00Z"),
      updated_at: new Date("2024-11-16T10:00:00Z"),
    },
  ];
  
export const getTasks = () => tasks;
export let addTask = (task) => tasks.push(task);
export default tasks;