"use client";
import { motion } from "motion/react";

interface DividerProps {
  width?: string;
}

const Divider = ({ width = "w-[70%]" }: DividerProps) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, scaleX: 1 }}
      initial={{ opacity: 0, scaleX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="flex justify-center items-center bg-white">
      <div className={`h-1 w-full bg-scholarship-navy ${width}`} />
    </motion.div>
  );
};

export default Divider;