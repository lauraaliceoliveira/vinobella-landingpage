import Image from "next/image";

const Explore = () => {
  return (
    <section className="py-12 xl:py-0 xl:h-[90vh] xl:w-screen">
      <div className="container mx-auto xl:w-full xl:h-full flex xl:justify-center xl:items-center">
        <div className=" w-full flex flex-col lg:flex-row gap-12 xl:gap-20">
          <div className="flex-1 flex flex-col justify-around items-end text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
            {/* Item 1 */}
            <div className="relative flex items-start">
              <div className="xl:max-w-[420px] xl:text-right xl:flex xl:flex-col xl:items-end">
                <div className="mb-6 flex justify-center items-center">
                  <Image
                    src="/assets/explore/icons/wine-1.svg"
                    width={56}
                    height={56}
                    alt=""
                  />
                </div>
                <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
                  Sparkling Wines
                </h3>
                <p className="max-w-[400px]">
                  Celebrate life's special moments with our effervescent
                  sparkling wines. Whether it's a toast or a casual
                  get-together, these bubbles always shine.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="relative flex items-start">
              <div className="xl:max-w-[420px] xl:text-right xl:flex xl:flex-col xl:items-end">
                <div className="mb-6 flex justify-center items-center">
                  <Image
                    src="/assets/explore/icons/wine-2.svg"
                    width={56}
                    height={56}
                    alt=""
                  />
                </div>
                <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
                  Crisp White Wines
                </h3>
                <p className="max-w-[400px]">
                  Refresh your palate with our selection of crisp and zesty
                  white wines. Ideal for a light meal or a sunny afternoon
                  gathering.
                </p>
              </div>
            </div>
          </div>

          {/* image */}
          <div className="hidden xl:flex justify-center">
            <div className="relative w-[322px] h-[580px]">
              <Image
                src="/assets/explore/wine-bottle.png"
                fill
                alt=""
                className="object-contain"
                quality={100}
                priority
                data-scroll
                data-scroll-speed="0.1"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-around text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
            {/* Item 3 */}
            <div className="relative flex items-start">
              <div className="xl:max-w-[420px] xl:text-left xl:flex xl:flex-col xl:items-start">
                <div className="mb-6 flex justify-center items-center">
                  <Image
                    src="/assets/explore/icons/wine-3.svg"
                    width={56}
                    height={56}
                    alt=""
                  />
                </div>
                <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
                  Bold Red Wines
                </h3>
                <p className="max-w-[400px]">
                  Savor the rich, intense notes of our bold red wines. Perfect
                  for a cozy evening or pairing with your favorite dishes.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="relative flex items-start">
              <div className="xl:max-w-[420px] xl:text-left xl:flex xl:flex-col xl:items-start">
                <div className="mb-6 flex justify-center items-center">
                  <Image
                    src="/assets/explore/icons/wine-4.svg"
                    width={56}
                    height={56}
                    alt=""
                  />
                </div>
                <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
                  Rosé Selections
                </h3>
                <p className="max-w-[400px]">
                  Indulge in the delicate and fruity flavors of our premium rosé
                  collection. A versatile choice for both casual sipping and
                  festive occasions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
