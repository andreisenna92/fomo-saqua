import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Sparkles,
  MapPin,
  Calendar,
  Search,
  Trophy,
  QrCode,
  Users,
  ArrowRight,
  Star,
  ChevronRight,
  Menu,
} from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { FomoLogo } from "@/components/fomo/FomoLogo";
import { CategoryCard } from "@/components/fomo/CategoryCard";
import { EventCard } from "@/components/fomo/EventCard";
import { categories, events, badges } from "@/components/fomo/data";
import heroImage from "@/assets/hero-saquarema.jpg";
import fomito from "@/assets/fomito-mascot.png";

export const Route = createFileRoute("/")({
  component: FomoLanding,
  head: () => ({
    meta: [
      { title: "FOMO — Nunca perca os eventos de Saquarema" },
      {
        name: "description",
        content:
          "FOMO centraliza todos os eventos de Saquarema — surf, música, cultura, gastronomia e esportes. Descubra, faça check-in e ganhe XP.",
      },
      { property: "og:title", content: "FOMO — Nunca perca os eventos de Saquarema" },
      {
        property: "og:description",
        content:
          "Tudo acontece em Saquarema. Você só perde se quiser. Descubra e faça check-in nos melhores eventos da cidade.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function FomoLanding() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const fomitoY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-center" theme="light" richColors closeButton />
      <Nav />

      {/* HERO */}
      <section ref={heroRef} className="relative h-[100svh] min-h-[720px] w-full overflow-hidden">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
          <img
            src={heroImage}
            alt="Praia de Itaúna ao pôr do sol em Saquarema"
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
          <div className="absolute inset-0" style={{ background: "var(--gradient-purple-glow)" }} />
        </motion.div>

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium tracking-wide"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-coral opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-coral" />
            </span>
            AO VIVO EM SAQUAREMA · 74 EVENTOS ESSA SEMANA
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            <div className="rounded-3xl bg-white/95 px-8 py-6 shadow-glow backdrop-blur">
              <FomoLogo className="text-6xl md:text-8xl" />
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-brand-ink/70 md:text-xs">
                Nunca perca os eventos de <span className="text-brand-purple">Saquarema</span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 max-w-3xl text-balance text-3xl font-black leading-[1.05] md:text-5xl lg:text-6xl"
          >
            O próximo grande evento pode estar{" "}
            <span className="gradient-text">acontecendo agora.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-5 max-w-xl text-base text-white/85 md:text-lg"
          >
            Tudo acontece em Saquarema. Você só perde se quiser.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65 }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
          >
            <a
              href="#eventos"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
              style={{ backgroundImage: "var(--gradient-sunset)" }}
            >
              Explorar Eventos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#perfil"
              className="inline-flex items-center gap-2 rounded-full glass-dark px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Entrar
            </a>
          </motion.div>

          <motion.div
            style={{ y: fomitoY }}
            initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute bottom-20 right-4 hidden md:right-16 md:block"
          >
            <div className="animate-float">
              <img src={fomito} alt="Fomito, o mascote do FOMO" className="h-44 w-auto max-h-[32vh] drop-shadow-[0_20px_40px_rgba(11,16,38,0.35)] lg:h-56" />
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/70">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronRight className="h-5 w-5 rotate-90" />
          </motion.div>
        </div>
      </section>

      {/* MASCOT INTRO */}
      <MascotIntro />

      {/* SEARCH BAR */}
      <SearchBar />

      {/* CATEGORIES */}
      <section id="categorias" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionHeader
          eyebrow="Categorias"
          title={<>Descubra o que <span className="gradient-text">move Saquarema</span>.</>}
          subtitle="Do line-up de Itaúna às rodas de samba na praça — encontre a sua vibe."
        />
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </section>

      {/* EVENTS */}
      <section id="eventos" className="relative bg-surface-muted py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Em destaque"
            title={<>Eventos que estão <span className="gradient-text">bombando agora.</span></>}
            subtitle="Faça check-in, ganhe XP e desbloqueie badges exclusivas."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        </div>
      </section>

      {/* GAMIFICATION */}
      <Gamification />

      {/* PROFILE + MAP MOCK */}
      <ProfileAndMap />

      {/* CTA */}
      <FinalCTA />

      <Footer />
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="glass flex w-full max-w-5xl items-center justify-between rounded-full px-4 py-2.5 shadow-soft md:px-6">
        <FomoLogo className="text-xl md:text-2xl" />
        <div className="hidden items-center gap-7 text-sm font-medium text-foreground/80 md:flex">
          <a href="#categorias" className="transition-colors hover:text-brand-purple">Categorias</a>
          <a href="#eventos" className="transition-colors hover:text-brand-purple">Eventos</a>
          <a href="#perfil" className="transition-colors hover:text-brand-purple">Perfil</a>
          <a href="#mapa" className="transition-colors hover:text-brand-purple">Mapa</a>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#eventos"
            className="hidden rounded-full px-4 py-2 text-sm font-semibold text-white shadow-soft md:inline-flex"
            style={{ backgroundImage: "var(--gradient-sunset)" }}
          >
            Baixar App
          </a>
          <button className="rounded-full glass p-2 md:hidden" aria-label="menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </header>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
}) {
  return (
    <div className="flex flex-col items-start gap-3">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full bg-brand-purple/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-purple"
      >
        <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl text-balance text-3xl font-black leading-tight md:text-5xl"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="max-w-2xl text-base text-muted-foreground md:text-lg"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}

function MascotIntro() {
  return (
    <section className="relative -mt-16 md:-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] bg-surface p-6 shadow-elevated md:p-10"
        >
          <div className="grid items-center gap-8 md:grid-cols-[220px_1fr]">
            <div className="relative flex justify-center">
              <div
                className="absolute inset-0 -m-4 rounded-full opacity-40 blur-2xl"
                style={{ background: "var(--gradient-sunset)" }}
              />
              <img src={fomito} alt="Fomito" className="relative h-48 w-auto md:h-56 animate-float" />
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider text-brand-purple">
                Olá, eu sou o <span className="gradient-text">Fomito!</span>
              </div>
              <p className="mt-3 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl">
                Sou a gaivota oficial do FOMO. Estou sempre por aqui para te ajudar a
                encontrar os melhores eventos de Saquarema, avisar quando algo incrível
                estiver começando e comemorar cada check-in com você. 🏄🌅
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Avisa de eventos", "Indica lugares", "Comemora check-ins", "Interage com você"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-surface-muted px-3 py-1.5 text-xs font-medium text-foreground/75"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SearchBar() {
  return (
    <section className="mx-auto mt-16 max-w-4xl px-6 md:mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass flex items-center gap-3 rounded-full px-5 py-3 shadow-soft"
      >
        <Search className="h-5 w-5 text-brand-purple" />
        <input
          placeholder="Pesquisar eventos, bairros ou categorias em Saquarema..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground md:text-base"
        />
        <button
          className="hidden rounded-full px-4 py-2 text-xs font-semibold text-white sm:inline-flex"
          style={{ backgroundImage: "var(--gradient-sunset)" }}
        >
          Buscar
        </button>
      </motion.div>
      <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs">
        {["Hoje", "Amanhã", "Essa semana", "Itaúna", "Vila", "Praça"].map((f) => (
          <span
            key={f}
            className="rounded-full border border-border bg-surface px-3 py-1 text-foreground/70 transition-colors hover:border-brand-purple hover:text-brand-purple"
          >
            {f}
          </span>
        ))}
      </div>
    </section>
  );
}

function Gamification() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <SectionHeader
        eyebrow="Gamificação"
        title={<>Cada check-in é <span className="gradient-text">uma conquista.</span></>}
        subtitle="Ganhe XP, suba de nível e desbloqueie badges exclusivas por curtir sua cidade."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        {/* XP Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl p-8 text-white shadow-elevated md:p-10"
          style={{ backgroundImage: "var(--gradient-sunset)" }}
        >
          <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-white/15 blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
              <Trophy className="h-3.5 w-3.5" /> NÍVEL 7 · APAIXONADO
            </div>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-6xl font-black md:text-7xl">2.480</span>
              <span className="text-lg font-semibold text-white/85">XP</span>
            </div>
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/20">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "72%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-full rounded-full bg-white"
              />
            </div>
            <div className="mt-2 flex justify-between text-xs text-white/80">
              <span>Próximo nível</span>
              <span>720 XP restantes</span>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3 text-sm">
              {[
                { label: "Eventos", value: "38" },
                { label: "Check-ins", value: "42" },
                { label: "Badges", value: "6" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl bg-white/15 px-4 py-3 backdrop-blur">
                  <div className="text-2xl font-black">{s.value}</div>
                  <div className="text-xs text-white/80">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Badges */}
        <div className="grid grid-cols-2 gap-4">
          {badges.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={[
                "relative rounded-3xl bg-surface p-5 shadow-soft transition-all",
                b.unlocked ? "" : "opacity-60 grayscale",
              ].join(" ")}
            >
              <div className="text-4xl">{b.icon}</div>
              <div className="mt-3 text-sm font-black">{b.name}</div>
              <div className="text-xs text-muted-foreground">{b.req}</div>
              {b.unlocked && (
                <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
                  <Star className="h-3 w-3" /> Desbloqueada
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProfileAndMap() {
  return (
    <section id="perfil" className="relative bg-brand-ink py-24 text-white md:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 20%, rgba(108,44,243,0.4), transparent 60%), radial-gradient(50% 40% at 90% 80%, rgba(255,106,61,0.35), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/80">
            <MapPin className="h-3.5 w-3.5" /> Cidade viva
          </span>
          <h2 className="max-w-3xl text-balance text-3xl font-black leading-tight md:text-5xl">
            Um mapa. Um calendário.{" "}
            <span className="gradient-text">Uma cidade inteira na sua mão.</span>
          </h2>
        </div>

        <div id="mapa" className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          {/* Map mock */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[16/11] overflow-hidden rounded-3xl shadow-elevated"
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #0B1026 0%, #241a4a 50%, #3a1d5c 100%)",
              }}
            />
            {/* grid lines */}
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:40px_40px]" />
            {/* wavy coast */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 550" preserveAspectRatio="none">
              <path
                d="M0,380 C120,340 220,420 340,380 C460,340 560,420 680,380 C740,360 780,380 800,370 L800,550 L0,550 Z"
                fill="url(#sea)"
                opacity="0.6"
              />
              <defs>
                <linearGradient id="sea" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#6C2CF3" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#FF6A3D" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
            {/* pins */}
            {[
              { x: "20%", y: "30%", label: "🏄 WSL", delay: 0 },
              { x: "55%", y: "45%", label: "🎵 Samba", delay: 0.2 },
              { x: "72%", y: "62%", label: "🍔 Food", delay: 0.4 },
              { x: "40%", y: "70%", label: "🎭 Cultura", delay: 0.6 },
            ].map((p) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: -10, scale: 0.6 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: p.delay }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: p.x, top: p.y }}
              >
                <div className="relative">
                  <div className="absolute inset-0 -m-2 animate-ping rounded-full bg-brand-coral/40" />
                  <div
                    className="relative flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-glow"
                    style={{ backgroundImage: "var(--gradient-sunset)" }}
                  >
                    {p.label}
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="absolute bottom-4 left-4 rounded-2xl glass-dark px-4 py-2 text-xs text-white/90">
              <MapPin className="mr-1 inline h-3.5 w-3.5" /> Saquarema · RJ
            </div>
          </motion.div>

          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="rounded-3xl glass-dark p-6 md:p-8"
          >
            <div className="flex items-center gap-4">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full text-2xl font-black text-white shadow-glow"
                style={{ backgroundImage: "var(--gradient-sunset)" }}
              >
                LM
              </div>
              <div>
                <div className="text-lg font-black">Larissa Moura</div>
                <div className="text-xs text-white/70">@lari.saqua · Nível 7</div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-white/70">Linha do tempo</div>
              {[
                { icon: "🏄", text: "Check-in no WSL Saquarema Pro", when: "há 2h", xp: "+50 XP" },
                { icon: "🎵", text: "Interessada em Samba da Vila", when: "ontem", xp: "+10 XP" },
                { icon: "🥈", text: "Desbloqueou Apaixonada por Saquarema", when: "3 dias", xp: "+200 XP" },
              ].map((it) => (
                <div key={it.text} className="flex items-center gap-3 rounded-2xl bg-white/5 p-3">
                  <div className="text-xl">{it.icon}</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{it.text}</div>
                    <div className="text-xs text-white/60">{it.when}</div>
                  </div>
                  <div className="rounded-full bg-brand-amber/20 px-2 py-0.5 text-[10px] font-bold text-brand-amber">
                    {it.xp}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 rounded-2xl bg-white/5 p-3">
              <QrCode className="h-8 w-8 text-brand-amber" />
              <div className="flex-1">
                <div className="text-sm font-semibold">QR Code do organizador</div>
                <div className="text-xs text-white/60">Escaneie no evento para fazer check-in</div>
              </div>
              <ChevronRight className="h-5 w-5 text-white/50" />
            </div>
          </motion.div>
        </div>

        {/* stats bar */}
        <div className="mt-10 grid grid-cols-2 gap-4 rounded-3xl glass-dark p-6 md:grid-cols-4">
          {[
            { icon: Calendar, value: "312", label: "Eventos por mês" },
            { icon: Users, value: "18k", label: "Moradores conectados" },
            { icon: MapPin, value: "24", label: "Bairros mapeados" },
            { icon: Trophy, value: "4.9", label: "Nota média na loja" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
                <s.icon className="h-5 w-5 text-brand-amber" />
              </div>
              <div>
                <div className="text-2xl font-black">{s.value}</div>
                <div className="text-xs text-white/70">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-[2.5rem] p-10 text-white shadow-elevated md:p-16"
        style={{ backgroundImage: "var(--gradient-sunset)" }}
      >
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-brand-ink/40 blur-3xl" />
        <div className="relative grid items-center gap-10 md:grid-cols-[1fr_220px]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/85">
              Baixe o app · Grátis
            </div>
            <h3 className="mt-4 max-w-2xl text-balance text-3xl font-black leading-tight md:text-5xl">
              Saquarema acontece agora. Você tá dentro?
            </h3>
            <p className="mt-4 max-w-xl text-white/90">
              Descubra, faça check-in e vire lenda da cidade. O FOMO é a única forma
              de nunca perder o que tá rolando por aí.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className="rounded-2xl bg-brand-ink px-5 py-3 text-sm font-semibold shadow-elevated">
                 App Store
              </a>
              <a href="#" className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-brand-ink shadow-elevated">
                ▶ Google Play
              </a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <img src={fomito} alt="Fomito acenando" className="h-56 w-auto animate-float md:h-64" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <FomoLogo className="text-xl" />
        <div className="text-xs text-muted-foreground">
          © 2026 FOMO · Nunca perca os eventos de Saquarema.
        </div>
        <div className="flex gap-4 text-xs text-muted-foreground">
          <a href="#" className="hover:text-brand-purple">Sobre</a>
          <a href="#" className="hover:text-brand-purple">Organizadores</a>
          <a href="#" className="hover:text-brand-purple">Privacidade</a>
        </div>
      </div>
    </footer>
  );
}
