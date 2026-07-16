import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Users, Check, Sparkles } from "lucide-react";
import { toast } from "sonner";
import type { EventItem } from "./data";

function Confetti() {
  const pieces = Array.from({ length: 18 });
  const colors = ["#6C2CF3", "#FF6A3D", "#FF8A00", "#FFFFFF"];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((_, i) => {
        const x = (Math.random() - 0.5) * 260;
        const y = -Math.random() * 220 - 60;
        const rot = (Math.random() - 0.5) * 540;
        return (
          <motion.span
            key={i}
            initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
            animate={{ x, y, opacity: 0, rotate: rot }}
            transition={{ duration: 1.1 + Math.random() * 0.6, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 h-2 w-2 rounded-sm"
            style={{ backgroundColor: colors[i % colors.length] }}
          />
        );
      })}
    </div>
  );
}

export function EventCard({ event }: { event: EventItem }) {
  const [checkedIn, setCheckedIn] = useState(false);
  const [count, setCount] = useState(event.checkins);
  const [burst, setBurst] = useState(false);

  const doCheckIn = () => {
    if (checkedIn) return;
    setCheckedIn(true);
    setCount((c) => c + 1);
    setBurst(true);
    setTimeout(() => setBurst(false), 1400);
    toast.success("Parabéns! Você participou deste evento.", {
      description: `+50 XP · ${event.title}`,
      icon: <Sparkles className="h-4 w-4 text-brand-amber" />,
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-surface shadow-soft transition-shadow duration-500 hover:shadow-elevated"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-brand-ink/10 to-transparent" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full glass-dark px-3 py-1 text-[11px] font-semibold tracking-wider text-white">
          <span>{event.emoji}</span> {event.category}
        </span>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
          <div>
            <div className="text-2xl font-black leading-tight">{event.title}</div>
            <div className="mt-1 flex items-center gap-3 text-xs text-white/85">
              <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{event.date}</span>
              <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{event.time}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-brand-purple" />
          <span className="truncate">{event.location}</span>
        </div>

        <div className="flex items-center justify-between rounded-2xl bg-surface-muted px-4 py-3">
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4 text-brand-purple" />
            <span className="font-semibold text-foreground">{event.interested.toLocaleString("pt-BR")}</span>
            <span className="text-muted-foreground">interessados</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="h-4 w-4 text-brand-coral" />
            <motion.span
              key={count}
              initial={{ scale: 1.4, color: "#FF6A3D" }}
              animate={{ scale: 1, color: "var(--foreground)" }}
              transition={{ duration: 0.5 }}
              className="font-semibold"
            >
              {count.toLocaleString("pt-BR")}
            </motion.span>
            <span className="text-muted-foreground">check-ins</span>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence>{burst && <Confetti />}</AnimatePresence>
          <motion.button
            onClick={doCheckIn}
            disabled={checkedIn}
            whileTap={{ scale: 0.97 }}
            className={[
              "relative w-full overflow-hidden rounded-2xl px-5 py-3.5 text-sm font-semibold transition-all duration-500",
              checkedIn
                ? "bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/30"
                : "text-white shadow-elevated hover:shadow-glow",
            ].join(" ")}
            style={
              checkedIn
                ? undefined
                : { backgroundImage: "var(--gradient-sunset)" }
            }
          >
            <span className="relative z-10 inline-flex items-center justify-center gap-2">
              {checkedIn ? (
                <>
                  <Check className="h-4 w-4" /> Check-in realizado
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4" /> Fazer Check-in
                </>
              )}
            </span>
            {!checkedIn && (
              <span className="animate-shimmer pointer-events-none absolute inset-0 opacity-40" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
