import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoFasul from "@/assets/logo-fasul-lp-2.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1e2842] border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logoFasul} alt="Fasul Educação" className="h-10 md:h-12" />
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#cursos" className="text-sm font-medium text-white hover:scale-110 transition-all duration-300">
            Cursos
          </a>
          <a href="#sobre" className="text-sm font-medium text-white hover:scale-110 transition-all duration-300">
            Como Funciona
          </a>
          <a href="#depoimentos" className="text-sm font-medium text-white hover:scale-110 transition-all duration-300">
            Alunos
          </a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="default" className="bg-accent text-accent-foreground hover:bg-[#ffc700] font-semibold rounded-full text-xs md:text-sm px-3 md:px-4">
            Comece Agora
          </Button>
          
          {/* Mobile hamburger menu */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      
      {/* Mobile menu sidebar */}
      <div 
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-[#1e2842] z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <img src={logoFasul} alt="Fasul Educação" className="h-8" />
          <button
            className="p-2 text-white"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Fechar menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="px-4 py-6 flex flex-col gap-2">
          <a 
            href="#cursos" 
            className="text-base font-medium text-white py-3 border-b border-white/10"
            onClick={() => setIsMenuOpen(false)}
          >
            Cursos
          </a>
          <a 
            href="#sobre" 
            className="text-base font-medium text-white py-3 border-b border-white/10"
            onClick={() => setIsMenuOpen(false)}
          >
            Como Funciona
          </a>
          <a 
            href="#depoimentos" 
            className="text-base font-medium text-white py-3 border-b border-white/10"
            onClick={() => setIsMenuOpen(false)}
          >
            Alunos
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
