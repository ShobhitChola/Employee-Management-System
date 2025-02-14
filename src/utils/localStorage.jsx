const employees = [
    {
        "id": 1,
        "firstName": "Rohit",
        "email": "s@s.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Update Employee Records",
                "description": "Ensure all employee records are up to date.",
                "date": "2024-12-06",
                "category": "HR"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Prepare Presentation",
                "description": "Prepare slides for the upcoming team meeting.",
                "date": "2024-12-03",
                "category": "Management"
            },
            {
                "active": true,
                "newTask": true,
                "completed": true,
                "failed": false,
                "title": "Buy groceries",
                "description": "ensure all grocery has been bought",
                "date": "2024-10-08",
                "category": "HR"
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Anjali",
        "email": "employee2@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Review Marketing Strategy",
                "description": "Analyze the Q4 marketing campaigns.",
                "date": "2024-12-07",
                "category": "Marketing"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Submit Expense Report",
                "description": "File all expense reports for November.",
                "date": "2024-12-01",
                "category": "Finance"
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Vikram",
        "email": "employee3@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Fix Bug #102",
                "description": "Resolve the issue with login functionality.",
                "date": "2024-11-30",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Update Documentation",
                "description": "Add comments to the latest codebase changes.",
                "date": "2024-12-08",
                "category": "Documentation"
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Priya",
        "email": "employee4@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "title": "Client Feedback Analysis",
                "description": "Summarize feedback from the last survey.",
                "date": "2024-12-10",
                "category": "Research"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": true,
                "title": "Prepare Project Plan",
                "description": "Outline the timeline for Project X.",
                "date": "2024-11-25",
                "category": "Planning"
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Meera",
        "email": "employee5@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": false,
                "newTask": true,
                "completed": true,
                "failed": false,
                "title": "Organize Team Event",
                "description": "Plan the team-building activity for December.",
                "date": "2024-12-15",
                "category": "Events"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "title": "Prepare Financial Summary",
                "description": "Summarize financial data for Q4.",
                "date": "2024-12-05",
                "category": "Finance"
            }
        ]
    }
];

const admin = [
    {
        "id": 1,
        "firstName": "Arjun",
        "email": "admin@example.com",
        "password": "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))    

    return {employees, admin}
}
