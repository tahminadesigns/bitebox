import CategoryTabs from "../components/menu/CategoryTabs";
import Filters from "../components/menu/Filters";
import FoodGrid from "../components/menu/FoodGrid";
import CartBar from "../components/menu/CartBar";
import MenuFooter from "../components/menu/MenuFooter";

export default function MenuPage() {
  return (
    <main className="bg-[#0B0B0B] text-white">
      <CategoryTabs />
      <Filters />
      <FoodGrid/>
      <MenuFooter />
      <CartBar />
    </main>
  );
}
