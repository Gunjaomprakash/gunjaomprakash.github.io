
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";

type BlogCardProps = {
  id: string;
  title: string;
  excerpt: string;
  date: string; // ISO string
  imageUrl?: string;
  category: string;
  readTime: string;
};

const BlogCard = ({
  id,
  title,
  excerpt,
  date,
  imageUrl,
  category,
  readTime,
}: BlogCardProps) => {
  const formattedDate = formatDistanceToNow(new Date(date), { addSuffix: true });

  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-md">
      {imageUrl && (
        <div className="aspect-video overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Badge variant="outline">{category}</Badge>
          <span>•</span>
          <span>{readTime}</span>
        </div>
        <CardTitle>
          <Link to={`/blog/${id}`} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{excerpt}</CardDescription>
      </CardContent>
      <CardFooter className="mt-auto text-sm text-muted-foreground">
        Published {formattedDate}
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
