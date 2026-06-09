export const timeCounter = (arg?: Date) => {
  const startDate = arg || new Date("2017-03-10");
  const now = new Date();
  const years = now.getFullYear() - startDate.getFullYear();
  return years
}
export const pageData = {
  es: {
    title: "Gabriel Mattesich - Portfolio",
    description: "Portafolio de Gabriel Mattesich",
    location: "Córdoba, Argentina",
    contact: "",
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
      "AlgoKit"
    ],
    summary: `Llevo más de ${timeCounter()} años trabajando en el área de sistemas, desempeñando diferentes roles principalmente en desarrollo de software. Mi enfoque está en el crecimiento profesional y la superación de desafíos, tanto individuales como grupales, para avanzar al siguiente nivel.
  
  Me caracterizo por ser una persona predispuesta a colaborar, crear y hacer que las cosas pasen, siguiendo la bandera de que el buen clima y el respeto entre pares hace que todo se multiplique para bien.
  
  Ahora me gustaría agradecerte por estar leyendo esta presentación. 
  
  Si tienes alguna consulta o propuesta que nos pueda llevar a trabajar juntos, puedes usar los medios de contacto que he proporcionado en el menú de opciones.`,
    experience: [
      {
        company: "Personal Pay - Telecom",
        role: "Software Developer",
        period: "Julio 2025 - En curso",
        location: "Córdoba, Argentina",
        conclusion: "Trabajar a diario en soluciones que impactan en el dia a dia de las personas es una experiencia increíble y me permite crecer como profesional.",
        description: [
          "Desarrollo de soluciones utilizando microservicios.",
          "Desarrollo de soluciones utilizando arquitectura dirigida por eventos.",
        ]
      },
      {
        company: "Universidad Nacional de Cuyo - Facultad de Ciencias Agrarias",
        role: "Software Developer",
        period: "Noviembre 2025 - En curso",
        location: "Mendoza, Argentina",
        conclusion: "Trabajar en la gestión de software para investigación es una experiencia increíble. Permite aprender mucho y colaborar con profesores y estudiantes de diferentes áreas.",
        description: ["Gestión de software para investigación", "Colaboración con profesores y estudiantes"]
      },
      {
        company: "Naranja X",
        role: "Software Developer",
        period: "Noviembre de 2022 - Abril de 2025",
        location: "Córdoba, Argentina",
        conclusion:
          "Han sido años de un crecimiento vertiginoso, siguiendo los estándares de la industria potenciados por tecnologías modernas y una constante evolución en nuestro modelo de negocio lo que permitió desarrollar una flexibilidad increíble en esta área que evoluciona a un ritmo excepcional.",
        description: [
          "He colaborado en la creación y mantenimiento de sistemas de alta demanda asegurando alta disponibilidad.",
          "He colaborado en la creación de estrategias de monitoreo y operaciones de producto de alta demanda.",
          "He colaborado en todo este tiempo en diseño y desarrollo de soluciones nativas de la nube.",
          "He colaborado en la creación de procesadores de pago, herramientas de gestión de contracargos multimarcas.",
          "He colaborado en la creación de productos trabajando en conjunto con IA generativa para analizar documentos y automatizar tareas repetitivas.",
          "He colaborado en certificaciones de los estándares de la industria de tarjetas (PCI DSS v3 y v4).",
          "He colaborado en proyectos ágiles siguiendo metodologías como Scrum, lo cual nos permitía medir nuestro impacto como también facilitar la conclusión de nuestros objetivos.",
        ],
        tools: [
          "Desarrollo de software",
          "Arquitectura de sistemas",
          "Cloud Native",
          "DevOps",
          "Amazon web services",
          "Serverless",
          "TypeScript",
        ]
      },
      {
        company: "IncluIT",
        role: "Software Developer",
        period: "Noviembre de 2019 - Noviembre de 2022",
        location: "Córdoba, Argentina",
        conclusion: "Fueron años de mucho aprendizaje, acompañado de un grupo de profesionales excepcionales predispuestos a colaborar y crear impacto en diferentes areas. Me he desarrollado como desarrollador de software acompañado de una proactividad fomentada por el equipo de trabajo.",
        tools: [
          "Desarrollo de software",
          "Microservicios",
          "Amazon web services",
          "Serverless",
          "Javascript",
        ],
        description: [
          "Desarrollo de soluciones utilizando microservicios.",
          "Implementación de arquitectura dirigida por eventos.",
          "Monitoreo con Datadog y gestión de operaciones con Opsgenie.",
        ],
      },
      {
        company: "Infosistemas",
        role: "Software Developer",
        period: "Septiembre de 2017 - Febrero de 2019",
        location: "Río Cuarto, Córdoba, Argentina",
        conclusion: "El inicio, cuando ingresé a la universidad tuve la posibilidad de acceder a mi primera experiencia laboral (PPP: Un programa muy visionario de la provincia de Córdoba, Argentina. Donde fomenta que las empresas locales contraten potenciales profesionales de diferentes areas con financiamento del gobierno.), luego de mi primer cuatrimestre ya me encontraba llevando a cabo mis primeras lineas de código acompañado de un grupo de profesionales muy predipuestos a acompañarme en el crecimiento en esta nueva area para mi en aquel entonces.",
        tools: [
          "Desarrollo de software",
          "Genexus",
          "Javascript",
        ],
        description: ["Desarrollo de sistemas personalizados para clientes."],
      },
    ],
    education: [
      {
        center: 'Universidad Nacional Rio Cuarto',
        items: [
          { name: 'Analista en CS. de la computación', link: "https://www.exa.unrc.edu.ar/analistaencomputacion/", completed: false }
        ]
      },
      {
        center: 'Coursera',
        items: [
          { name: 'Aspectos fundamentales para profesionales de la nube de AWS', link: "https://www.coursera.org/learn/aws-cloud-practitioner-essentials", completed: true }
        ]
      },
      {
        center: 'Amazon Web Services',
        items: [
          { name: "Amazon Web Services (AWS) - Introducción a la arquitectura en AWS (Julio de 2023)", link: "https://www.linkedin.com/in/gabriel-mattesich/", completed: true },
          { name: "Amazon Web Services (AWS) - Desarrollo avanzado en AWS (Agosto de 2023)", link: "https://www.linkedin.com/in/gabriel-mattesich/", completed: true },
        ]
      },
      {
        center: 'Platzi',
        items: [
          { name: "Curso de Fundamentos de Arquitectura de Software", link: "https://platzi.com/p/GabrielMattesich/", completed: true },
          { name: "Curso de Introducción a los Patrones de Diseño de Software", link: "https://platzi.com/p/GabrielMattesich/", completed: true },
          { name: "Curso de Node.js Avanzado", link: "https://platzi.com/p/GabrielMattesich/", completed: true },
          { name: "Fundamentos de Arquitectura de AWS", link: "https://platzi.com/p/GabrielMattesich/curso/11652-course/diploma/detalle/", completed: true },
        ]
      }
    ],
    projects: [
      {
        title: "Plataforma Agrícola",
        description: 'Plataforma agrícola para administración de cultivos, trazabilidad de genéticas, y operaciones de cultivo',
        status: 'running',
        started: "01/01/2025",
        key: "AGRICULTURAL_SYSTEM_DEMO",
        technologies: ["Next.js", "TypeScript", "AWS", "DynamoDB", "Algorand", "OS Serverless framework"],
        demoAvailable: true
      }
    ],
    recommendations: `Gabriel ha demostrado ser un excelente colaborador, siempre enfocado en la calidad del software y la eficiencia en el trabajo en equipo. Su capacidad para enfrentar desafíos y su enfoque en el crecimiento personal y profesional lo destacan como un líder en el desarrollo de software.`,
  },
  en: {
    title: "Gabriel Mattesich - Portfolio",
    description: "Gabriel Mattesich's portfolio",
    location: "Córdoba, Argentina",
    contact: "",
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
      "AlgoKit"
    ],
    summary: `I have been working in the systems area for more than ${timeCounter()} years, performing different roles mainly in software development. My focus is on professional growth and overcoming challenges, both individual and group, to advance to the next level.
  
  I am characterized by being a person predisposed to collaborate, create and make things happen, following the flag that good climate and respect among peers makes everything multiply for good.
  
  Now I would like to thank you for reading this presentation.
  
  If you have any questions or proposals that could lead us to work together, you can use the contact methods I have provided in the options menu.`,
    experience: [
      {
        company: "Personal Pay - Telecom",
        role: "Software Developer",
        period: "July 2025 - Current",
        location: "Córdoba, Argentina",
        conclusion: "Work on daily solutions that impact the daily life of people is an incredible experience and allows me to grow as a professional.",
        description: [
          "Development of solutions using microservices.",
          "Development of solutions using event-driven architecture.",
        ]
      },
      {
        company: "Universidad Nacional de Cuyo - Facultad de Ciencias Agrarias",
        role: "Software Developer",
        period: "November 2022 - April 2025",
        location: "Mendoza, Argentina",
        conclusion: "Worked in the development of software for research, collaboration with professors and students is a great experience for me.",
        description: [
          "Management of software for research",
          "Collaboration with professors and students"
        ]
      },
      {
        company: "Naranja X",
        role: "Software Developer",
        period: "November 2022 - April 2025",
        location: "Córdoba, Argentina",
        conclusion:
          "These have been years of vertiginous growth, following industry standards powered by modern technologies and a constant evolution in our business model, which allowed us to develop incredible flexibility in this area that evolves at an exceptional pace.",
        description: [
          "I have contributed to the development and maintenance of high-demand systems, ensuring high availability.",
          "I have participated in the design and implementation of monitoring strategies and operational processes for high-demand products.",
          "I have been actively involved in the design and development of cloud-native solutions.",
          "I have played a key role in the development of payment processors and multi-brand chargeback management tools.",
          "I have collaborated in the creation of innovative products, leveraging generative AI to analyze documents and automate repetitive tasks.",
          "I have supported the certification process for industry-standard card security compliance (PCI DSS v3 and v4).",
          "I have collaborated on agile projects following methodologies such as Scrum, which allowed us to measure our impact as well as facilitate the achievement of our objectives.",
        ],
        tools: [
          "Software development",
          "Systems architecture",
          "Cloud Native",
          "DevOps",
          "Amazon web services",
          "Serverless",
          "TypeScript",
        ]
      },
      {
        company: "IncluIT",
        role: "Software Developer",
        period: "November 2019 - November 2022",
        location: "Córdoba, Argentina",
        conclusion: "It has been years of great learning, accompanied by a group of exceptional professionals willing to collaborate and create an impact in different areas. I have grown as a software developer, driven by a proactive mindset fostered by the team.",
        description: [
          "Development of solutions using microservices.",
          "Implementation of event-driven architecture.",
          "Monitoring with Datadog and operations management with Opsgenie.",
        ],
        tools: [
          "Software development",
          "Microservices",
          "Amazon web services",
          "Serverless",
          "JavaScript",
        ]
      },
      {
        company: "Infosistemas",
        role: "Software Developer",
        period: "September 2017 - February 2019",
        location: "Río Cuarto, Córdoba, Argentina",
        conclusion: "When I entered university, I had the opportunity to access my first work experience through the PPP program—a visionary initiative from the province of Córdoba, Argentina. This program encourages local companies to hire potential professionals from various fields with government funding. After my first semester, I was already writing my first lines of code, supported by a team of highly committed professionals who guided me in my growth within this new field at the time.",
        tools: [
          "Software development",
          "Genexus",
          "JavaScript",
        ],
        description: ["Development of custom systems for clients."],
      },
    ],
    education: [
      {
        center: 'Universidad Nacional Rio Cuarto',
        items: [
          { name: 'Computer Science', link: "https://www.exa.unrc.edu.ar/analistaencomputacion/", completed: false }
        ]

      },
      {
        center: 'Coursera',
        items: [
          { name: 'AWS Cloud Practitioner Essentials', link: "https://www.coursera.org/learn/aws-cloud-practitioner-essentials", completed: true }
        ]
      },

      {
        center: 'Amazon Web Services',
        items: [
          { name: "Amazon Web Services (AWS) - Introduction to AWS architecture (July 2023)", link: "https://www.linkedin.com/in/gabriel-mattesich/", completed: true },
          { name: "Amazon Web Services (AWS) - Advanced development in AWS (August 2023)", link: "https://www.linkedin.com/in/gabriel-mattesich/", completed: true },
        ]
      },
      {
        center: 'Platzi',
        items: [
          { name: "Software Architecture Fundamentals Course", link: "https://platzi.com/p/GabrielMattesich/", completed: true },
          { name: "Introduction to Software Design Patterns Course", link: "https://platzi.com/p/GabrielMattesich/", completed: true },
          { name: "Advanced Node.js Course", link: "https://platzi.com/p/GabrielMattesich/", completed: true },
          { name: "Fundamentals of AWS Architecture Course", link: "https://platzi.com/p/GabrielMattesich/curso/11652-course/diploma/detalle/", completed: true },
        ]
      }
    ],
    projects: [
      {
        title: "Agricultural Platform",
        description: 'Agricultural platform for crop management, genetics tracking, and farming operations',
        status: 'running',
        started: "01/01/2025",
        key: "AGRICULTURAL_SYSTEM_DEMO",
        technologies: ["Next.js", "TypeScript", "AWS", "DynamoDB", "Algorand", "OS Serverless framework"],
        demoAvailable: true
      }
    ],
    recommendations: `Gabriel has proven to be an excellent collaborator, always focused on software quality and efficiency in teamwork. His ability to face challenges and his focus on personal and professional growth highlight him as a leader in software development.`,
  },
}




