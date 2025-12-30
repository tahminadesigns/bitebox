import { foods, restaurants } from "@/app/data/searchData";
import { motion, MotionValue } from "framer-motion";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default function LiveResults() {
  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div>
        <h3 className="text-[#E6C38A] mb-4">Foods</h3>
        {foods.map((item: boolean | Key | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | MotionValue<number> | MotionValue<string> | null | undefined, i: number) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="text-white/70 hover:text-[#F3D18F] cursor-pointer"
          >
            {item}
          </motion.p>
        ))}
      </div>

      <div>
        <h3 className="text-[#E6C38A] mb-4">Restaurants</h3>
        {restaurants.map((item: boolean | Key | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | MotionValue<number> | MotionValue<string> | null | undefined, i: number) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="text-white/70 hover:text-[#F3D18F] cursor-pointer"
          >
            {item}
          </motion.p>
        ))}
      </div>
    </div>
  );
}
