import CartItem from "./CartItem";

const cartItems = [
  {
    id: 1,
    name: "Truffle Beef Burger",
    price: 18,
    image: "/foods/burger.png",
  },
  {
    id: 2,
    name: "Italian Cheese Pizza",
    price: 22,
    image: "/foods/pizza.png",
  },
];

export default function CartList() {
  return (
    <div className="space-y-6">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}
