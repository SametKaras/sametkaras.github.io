export const personal = {
    name: "Samet Karaş",
    title: "Software Developer • AI/CV • Unity/ROS • APIs",
    tagline: "Building intelligent systems across AI, games, robotics, and web",
    taglineAlt: "Where code meets vision, motion, and intelligence",
    email: "sametkaras.tr@gmail.com",
    github: "https://github.com/SametKaras",
    linkedin: "https://linkedin.com/in/sametkaras",
    bio: `I'm a Software Developer and Computer Engineering student at Recep Tayyip Erdoğan University. I build across multiple domains—computer vision and AI research, game development in Unity, autonomous robotics with ROS, and scalable API systems. I'm driven by the challenge of creating software that sees, moves, thinks, and serves.`,
    bioShort: "Software Developer building across AI/CV, Unity, ROS, and APIs. Driven by creating software that sees, moves, thinks, and serves.",
};

export const education = {
    university: "Recep Tayyip Erdoğan University",
    degree: "B.S. in Computer Engineering",
    period: "2021 – 2026",
    gpa: "3.03 / 4.00",
};

export const experience = [
    {
        title: "Junior Graphics Programmer",
        company: "CDMVision",
        period: "Oct 2025 – Present",
        description: "Developing Unity tools and computer vision solutions for industrial applications",
        highlights: [
            "Building internal Unity tools for scene capture and ML dataset generation",
            "Developing custom shaders and rendering pipelines for visualization systems",
            "Implementing computer vision solutions using OpenCV and deep learning frameworks",
            "Creating automated pipelines for 3D scene processing and data export",
            "Collaborating on cross-platform tooling with C# and Python integration",
        ],
    },
    {
        title: "Software Developer Intern",
        company: "Odeabank",
        period: "Jul 2025 – Sep 2025",
        description: "Developed enterprise .NET 8 Web API with layered architecture",
        highlights: [
            ".NET 8 Web API with layered architecture",
            "EF Core + SQL Server database operations",
            "DTO validation, JWT authentication, role-based authorization",
            "Unit testing with xUnit & Moq",
            "Agile workflow, GitHub collaboration",
        ],
    },
];

export const skills = {
    languages: ["C#", "Python", "C++", "Java"],
    frameworks: ["ASP.NET Core", "EF Core", "PyTorch", "TensorFlow"],
    gameAndSimulation: ["Unity", "ROS"],
    tools: ["SQL Server", "Git", "GitHub", "Postman", "Visual Studio", "VS Code"],
};

export const tracks = {
    engineering: {
        title: "Systems & APIs",
        subtitle: "Scalable Software Architecture",
        description: "Designing and building production-ready APIs and software systems with clean architecture.",
        skills: ["ASP.NET Core", "Entity Framework", "SQL Server", "REST APIs", "JWT Auth"],
    },
    exploration: {
        title: "AI, Games & Robotics",
        subtitle: "Vision, Motion & Intelligence",
        description: "Pushing boundaries with computer vision, game development, and autonomous systems.",
        skills: ["PyTorch", "OpenCV", "Unity", "ROS", "YOLOv5"],
    },
};

export const navigation = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];
