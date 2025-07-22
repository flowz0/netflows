"use client";

import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: string;
};

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`transition-all duration-300 ease-in-out group cursor-pointer w-full ${isOpen
        ? "py-16"
        : "py-8"
      }`}
    >
      <div className="flex items-center justify-between">
        <h5 className={`text-black text-h5 font-nunito font-medium transition-transform duration-300 ease-in-out ${isOpen
          ? ""
          : "group-hover:translate-x-4"
        }`}>
          {question}
        </h5>
        <div className="bg-primary h-16 w-16 rounded-full flex items-center justify-center">
          <FaAngleLeft className={`text-black5 h-8 w-8 transition-transform duration-500 ease-in-out ${isOpen ? "-rotate-90" : ""}`} />
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-black75 mt-4 text-p text-start"
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}