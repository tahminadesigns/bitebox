"use client";

const foods = [
  {
    id: 1,
    name: "Classic Beef Burger",
    price: "$8.99",
    image: "/foods/burger.png",
  },
  {
    id: 2,
    name: "Cheese Pizza",
    price: "$11.50",
    image: "/foods/pizza.png",
  },
  {
    id: 3,
    name: "Doner Kebab",
    price: "$9.25",
    image: "/foods/kebab.png",
  },
  {
    id: 4,
    name: "Special Biryani",
    price: "$9.99",
    image: "/foods/biryani.png",
  },
  {
    id: 5,
    name: "Drinks",
    price: "$5.99",
    image: "/foods/drinks.png",
  },
];

export default function FoodGrid() {
  return (
    <section className="relative px-6 pb-28 max-w-7xl mx-auto">
      {/* Background text */}
      <h2 className="absolute inset-0 text-[110px] font-extrabold text-white/5 text-center pointer-events-none">
        FOODS
      </h2>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {foods.map((food) => (
          <div
            key={food.id}
            className="bg-[#111] rounded-2xl p-6 border border-white/10 hover:border-[#C9A45C] transition-all duration-300 group"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition"
              />
            </div>

            <h3 className="mt-5 text-xl font-semibold">
              {food.name}
            </h3>

            <p className="text-[#C9A45C] mt-1 font-medium">
              {food.price}
            </p>

            <button className="mt-5 w-full py-3 rounded-full bg-[#C9A45C] text-black font-medium hover:opacity-90 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
