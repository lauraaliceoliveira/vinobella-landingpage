import MenuItem from "./MenuItem";
import Separator from "./Separator";

const menuItems = [
  {
    imgSrc: "/assets/menu/france.svg",
    name: "Château Margaux",
    description:
      "A refined Bordeaux, renowned for its complexity and elegance, with notes of red fruits and smooth tannins.",
    price: 150.0,
  },
  {
    imgSrc: "/assets/menu/italy.svg",
    name: "Tignanello",
    description:
      "An iconic Tuscan wine, with aromas of dark fruits and spices, balanced with a touch of vanilla.",
    price: 120.0,
  },
  {
    imgSrc: "/assets/menu/chile.svg",
    name: "Carmenère Reserva",
    description:
      "Intense and fruity, with notes of black pepper and dark chocolate, characteristic of Chilean terroir.",
    price: 35.0,
  },
  {
    imgSrc: "/assets/menu/australia.svg",
    name: "Penfolds Grange",
    description:
      "This Syrah is one of Australia's greatest expressions, offering flavors of plum, licorice, and a hint of oak.",
    price: 250.0,
  },
  {
    imgSrc: "/assets/menu/argentina.svg",
    name: "Malbec Catena Zapata",
    description:
      "A rich Argentinian classic, full of ripe fruits like plum and cherry, with firm tannins and a smooth finish.",
    price: 75.0,
  },
  {
    imgSrc: "/assets/menu/italy.svg",
    name: "Barolo Riserva",
    description:
      "Complex and structured, with notes of licorice, dried roses, and cherry. A true gem from Piedmont.",
    price: 180.0,
  },
  {
    imgSrc: "/assets/menu/portugal.svg",
    name: "Porto Vintage",
    description:
      "This fortified wine is rich, sweet, and powerful, with notes of dried plums, figs, and spices.",
    price: 85.0,
  },
  {
    imgSrc: "/assets/menu/new-zealand.svg",
    name: "Sauvignon Blanc Cloudy Bay",
    description:
      "Fresh and vibrant, with notes of passionfruit, lime, and fresh herbs, typical of the Marlborough region.",
    price: 50.0,
  },
  {
    imgSrc: "/assets/menu/united-states.svg",
    name: "Cabernet Sauvignon Napa Valley",
    description:
      "A bold wine with layers of cassis, tobacco, and a touch of toasted oak, hailing from the iconic Napa Valley.",
    price: 110.0,
  },
  {
    imgSrc: "/assets/menu/germany.svg",
    name: "Riesling Dr. Loosen",
    description:
      "Light and fresh, with a balanced sweetness and flavors of peach and honey, a classic German Riesling.",
    price: 45.0,
  },
];

const Menu = () => {
  return (
    <section className="pt-12 pb-16 xl:pt-16 xl:pb-36">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 mb-12 xl:mb-24">
          <h2 className="h2 text-center">Our Wine List</h2>
          <div className="mb-4">
            <Separator bg="accent" />
          </div>
          <p className="text-center max-w-[620px] mx-auto">
            Explore a world of exceptional wines, handpicked from renowned
            vineyards. From bold reds to refreshing whites, our selection offers
            something for every taste.
          </p>
        </div>

        {/* menu and btn */}

        <div className="flex flex-col items-center gap-12 xl:gap-24">
          {/* menu grid */}
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-16 place-content-center">
            {menuItems.map((item, index) => {
              const { name, description, price, imgSrc } = item;
              return (
                <MenuItem
                  name={name}
                  description={description}
                  price={price}
                  imgSrc={imgSrc}
                  key={index}
                />
              );
            })}
          </div>

          <button className="btn">View full wine list</button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
