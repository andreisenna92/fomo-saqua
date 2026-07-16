import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "./data";

export function CategoryCard({ category, index }: { category: Category; index: number }) {
  return (
    <motion.a
      href="#eventos"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative block overflow-hidden rounded-3xl shadow-soft transition-shadow duration-500 hover:shadow-elevated"
    >
      <div className="relative aspect-[4/5]">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/25 to-transparent" />
        <div className={`absolute inset-0 bg-gradient-to-tr ${category.tint} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

        <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full glass-dark text-white opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-0.5">
          <ArrowUpRight className="h-4 w-4" />
        </div>

        <div className="absolute bottom-5 left-5 right-5 text-white">
          <div className="mb-2 text-3xl">{category.emoji}</div>
          <div className="text-xl font-black">{category.name}</div>
          <div className="mt-1 text-sm text-white/80">{category.count} eventos</div>
        </div>
      </div>
    </motion.a>
  );
}
