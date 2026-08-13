const exampleResumeData = {
  personalDetails: {
    fullName: "John Doe",
    phoneNumber: "1234567890",
    email: "john.doe@example.com",
    city: "Kochi",
    district: "Ernakulam",
    state: "Kerala",
    github: "https://github.com/example-user",
    linkedin: "https://linkedin.com/in/example-user",
    portfolio: "https://portfolio.example"
  },

  education: {
    degreeName: "B.Com Computer Applications",
    institution: "ABC College",
    educationStartDate: "2022",
    educationEndDate: "2025"
  },

  summary: {
    professionalSummary:
      "Frontend developer focused on building responsive and user-friendly web applications with React and JavaScript."
  },

  skills: [
    {
      id: crypto.randomUUID(),
      category: "Frontend",
      skillsList: "HTML, CSS, JavaScript, React"
    },
    {
      id: crypto.randomUUID(),
      category: "Styling",
      skillsList: "Tailwind CSS, Responsive Design"
    },
    {
      id: crypto.randomUUID(),
      category: "Tools",
      skillsList: "Git, GitHub, VS Code, Vite"
    },
    {
      id: crypto.randomUUID(),
      category: "Other",
      skillsList: "REST APIs, JSON, Accessibility"
    }
  ],

  projects: [
    {
      id: crypto.randomUUID(),
      projectTitle: "Task Management App",
      technologies: "React, JavaScript, CSS",
      description:
        "A responsive task management app with task creation, filtering, and persistent local data.",
      projectGithub: "https://github.com/example-user/task-manager",
      projectLiveLink: "https://task-manager.example"
    },
    {
      id: crypto.randomUUID(),
      projectTitle: "Movie Explorer",
      technologies: "React, JavaScript, API",
      description:
        "A movie browsing application that searches and displays movie information from an external API.",
      projectGithub: "https://github.com/example-user/movie-explorer",
      projectLiveLink: "https://movie-explorer.example"
    },
    {
      id: crypto.randomUUID(),
      projectTitle: "Expense Tracker",
      technologies: "React, JavaScript, CSS",
      description:
        "A simple expense tracking application for recording transactions and viewing spending summaries.",
      projectGithub: "https://github.com/example-user/expense-tracker",
      projectLiveLink: "https://expense-tracker.example"
    }
  ],

  experiences: [
    {
      id: crypto.randomUUID(),
      companyName: "Example Technologies",
      role: "Frontend Developer Intern",
      description:
        "Built responsive interfaces with React and collaborated on reusable UI components.",
      experienceStartDate: "2025-8-12",
      experienceEndDate: "2025-12-12"
    },
    {
      id: crypto.randomUUID(),
      companyName: "Demo Web Studio",
      role: "Web Development Intern",
      description:
        "Developed responsive web pages and implemented designs using HTML, CSS, and JavaScript.",
      experienceStartDate: "2024-6-13",
      experienceEndDate: "2024-8-13"
    }
  ]
}

export { exampleResumeData }