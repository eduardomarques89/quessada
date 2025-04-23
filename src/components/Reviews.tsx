import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Carlos Silva",
    rating: 5,
    comment: "Excelente trabalho na higienização do meu carro. O pessoal da Quessada é muito profissional e atencioso. Recomendo!",
    date: "Março 2024"
  },
  {
    name: "Ana Paula",
    rating: 5,
    comment: "Melhor serviço de estética automotiva da região! Meu carro ficou como novo após o polimento cristalizado.",
    date: "Fevereiro 2024"
  },
  {
    name: "Ricardo Mendes",
    rating: 5,
    comment: "Ótimo atendimento e resultado impecável na proteção cerâmica. Vale cada centavo investido!",
    date: "Janeiro 2024"
  }
];

export function Reviews() {
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
          <p className="text-lg text-gray-400">
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
              <Card className="bg-[#1A1F2C] border-none hover:bg-[#232832] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-gray-300 mb-4">{review.comment}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-white">{review.name}</span>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
