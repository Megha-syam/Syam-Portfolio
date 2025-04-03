
import React from "react";
import { ExternalLink, Github, Database, Code2, Layers, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Handloom Fashion E-commerce Platform",
    description: "A global platform to showcase and sell 100+ handloom fashion products with role-based modules for Admin, Artisan, and Buyer, improving user experience by 40%.",
    techStack: ["Spring Boot", "MySQL", "Java", "HTML", "CSS", "JavaScript"],
    icon: <Layers className="h-8 w-8 text-white" />,
    iconBg: "bg-blue-500",
    challenges: "Implemented secure payment processing and built a scalable product catalog system.",
    github: "https://github.com/Megha-syam/HandloomMarketplace"
  },
  {
    id: 2,
    title: "Hospital Management System",
    description: "Designed a system for efficient healthcare data management, reducing patient data retrieval time by 25% using indexing strategies and improved system performance by 30% through optimized API calls.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    icon: <Database className="h-8 w-8 text-white" />,
    iconBg: "bg-green-500",
    challenges: "Implemented HIPAA-compliant user access controls and optimized database queries for handling large volumes of patient records.",
    github: "https://github.com/Megha-syam/Health-Connect"
  },
  {
    id: 3,
    title: "Task Management System",
    description: "Built a system to streamline project workflows, tracking 100+ tasks across teams with real-time updates, reducing task completion delays by 35% and increasing team productivity by 20%.",
    techStack: ["Python", "Django", "PostgreSQL", "JavaScript", "CSS"],
    icon: <Zap className="h-8 w-8 text-white" />,
    iconBg: "bg-yellow-500",
    challenges: "Implemented real-time notifications and created an intuitive drag-and-drop interface.",
    github: "https://github.com/Megha-syam/Task-Management-System"
  },
  {
    id: 4,
    title: "Movie Recommendation System",
    description: "Developed a content-based movie recommendation system improving recommendation accuracy by 30% using TF-IDF Vectorization and Cosine Similarity with an interactive UI built with Streamlit.",
    techStack: ["Python", "Streamlit", "Pandas", "NumPy", "Scikit-learn"],
    icon: <Code2 className="h-8 w-8 text-white" />,
    iconBg: "bg-purple-500",
    challenges: "Optimized the recommendation algorithm for large datasets and implemented caching for better performance.",
    github: "https://github.com/Megha-syam/movies-recommendation-system"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container bg-slate-50">
      <h2 className="section-heading text-center mx-auto">My Projects</h2>
      <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
        Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {projects.map((project) => (
          <div key={project.id} className="project-card group flex flex-col h-full">
            <div className="p-6 flex flex-col flex-grow">
              <div className={`${project.iconBg} p-3 rounded-lg shadow-md w-12 h-12 flex items-center justify-center mb-4`}>
                {project.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Challenges & Learnings:</h4>
                <p className="text-sm text-muted-foreground">{project.challenges}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="tech-badge">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t">
                <Button size="sm" variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Source Code
                  </a>
                </Button>
                <Button size="sm" variant="ghost" className="px-2">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
