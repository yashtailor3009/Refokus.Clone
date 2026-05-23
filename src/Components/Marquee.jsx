import { motion } from "framer-motion";

function Marquee({ images, direction = "left" }) {
  return (
    <div className="overflow-hidden w-full py-6">
      <motion.div
        className="flex gap-20 whitespace-nowrap"
        animate={{ 
          x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"]
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* row 1 */}
        {images.map((url, i) => (
          <img key={i} src={url} className="h-12 w-auto object-contain flex-shrink-0" />
        ))}

        {/* row 2 (clone) */}
        {images.map((url, i) => (
          <img key={`${i}-clone`} src={url} className="h-12 w-auto object-contain flex-shrink-0" />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
