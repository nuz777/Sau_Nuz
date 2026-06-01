import { motion } from "motion/react";

export default function RedirectScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070707]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center">
        <motion.div
          className="relative size-40 mx-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <img
            src="/img/icon12.png"
            alt="Code"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 w-40"
          />
        </motion.div>
        <p className="mt-6 font-space text-sm tracking-widest uppercase text-blue-400">
          Redirigiendo...
        </p>
      </div>
    </motion.div>
  );
}
