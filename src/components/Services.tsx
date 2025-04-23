
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Paintbrush, Wrench } from "lucide-react";

const services = [
  {
    title: "Polimento Cristalizado",
    description: "Recupere o brilho original da pintura do seu veículo com nosso polimento profissional.",
    icon: Paintbrush
  },
  {
    title: "Proteção Cerâmica",
    description: "Proteja a pintura do seu carro com a mais avançada tecnologia em revestimento cerâmico.",
    icon: Car
  },
  {
    title: "Higienização Complete",
    description: "Limpeza profunda de todo o interior do seu veículo, eliminando vírus e bactérias.",
    icon: Wrench
  }
];

export function Services() {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-montserrat">
          Nossos Serviços Premium
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <service.icon className="w-12 h-12 text-blue-500 mb-4" />
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
