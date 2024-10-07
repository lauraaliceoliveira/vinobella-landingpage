import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import { IoMdQuote } from "react-icons/io";

const testimonials = [
  {
    message:
      "The wine selection here is unmatched! I always find something new to enjoy, and the staff is incredibly knowledgeable.",
    name: "Jessica Rivera",
    profession: "Event Planner",
  },

  {
    message:
      "My favorite spot to unwind with a glass of rosé. The atmosphere is elegant yet relaxed, and the service is top-notch.",
    name: "David Mitchell",
    profession: "Architect",
  },

  {
    message:
      "The sparkling wines here are amazing! Whether I'm celebrating or just enjoying a casual night, Vino Bella never disappoints.",
    name: "Olivia Chen",
    profession: "Business Consultant",
  },
];

const Testimonials = () => {
  return (
    <section className="h-[60vh] xl:h-[70vh]">
      <div className="container mx-auto h-full flex items-center">
        <Swiper navigation={true} modules={[Navigation]} className="h-[400px]">
          {testimonials.map((person, index) => {
            return (
              <SwiperSlide key={index} className="w-full h-full">
                <div className="flex justify-center h-full xl:pt-14">
                  <div className="max-w-[60%] text-primary">
                    <IoMdQuote className="text-6xl text-primary mb-12 mx-auto" />
                    <p className="text-2xl font-secondary text-center mb-8">
                      {person.message}
                    </p>
                    <div className="text-center">
                      <p className="text-xl font-bold mb-1">{person.name}</p>
                      <p className="text-secondary">{person.profession}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
