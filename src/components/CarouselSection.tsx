
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
  return (
    <section className="py-20 bg-[#1A1F2C]">
      <div className="container mx-auto px-4">
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

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-montserrat text-center">
            Nosso Trabalho
          </h2>
          
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
        </motion.div>
      </div>
    </section>
  );
}
