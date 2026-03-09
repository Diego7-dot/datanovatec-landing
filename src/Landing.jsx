import { motion } from "framer-motion";
import landingImg from "./assets/images/Landing_2.jpg";
import dashboardImg from "./assets/images/Dashboard_1.jpg";
import automationImg from "./assets/images/Automate_1.jpg";
import {
  MessageCircle,
  BarChart3,
  Globe,
  Zap,
  Layers3,
  CheckCircle2,
} from "lucide-react";

export default function DataNovaTechLanding() {
  const services = [
    {
      title: "Landing Pages Premium",
      description:
        "Diseñamos páginas modernas, rápidas y enfocadas en captar clientes reales.",
      icon: <Globe className="h-9 w-9 text-cyan-300" />,
    },
    {
      title: "Desarrollo Web",
      description:
        "Creamos sitios web profesionales que combinan diseño, rendimiento y funcionalidad.",
      icon: <Layers3 className="h-9 w-9 text-blue-300" />,
    },
    {
      title: "Dashboards y BI",
      description:
        "Convertimos datos en paneles claros para decisiones empresariales.",
      icon: <BarChart3 className="h-9 w-9 text-cyan-300" />,
    },
    {
      title: "Automatización",
      description:
        "Optimizamos procesos repetitivos para mejorar productividad.",
      icon: <Zap className="h-9 w-9 text-amber-300" />,
    },
  ];

  const portfolio = [
    {
      title: "Landing empresarial",
      text: "Diseño optimizado para generar clientes, destacar servicios y facilitar el contacto inmediato.",
      image: landingImg,
    },
    {
      title: "Dashboard ejecutivo",
      text: "Visualización de métricas y KPIs empresariales para una lectura más clara del negocio.",
      image: dashboardImg,
    },
    {
      title: "Automatización de procesos",
      text: "Flujos automáticos para reducir tareas manuales y mejorar tiempos de respuesta.",
      image: automationImg,
    },
  ];

  const benefits = [
    "Diseño moderno y profesional",
    "Enfoque en ventas y captación de clientes",
    "Experiencia adaptable a móvil y escritorio",
    "Integración con WhatsApp para contacto inmediato",
  ];

  const plans = [
    {
      name: "Básico",
      description: "Ideal para empezar con presencia digital profesional.",
      price: "$499.000",
      features: [
        "Landing de una página",
        "Botón de WhatsApp",
        "Diseño responsive",
      ],
      highlight: false,
    },
    {
      name: "Profesional",
      description: "La mejor opción para empresas que quieren vender más.",
      price: "$899.000",
      features: [
        "Landing completa",
        "Sección de portafolio",
        "WhatsApp integrado",
        "Diseño más premium",
      ],
      highlight: true,
    },
    {
      name: "Premium",
      description: "Para marcas que quieren una imagen más fuerte y completa.",
      price: "$1.490.000",
      features: [
        "Todo lo anterior",
        "Animaciones visuales",
        "Bloques personalizados",
        "Soporte y ajustes",
      ],
      highlight: false,
    },
  ];

  const whatsappNumber = "573134673131";
  const whatsappMessage = encodeURIComponent(
    "Hola, quiero información sobre sus servicios digitales."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#08142e] via-[#0a2f6b] to-[#0b63c9] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.22),transparent_28%)]"></div>
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.18),transparent_30%)]"></div>
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_45%)]"></div>
        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:22px_22px]"></div>
      </div>

      <div className="relative z-10">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <div>
              <h1 className="text-2xl font-extrabold tracking-wide text-white">
                DataNovaTec
              </h1>
              <p className="text-sm text-slate-300">
                Soluciones tecnológicas y análisis de datos
              </p>
            </div>

            <div className="hidden items-center gap-6 md:flex">
              <a
                href="#servicios"
                className="text-sm font-medium text-slate-200 transition hover:text-cyan-300"
              >
                Servicios
              </a>
              <a
                href="#portafolio"
                className="text-sm font-medium text-slate-200 transition hover:text-cyan-300"
              >
                Portafolio
              </a>
              <a
                href="#planes"
                className="text-sm font-medium text-slate-200 transition hover:text-cyan-300"
              >
                Planes
              </a>
              <a
                href="#contacto"
                className="text-sm font-medium text-slate-200 transition hover:text-cyan-300"
              >
                Contacto
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-2 font-semibold text-white shadow-lg transition hover:bg-[#1ebe5d]"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </header>

        <section className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-white/10 px-4 py-2 text-sm font-medium text-cyan-200 shadow-lg backdrop-blur-md">
              Impulsa tu negocio con tecnología moderna
            </span>

            <h2 className="mt-6 text-5xl font-black leading-tight text-white md:text-6xl">
              Diseñamos experiencias digitales que hacen que tu marca
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-200 bg-clip-text text-transparent">
                se vea premium y venda más
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg text-slate-200">
              Creamos landing pages, sitios web, dashboards y automatizaciones
              pensadas para transmitir confianza y generar clientes reales.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl bg-[#25D366] px-7 py-3.5 font-semibold text-white shadow-lg shadow-green-500/30 transition hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
              >
                <MessageCircle className="h-5 w-5" />
                Hablar por WhatsApp
              </a>

              <a
                href="#servicios"
                className="rounded-xl border border-white/15 bg-white/10 px-7 py-3.5 font-semibold text-white shadow-sm backdrop-blur-md transition hover:bg-white/15"
              >
                Ver servicios
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
            <p className="text-sm text-slate-300">Impacto visual</p>

            <div className="mt-3 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 p-5 text-white shadow-lg">
              <p className="text-sm text-cyan-50">
                Diseño pensado para transmitir confianza
              </p>
              <p className="mt-2 text-2xl font-bold">Landing premium</p>
            </div>
          </div>
        </section>

        <section id="servicios" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
              Servicios
            </p>
            <h3 className="mt-3 text-4xl font-bold text-white">
              Lo que podemos construir para tu empresa
            </h3>
            <p className="mt-4 text-slate-200">
              Creamos soluciones digitales enfocadas en imagen profesional y crecimiento empresarial.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/15 hover:shadow-2xl"
              >
                {service.icon}
                <h4 className="mt-4 text-xl font-bold text-white">{service.title}</h4>
                <p className="mt-2 text-sm leading-7 text-slate-200">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="portafolio" className="mx-auto max-w-7xl px-6 pb-20">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
              Portafolio
            </p>
            <h3 className="mt-3 text-4xl font-bold text-white">
              Proyectos y soluciones visuales
            </h3>
            <p className="mt-4 text-slate-200">
              Ejemplos del tipo de soluciones que podemos construir para potenciar tu empresa.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {portfolio.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl backdrop-blur-md"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">
                  <h4 className="text-xl font-bold text-white">{item.title}</h4>
                  <p className="mt-2 leading-7 text-slate-200">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}