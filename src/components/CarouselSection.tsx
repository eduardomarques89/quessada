import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Car, Paintbrush, Wrench } from "lucide-react";
import { TicketPercent } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const carImages = [
  {
    url: "/lovable-uploads/773a4c82-9939-46b5-b244-28b5d3be5dfb.png",
    alt: "Porsche Vermelho - Antes e Depois",
  },
  {
    url: "/lovable-uploads/externa_ram.png",
    alt: "Antes e Depois - Caminhonete",
  },
  {
    url: "/lovable-uploads/externa_volvo.png",
    alt: "Antes e Depois - Porsche",
  },
  {
    url: "/lovable-uploads/externa_porsche.png",
    alt: "Externa Porsche",
  },
];

export function CarouselSection() {
  const openWhatsApp = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=551933665713&text=Oi+tudo+bem%2C+quero+agendar+&type=phone_number&app_absent=0",
      "_blank"
    );
  };

  return (
    <section className="py-10 bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <img
            src="/lovable-uploads/2609704c-4ba5-4fca-a35f-cd621bb37f93.png"
            alt="Quessada Estética Automotiva"
            className="h-10 mx-auto object-cover"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
            Assista este vídeo antes de agendar o serviço:
          </h2>

          <div className="aspect-video w-full mb-16 rounded-xl overflow-hidden">
            <video
              className="w-full h-full"
              src="/video/ConhecaQuessada.mp4"
              autoPlay
              loop
              controls
              playsInline
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
              <span className="text-[#ff9823] font-normal">Carro</span> nunca
              teve
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Descubra o poder da estética automotiva profissional. Agendamento
              express com atendimento VIP garantido.
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
              bulletClass: "swiper-pagination-bullet border border-white",
              bulletActiveClass:
                "swiper-pagination-bullet-active !bg-[#ff9823] !border-[#ff9823]",
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
