
import { Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-8 text-center">
      <div className="container mx-auto px-4">
        <div className="mb-4">
          <p className="text-lg font-montserrat">
            Onde estamos: R. Eng. Amado dos Santos, 456 - Vila Clayton, São João da Boa Vista
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <a 
            href="https://instagram.com/quessadaesteticaauto" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#E1306C] transition-colors"
          >
            <Instagram size={32} />
          </a>
          <a 
            href="https://facebook.com/quessadaesteticaauto" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#4267B2] transition-colors"
          >
            <Facebook size={32} />
          </a>
        </div>
      </div>
    </footer>
  );
}
