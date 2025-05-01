import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import { ArrowRight, Brain, Code, Database, Network, Server } from "lucide-react";

const Index = () => {
  // Featured projects focused on AI/ML
  const featuredProjects = [{
    id: "1",
    title: "Neural Network Visualization",
    description: "Interactive visualization of neural network architectures and training process",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["TensorFlow", "D3.js", "React"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  }, {
    id: "2",
    title: "NLP Document Classifier",
    description: "Text classification system for document categorization using transformer models",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["PyTorch", "BERT", "FastAPI"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  }, {
    id: "3",
    title: "Computer Vision API",
    description: "REST API for image recognition and object detection using state-of-the-art models",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["Python", "TensorFlow", "Docker"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  }];

  // Featured blog posts related to AI/ML
  const featuredPosts = [{
    id: "1",
    title: "Fine-tuning Large Language Models for Domain-Specific Tasks",
    excerpt: "A practical guide to adapting foundation models for specialized applications.",
    date: "2025-03-15T12:00:00Z",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "NLP",
    readTime: "8 min read"
  }, {
    id: "2",
    title: "Explainable AI: Making Neural Networks Transparent",
    excerpt: "Techniques for interpreting complex model decisions and building trust in AI systems.",
    date: "2025-02-20T12:00:00Z",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "XAI",
    readTime: "6 min read"
  }];

  // Tech stack
  const techStack = [{
    name: "Framer",
    category: "Web Design",
    icon: <Code className="h-8 w-8 text-primary" />
  }, {
    name: "Notion",
    category: "Project Management",
    icon: <Server className="h-8 w-8 text-primary" />
  }, {
    name: "ChatGPT",
    category: "AI Assistant",
    icon: <Brain className="h-8 w-8 text-primary" />
  }, {
    name: "TensorFlow",
    category: "Machine Learning",
    icon: <Brain className="h-8 w-8 text-primary" />
  }, {
    name: "PyTorch",
    category: "Deep Learning",
    icon: <Network className="h-8 w-8 text-primary" />
  }, {
    name: "Spark",
    category: "Data Processing",
    icon: <Database className="h-8 w-8 text-primary" />
  }];

  return (
    <main className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="flex flex-col items-start space-y-6">
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none border-transparent bg-primary/10 text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary mr-1.5"></span>
          Available for Work
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Hey, I'm Om Prakash
          </h1>
          <p className="text-xl text-muted-foreground">
            AI/ML Engineer | Full-Stack Developer | IoT Innovator
          </p>
          <p className="text-lg text-muted-foreground max-w-xl">
            Turning raw data into real world intelligence.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">Get In Touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/about">About Me</Link>
          </Button>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="rounded-xl bg-muted/30 p-6">
        <div className="flex flex-col space-y-8">
          <h2 className="text-2xl font-medium">My Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map(tech => (
              <div key={tech.name} 
                className="flex flex-col items-center gap-2.5 rounded-lg border bg-card p-4 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {tech.icon}
                <div className="text-center">
                  <h3 className="font-medium text-sm">{tech.name}</h3>
                  <p className="text-xs text-muted-foreground">{tech.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-medium">Featured Projects</h2>
          <Button asChild variant="ghost" className="group" size="sm">
            <Link to="/projects" className="flex items-center">
              All Projects 
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      {/* Featured Blog Posts Section */}
      <section className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-medium">Latest Articles</h2>
          <Button asChild variant="ghost" className="group" size="sm">
            <Link to="/blog" className="flex items-center">
              All Articles 
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredPosts.map(post => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Index;