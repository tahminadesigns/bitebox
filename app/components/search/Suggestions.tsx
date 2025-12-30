import { motion } from "framer-motion";

const items = ["Burger", "Pizza", "Sushi", "Biryani"];

export default function Suggestions() {
  return (
    <div className="flex flex-wrap gap-4">
      {items.map(item => (
        <motion.span
          whileHover={{ scale: 1.1 }}
          key={item}
          className="px-5 py-2 border border-[#2A2A2A] rounded-full text-white/70 hover:text-[#F3D18F] hover:border-[#E6C38A] cursor-pointer"
        >
          {item}
        </motion.span>
      ))}
    </div>
  );
}
