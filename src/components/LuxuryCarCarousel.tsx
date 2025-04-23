import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const luxuryCarImages = [
  {
    url: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8",
    alt: "Carro Luxuoso 1"
  },
  {
    url: "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab",
    alt: "Carro Luxuoso 2"
  },
  {
    url: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
    alt: "Carro Luxuoso 3"
  },
  {
    url: "https://images.unsplash.com/photo-1583121274602-3e2820c69888",
    alt: "Carro Luxuoso 4"
  }
];

export function LuxuryCarCarousel() {
  const openWhatsApp = () => {
    window.open("https://api.whatsapp.com/send/?phone=551933665713&text=Oi+tudo+bem%2C+quero+agendar+&type=phone_number&app_absent=0", "_blank");
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-4">
            Galeria de <span className="text-[#CECECO] font-normal">Transformações</span>
          </h2>
          <p className="text-gray-300 font-montserrat">
            Confira alguns dos nossos trabalhos mais impressionantes
          </p>
        </div>

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto relative"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {luxuryCarImages.map((image, index) => (
              <CarouselItem 
                key={index} 
                className="pl-2 md:pl-4 basis-full md:basis-2/3 lg:basis-1/2 transition-all duration-300 hover:z-10"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-black/20"
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 h-12 w-12" />
          <CarouselNext className="hidden md:flex -right-12 h-12 w-12" />
        </Carousel>

        <div className="text-center mt-12">
          <Button 
            onClick={openWhatsApp}
            size="lg"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-6 text-lg rounded-full font-montserrat font-medium"
          >
            Transforme Seu Veículo
          </Button>
        </div>
      </div>
    </section>
  );
}
