
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const carImages = [
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

export function CarouselSection() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-10 bg-[#1A1F2C]">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <img 
            src="/lovable-uploads/2609704c-4ba5-4fca-a35f-cd621bb37f93.png" 
            alt="Quessada Estética Automotiva" 
            className="h-10 mx-auto"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="aspect-video w-full mb-16 rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/AV9e-aQuFyo"
              title="Video Institucional"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="text-center max-w-3xl mx-auto mb-8">
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-6 text-lg rounded-full font-inter font-medium"
            >
              Agendar o Serviço
            </Button>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-light font-montserrat leading-tight text-white mb-6">
              Experimente o cuidado que seu{" "}
              <span className="text-red-500 font-normal">Carro</span> nunca teve
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Descubra o poder da estética automotiva profissional. 
              Agendamento express com atendimento VIP garantido.
            </p>
          </div>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {carImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-xl overflow-hidden aspect-video"
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
