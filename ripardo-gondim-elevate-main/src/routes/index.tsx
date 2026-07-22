import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Star,
  Check,
  ArrowRight,
  MessageCircle,
  Instagram,
  MapPin,
  Phone,
  Clock,
  ChevronDown,
  Scale,
  HeartHandshake,
  Stethoscope,
  ShieldCheck,
  Users,
  RefreshCw,
  CalendarClock,
  Baby,
  Accessibility,
  Zap,
  Award,
  Laptop,
  Eye,
  Sparkles,
  Quote,
} from "lucide-react";
import heroJustice from "@/assets/hero-justice.jpg";
import office from "@/assets/office.jpg";
import drRipardoAsset from "@/assets/dr-ripardo.png.asset.json";
import draGondimAsset from "@/assets/dra-gondim.png.asset.json";
import logoRG from "@/assets/logo-rg.png.asset.json";
import { FloatingButtons } from "@/components/FloatingButtons";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5585991961212";
const INSTAGRAM_URL =
  "https://www.instagram.com/ripardoegondimadvogados?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ripardo & Gondim Advogados — Especialistas em Direito Previdenciário" },
      {
        name: "description",
        content:
          "Escritório de advocacia especializado em Direito Previdenciário. Aposentadorias, auxílio-doença, BPC/LOAS, pensão por morte e revisão de benefícios do INSS. Atendimento humanizado em Caucaia/CE.",
      },
      { property: "og:title", content: "Ripardo & Gondim Advogados — Direito Previdenciário" },
      {
        property: "og:description",
        content:
          "Há anos ajudando trabalhadores, aposentados e pensionistas a conquistarem seus direitos junto ao INSS.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "Ripardo & Gondim Advogados" },
      {
        name: "twitter:description",
        content: "Especialistas em Direito Previdenciário. Atendimento humanizado.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Ripardo & Gondim Advogados Associados",
          description: "Escritório de advocacia especializado em Direito Previdenciário.",
          telephone: "+55-85-99196-1212",
          address: {
            "@type": "PostalAddress",
            streetAddress: "BR-020, 1445-A, Tabapuá",
            addressLocality: "Caucaia",
            addressRegion: "CE",
            addressCountry: "BR",
          },
          areaServed: "BR",
          priceRange: "$$",
        }),
      },
    ],
  }),
  component: Index,
});

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas de Atuação", href: "#areas" },
  { label: "Equipe", href: "#equipe" },
  { label: "Resultados", href: "#resultados" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-4">
        <a href="#inicio" className="flex items-center gap-3">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-full border ${
              scrolled ? "border-navy/20 bg-navy" : "border-white/30 bg-white/10 backdrop-blur"
            }`}
          >
            <Scale className={`h-5 w-5 ${scrolled ? "text-gold" : "text-gold"}`} />
          </div>
          <div className="leading-tight">
            <div
              className={`font-serif text-lg font-bold ${scrolled ? "text-navy" : "text-white"}`}
            >
              Ripardo <span className="text-gold">&</span> Gondim
            </div>
            <div
              className={`text-[10px] uppercase tracking-[0.22em] ${
                scrolled ? "text-muted-foreground" : "text-white/70"
              }`}
            >
              Advogados Associados
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-navy/80 hover:text-navy"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy shadow-[0_10px_30px_-10px_oklch(0.735_0.115_82/0.6)] transition-transform hover:scale-105"
          >
            Agendar Atendimento
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden rounded-md p-2 ${scrolled ? "text-navy" : "text-white"}`}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg">
          <div className="container-x flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-navy hover:bg-secondary"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy"
            >
              Agendar Atendimento
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] w-full overflow-hidden"
    >
      <img
        src={heroJustice}
        alt="Estátua da Justiça"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/95 via-navy/85 to-navy-deep/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.735_0.115_82/0.15),transparent_60%)]" />

      <div className="relative container-x flex min-h-[100svh] items-center pt-28 pb-20">
        <div className="max-w-2xl reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            <span className="text-xs uppercase tracking-[0.22em] text-gold-soft">
              Direito Previdenciário
            </span>
          </div>

          <h1 className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-white">
            Especialistas em{" "}
            <span className="text-gradient-gold">Direito Previdenciário</span>
          </h1>

          <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-white/80">
            Há anos ajudando trabalhadores, aposentados e pensionistas a conquistarem seus
            direitos junto ao INSS com atendimento humanizado e resultados concretos.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-navy shadow-[0_20px_50px_-15px_oklch(0.735_0.115_82/0.7)] transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              Fale pelo WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <Instagram className="h-4 w-4" />
              Conheça nosso Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Badge selo */}
      <div className="absolute bottom-8 right-6 hidden md:block reveal">
        <div className="glass-card rounded-2xl px-5 py-4 shadow-2xl">
          <div className="flex items-center gap-1 text-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <div className="mt-1 text-sm font-semibold text-navy">Atendimento Humanizado</div>
          <div className="text-xs text-navy/60">Avaliado por nossos clientes</div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const bullets = [
    "Atendimento Humanizado",
    "Especialistas em Direito Previdenciário",
    "Equipe Qualificada",
    "Atendimento Presencial e Online",
  ];
  return (
    <section id="sobre" className="py-24 md:py-32 bg-cream">
      <div className="container-x grid gap-16 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-gold/20 to-navy/5 blur-2xl" />
          <img
            src={office}
            alt="Escritório Ripardo & Gondim"
            loading="lazy"
            width={1400}
            height={1000}
            className="w-full rounded-3xl object-cover shadow-[0_30px_80px_-30px_oklch(0.185_0.055_262/0.35)]"
          />
          <div className="absolute -bottom-6 -right-6 hidden md:block rounded-2xl bg-navy px-6 py-5 text-white shadow-xl">
            <div className="font-serif text-3xl font-bold text-gold">10+</div>
            <div className="text-xs uppercase tracking-widest text-white/70">Anos de excelência</div>
          </div>
        </div>

        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-navy/5 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-xs uppercase tracking-[0.22em] text-navy/70">Quem Somos</span>
          </div>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-navy leading-tight">
            Um escritório construído sobre{" "}
            <span className="text-gradient-gold">ética e resultados</span>.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            O Ripardo & Gondim Advogados Associados é referência em Direito Previdenciário,
            unindo experiência técnica, atendimento personalizado e compromisso absoluto com
            cada cliente. Trabalhamos para que trabalhadores, aposentados e pensionistas
            recebam com dignidade tudo aquilo a que têm direito perante o INSS.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Nossa filosofia combina ética profissional, transparência e excelência jurídica,
            proporcionando segurança e tranquilidade a quem confia sua causa ao escritório.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium text-navy">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Numbers() {
  const stats = [
    { value: "+3000", label: "Clientes Atendidos" },
    { value: "+95%", label: "Casos Resolvidos" },
    { value: "10+", label: "Anos de Experiência" },
    { value: "★★★★★", label: "Avaliação dos Clientes" },
  ];
  return (
    <section id="resultados" className="relative py-20 bg-navy overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.735_0.115_82/0.12),transparent_70%)]" />
      <div className="container-x relative">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-sm transition-transform hover:-translate-y-1"
            >
              <div className="font-serif text-4xl md:text-5xl font-bold text-gold">
                {s.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/70">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Areas() {
  const areas = [
    { icon: Award, title: "Aposentadorias", desc: "Por idade, tempo, especial ou por invalidez." },
    { icon: Stethoscope, title: "Auxílio-doença", desc: "Concessão, prorrogação e recursos administrativos." },
    { icon: HeartHandshake, title: "BPC/LOAS", desc: "Benefício assistencial a idosos e pessoas com deficiência." },
    { icon: Users, title: "Pensão por Morte", desc: "Concessão de pensão para dependentes." },
    { icon: RefreshCw, title: "Revisão de Benefícios", desc: "Recálculo e correção de valores pagos a menor." },
    { icon: CalendarClock, title: "Planejamento Previdenciário", desc: "Estratégia para a melhor aposentadoria possível." },
    { icon: Baby, title: "Salário-Maternidade", desc: "Concessão do benefício às seguradas." },
    { icon: Accessibility, title: "Benefício por Incapacidade", desc: "Análise técnica e defesa dos seus direitos." },
  ];
  return (
    <section id="areas" className="py-24 md:py-32 bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-navy/5 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-xs uppercase tracking-[0.22em] text-navy/70">
              Áreas de Atuação
            </span>
          </div>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-navy">
            Soluções jurídicas <span className="text-gradient-gold">previdenciárias</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Atuação completa em todas as demandas administrativas e judiciais junto ao INSS.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white p-7 transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_25px_50px_-20px_oklch(0.185_0.055_262/0.25)]"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-navy-deep text-gold">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-gold"
              >
                Saiba Mais
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const steps = [
    { n: "01", title: "Agende seu atendimento", desc: "Entre em contato pelo WhatsApp e marque uma conversa." },
    { n: "02", title: "Analisamos seu caso", desc: "Estudo completo dos seus documentos e histórico." },
    { n: "03", title: "Montamos sua estratégia", desc: "Definimos o melhor caminho jurídico para você." },
    { n: "04", title: "Entramos com seu pedido", desc: "Ingresso administrativo ou judicial conforme necessário." },
    { n: "05", title: "Você conquista seu benefício", desc: "Acompanhamento até a concessão definitiva do direito." },
  ];
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-navy/5 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-xs uppercase tracking-[0.22em] text-navy/70">Como Funciona</span>
          </div>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-navy">
            Um processo <span className="text-gradient-gold">transparente</span>
          </h2>
        </div>

        <div className="mt-16 relative mx-auto max-w-3xl">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
          <div className="space-y-8">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className={`relative flex md:items-center gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="md:w-1/2 md:px-10">
                  <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                    <div className="font-serif text-sm font-bold text-gold">Etapa {s.n}</div>
                    <h3 className="mt-1 font-serif text-xl font-semibold text-navy">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-navy text-xs font-bold text-gold ring-4 ring-cream">
                  {s.n}
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Differentials() {
  const items = [
    { icon: Zap, title: "Atendimento rápido", desc: "Retorno ágil às suas dúvidas." },
    { icon: Award, title: "Especialistas", desc: "Foco em Direito Previdenciário." },
    { icon: Laptop, title: "Atendimento Online", desc: "De qualquer lugar do Brasil." },
    { icon: Eye, title: "Processo transparente", desc: "Você acompanha cada passo." },
    { icon: Users, title: "Equipe experiente", desc: "Anos dedicados à causa." },
    { icon: ShieldCheck, title: "Acompanhamento completo", desc: "Do primeiro contato à conquista." },
  ];
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-navy/5 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-xs uppercase tracking-[0.22em] text-navy/70">Diferenciais</span>
          </div>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-navy">
            Por que escolher <span className="text-gradient-gold">nosso escritório</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-cream/60 p-7 transition-all hover:bg-white hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-navy">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  const team = [
    {
      name: "Dr. Ripardo",
      role: "Sócio Fundador",
      img: drRipardoAsset.url,
      desc: "Sócio Fundador e especialista em Direito Previdenciário, atuando na defesa dos direitos de aposentados, pensionistas e segurados do INSS, oferecendo atendimento humanizado e soluções jurídicas eficientes.",
    },
    {
      name: "Dra. Gondim",
      role: "Sócia Fundadora",
      img: draGondimAsset.url,
      desc: "Sócia Fundadora, dedicada ao atendimento personalizado e à condução estratégica dos processos previdenciários, sempre com ética, compromisso e excelência na defesa dos direitos dos clientes.",
    },
  ];
  return (
    <section id="equipe" className="py-24 md:py-32 bg-cream">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-navy/5 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-xs uppercase tracking-[0.22em] text-navy/70">Equipe</span>
          </div>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-navy">
            Sócios <span className="text-gradient-gold">Fundadores</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Uma equipe unida pela ética, pela técnica e pelo compromisso com quem confia sua causa
            ao escritório.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {team.map((m) => (
            <article
              key={m.name}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_-25px_oklch(0.185_0.055_262/0.25)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_80px_-25px_oklch(0.185_0.055_262/0.35)]"
            >
              <div className="relative aspect-square overflow-hidden bg-navy/5">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                  <div className="text-xs uppercase tracking-[0.22em] text-gold">{m.role}</div>
                  <h3 className="mt-1 font-serif text-3xl font-bold">{m.name}</h3>
                </div>
              </div>
              <div className="p-7">
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-navy-deep"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    Falar agora
                  </a>
                  <span className="text-xs text-muted-foreground">OAB • Direito Previdenciário</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      text: "Excelente atendimento. Sempre tiraram minhas dúvidas e consegui meu benefício graças ao escritório. Recomendo de olhos fechados.",
      name: "Maria S.",
      role: "Aposentada",
    },
    {
      text: "Muito profissionais, éticos e atenciosos. Meu processo correu com total transparência. Recomendo o escritório a todos.",
      name: "João P.",
      role: "Segurado do INSS",
    },
    {
      text: "Fui muito bem orientado do início ao fim. Um atendimento humanizado que faz toda a diferença. Gratidão à equipe.",
      name: "Ana R.",
      role: "Pensionista",
    },
  ];
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-navy/5 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-xs uppercase tracking-[0.22em] text-navy/70">Depoimentos</span>
          </div>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-navy">
            O que dizem <span className="text-gradient-gold">nossos clientes</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <div
              key={t.name}
              className="relative rounded-2xl border border-border bg-cream/50 p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <Quote className="h-8 w-8 text-gold/40" />
              <div className="mt-3 flex items-center gap-0.5 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-navy/80">{t.text}</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy font-serif text-sm font-bold text-gold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Instagram_Feed() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container-x">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-navy-deep px-8 py-16 md:px-16 md:py-20 text-center shadow-[0_30px_80px_-30px_oklch(0.185_0.055_262/0.45)]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.735_0.115_82/0.18),transparent_60%)]" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
              <Instagram className="h-3.5 w-3.5 text-gold" />
              <span className="text-xs uppercase tracking-[0.22em] text-gold-soft">
                @ripardoegondimadvogados
              </span>
            </div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl font-bold leading-tight text-white">
              Acompanhe nossos <span className="text-gradient-gold">conteúdos</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-white/75 leading-relaxed">
              Publicamos conteúdos sobre Direito, decisões relevantes, orientações jurídicas
              e novidades que podem fazer a diferença para você e sua empresa. Acompanhe
              nosso Instagram e fique por dentro.
            </p>
            <div className="mt-10">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-navy shadow-[0_20px_50px_-15px_oklch(0.735_0.115_82/0.7)] transition-transform hover:scale-105"
              >
                <Instagram className="h-4 w-4" />
                Seguir no Instagram
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "Quem pode se aposentar?",
      a: "Segurados que cumprem os requisitos de idade, tempo de contribuição, ou regras de transição da Reforma da Previdência. Avaliamos seu caso para indicar a melhor modalidade.",
    },
    {
      q: "Quanto tempo demora um processo?",
      a: "Depende da modalidade e da via escolhida (administrativa ou judicial). Em análises administrativas, prazos costumam variar de 45 a 180 dias.",
    },
    {
      q: "Posso recorrer de um benefício negado?",
      a: "Sim. Existe possibilidade de recurso administrativo junto ao INSS e, se necessário, ação judicial para garantir o benefício.",
    },
    {
      q: "Quanto custa a consulta?",
      a: "A consulta inicial pode ser agendada diretamente pelo WhatsApp. Nossos valores são apresentados de forma transparente após a análise do caso.",
    },
    {
      q: "É possível atendimento online?",
      a: "Sim. Atendemos clientes de todo o Brasil de forma 100% online, com o mesmo cuidado e qualidade do atendimento presencial.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-x max-w-3xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-navy/5 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-xs uppercase tracking-[0.22em] text-navy/70">FAQ</span>
          </div>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-navy">
            Perguntas <span className="text-gradient-gold">Frequentes</span>
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div
                key={it.q}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? "border-gold/40 bg-cream/50 shadow-sm"
                    : "border-border bg-white"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-serif text-base md:text-lg font-semibold text-navy">
                    {it.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-gold transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 -mt-1 text-sm text-muted-foreground leading-relaxed">
                    {it.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contato" className="relative py-24 md:py-32 bg-navy overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.735_0.115_82/0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.735_0.115_82/0.12),transparent_60%)]" />
      <div className="container-x relative text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5 text-gold" />
          <span className="text-xs uppercase tracking-[0.22em] text-gold-soft">
            Fale conosco agora
          </span>
        </div>
        <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl md:text-6xl font-bold leading-tight text-white">
          Precisa de ajuda para{" "}
          <span className="text-gradient-gold">garantir seus direitos?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-white/75">
          Nossa equipe está pronta para analisar seu caso com atenção, ética e a experiência
          que você merece.
        </p>
        <div className="mt-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-gold px-10 py-5 text-base font-semibold text-navy shadow-[0_25px_60px_-15px_oklch(0.735_0.115_82/0.7)] transition-transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            Falar no WhatsApp
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
              <Scale className="h-5 w-5 text-gold" />
            </div>
            <div>
              <div className="font-serif text-lg font-bold text-white">
                Ripardo <span className="text-gold">&</span> Gondim
              </div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-white/60">
                Advogados Associados
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed">
            Especialistas em Direito Previdenciário, dedicados à defesa dos direitos de
            trabalhadores, aposentados e pensionistas com ética e excelência.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-110"
            >
              <MessageCircle className="h-4 w-4" fill="white" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform hover:scale-110"
              style={{
                background:
                  "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
              }}
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-gold">Contato</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
              <span>BR-020, 1445-A, Tabapuá — Caucaia/CE</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                (85) 99196-1212
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
              <span>Seg – Sex • 08h às 18h</span>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-gold">Links rápidos</div>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-white transition-colors">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col md:flex-row items-center justify-between gap-3 py-6 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} Ripardo & Gondim Advogados Associados. Todos os direitos
            reservados.
          </div>
          <div>Especialistas em Direito Previdenciário</div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Numbers />
        <Areas />
        <Timeline />
        <Differentials />
        <Team />
        <Testimonials />
        <Instagram_Feed />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
