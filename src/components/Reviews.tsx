import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Jake",
    rating: 5,
    comment:
      "Cheguei com um carro completamente riscado e sai com um novo!!! Serviço diferenciado, ótimo atendimento e trabalho impecável!!! Super recomendo!!!",
    date: "Março 2023",
  },
  {
    name: "Carvalho",
    rating: 5,
    comment:
      "Merecem 10 estrelas ! Muito educados e atenciosos. Serviço top, meu carro chegou um lixo e saiu de lá um luxo ! Serviço bem feito, preço justo ! Recomendo ! Podem levar sem medo, os caras são profissionais, deixa o carro lindo ! Muito sucesso porque merecem, são bons de Serviço",
    date: "Fevereiro 2025",
  },
  {
    name: "Hugo Fernandes",
    rating: 5,
    comment:
      "Excelente trabalho, a lavagem do carro ficou perfeita, não esqueceram de nenhum detalhe. Atendimento também excelente, tudo executado e entregue como o combinado",
    date: "Janeiro 2025",
  },
];

export function Reviews() {
  const openWhatsApp = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=551933665713&text=Oi+tudo+bem%2C+quero+agendar+&type=phone_number&app_absent=0",
      "_blank"
    );
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-black" id="reviews">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 font-montserrat text-white"
          >
            O Que Nossos Clientes Dizem
          </motion.h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {renderStars(5)}
          </div>
          <p className="text-lg text-gray-400 font-montserrat">
            5.0 no Google • Mais de 100 avaliações
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-[#060c18] border-none hover:bg-[#232832] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-gray-300 mb-4 font-montserrat">
                    {review.comment}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white font-montserrat">
                      {review.name}
                    </span>
                    <span className="text-sm text-gray-500 font-montserrat">
                      {review.date}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            onClick={openWhatsApp}
            size="lg"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-6 text-lg rounded-full font-montserrat font-medium"
          >
            Agendar Seu Horário
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
