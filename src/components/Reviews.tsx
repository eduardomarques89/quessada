
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

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
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-white" id="reviews">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {renderStars(5)}
          </div>
          <p className="text-lg text-gray-600">
            5.0 no Google • Mais de 100 avaliações
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {renderStars(review.rating)}
                </div>
                <p className="text-gray-700 mb-4">{review.comment}</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{review.name}</span>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
