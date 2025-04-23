
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80')] bg-cover bg-center opacity-10" />
      
      <div className="container mx-auto px-4 relative z-20 h-screen">
        <div className="flex flex-col items-center">
          {/* Centered Logo at the top */}
          <div className="mb-12 mt-8">
            <img 
              src="/lovable-uploads/2609704c-4ba5-4fca-a35f-cd621bb37f93.png" 
              alt="Quessada Estética Automotiva" 
              className="h-24 mx-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-center md:text-left"
            >
              <h1 className="text-4xl md:text-5xl font-light font-montserrat leading-tight">
                Transforme seu{" "}
                <span className="text-red-500 font-normal">Veículo</span> em uma Obra-Prima
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl font-inter font-light mx-auto md:mx-0">
                Descubra o poder da estética automotiva profissional. 
                Agendamento express com atendimento VIP garantido.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex justify-center md:justify-start"
              >
                <Button 
                  onClick={scrollToForm}
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-6 text-lg rounded-full font-inter font-medium"
                >
                  Agendar Avaliação Gratuita
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="hidden md:block"
            >
              <img
                src="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80"
                alt="Carro Premium"
                className="rounded-2xl shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
