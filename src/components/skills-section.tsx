"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Code2, Database, Cloud, GitBranch, Cpu, Layers } from "lucide-react";

interface SkillsSectionProps {
  language: "es" | "en";
}

const skillsData = {
  es: {
    title: "Stack Tecnológico",
    subtitle: "Tecnologías y herramientas con las que trabajo",
    categories: [
      {
        name: "Frontend",
        icon: Code2,
        color: "from-cyan-500 to-blue-500",
        skills: [
          "React", "Next.js", "TypeScript", "JavaScript",
          "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"
        ]
      },
      {
        name: "Backend",
        icon: Database,
        color: "from-purple-500 to-pink-500",
        skills: [
          "Node.js", "Express", "NestJS", "REST APIs",
          "GraphQL", "Microservices", "WebSockets"
        ]
      },
      {
        name: "Cloud & DevOps",
        icon: Cloud,
        color: "from-emerald-500 to-teal-500",
        skills: [
          "AWS", "Docker", "Kubernetes", "CI/CD",
          "GitHub Actions", "Terraform", "Serverless"
        ]
      },
      {
        name: "Database",
        icon: Layers,
        color: "from-orange-500 to-red-500",
        skills: [
          "PostgreSQL", "MongoDB", "Redis", "DynamoDB",
          "MySQL", "Prisma", "TypeORM"
        ]
      },
      {
        name: "Version Control",
        icon: GitBranch,
        color: "from-yellow-500 to-amber-500",
        skills: [
          "Git", "GitHub", "GitLab", "Bitbucket",
          "Git Flow", "Code Review"
        ]
      },
      {
        name: "Otros",
        icon: Cpu,
        color: "from-indigo-500 to-violet-500",
        skills: [
          "Python", "Testing", "Agile",
          "Scrum", "Clean Code", "Design Patterns"
        ]
      }
    ]
  },
  en: {
    title: "Tech Stack",
    subtitle: "Technologies and tools I work with",
    categories: [
      {
        name: "Frontend",
        icon: Code2,
        color: "from-cyan-500 to-blue-500",
        skills: [
          "React", "Next.js", "TypeScript", "JavaScript",
          "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"
        ]
      },
      {
        name: "Backend",
        icon: Database,
        color: "from-purple-500 to-pink-500",
        skills: [
          "Node.js", "Express", "NestJS", "REST APIs",
          "GraphQL", "Microservices", "WebSockets"
        ]
      },
      {
        name: "Cloud & DevOps",
        icon: Cloud,
        color: "from-emerald-500 to-teal-500",
        skills: [
          "AWS", "Docker", "Kubernetes", "CI/CD",
          "GitHub Actions", "Terraform", "Serverless"
        ]
      },
      {
        name: "Database",
        icon: Layers,
        color: "from-orange-500 to-red-500",
        skills: [
          "PostgreSQL", "MongoDB", "Redis", "DynamoDB",
          "MySQL", "Prisma", "TypeORM"
        ]
      },
      {
        name: "Version Control",
        icon: GitBranch,
        color: "from-yellow-500 to-amber-500",
        skills: [
          "Git", "GitHub", "GitLab",
          "Git Flow", "Code Review"
        ]
      },
      {
        name: "Others",
        icon: Cpu,
        color: "from-indigo-500 to-violet-500",
        skills: [
          "Python", "Testing", "Agile",
          "Scrum", "Clean Code", "Design Patterns"
        ]
      }
    ]
  }
};

export default function SkillsSection({ language }: SkillsSectionProps) {
  const content = skillsData[language];

  return (
    <section className="py-16 md:py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
            {content.title}
          </h2>
          <p className="text-slate-400 text-lg">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {content.categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 group hover:border-white/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-20`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 text-sm bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-slate-300 hover:text-white transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
