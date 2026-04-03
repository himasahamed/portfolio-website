import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export const DraggableWindow = ({ title, onClose, children, defaultPosition = { x: 20, y: 20 }, zIndex }) => {
  const [position, setPosition] = useState(defaultPosition);
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef({ startX: 0, startY: 0, offsetX: position.x, offsetY: position.y });
  
  const handleMouseDown = (e) => {
    if (e.target.closest('.window-header-drag')) {
      setIsDragging(true);
      dragRef.current.startX = e.clientX - position.x;
      dragRef.current.startY = e.clientY - position.y;
    }
  };
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragRef.current.startX,
          y: e.clientY - dragRef.current.startY
        });
      }
    };
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);
  
  return (
    <motion.div
      style={{ x: position.x, y: position.y, zIndex }}
      className="fixed glass-panel w-[320px] md:w-[380px] backdrop-blur-xl bg-[#0a0f1ecc] border border-blue-500/40 rounded-2xl shadow-2xl overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", damping: 20 }}
    >
      <div className="window-header-drag bg-[#0f172a]/80 px-4 py-3 flex justify-between items-center cursor-grab active:cursor-grabbing border-b border-blue-500/30">
        <span className="text-blue-300 font-mono text-sm flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-400 rounded-full"></span> {title}
        </span>
        <button onClick={onClose} className="text-gray-400 hover:text-white transition">✕</button>
      </div>
      <div className="p-4 max-h-[320px] overflow-y-auto text-gray-200 text-sm">
        {children}
      </div>
    </motion.div>
  );
};