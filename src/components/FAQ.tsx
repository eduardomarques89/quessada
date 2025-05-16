import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqData = [
  {
    question: "Quanto tempo dura uma higienização completa?",
    answer:
      "O tempo de serviço varia de acordo com o estado do veículo, mas geralmente uma higienização completa leva entre 6 a 8 horas para garantir um resultado impecável.",
  },
  {
    question: "Com que frequência devo realizar a proteção da pintura?",
    answer:
      "Dentre as várias opções de proteções que temos, a durabilidade varia entre 3 meses e 5 anos. Porém em alguns casos que o carro é mais exposto ao sol, recomendamos a lavagem de manutenção a cada 30 dias.",
  },
  {
    question: "Qual a diferença entre cristalização e vitrificação?",
    answer:
      "Cristalização é feita através de ceras e selantes que já garante uma proteção contra raios UV, mas tem uma durabilidade menor. Já a vitrificação é uma proteção nano cerâmico que tem durabilidade entre 3 e 5 anos. Além de ser mais duradoura, torna a pintura mais resistente a pequenos riscos e aumenta o brilho do carro em pelo menos 5 vezes.",
  },
  {
    question: "O polimento remove todos os riscos da pintura?",
    answer:
      "Isso vai depender da profundidade do risco. Antes de iniciar o polimento é feito um mapeamento de todo o veículo identificando esses defeitos e vendo através de um medidor de espessura se é possível fazer a correção.",
  },
  {
    question:
      "Quanto tempo devo esperar para lavar o carro após uma vitrificação?",
    answer:
      "O coat cerâmico que utilizamos tem a cura total do produto após 48h. Ou seja, em aproximadamente 2 dias já é possível fazer a lavagem.",
  },
  {
    question: "Vocês oferecem garantia dos serviços?",
    answer:
      "Sim, todos os serviços tem garantia. Contra qualquer problema que aconteça recorrente ao serviço feito.",
  },
];

export function FAQ() {
  const openWhatsApp = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=551933665713&text=Oi+tudo+bem%2C+quero+agendar+&type=phone_number&app_absent=0",
      "_blank"
    );
  };

  return (
    <section className="py-20 bg-black" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-12 text-white">
          Dúvidas <span className="text-[#ff9823]">Frequentes</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-800 rounded-lg px-4"
              >
                <AccordionTrigger className="text-left font-montserrat font-medium py-4 text-white">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-white font-montserrat pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center mt-12">
            <Button
              onClick={openWhatsApp}
              size="lg"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-6 text-lg rounded-full font-montserrat font-medium"
            >
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
