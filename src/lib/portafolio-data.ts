import { PortfolioContent, Language } from "@/types/portfolio.type";

export const timeCounter = (arg?: Date) => {
  const startDate = arg || new Date("2017-03-10");
  const now = new Date();
  const years = now.getFullYear() - startDate.getFullYear();
  return years;
};

export const portfolioContent: Record<Language, PortfolioContent> = {
  es: {
    nav: {
      pillars: "Arquitectura",
      experience: "Trayectoria",
      stack: "Stack & Herramientas",
      credentials: "Credenciales",
      contact: "Contacto",
    },
    hero: {
      roleBadge: "Senior Backend Engineer",
      scopeBadge: "FinTech • Regional Scope (AR & PY)",
      headline: {
        prefix: "Arquitectura backend y sistemas distribuidos de ",
        highlight: "alta disponibilidad",
        suffix: ".",
      },
      description:
        "Especializado en diseñar, escalar y liderar soluciones transaccionales de misión crítica. Conducción integral de punta a punta (E2E): desde el análisis de dominio y diseño técnico hasta la implementación y observabilidad de microservicios orientados a eventos para el sector financiero regional.",
      copyEmail: "Copiar Email de Contacto",
      emailCopied: "Email copiado al portapapeles",
      viewExperience: "Ver Trayectoria",
      githubLinkText: "github.com/gabrielmattesich",
      metrics: [
        {
          value: `+${timeCounter()} años`,
          label: "Experiencia Tech",
          accent: "white",
        },
        {
          value: "E2E",
          label: "Análisis, Diseño & Prod",
          accent: "emerald",
        },
        {
          value: "PCI DSS",
          label: "Estándares v3 & v4",
          accent: "white",
        },
        {
          value: "AR / PY",
          label: "Alcance Regional",
          accent: "cyan",
        },
      ],
    },
    pillars: {
      sectionTag: "// Principios de Ingeniería",
      title: "Filosofía Arquitectónica & Pilares",
      description:
        "Estrategias y patrones aplicados para garantizar que los sistemas toleren fallos, escalen horizontalmente y mantengan la integridad transaccional bajo demanda masiva.",
      items: [
        {
          id: "ddd-event-driven",
          title: "Domain-Driven Design (DDD) & Event-Driven",
          description:
            "Modelado explícito de límites contextuales (Bounded Contexts) y arquitecturas desacopladas mediante mensajería asíncrona. Reducción de dependencias rígidas y máxima autonomía de servicios.",
          tags: ["#EventStreaming", "#Hexagonal", "#CleanArchitecture"],
          icon: "layers",
        },
        {
          id: "resilience-concurrency",
          title: "Resiliencia & Concurrencia Masiva",
          description:
            "Diseño preventivo ante la falla: Circuit Breakers, idempotencia transaccional, rate limiting y estrategias de compensación para flujos de pago y operaciones financieras sensibles.",
          tags: ["#HighConcurrency", "#Idempotency", "#FaultTolerance"],
          icon: "activity",
        },
        {
          id: "cloud-native-observability",
          title: "Cloud-Native & Observabilidad Proactiva",
          description:
            "Ecosistemas orquestados en AWS. Instrumentación rigurosa con métricas, trazas distribuidas y alertas operativas (Datadog & Opsgenie) para garantizar el cumplimiento de SLOs y SLAs críticos.",
          tags: ["#AWS", "#Datadog", "#SLO_SLA", "#Containers"],
          icon: "cloud",
        },
        {
          id: "generative-ai-processes",
          title: "IA Generativa en Procesos de Negocio",
          description:
            "Ingeniería de LLMs y automatización inteligente de flujos documentales. Implementación de pipelines de análisis automatizado para mitigación de trabajo repetitivo y soporte a contracargos.",
          tags: ["#LLMs", "#Automation", "#DocumentPipelines"],
          icon: "cpu",
        },
      ],
    },
    experience: {
      sectionTag: "// Historial de Producción",
      title: "Experiencia Profesional",
      description:
        "Evolución técnica liderando soluciones de gran volumen en billeteras digitales y ecosistemas bancarios.",
      items: [
        {
          company: "Personal Pay",
          role: "Senior Backend Engineer & Technical Lead",
          period: "Julio 2025 - Presente",
          location: "Argentina & Paraguay",
          scopeBadge: "FinTech Regional",
          description:
            "Liderazgo y garantía de buenas prácticas en arquitecturas de software escalable. Responsable del ciclo de vida integral (E2E): desde el relevamiento, análisis técnico y diseño arquitectónico hasta la implementación y observabilidad de microservicios transaccionales para Argentina y Paraguay.",
          highlights: [
            "Definición de estándares de ingeniería, patrones de diseño y revisiones arquitectónicas para robustecer el ecosistema de microservicios.",
            "Diseño de soluciones desacopladas de baja latencia con alta disponibilidad para absorber demandas regionales recurrentes.",
            "Monitoreo continuo de salud operativa, métricas de confiabilidad y resiliencia transaccional.",
          ],
          tools: ["Microservicios", "AWS", "DDD", "Event-Driven", "Observabilidad"],
        },
        {
          company: "Naranja X",
          role: "Software Developer / Backend Specialist",
          period: "Noviembre 2022 - Abril 2025 (2 años 6 meses)",
          location: "Córdoba, Argentina",
          description:
            "Desarrollo de componentes centrales para el procesamiento de pagos y gestión operativa bajo altísima demanda transaccional.",
          highlights: [
            "Desarrollo e ingeniería del motor de procesamiento de pagos y herramientas de gestión de contracargos multimarca.",
            "Cumplimiento riguroso y adaptación a las certificaciones de estándares de la industria de tarjetas (PCI DSS v3 y v4).",
            "Creación de soluciones integrando IA generativa para análisis automatizado de documentos y optimización de flujos repetitivos.",
            "Definición de monitoreo proactivo y estrategias de observabilidad de producto en tiempo real.",
          ],
          tools: ["Payment Processors", "PCI DSS v4", "GenAI / LLMs", "Cloud Native"],
        },
        {
          company: "IncluIT",
          role: "Software Developer",
          period: "Noviembre 2019 - Noviembre 2022 (3 años 1 mes)",
          location: "Córdoba, Argentina",
          description:
            "Modernización y migración de plataformas monolíticas legacy hacia arquitecturas de microservicios nativas de la nube.",
          highlights: [
            "Desacoplamiento progresivo de código legacy hacia microservicios en contenedores con alta resiliencia.",
            "Diseño y construcción de APIs modernas para la transformación de modelos de negocio.",
            "Configuración de observabilidad con Datadog y gestión de incidentes operativos con Opsgenie.",
          ],
          tools: ["Legacy Modernization", "Docker", "Datadog", "Opsgenie"],
        },
        {
          company: "Infosistemas - Software y Web",
          role: "Software Developer",
          period: "Septiembre 2017 - Febrero 2019",
          location: "Río Cuarto, Córdoba",
          description:
            "Fundación en desarrollo e ingeniería: construcción de soluciones a medida, arquitectura de bases de datos relacionales y aplicaciones web para clientes corporativos.",
          highlights: [
            "Desarrollo de sistemas a medida y arquitectura de bases de datos relacionales.",
            "Colaboración con equipos interdisciplinarios en entregas de software para clientes comerciales.",
          ],
          tools: ["Bases de Datos", "JavaScript", "Arquitectura Web"],
        },
      ],
    },
    stack: {
      sectionTag: "// Caja de Herramientas",
      title: "Tech Stack & Especialidades",
      description:
        "Ecosistema técnico seleccionado por robustez, rendimiento y soporte empresarial.",
      showCalendarButton: "Ver Actividad GitHub",
      hideCalendarButton: "Ocultar Actividad GitHub",
      calendarTitle: "Contribuciones & Actividad en GitHub",
      categories: [
        {
          title: "Backend & Lenguajes",
          accentColor: "emerald",
          items: ["Python", "Node.js", "TypeScript", "NestJS", "FastAPI"],
        },
        {
          title: "Cloud & Infraestructura",
          accentColor: "cyan",
          items: ["AWS (ECS, EC2, Lambda)", "Docker", "Kubernetes", "CI/CD Pipelines", "CloudWatch"],
        },
        {
          title: "Arquitectura & Patrones",
          accentColor: "green",
          items: ["Domain-Driven Design (DDD)", "Event-Driven Architecture", "Arquitectura Hexagonal", "Microservicios", "REST APIs"],
        },
        {
          title: "Datos, Caching & Mensajería",
          accentColor: "purple",
          items: ["PostgreSQL", "Redis (Caching / PubSub)", "RabbitMQ", "AWS SQS/SNS", "Modelado Relacional"],
        },
        {
          title: "Observabilidad & FinTech",
          accentColor: "amber",
          items: ["Datadog", "Opsgenie", "PCI DSS v3 & v4", "OpenTelemetry", "SLAs / SLOs"],
        },
        {
          title: "IA Aplicada & Agentes",
          accentColor: "pink",
          items: ["LLMs Locales & APIs", "Automatización de Procesos", "Agentic Workflows", "Pipelines de Extracción"],
        },
      ],
    },
    credentials: {
      sectionTag: "// Formación Continua",
      title: "Certificaciones & Arquitectura",
      description:
        "Especializaciones avanzadas en diseño de sistemas, computación en la nube y tecnologías emergentes.",
      items: [
        {
          issuer: "Udemy",
          date: "Oct 2026",
          title: "Ingeniería de LLM: Domina IA, Modelos de Lenguaje y Agentes",
          skills: "Aptitudes: LLM locales, automatización de procesos y agentes cognitivos.",
          certId: "UC-8557c606-8a74...",
          dateAccent: "emerald",
        },
        {
          issuer: "Amazon Web Services",
          date: "Oct 2026",
          title: "AWS Cloud Technical Essentials",
          skills: "Aptitudes: Arquitectura de sistemas, computación en la nube y servicios core.",
          certId: "A50VBI5BL05F",
          dateAccent: "cyan",
        },
        {
          issuer: "Udemy",
          date: "Abr 2026",
          title: "Diseño de Sistemas a Gran Escala y Arquitectura de Software",
          skills: "Aptitudes: High scalability, particionamiento, resiliencia y SDLC empresarial.",
          certId: "UC-45b3197b-f289...",
          dateAccent: "emerald",
        },
        {
          issuer: "Udemy",
          date: "Feb 2026",
          title: "Arquitectura Software Moderna: DDD, Eventos, Microservicios",
          skills: "Aptitudes: Microservicios, arquitecturas reactivas y orientación al dominio.",
          certId: "UC-36cf7bd3-b90d...",
          dateAccent: "dim",
        },
        {
          issuer: "Coursera",
          date: "Jun 2026",
          title: "Understanding Stablecoins",
          skills: "Aptitudes: Finanzas descentralizadas, estabilidad monetaria y blockchain.",
          certId: "BW2SLXYJ5TDN",
          dateAccent: "dim",
        },
        {
          issuer: "Udemy",
          date: "Mar 2026",
          title: "Arquitectura Software Avanzada: Más allá de los patrones",
          skills: "Aptitudes: Diseño de sistemas complejos, trade-offs y decisiones técnicas.",
          certId: "UC-64ada62e-c709...",
          dateAccent: "dim",
        },
      ],
    },
    contact: {
      sectionTag: "Hablemos de Ingeniería",
      title: "¿Buscás escalar una plataforma crítica o liderar arquitectura backend?",
      description:
        "Disponible para roles de liderazgo técnico, diseño de arquitecturas distribuidas de alta demanda y consultoría técnica en FinTech.",
      copyEmail: "Copiar: mattesichgabriel@gmail.com",
      linkedinCta: "Conectar en LinkedIn",
      metaInfo: "Ubicación: Córdoba, Argentina • Disponibilidad: Híbrido / Remoto Global",
    },
    footer: {
      tagline: "High-Performance Distributed Systems.",
      backToTop: "↑ Top",
    },
  },
  en: {
    nav: {
      pillars: "Architecture",
      experience: "Experience",
      stack: "Stack & Tools",
      credentials: "Credentials",
      contact: "Contact",
    },
    hero: {
      roleBadge: "Senior Backend Engineer",
      scopeBadge: "FinTech • Regional Scope (AR & PY)",
      headline: {
        prefix: "Backend architecture and distributed systems with ",
        highlight: "high availability",
        suffix: ".",
      },
      description:
        "Specialized in designing, scaling, and leading mission-critical transactional solutions. End-to-end (E2E) technical leadership: from domain analysis and architecture design to the implementation and observability of event-driven microservices for the regional financial sector.",
      copyEmail: "Copy Contact Email",
      emailCopied: "Email copied to clipboard",
      viewExperience: "View Career History",
      githubLinkText: "github.com/gabrielmattesich",
      metrics: [
        {
          value: `+${timeCounter()} yrs`,
          label: "Tech Experience",
          accent: "white",
        },
        {
          value: "E2E",
          label: "Analysis, Design & Prod",
          accent: "emerald",
        },
        {
          value: "PCI DSS",
          label: "Standards v3 & v4",
          accent: "white",
        },
        {
          value: "AR / PY",
          label: "Regional Scope",
          accent: "cyan",
        },
      ],
    },
    pillars: {
      sectionTag: "// Engineering Principles",
      title: "Architectural Philosophy & Pillars",
      description:
        "Strategies and patterns applied to ensure systems tolerate failures, scale horizontally, and maintain transactional integrity under massive demand.",
      items: [
        {
          id: "ddd-event-driven",
          title: "Domain-Driven Design (DDD) & Event-Driven",
          description:
            "Explicit modeling of Bounded Contexts and decoupled architectures via asynchronous messaging. Elimination of rigid dependencies and maximized service autonomy.",
          tags: ["#EventStreaming", "#Hexagonal", "#CleanArchitecture"],
          icon: "layers",
        },
        {
          id: "resilience-concurrency",
          title: "Resilience & Massive Concurrency",
          description:
            "Preventive design for failure: Circuit Breakers, transactional idempotency, rate limiting, and compensation strategies for sensitive payment and financial workflows.",
          tags: ["#HighConcurrency", "#Idempotency", "#FaultTolerance"],
          icon: "activity",
        },
        {
          id: "cloud-native-observability",
          title: "Cloud-Native & Proactive Observability",
          description:
            "Orchestrated environments on AWS. Rigorous instrumentation with metrics, distributed tracing, and operational alerting (Datadog & Opsgenie) ensuring critical SLOs and SLAs.",
          tags: ["#AWS", "#Datadog", "#SLO_SLA", "#Containers"],
          icon: "cloud",
        },
        {
          id: "generative-ai-processes",
          title: "Generative AI in Business Workflows",
          description:
            "LLM engineering and intelligent automation of document workflows. Automated analysis pipelines to reduce repetitive tasks and assist in chargeback disputes.",
          tags: ["#LLMs", "#Automation", "#DocumentPipelines"],
          icon: "cpu",
        },
      ],
    },
    experience: {
      sectionTag: "// Production History",
      title: "Professional Experience",
      description:
        "Technical evolution leading high-volume solutions across digital wallets and banking ecosystems.",
      items: [
        {
          company: "Personal Pay",
          role: "Senior Backend Engineer & Technical Lead",
          period: "July 2025 - Present",
          location: "Argentina & Paraguay",
          scopeBadge: "Regional FinTech",
          description:
            "Leadership and standard enforcement for scalable software architectures. Responsible for the end-to-end (E2E) lifecycle: from technical assessment and architectural design to implementation and observability of transactional microservices across Argentina and Paraguay.",
          highlights: [
            "Definition of engineering standards, design patterns, and architectural reviews to strengthen the microservices ecosystem.",
            "Design of low-latency, highly available decoupled solutions handling recurrent regional traffic peaks.",
            "Continuous monitoring of operational health, reliability metrics, and transactional resilience.",
          ],
          tools: ["Microservices", "AWS", "DDD", "Event-Driven", "Observability"],
        },
        {
          company: "Naranja X",
          role: "Software Developer / Backend Specialist",
          period: "November 2022 - April 2025 (2 yrs 6 mos)",
          location: "Córdoba, Argentina",
          description:
            "Development of core components for high-demand payment processing and transactional operational management.",
          highlights: [
            "Engineering and core development of payment processing engine and multi-brand chargeback tools.",
            "Strict compliance and adaptation to payment card security standards (PCI DSS v3 & v4).",
            "Built generative AI solutions for automated document parsing and repetitive workflow optimization.",
            "Defined proactive monitoring and real-time product observability strategies.",
          ],
          tools: ["Payment Processors", "PCI DSS v4", "GenAI / LLMs", "Cloud Native"],
        },
        {
          company: "IncluIT",
          role: "Software Developer",
          period: "November 2019 - November 2022 (3 yrs 1 mo)",
          location: "Córdoba, Argentina",
          description:
            "Modernization and migration of legacy monolithic platforms into cloud-native microservices architectures.",
          highlights: [
            "Progressive decoupling of legacy code into resilient containerized microservices.",
            "Design and implementation of modern APIs driving business model transformations.",
            "Observability configuration with Datadog and operational incident management with Opsgenie.",
          ],
          tools: ["Legacy Modernization", "Docker", "Datadog", "Opsgenie"],
        },
        {
          company: "Infosistemas - Software y Web",
          role: "Software Developer",
          period: "September 2017 - February 2019",
          location: "Río Cuarto, Córdoba",
          description:
            "Engineering foundation: building bespoke business solutions, relational database design, and web applications for corporate clients.",
          highlights: [
            "Development of custom systems and relational database architectures.",
            "Close collaboration with cross-functional teams delivering client solutions.",
          ],
          tools: ["Databases", "JavaScript", "Web Architecture"],
        },
      ],
    },
    stack: {
      sectionTag: "// Developer Toolkit",
      title: "Tech Stack & Specialties",
      description:
        "Selected technical ecosystem proven for robustness, performance, and enterprise scale.",
      showCalendarButton: "View GitHub Activity",
      hideCalendarButton: "Hide GitHub Activity",
      calendarTitle: "GitHub Contributions & Activity",
      categories: [
        {
          title: "Backend & Languages",
          accentColor: "emerald",
          items: ["Python", "Node.js", "TypeScript", "NestJS", "FastAPI"],
        },
        {
          title: "Cloud & Infrastructure",
          accentColor: "cyan",
          items: ["AWS (ECS, EC2, Lambda)", "Docker", "Kubernetes", "CI/CD Pipelines", "CloudWatch"],
        },
        {
          title: "Architecture & Patterns",
          accentColor: "green",
          items: ["Domain-Driven Design (DDD)", "Event-Driven Architecture", "Hexagonal Architecture", "Microservices", "REST APIs"],
        },
        {
          title: "Data, Caching & Messaging",
          accentColor: "purple",
          items: ["PostgreSQL", "Redis (Caching / PubSub)", "RabbitMQ", "AWS SQS/SNS", "Relational Modeling"],
        },
        {
          title: "Observability & FinTech",
          accentColor: "amber",
          items: ["Datadog", "Opsgenie", "PCI DSS v3 & v4", "OpenTelemetry", "SLAs / SLOs"],
        },
        {
          title: "Applied AI & Agents",
          accentColor: "pink",
          items: ["Local LLMs & APIs", "Workflow Automation", "Agentic Workflows", "Extraction Pipelines"],
        },
      ],
    },
    credentials: {
      sectionTag: "// Continuous Learning",
      title: "Certifications & Architecture",
      description:
        "Advanced specializations in system design, cloud computing, and emerging technologies.",
      items: [
        {
          issuer: "Udemy",
          date: "Oct 2026",
          title: "LLM Engineering: Master AI, Large Language Models & Agents",
          skills: "Skills: Local LLMs, process automation, and cognitive agents.",
          certId: "UC-8557c606-8a74...",
          dateAccent: "emerald",
        },
        {
          issuer: "Amazon Web Services",
          date: "Oct 2026",
          title: "AWS Cloud Technical Essentials",
          skills: "Skills: System architecture, cloud computing, and core AWS services.",
          certId: "A50VBI5BL05F",
          dateAccent: "cyan",
        },
        {
          issuer: "Udemy",
          date: "Apr 2026",
          title: "Large Scale System Design & Software Architecture",
          skills: "Skills: High scalability, partitioning, resilience, and enterprise SDLC.",
          certId: "UC-45b3197b-f289...",
          dateAccent: "emerald",
        },
        {
          issuer: "Udemy",
          date: "Feb 2026",
          title: "Modern Software Architecture: DDD, Events, Microservices",
          skills: "Skills: Microservices, reactive architectures, and domain modeling.",
          certId: "UC-36cf7bd3-b90d...",
          dateAccent: "dim",
        },
        {
          issuer: "Coursera",
          date: "Jun 2026",
          title: "Understanding Stablecoins",
          skills: "Skills: Decentralized finance, monetary stability, and blockchain.",
          certId: "BW2SLXYJ5TDN",
          dateAccent: "dim",
        },
        {
          issuer: "Udemy",
          date: "Mar 2026",
          title: "Advanced Software Architecture: Beyond Patterns",
          skills: "Skills: Complex system design, architectural trade-offs, and tech strategy.",
          certId: "UC-64ada62e-c709...",
          dateAccent: "dim",
        },
      ],
    },
    contact: {
      sectionTag: "Let's Talk Engineering",
      title: "Looking to scale a critical platform or lead backend architecture?",
      description:
        "Available for technical leadership roles, high-concurrency distributed architecture design, and FinTech consulting.",
      copyEmail: "Copy: mattesichgabriel@gmail.com",
      linkedinCta: "Connect on LinkedIn",
      metaInfo: "Location: Córdoba, Argentina • Availability: Hybrid / Global Remote",
    },
    footer: {
      tagline: "High-Performance Distributed Systems.",
      backToTop: "↑ Top",
    },
  },
};

// Legacy support for existing references if any
export const pageData = {
  es: {
    title: "Gabriel Mattesich - Portfolio",
    description: "Portafolio de Gabriel Mattesich",
    location: "Córdoba, Argentina",
    contact: "mattesichgabriel@gmail.com",
    skills: [
      "Desarrollo de software",
      "Programación orientada a eventos",
      "Arquitectura de sistemas",
      "Cloud Native",
      "Microservicios",
      "DevOps",
      "Amazon web services",
      "Serverless",
      "TypeScript",
    ],
    experience: portfolioContent.es.experience.items,
  },
  en: {
    title: "Gabriel Mattesich - Portfolio",
    description: "Gabriel Mattesich's portfolio",
    location: "Córdoba, Argentina",
    contact: "mattesichgabriel@gmail.com",
    skills: [
      "Software development",
      "Event-driven programming",
      "Systems architecture",
      "Cloud Native",
      "Microservices",
      "DevOps",
      "Amazon web services",
      "Serverless",
      "TypeScript",
    ],
    experience: portfolioContent.en.experience.items,
  },
};
