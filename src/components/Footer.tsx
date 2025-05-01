
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/20 bg-background py-6 mt-auto">
      <div className="container max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        <div className="flex flex-col items-center md:items-start">
          <Link to="/" className="text-sm font-medium">
            John Smith
          </Link>
          <p className="text-xs text-muted-foreground mt-1">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
