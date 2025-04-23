
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
          <div className="mb-8 mt-4">
            <img 
              src="/lovable-uploads/2609704c-4ba5-4fca-a35f-cd621bb37f93.png" 
              alt="Quessada Estética Automotiva" 
              className="h-16 mx-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-center md:text-left"
            >
              <h1 className="text-4xl md:text-5xl font-bold font-montserrat leading-tight">
                Experimente o cuidado que seu{" "}
                <span className="text-[#CECECO]">Carro</span> nunca teve
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl font-montserrat mx-auto md:mx-0">
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
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-6 text-lg rounded-full font-montserrat font-medium"
                >
                  Agendar o Serviço
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
                src="https://images.unsplash.com/photo-1619679505240-1d43c1b91804?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Serviço de Estética Automotiva"
                className="rounded-2xl shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
