import React from 'react';
import { motion } from 'framer-motion';

export const FolderIcon = ({ name, onClick, iconEmoji = "📁" }) => (
  <motion.div 
    whileHover={{ y: -4, scale: 1.02 }} 
    whileTap={{ scale: 0.98 }} 
    onClick={onClick} 
    className="flex flex-col items-center w-20 cursor-pointer group"
  >
    <div className="text-4xl mb-1 drop-shadow-lg">{iconEmoji}</div>
    <span className="text-[11px] font-mono bg-black/40 backdrop-blur px-2 py-0.5 rounded-full text-blue-200 group-hover:text-white transition">
      {name}
    </span>
  </motion.div>
);