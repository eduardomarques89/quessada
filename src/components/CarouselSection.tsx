import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Car, Paintbrush, Wrench } from "lucide-react";
import { TicketPercent } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const carImages = [
  {
    url: "/lovable-uploads/ee741bf9-d9e0-493e-853f-af0f2a0df60b.png",
    alt: "Antes e Depois - Polimento"
  },
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
  const openWhatsApp = () => {
    window.open("https://api.whatsapp.com/send/?phone=551933665713&text=Oi+tudo+bem%2C+quero+agendar+&type=phone_number&app_absent=0", "_blank");
  };

  return (
    <section className="py-10 bg-black">
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
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
            Assista este video antes de agendar o serviço
          </h2>
          
          <div className="aspect-video w-full mb-16 rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/AV9e-aQuFyo"
              title="Video Institucional"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; allowfullscreen; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="text-center max-w-3xl mx-auto mb-8">
            <Button 
              onClick={openWhatsApp}
              size="lg"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-6 text-lg rounded-full font-inter font-medium"
            >
              Agendar o Serviço
            </Button>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-light font-montserrat leading-tight text-white mb-6">
              Experimente o cuidado que seu{" "}
              <span className="text-[#7689a9] font-normal">Carro</span> nunca teve
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Descubra o poder da estética automotiva profissional. 
              Agendamento express com atendimento VIP garantido.
            </p>
          </div>
        </motion.div>

        <div className="relative max-w-5xl mx-auto px-8">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#7689a9]'
            }}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper !pb-12"
          >
            {carImages.map((image, index) => (
              <SwiperSlide key={index}>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
