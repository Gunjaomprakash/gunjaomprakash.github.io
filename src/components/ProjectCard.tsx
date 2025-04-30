
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
};

const ProjectCard = ({
  id,
  title,
  description,
  imageUrl,
  tags,
  demoUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-md">
      <div className="aspect-video overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardHeader>
        <CardTitle>
          <Link to={`/projects/${id}`} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex gap-2 mt-auto">
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary hover:underline"
          >
            Live Demo
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
