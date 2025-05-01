
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Code, Database, Network, Server } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const techStack = [
    {
      title: "Machine Learning",
      icon: <Brain className="h-8 w-8 mb-3 text-primary" />,
      description: "TensorFlow, PyTorch, scikit-learn, XGBoost, model deployment and MLOps"
    },
    {
      title: "Deep Learning",
      icon: <Network className="h-8 w-8 mb-3 text-primary" />,
      description: "CNN, RNN, Transformers, GANs, attention mechanisms, and transfer learning"
    },
    {
      title: "Data Engineering",
      icon: <Database className="h-8 w-8 mb-3 text-primary" />,
      description: "Data processing, feature engineering, SQL, NoSQL, Spark, and cloud infrastructure"
    },
    {
      title: "Full-Stack Development",
      icon: <Code className="h-8 w-8 mb-3 text-primary" />,
      description: "React, TypeScript, Node.js, Python, RESTful APIs, and GraphQL"
    },
    {
      title: "IoT Development",
      icon: <Server className="h-8 w-8 mb-3 text-primary" />,
      description: "Edge computing, sensor integration, data collection pipelines, real-time analytics"
    },
  ];

  return (
    <div className="container max-w-6xl py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-16">
        <h1 className="text-3xl sm:text-4xl font-medium mb-6">About Me</h1>
        <p className="text-lg mb-6">
          I'm an AI/ML Engineer and Full-Stack Developer with a passion for turning raw data into actionable intelligence.
        </p>
        <p className="text-muted-foreground mb-8">
          With over 7 years of experience in developing machine learning solutions, I specialize 
          in building intelligent systems that solve complex real-world problems. My expertise spans 
          across deep learning, natural language processing, computer vision, and IoT innovation.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild>
            <Link to="/contact">Get In Touch</Link>
          </Button>
          <Button variant="outline" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </Button>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-medium mb-8">My Journey</h2>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium">Education</h3>
                <p className="text-muted-foreground mt-2">
                  M.S. in Computer Science with a focus on Machine Learning from Stanford University.
                  B.S. in Computer Engineering from MIT.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Work Experience</h3>
                <p className="text-muted-foreground mt-2">
                  Previously worked as a Senior ML Engineer at Tech Innovators Inc. and as an AI Research 
                  Scientist at Data Dynamics Lab. Currently working as an independent AI consultant, helping 
                  organizations implement cutting-edge machine learning solutions.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Research Interests</h3>
                <p className="text-muted-foreground mt-2">
                  My research interests include explainable AI, reinforcement learning, and the ethical 
                  implications of AI systems. I have published papers in top-tier conferences and journals 
                  in these areas.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-medium">Tech Stack</h2>
          <Button asChild variant="ghost" className="group" size="sm">
            <Link to="/projects" className="flex items-center">
              See My Projects 
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((tech) => (
            <Card key={tech.title} className="overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center text-center">
                {tech.icon}
                <h3 className="text-lg font-medium mb-2">{tech.title}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
