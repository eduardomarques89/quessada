import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const luxuryCarImages = [
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

        <div className="relative max-w-6xl mx-auto px-8">
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
                slidesPerView: 2,
              },
            }}
            className="mySwiper !pb-12"
          >
            {luxuryCarImages.map((image, index) => (
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
