"use client";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Badge from "./Badge";
import Separator from "./Separator";

const data = [
  {
    imgSrc: "/assets/about/photo-1.png",
    title: "Our Story",
    description:
      "Founded in 1949, Vino Bella began with a passion for fine wines and a desire to share that love with the world. Over the years, we've grown into a trusted name, known for our carefully curated selection of exceptional wines. Join us in experiencing the artistry of winemaking, one glass at a time.",
  },
  {
    imgSrc: "/assets/about/photo-2.png",
    title: "Our Commitment",
    description:
      "At Vino Bella, we are dedicated to offering the finest wines while maintaining sustainable practices. We source from vineyards that prioritize quality, respect for nature, and ethical farming. Each bottle is a testament to our promise of excellence and environmental stewardship.",
  },
  {
    imgSrc: "/assets/about/photo-3.png",
    title: "Our Team",
    description:
      "Our team of wine experts is at the heart of Vino Bella's success. From skilled sommeliers to passionate connoisseurs, we work together to provide a unique wine experience. Get to know the people who curate our offerings and ensure every visit to Vino Bella is unforgettable.",
  },
];

const About = () => {
  const scrollableSectionRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animation = gsap.fromTo(
      scrollableSectionRef.current,
      { translateX: 0 },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: scrollTriggerRef.current,
          start: "top top",
          end: "1800vw top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden bg-primary">
      <div ref={scrollTriggerRef}>
        <div
          ref={scrollableSectionRef}
          className="h-screen w-[300vw] flex relative"
        >
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="w-screen h-screen flex flex-col justify-center items-center relative"
              >
                <div className="container mx-auto">
                  <div className="flex gap-[30px] relative">
                    {/* text */}
                    <div className="flex-1 flex flex-col justify-center items-center">
                      <Badge containerStyles="w-[180px] h-[180px]" />

                      <div className="max-w-[560px] text-center">
                        {/* title */}
                        <div>
                          <h2 className="h2 text-white mb-4">
                            <span className="mr-4">
                              {item.title.split(" ")[0]}
                            </span>
                            <span className="text-accent">
                              {item.title.split(" ")[1]}
                            </span>
                          </h2>

                          {/* separator */}
                          <div className="mb-8">
                            <Separator />
                          </div>

                          {/* description */}
                          <p className="leading-relaxed mb-16 px-8 xl:px-0">
                            {item.description}
                          </p>

                          {/* btn */}
                          <button className="btn">See more</button>
                        </div>
                      </div>
                    </div>

                    {/* image */}
                    <div className="hidden xl:flex flex-1 w-full h-[70vh] relative">
                      <Image
                        src={item.imgSrc}
                        fill
                        className="object-cover"
                        quality={100}
                        priority
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
