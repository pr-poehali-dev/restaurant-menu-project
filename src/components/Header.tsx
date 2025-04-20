
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-amber-900">Домашний ресторан</a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-amber-900 hover:text-amber-700">Главная</a>
            <a href="#menu" className="text-amber-900 hover:text-amber-700">Меню</a>
            <a href="#" className="text-amber-900 hover:text-amber-700">О нас</a>
            <a href="#" className="text-amber-900 hover:text-amber-700">Контакты</a>
            <Button>Забронировать</Button>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-amber-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <a href="/" className="text-amber-900 hover:text-amber-700 py-2">Главная</a>
              <a href="#menu" className="text-amber-900 hover:text-amber-700 py-2" onClick={() => setIsMenuOpen(false)}>Меню</a>
              <a href="#" className="text-amber-900 hover:text-amber-700 py-2">О нас</a>
              <a href="#" className="text-amber-900 hover:text-amber-700 py-2">Контакты</a>
              <Button className="mt-2">Забронировать</Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
