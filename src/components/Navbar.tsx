import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary/90 backdrop-blur-sm text-primary-foreground py-4 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold flex items-center">
          <svg 
            className="w-6 h-6 mr-2" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
            <path 
              d="M20 4L8 16" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
          </svg>
          Джонатан Ливингстон
        </Link>
        <div className="flex gap-4">
          <Button asChild variant="ghost">
            <Link to="/">Главная</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/about">О Книге</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/characters">Персонажи</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/quotes">Цитаты</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;