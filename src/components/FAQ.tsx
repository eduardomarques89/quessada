
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Quanto tempo dura uma higienização completa?",
    answer: "O tempo de serviço varia de acordo com o estado do veículo, mas geralmente uma higienização completa leva entre 6 a 8 horas para garantir um resultado impecável."
  },
  {
    question: "Com que frequência devo realizar a proteção da pintura?",
    answer: "Recomendamos realizar a proteção da pintura a cada 6 meses para manter o brilho e a proteção do veículo. Em casos de veículos muito expostos ao sol ou intempéries, pode ser necessário um intervalo menor."
  },
  {
    question: "Qual a diferença entre cristalização e vitrificação?",
    answer: "A cristalização é um processo mais simples que fecha os poros da pintura e proporciona brilho temporário. Já a vitrificação é um tratamento mais duradouro que cria uma camada protetora sobre a pintura, oferecendo proteção contra raios UV e maior durabilidade."
  },
  {
    question: "O polimento remove todos os riscos da pintura?",
    answer: "O polimento pode remover cerca de 80% a 90% dos riscos superficiais. Riscos muito profundos podem necessitar de outros procedimentos ou pintura. Realizamos uma avaliação detalhada para identificar o melhor tratamento para cada caso."
  },
  {
    question: "Quanto tempo devo esperar para lavar o carro após uma vitrificação?",
    answer: "Recomendamos aguardar 7 dias após a vitrificação para a primeira lavagem, permitindo a cura completa do produto. Após este período, o veículo pode ser lavado normalmente."
  },
  {
    question: "Vocês oferecem garantia dos serviços?",
    answer: "Sim, oferecemos garantia em todos os nossos serviços. O período de garantia varia de acordo com o procedimento realizado, podendo ser de 6 meses a 2 anos, dependendo do pacote escolhido."
  }
];

export function FAQ() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light font-montserrat text-center mb-12">
          Dúvidas <span className="text-red-500 font-normal">Frequentes</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-800 rounded-lg px-4"
              >
                <AccordionTrigger className="text-left font-inter font-medium py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 font-light pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
