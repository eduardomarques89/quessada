import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Paintbrush, Wrench, TicketPercent } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Polimento Cristalizado",
    description: "Recupere o brilho original da pintura do seu veículo com nosso polimento profissional.",
    icon: Paintbrush,
    color: "bg-[#CECECO]/10 text-[#CECECO]"
  },
  {
    title: "Proteção Cerâmica",
    description: "Proteja a pintura do seu carro com a mais avançada tecnologia em revestimento cerâmico.",
    icon: Car,
    color: "bg-[#CECECO]/10 text-[#CECECO]"
  },
  {
    title: "Higienização Completa",
    description: "Limpeza profunda de todo o interior do seu veículo, eliminando vírus e bactérias.",
    icon: Wrench,
    color: "bg-[#CECECO]/10 text-[#CECECO]"
  }
];

export function Services() {
  const openWhatsApp = () => {
    window.open("https://api.whatsapp.com/send/?phone=551933665713&text=Oi+tudo+bem%2C+quero+agendar+&type=phone_number&app_absent=0", "_blank");
  };

  return (
    <section className="py-20 bg-black" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat"
          >
            Método de polimento proteção PREMIUM
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto font-montserrat"
          >
            Oferecemos os melhores serviços de estética automotiva, utilizando produtos e técnicas de última geração
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-[#232832] border-none hover:bg-[#2A303B] transition-all duration-300">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-4`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white font-montserrat">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 font-montserrat">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#CECECO]/10 p-6 rounded-xl mt-16 flex flex-col items-center text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-[#CECECO] mb-6 max-w-3xl mx-auto leading-tight"
          >
            Ganhe 3 Serviços Exclusivos
          </motion.h2>
          <div className="flex items-center gap-3 mb-4 justify-center w-full">
            <TicketPercent className="w-8 h-8 text-[#CECECO]" />
            <h2 className="text-3xl font-bold text-[#CECECO]">Oferta Especial - Somente Hoje!</h2>
          </div>
          <p className="text-gray-400 mb-4 text-lg max-w-2xl mx-auto">
            Aproveite 40% de desconto em qualquer serviço. Não perca esta oportunidade única!
          </p>
          <Button 
            onClick={openWhatsApp}
            size="lg"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-6 text-lg rounded-full font-montserrat font-medium"
          >
            Garantir 40% de Desconto
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
