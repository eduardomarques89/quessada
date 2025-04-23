
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80')"
        }}
      />
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-montserrat">
            Transforme seu Carro em uma Obra de Arte
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Estética automotiva premium com os melhores profissionais e produtos do mercado.
            Agende agora e garanta um tratamento especial para seu veículo.
          </p>
          <Button 
            onClick={scrollToForm}
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg"
          >
            Agendar Avaliação Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
}
