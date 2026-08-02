const buildingPreData = {
  personalDetails: {
    fullName: "Adharsh K O",
    phoneNumber: "7736919852",
    email: "adharshko369z@gmail.com",
    city: "Aluva",
    district: "Ernakulam",
    state: "Kerala",
    github: "https://github.com/adharshko-369z",
    linkedin: "https://www.linkedin.com/in/adharsh-k-9ab8452a5/",
    portfolio: "https://adharsh.dev"
  },

  education: {
    degreeName: "B.Com Computer Applications",
    institution: "Bharata Mata College (Autonomous)",
    educationStartDate: "2021",
    educationEndDate: "2024"
  },

  projects: [
    {
      id: crypto.randomUUID(),
      projectTitle: "Resume Builder",
      technologies: "React, JavaScript, CSS, React PDF",
      description:
        "Built an ATS-friendly resume builder that allows users to create, preview, and download professional PDF resumes.",
      projectGithub: "https://github.com/adharshko-369z/resume-builder",
      projectLiveLink: "https://resumebuilder-demo.netlify.app"
    },
    {
      id: crypto.randomUUID(),
      projectTitle: "PantherCut Video Editor",
      technologies: "React, JavaScript, HTML, CSS",
      description:
        "Designed a browser-based video editor UI with timeline, media upload, preview panel, and editing controls.",
      projectGithub: "https://github.com/adharshko-369z/panthercut",
      projectLiveLink: "https://panthercut.netlify.app"
    }
  ],

  experiences: [
    {
      id: crypto.randomUUID(),
      companyName: "Personal Projects",
      role: "Frontend Developer",
      description:
        "Developed responsive web applications while focusing on component-based architecture, state management, and clean UI design.",
      experienceStartDate: "2025",
      experienceEndDate: "2026"
    }
  ],

  skills: [
    {
      id: crypto.randomUUID(),
      category: "Frontend",
      skillsList: "HTML, CSS, JavaScript, React, Responsive Design"
    },
    {
      id: crypto.randomUUID(),
      category: "Tools",
      skillsList: "Git, GitHub, VS Code, Vite, npm"
    },
    {
      id: crypto.randomUUID(),
      category: "Learning",
      skillsList: "Node.js, Express.js, MongoDB"
    }
  ],

  summary: {
    professionalSummary:
      "Frontend Developer skilled in React, JavaScript, HTML, and CSS. Passionate about building responsive, user-friendly web applications and continuously improving through hands-on projects. Currently expanding into full-stack development with Node.js, Express, and MongoDB."
  }
};

export { buildingPreData }