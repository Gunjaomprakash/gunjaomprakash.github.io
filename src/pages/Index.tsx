import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, Mail, ExternalLink } from "lucide-react";
// Keeping the imports for potential future use
// import ProjectCard from "@/components/ProjectCard";
// import BlogCard from "@/components/BlogCard";
// import { ArrowRight, Brain, Code, Database, Network, Server } from "lucide-react";

const Index = () => {
  // Keeping the data for potential future use
  /* 
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
    icon: "public/lovable-uploads/61d853ac-53a4-49f6-9918-b490d8a88400.png"
  }, {
    name: "Notion",
    category: "Project Management",
    icon: "public/lovable-uploads/61d853ac-53a4-49f6-9918-b490d8a88400.png"
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
  }, {
    name: "React",
    category: "Frontend Development",
    icon: <Code className="h-8 w-8 text-primary" />
  }];
  */

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-3xl mx-auto bg-card border border-border/50 rounded-lg shadow-lg p-8 md:p-12 backdrop-blur-sm relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 code-pattern opacity-20 z-0"></div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Profile section */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center text-primary text-4xl font-bold border-4 border-primary">
              OG
            </div>
            <h1 className="text-4xl font-bold mb-2">Om Prakash Gunja</h1>
            <p className="text-lg text-muted-foreground">Software Developer & Engineer</p>
          </div>
          
          {/* Status message */}
          <div className="my-8 py-6 px-4 bg-secondary/50 rounded-lg">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <h2 className="text-xl font-medium">Website Under Development</h2>
            </div>
            <p className="text-muted-foreground">
              I'm currently building an awesome portfolio website. Check back soon for updates!
            </p>
          </div>
          
          {/* Social links */}
          <div className="mt-8">
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Connect With Me</h3>
            <div className="flex justify-center gap-4">
              <a 
                href="https://github.com/gunjaomprakash" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-secondary/80 text-foreground p-3 rounded-full transition-colors duration-300"
                aria-label="GitHub"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/gunjaomprakash" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-secondary/80 text-foreground p-3 rounded-full transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a 
                href="mailto:gunjaomprakash@gmail.com" 
                className="bg-secondary hover:bg-secondary/80 text-foreground p-3 rounded-full transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Footer note */}
          <div className="mt-10 pt-6 border-t border-border/50 text-sm text-muted-foreground">
            <p>© 2025 Om Prakash Gunja. All rights reserved.</p>
          </div>
        </div>
      </div>
    </main>
  );
  
  /* Original layout - commented out for future reference
  return <main className="w-full">
      {/* Hero Section - Reduced top spacing *//*}
      <section className="py-10 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none border-transparent bg-primary text-primary-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-1.5"></span>
              Available for Work
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Hey, I'm John Smith
          </h1>
          <p className="text-xl mb-6">
            AI/ML Engineer | Full-Stack Developer | IoT Innovator
          </p>
          <p className="text-lg text-muted-foreground mb-10">
            Turning raw data into real world intelligence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tech Stack Section - Centered and aligned *//*}
      <section className="py-10 px-4 md:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-medium mb-10">My Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map(tech => <div key={tech.name} className="flex flex-col items-center border border-border/40 rounded-lg p-6 bg-card">
                {typeof tech.icon === 'string' ? <img src={tech.icon} alt={tech.name} className="h-8 w-8 mb-3" /> : tech.icon}
                <h3 className="font-medium text-sm mb-1">{tech.name}</h3>
                <p className="text-xs text-muted-foreground text-center">{tech.category}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Featured Projects Section - Centered and aligned *//*}
      <section className="py-10 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-medium">Projects</h2>
            <Button asChild variant="ghost" className="group" size="sm">
              <Link to="/projects" className="flex items-center">
                All Projects 
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map(project => <ProjectCard key={project.id} {...project} />)}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts Section - Centered and aligned *//*}
      <section className="py-10 px-4 md:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-medium">Latest Articles</h2>
            <Button asChild variant="ghost" className="group" size="sm">
              <Link to="/blog" className="flex items-center">
                All Articles 
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.map(post => <BlogCard key={post.id} {...post} />)}
          </div>
        </div>
      </section>
    </main>;
  */
};

export default Index;