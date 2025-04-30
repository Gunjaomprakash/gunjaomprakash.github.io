
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: "1",
      title: "E-commerce Website",
      description: "A modern online store built with React and Node.js",
      imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      tags: ["React", "Node.js", "MongoDB"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: "2",
      title: "Portfolio Dashboard",
      description: "Interactive dashboard to track investments",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["TypeScript", "Next.js", "Tailwind CSS"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: "3",
      title: "Task Management App",
      description: "A productivity app for managing tasks and projects",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["React", "Firebase", "Styled Components"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: "4",
      title: "Mobile Fitness Tracker",
      description: "A cross-platform mobile app for tracking workouts",
      imageUrl: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a",
      tags: ["React Native", "Expo", "Firebase"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: "5",
      title: "Recipe Finder",
      description: "Search and save recipes from around the world",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["JavaScript", "API Integration", "CSS Grid"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: "6",
      title: "Weather Dashboard",
      description: "Real-time weather forecasts with data visualization",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["React", "Chart.js", "OpenWeather API"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ];

  return (
    <div className="page-container">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-xl text-muted-foreground">
          A collection of my recent work and personal projects.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
