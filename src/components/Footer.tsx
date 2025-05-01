import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/20 bg-background py-6 mt-auto">
      <div className="container max-w-6xl flex items-center justify-center gap-2">
        <span className="text-xs text-muted-foreground">
          © {currentYear} All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
