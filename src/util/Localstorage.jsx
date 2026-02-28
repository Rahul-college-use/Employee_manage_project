const Employees = [
  {
    id: 101,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    password: "123",
    role: "employee",

    totalTasks: 5,
    pendingTasks: 2,
    completedTasks: 1,
    inProgressTasks: 2,
    newTasks: 2,

    tasks: [
      {
        taskId: 1,
        title: "Build Landing Page",
        description: "Create responsive landing page using React and Tailwind",
        priority: "High",
        status: "in-progress",
        date: "2026-02-25",
        isNew: true
      },
      {
        taskId: 2,
        title: "Fix Navbar Bug",
        description: "Resolve mobile menu toggle issue",
        priority: "Medium",
        status: "pending",
        date: "2026-02-28",
        isNew: true
      },
      {
        taskId: 3,
        title: "Optimize Images",
        description: "Compress website images",
        priority: "Low",
        status: "completed",
        date: "2026-02-20",
        isNew: false
      },
      {
        taskId: 4,
        title: "Setup Routing",
        description: "Configure React Router",
        priority: "High",
        status: "in-progress",
        date: "2026-03-01",
        isNew: false
      },
      {
        taskId: 5,
        title: "Form Validation",
        description: "Implement validation using hooks",
        priority: "Medium",
        status: "pending",
        date: "2026-03-03",
        isNew: false
      }
    ]
  },

  {
    id: 102,
    name: "Priya Singh",
    email: "priya@company.com",
    password: "emp102",
    role: "employee",

    totalTasks: 5,
    pendingTasks: 1,
    completedTasks: 3,
    inProgressTasks: 1,
    newTasks: 1,

    tasks: [
      {
        taskId: 6,
        title: "API Integration",
        description: "Integrate login API",
        priority: "High",
        status: "completed",
        date: "2026-02-20",
        isNew: false
      },
      {
        taskId: 7,
        title: "Auth Middleware",
        description: "Implement JWT auth",
        priority: "High",
        status: "completed",
        date: "2026-02-22",
        isNew: false
      },
      {
        taskId: 8,
        title: "Profile Page",
        description: "Create profile UI",
        priority: "Medium",
        status: "in-progress",
        date: "2026-02-27",
        isNew: true
      },
      {
        taskId: 9,
        title: "Error Handling",
        description: "Add global error handler",
        priority: "Medium",
        status: "pending",
        date: "2026-03-02",
        isNew: false
      },
      {
        taskId: 10,
        title: "Code Refactor",
        description: "Refactor auth module",
        priority: "Low",
        status: "completed",
        date: "2026-02-24",
        isNew: false
      }
    ]
  },

  {
    id: 103,
    name: "Amit Verma",
    email: "amit@company.com",
    password: "emp103",
    role: "employee",

    totalTasks: 5,
    pendingTasks: 2,
    completedTasks: 1,
    inProgressTasks: 2,
    newTasks: 1,

    tasks: [
      {
        taskId: 11,
        title: "Dashboard UI",
        description: "Design dashboard layout",
        priority: "Medium",
        status: "in-progress",
        date: "2026-02-27",
        isNew: true
      },
      {
        taskId: 12,
        title: "Sidebar Component",
        description: "Reusable sidebar component",
        priority: "Low",
        status: "completed",
        date: "2026-02-23",
        isNew: false
      },
      {
        taskId: 13,
        title: "Analytics Chart",
        description: "Integrate charts",
        priority: "High",
        status: "in-progress",
        date: "2026-03-01",
        isNew: false
      },
      {
        taskId: 14,
        title: "Notification System",
        description: "Add real-time notifications",
        priority: "High",
        status: "pending",
        date: "2026-03-05",
        isNew: false
      },
      {
        taskId: 15,
        title: "Theme Toggle",
        description: "Dark/light mode feature",
        priority: "Medium",
        status: "pending",
        date: "2026-03-04",
        isNew: false
      }
    ]
  },

  {
    id: 104,
    name: "Neha Kapoor",
    email: "neha@company.com",
    password: "emp104",
    role: "employee",

    totalTasks: 5,
    pendingTasks: 2,
    completedTasks: 2,
    inProgressTasks: 1,
    newTasks: 2,

    tasks: [
      {
        taskId: 16,
        title: "Database Schema",
        description: "Design MongoDB schema",
        priority: "High",
        status: "completed",
        date: "2026-02-21",
        isNew: false
      },
      {
        taskId: 17,
        title: "Index Optimization",
        description: "Improve query performance",
        priority: "Medium",
        status: "in-progress",
        date: "2026-02-28",
        isNew: true
      },
      {
        taskId: 18,
        title: "Backup Strategy",
        description: "Automated backups",
        priority: "High",
        status: "pending",
        date: "2026-03-03",
        isNew: true
      },
      {
        taskId: 19,
        title: "Data Migration",
        description: "Migrate old data",
        priority: "Medium",
        status: "completed",
        date: "2026-02-26",
        isNew: false
      },
      {
        taskId: 20,
        title: "Security Rules",
        description: "DB access control",
        priority: "High",
        status: "pending",
        date: "2026-03-06",
        isNew: false
      }
    ]
  },

  {
    id: 105,
    name: "Arjun Mehta",
    email: "arjun@company.com",
    password: "emp105",
    role: "employee",

    totalTasks: 5,
    pendingTasks: 3,
    completedTasks: 1,
    inProgressTasks: 1,
    newTasks: 1,

    tasks: [
      {
        taskId: 21,
        title: "Testing",
        description: "Write unit tests",
        priority: "Low",
        status: "pending",
        date: "2026-03-03",
        isNew: true
      },
      {
        taskId: 22,
        title: "Bug Fix #101",
        description: "Resolve login redirect issue",
        priority: "High",
        status: "completed",
        date: "2026-02-24",
        isNew: false
      },
      {
        taskId: 23,
        title: "E2E Testing",
        description: "Setup Cypress",
        priority: "Medium",
        status: "in-progress",
        date: "2026-03-02",
        isNew: false
      },
      {
        taskId: 24,
        title: "Performance Testing",
        description: "Analyze bottlenecks",
        priority: "Medium",
        status: "pending",
        date: "2026-03-05",
        isNew: false
      },
      {
        taskId: 25,
        title: "Security Testing",
        description: "Vulnerability testing",
        priority: "High",
        status: "pending",
        date: "2026-03-07",
        isNew: false
      }
    ]
  }
];
const Admin = [
    {
        "id": 1,
        "name": "Admin",
        "email": "admin@company.com",
        "password": "123",
        "role": "admin"
    }
]
export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(Employees))
    localStorage.setItem('Admin',JSON.stringify(Admin))
}
export const getLocalStorage = ()=>{
    const Employees =JSON.parse(localStorage.getItem('employees'))
    const Admin =JSON.parse(localStorage.getItem('Admin'))
    // console.log(Employees,Admin)
    return {Employees,Admin};
    
}
