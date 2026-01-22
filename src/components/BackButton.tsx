import { ArrowLeft, Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface BackButtonProps {
  to?: string;
  label?: string;
  showHome?: boolean;
}

const BackButton = ({ to = "/", label = "Volver al inicio", showHome = true }: BackButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to === "/") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center gap-3">
      <Link 
        to={to}
        onClick={handleClick}
        className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary/80 hover:bg-secondary text-foreground transition-all duration-200 hover:shadow-md"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span className="text-sm font-medium">{label}</span>
        {showHome && (
          <Home className="w-4 h-4 text-primary" />
        )}
      </Link>
    </div>
  );
};

export default BackButton;
