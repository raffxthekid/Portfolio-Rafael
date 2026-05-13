import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  ArrowRight,
  ExternalLink,
  Code2,
  Coffee,
  FileCode,
  Database,
  GitBranch,
  ChevronDown,
} from "lucide-react";

import ecoponto from "@/assets/ecoponto.png";
import conversor from "@/assets/conversor-bases.png";
import conecta from "@/assets/conecta-plus.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rafael San — Desenvolvedor Backend em Formação" },
      {
        name: "description",
        content:
          "Portfólio de Rafael San, estudante de Análise e Desenvolvimento de Sistemas e desenvolvedor backend em formação. Projetos com Python, Java e JavaScript.",
      },
      { property: "og:title", content: "Rafael San — Desenvolvedor Backend em Formação" },
      {
        property: "og:description",
        content:
          "Construindo APIs, sistemas e soluções com foco em aprendizado contínuo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

const NAV_LINKS = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "projetos", label: "Projetos" },
  { id: "skills", label: "Skills" },
  { id: "contato", label: "Contato" },
];

const PROJECTS = [
  {
    title: "EcoPonto",
    image: ecoponto,
    description:
      "Sistema acadêmico desenvolvido em grupo para mapear pontos de coleta seletiva e incentivar o descarte consciente de resíduos.",
    tech: ["JavaScript", "React", "MongoDB"],
    link: "#",
  },
  {
    title: "Conversor de Bases Numéricas",
    image: conversor,
    description:
      "Aplicação que converte números decimais para binário, octal e hexadecimal, reforçando conceitos de lógica de programação e sistemas numéricos.",
    tech: ["Python", "Lógica de Programação"],
    link: "#",
  },
  {
    title: "Conecta+",
    image: conecta,
    description:
      "Aplicação em desenvolvimento voltada à organização de ideias e processos, evoluindo de um protótipo inicial para um sistema completo.",
    tech: ["Python", "JavaScript", "MySQL"],
    link: "#",
  },
];

const SKILLS = [
  { name: "Python", icon: Code2 },
  { name: "Java", icon: Coffee },
  { name: "JavaScript", icon: FileCode },
  { name: "MySQL", icon: Database },
  { name: "GitHub", icon: GitBranch },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "backdrop-blur-md bg-background/30 border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#inicio" className="text-lg font-bold tracking-tight">
          <span className="text-foreground">RafaelSan</span>
          <span className="text-gradient-blue">.dev</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="nav-link">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden p-2 text-foreground"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-5 h-0.5 bg-current mb-1.5" />
          <span className="block w-5 h-0.5 bg-current mb-1.5" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background/90 backdrop-blur-xl">
          <ul className="px-6 py-4 flex flex-col gap-4 text-sm font-medium">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block text-muted-foreground hover:text-primary-glow transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

const HERO_BADGES = ["Python", "Java", "JavaScript", "MySQL"];

function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1F] via-[#0A0F1F] to-black" />
      {/* tech grid */}
      <div className="absolute inset-0 tech-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      {/* central glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/30 blur-[140px]" />
      {/* particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary-glow/60"
            style={{
              top: `${(i * 47) % 100}%`,
              left: `${(i * 73) % 100}%`,
              boxShadow: "0 0 8px rgba(96,165,250,0.8)",
              animation: `particle-float ${6 + (i % 5)}s ease-in-out ${(i % 10) * 0.2}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p
          className="text-xs md:text-sm font-semibold text-primary-glow mb-6 tracking-[0.2em] uppercase"
          style={{
            textShadow: "0 0 14px rgba(96,165,250,0.65)",
            animation: "fade-in-up 0.7s ease-out 0.05s both",
          }}
        >
          Olá, eu sou Rafael Santana
        </p>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]"
          style={{ animation: "fade-in-up 0.7s ease-out 0.2s both" }}
        >
          <span className="text-foreground">Desenvolvedor</span>{" "}
          <span className="text-gradient-blue">Backend</span>
          <br />
          <span className="text-foreground">em Formação</span>
        </h1>
        <p
          className="mt-6 text-base md:text-lg text-muted-foreground mx-auto leading-relaxed"
          style={{
            maxWidth: "700px",
            animation: "fade-in-up 0.7s ease-out 0.35s both",
          }}
        >
          Construindo APIs, sistemas e soluções com foco em aprendizado contínuo.
        </p>

        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
          style={{ animation: "fade-in-up 0.7s ease-out 0.5s both" }}
        >
          {HERO_BADGES.map((b) => (
            <span
              key={b}
              className="text-xs md:text-sm font-medium px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary-glow backdrop-blur-sm transition-all duration-300 hover:border-primary-glow hover:bg-primary/20 hover:-translate-y-0.5"
              style={{ boxShadow: "0 0 0 0 rgba(96,165,250,0)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 22px -4px rgba(96,165,250,0.7)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "0 0 0 0 rgba(96,165,250,0)")
              }
            >
              {b}
            </span>
          ))}
        </div>

        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: "fade-in-up 0.7s ease-out 0.65s both" }}
        >
          <a href="#projetos" className="btn-primary group">
            Ver Projetos
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://github.com/raffxthekid"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rafael-santana-0968a037a/"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </div>
      </div>

      <a
        href="#sobre"
        aria-label="Role para explorar"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary-glow transition-colors"
        style={{ animation: "fade-in 1s ease-out 1s both" }}
      >
        <span className="tracking-wider">Role para explorar</span>
        <ChevronDown
          className="w-5 h-5 text-primary-glow"
          style={{ animation: "scroll-bounce 2s ease-in-out infinite" }}
        />
      </a>
    </section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center mb-10 md:mb-12">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
        {children}
      </h2>
      <div className="mt-4 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-primary to-primary-glow" />
    </div>
  );
}

const TECH_ICONS: { name: string; svg: React.ReactNode; color: string }[] = [
  {
    name: "Python",
    color: "#3B82F6",
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <linearGradient id="py1" x1="12.96" y1="15.83" x2="73.31" y2="71.38" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#387EB8" />
          <stop offset="1" stopColor="#366994" />
        </linearGradient>
        <linearGradient id="py2" x1="55.49" y1="58.65" x2="120.29" y2="119.96" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFE052" />
          <stop offset="1" stopColor="#FFC331" />
        </linearGradient>
        <path fill="url(#py1)" d="M63.4 1.5c-32 0-30 13.9-30 13.9l.1 14.4h30.5v4.3H21.4S1 31.8 1 64.1c0 32.3 17.8 31.2 17.8 31.2h10.7V80.3s-.6-17.8 17.5-17.8h30.3s17 .3 17-16.4V18.2S97.9 1.5 63.4 1.5zM46.6 11.2a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11z" />
        <path fill="url(#py2)" d="M64.3 126.6c32 0 30-13.9 30-13.9l-.1-14.4H63.7v-4.3h42.6s20.4 2.3 20.4-30c0-32.3-17.8-31.2-17.8-31.2H98.2v14.9s.6 17.8-17.5 17.8H50.4s-17-.3-17 16.4v27.9s-2.6 16.8 30.9 16.8zm16.8-9.7a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
      </svg>
    ),
  },
  {
    name: "Java",
    color: "#EA2D2E",
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <path fill="#0074BD" d="M47.6 98.2s-4.7 2.7 3.3 3.7c9.7 1.1 14.7.9 25.3-1.1 0 0 2.8 1.8 6.8 3.3-24 10.3-54.4-.6-35.4-5.9zm-3-13.4s-5.2 3.9 2.8 4.8c10.4 1.2 18.6 1.3 32.7-1.4 0 0 2 2 5.1 3-29 8.5-61.4.7-40.6-6.4z" />
        <path fill="#EA2D2E" d="M69.9 62.1c5.9 6.8-1.5 12.9-1.5 12.9s14.9-7.7 8-17.3c-6.4-9-11.4-13.5 15.3-29 0 0-41.7 10.4-21.8 33.4z" />
        <path fill="#0074BD" d="M101.7 108.1s3.5 2.9-3.8 5.1c-13.9 4.2-58 5.5-70.2.2-4.4-1.9 3.9-4.6 6.5-5.1 2.7-.6 4.3-.5 4.3-.5-4.9-3.4-31.5 6.8-13.5 9.7 49 7.9 89.4-3.6 76.7-9.4zM50 70.9s-22.3 5.3-7.9 7.2c6.1.8 18.2.6 29.5-.3 9.2-.8 18.5-2.4 18.5-2.4s-3.2 1.4-5.6 3c-22.7 6-66.5 3.2-53.9-2.9 10.7-5.2 19.4-4.6 19.4-4.6zm40 22.3c23-12 12.4-23.5 5-22-1.8.4-2.6.7-2.6.7s.7-1.1 2-1.5c14.6-5.1 25.8 15.1-4.8 23.4 0-.1.3-.4.4-.6z" />
        <path fill="#EA2D2E" d="M76.4 1.6s12.7 12.7-12.1 32.3c-19.9 15.7-4.5 24.7 0 35-11.6-10.5-20.2-19.6-14.4-28.2C58.4 28.2 81.5 22.1 76.4 1.6z" />
        <path fill="#0074BD" d="M52.3 124.5c22 1.4 55.9-.8 56.7-11.2 0 0-1.5 4-18.2 7.1-18.9 3.6-42.2 3.2-56.1.9 0 0 2.8 2.3 17.6 3.2z" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <rect width="128" height="128" rx="16" fill="#F7DF1E" />
        <path fill="#000" d="M37 100l9.8-5.9c1.9 3.4 3.6 6.2 7.7 6.2 4 0 6.5-1.5 6.5-7.6V51.5h12V93c0 12.4-7.3 18-17.9 18-9.6 0-15.2-5-18.1-11zm42.5-1.3l9.8-5.7c2.6 4.2 6 7.3 11.9 7.3 5 0 8.2-2.5 8.2-6 0-4.1-3.3-5.6-8.8-8L97.6 85c-8.7-3.7-14.5-8.4-14.5-18.3 0-9.1 7-16 17.8-16 7.7 0 13.3 2.7 17.3 9.7l-9.5 6.1c-2.1-3.7-4.3-5.2-7.8-5.2s-5.8 2.3-5.8 5.2c0 3.6 2.3 5.1 7.5 7.4l3 1.3c10.3 4.4 16.1 9 16.1 19.1 0 11-8.6 17-20.2 17-11.3 0-18.6-5.4-22.2-12.5z" />
      </svg>
    ),
  },
  {
    name: "MySQL",
    color: "#00758F",
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <ellipse cx="64" cy="28" rx="44" ry="14" fill="none" stroke="#00758F" strokeWidth="6" />
        <path d="M20 28v36c0 7.7 19.7 14 44 14s44-6.3 44-14V28" fill="none" stroke="#00758F" strokeWidth="6" />
        <path d="M20 64v36c0 7.7 19.7 14 44 14s44-6.3 44-14V64" fill="none" stroke="#00758F" strokeWidth="6" />
        <ellipse cx="64" cy="28" rx="30" ry="6" fill="#F29111" opacity="0.85" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    color: "#FFFFFF",
    svg: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <path fill="#FFF" d="M64 1.5C28.9 1.5.5 30 .5 65.1c0 28.1 18.2 51.9 43.5 60.3 3.2.6 4.3-1.4 4.3-3.1 0-1.5-.1-5.6-.1-11-17.7 3.8-21.4-8.5-21.4-8.5-2.9-7.4-7.1-9.4-7.1-9.4-5.8-3.9.4-3.9.4-3.9 6.4.5 9.8 6.6 9.8 6.6 5.7 9.8 14.9 7 18.6 5.3.6-4.1 2.2-7 4.1-8.6-14.1-1.6-29-7.1-29-31.4 0-7 2.5-12.6 6.6-17.1-.7-1.6-2.9-8.1.6-16.8 0 0 5.4-1.7 17.6 6.6 5.1-1.4 10.6-2.1 16-2.1s10.9.7 16 2.1c12.2-8.3 17.6-6.6 17.6-6.6 3.5 8.7 1.3 15.2.6 16.8 4.1 4.5 6.6 10.1 6.6 17.1 0 24.4-14.9 29.8-29.1 31.4 2.3 2 4.3 5.8 4.3 11.7 0 8.5-.1 15.3-.1 17.4 0 1.7 1.1 3.7 4.4 3.1 25.3-8.4 43.5-32.2 43.5-60.3C127.5 30 99 1.5 64 1.5z" />
      </svg>
    ),
  },
];

function TechCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-primary/25 blur-3xl rounded-full pointer-events-none" />
      <div
        className="relative rounded-3xl p-8 md:p-10 overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, rgba(15,23,42,0.95), rgba(10,15,31,0.95))",
          border: "1px solid rgba(59,130,246,0.25)",
          boxShadow:
            "0 0 60px -20px rgba(59,130,246,0.55), inset 0 1px 0 rgba(255,255,255,0.04)",
          animation: "fade-in-up 0.8s ease-out both",
        }}
      >
        <div className="absolute inset-0 tech-grid opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 300 300"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#3B82F6" stopOpacity="0" />
              <stop offset="0.5" stopColor="#60A5FA" stopOpacity="0.45" />
              <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g stroke="url(#lineGrad)" strokeWidth="0.6" fill="none">
            <line x1="60" y1="80" x2="240" y2="80" />
            <line x1="60" y1="220" x2="240" y2="220" />
            <line x1="60" y1="80" x2="150" y2="150" />
            <line x1="240" y1="80" x2="150" y2="150" />
            <line x1="60" y1="220" x2="150" y2="150" />
            <line x1="240" y1="220" x2="150" y2="150" />
          </g>
        </svg>
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary-glow/70 pointer-events-none"
            style={{
              top: `${((i * 37) % 90) + 5}%`,
              left: `${((i * 53) % 90) + 5}%`,
              boxShadow: "0 0 6px rgba(96,165,250,0.9)",
              animation: `particle-float ${5 + (i % 4)}s ease-in-out ${(i % 7) * 0.3}s infinite`,
            }}
          />
        ))}

        <div className="relative grid grid-cols-3 gap-6 md:gap-8 place-items-center">
          <TechIcon tech={TECH_ICONS[0]} delay={0} />
          <TechIcon tech={TECH_ICONS[1]} delay={0.15} />
          <TechIcon tech={TECH_ICONS[2]} delay={0.3} />
          <div />
          <TechIcon tech={TECH_ICONS[3]} delay={0.45} />
          <div />
          <div />
          <TechIcon tech={TECH_ICONS[4]} delay={0.6} />
          <div />
        </div>
      </div>
    </div>
  );
}

function TechIcon({
  tech,
  delay,
}: {
  tech: { name: string; svg: React.ReactNode; color: string };
  delay: number;
}) {
  return (
    <div
      className="group flex flex-col items-center gap-2.5"
      style={{ animation: `fade-in-up 0.7s ease-out ${0.2 + delay}s both` }}
    >
      <div
        className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center p-3.5 md:p-4 transition-all duration-500 group-hover:-translate-y-1"
        style={{
          background:
            "linear-gradient(160deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
          border: "1px solid rgba(96,165,250,0.18)",
          boxShadow: "0 8px 30px -12px rgba(59,130,246,0.45)",
          animation: `tech-float ${6 + delay * 4}s ease-in-out ${delay}s infinite`,
        }}
      >
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: `0 0 28px -4px ${tech.color}aa` }}
        />
        <div className="relative w-full h-full">{tech.svg}</div>
      </div>
      <span className="text-xs font-medium text-muted-foreground tracking-wide">
        {tech.name}
      </span>
    </div>
  );
}

function About() {
  return (
    <section id="sobre" className="relative py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>Sobre Mim</SectionTitle>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              Sou estudante de <span className="text-foreground font-medium">Análise e Desenvolvimento de Sistemas (ADS)</span> e desenvolvedor backend em formação.
            </p>
            <p>
              Tenho me dedicado à construção de APIs, automações e sistemas práticos utilizando <span className="text-primary-glow">Python</span>, <span className="text-primary-glow">Java</span> e <span className="text-primary-glow">JavaScript</span>.
            </p>
            <p>
              Sou movido pela curiosidade e pelo aprendizado constante. Quando não sei algo, busco entender, estudar e aplicar na prática.
            </p>
            <p>
              Atualmente, estou desenvolvendo projetos reais para fortalecer minhas habilidades e conquistar minha primeira oportunidade na área de tecnologia.
            </p>
          </div>
          <TechCard />
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projetos" className="relative py-20 md:py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle>Projetos</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6 md:gap-7">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_18px_50px_-12px_rgba(59,130,246,0.45)] flex flex-col"
            >
              <div className="h-48 md:h-52 bg-[#0A0F1F] flex items-center justify-center overflow-hidden border-b border-border">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary-glow border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.link}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary-glow hover:text-white hover:gap-3 transition-all duration-300"
                >
                  Ver Projeto
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle>Skills</SectionTitle>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {SKILLS.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="group flex flex-col items-center justify-center gap-3 rounded-xl bg-card border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:glow-blue"
            >
              <Icon className="w-8 h-8 text-primary-glow transition-transform duration-300 group-hover:scale-110" />
              <span className="text-sm font-medium text-foreground">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const links = [
    { label: "GitHub", href: "https://github.com/raffxthekid", icon: Github },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rafael-santana-0968a037a/", icon: Linkedin },
    { label: "WhatsApp", href: "https://wa.me/48999244559", icon: MessageCircle },
    { label: "E-mail", href: "https://mail.google.com/mail/?view=cm&fs=1&to=rafaeltj165@gmail.com", icon: Mail },
  ];
  return (
    <section id="contato" className="relative py-20 md:py-24 bg-surface/30">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <SectionTitle>Contato</SectionTitle>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          Estou em busca da minha primeira oportunidade na área de tecnologia. Vamos conversar.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <Icon className="w-4 h-4" /> {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
      © 2026 RafaelSan.dev — Todos os direitos reservados.
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <style>{`
        .btn-primary {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.75rem 1.5rem; border-radius: 0.75rem;
          background: linear-gradient(135deg, #3B82F6, #60A5FA);
          color: white; font-weight: 600; font-size: 0.95rem;
          box-shadow: 0 0 30px -5px rgba(59,130,246,0.7);
          transition: all 300ms ease;
        }
        .btn-primary:hover { transform: scale(1.05); box-shadow: 0 0 45px -3px rgba(96,165,250,0.85); }
        .btn-ghost {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.75rem 1.5rem; border-radius: 0.75rem;
          background: transparent; color: white;
          font-weight: 500; font-size: 0.95rem;
          border: 1px solid rgba(255,255,255,0.15);
          transition: all 300ms ease;
        }
        .btn-ghost:hover {
          border-color: rgba(96,165,250,0.6);
          color: #60A5FA;
          box-shadow: 0 0 28px -6px rgba(96,165,250,0.7);
          transform: translateY(-2px) scale(1.03);
        }
      `}</style>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
