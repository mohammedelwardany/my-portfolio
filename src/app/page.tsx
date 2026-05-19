"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaLinkedin, FaGithub, FaCode, FaServer, FaDatabase, FaTools, FaMagic } from "react-icons/fa";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiRedux,
  SiPython,
  SiFlask,
  SiJavascript,
  SiExpress,
  SiPrisma,
  SiDocker,
  SiVercel,
  SiVite
} from "react-icons/si";
import siteConfig from "../../config.json";

const techIcons: { [key: string]: React.ComponentType<any> } = {
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  "PostgreSQL": SiPostgresql,
  "TypeScript": SiTypescript,
  "React": SiReact,
  "Tailwind CSS": SiTailwindcss,
  "MongoDB": SiMongodb,
  "Redux": SiRedux,
  "Python": SiPython,
  "Flask": SiFlask,
  "JavaScript": SiJavascript,
  "Express": SiExpress,
  "Prisma": SiPrisma,
  "Docker": SiDocker,
  "Vercel": SiVercel,
  "Vite": SiVite,
};

const techColors: { [key: string]: string } = {
  "Next.js": "text-white",
  "Node.js": "text-[#339933]",
  "PostgreSQL": "text-[#4169e1]",
  "TypeScript": "text-[#3178c6]",
  "React": "text-[#61dafb]",
  "Tailwind CSS": "text-[#06b6d4]",
  "MongoDB": "text-[#47a248]",
  "Redux": "text-[#764abc]",
  "Python": "text-[#3776ab]",
  "Flask": "text-white",
  "JavaScript": "text-[#f7df1e]",
  "Express": "text-white",
  "Prisma": "text-white",
  "Docker": "text-[#2496ed]",
  "Vercel": "text-white",
  "Vite": "text-[#646cff]",
};

const categoryIcons: { [key: string]: React.ComponentType<any> } = {
  "Frontend": FaCode,
  "Backend": FaServer,
  "Databases & ORM": FaDatabase,
  "Tools & Architecture": FaTools,
  "AI & Productivity": FaMagic,
};

interface NavItem {
  name: string;
  href: string;
}

interface StatItem {
  value: string;
  label: string;
  icon: string;
}

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  image: string;
  link?: string;
  technologies?: string[];
}

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Navigation */}
      <nav className="flex items-center justify-between py-6 md:py-10 relative z-50">
        <div className="flex-1">
          <span className="text-xl font-bold text-textMain tracking-wide whitespace-nowrap">
            {siteConfig.personal.name}
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-center gap-12 text-sm font-medium text-textMain flex-[2]">
          {siteConfig.nav.map((item: NavItem, idx: number) => (
            <a key={idx} href={item.href} className="hover:text-primary transition-colors whitespace-nowrap">
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex flex-1 justify-end">
          <a
            href={siteConfig.personal.cvPath}
            download
            className="bg-primary text-white px-8 py-3 rounded-md text-sm font-semibold hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20 whitespace-nowrap"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-textMain hover:text-primary focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border border-card/50 shadow-xl rounded-2xl p-6 flex flex-col gap-4 mt-2 md:hidden">
            {siteConfig.nav.map((item: NavItem, idx: number) => (
              <a
                key={idx}
                href={item.href}
                className="text-textMain hover:text-primary transition-colors text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href={siteConfig.personal.cvPath}
              download
              className="bg-primary text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20 text-center mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Download CV
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main id="about" className="relative pt-12 md:pt-20 pb-20 md:pb-32 flex flex-col lg:flex-row items-center justify-between scroll-mt-20">
        <div className="lg:w-1/2 z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-card text-primary text-sm font-medium mb-6">
            Welcome! I&apos;m
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-textMain leading-tight mb-4">
            {siteConfig.personal.name}
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl text-textMuted mb-6 md:mb-8">
            {siteConfig.personal.role}
          </h2>
          <p className="text-textMuted max-w-lg leading-relaxed mb-8 md:mb-10 text-base md:text-lg px-4 lg:px-0">
            {siteConfig.personal.description}
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a href="#contact" className="bg-primary text-white px-6 py-3 md:px-8 md:py-4 rounded-md font-semibold hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20">
              Let&apos;s Contact
            </a>
            <a href={siteConfig.personal.cvPath} download className="bg-card text-textMain border border-card/50 px-6 py-3 md:px-8 md:py-4 rounded-md font-semibold hover:bg-card/80 hover:border-primary/50 transition-all">
              Download CV
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 w-full relative flex flex-col items-center lg:justify-center mt-16 lg:mt-0">
          {/* Decorative background shapes */}
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl w-64 h-64 md:w-96 md:h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[28rem] lg:h-[28rem] rounded-full border-4 border-card overflow-hidden z-10 bg-primary shadow-2xl shrink-0">
            <Image
              src={siteConfig.personal.avatar}
              alt={siteConfig.personal.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Social Links Desktop (Vertical) */}
          <div className="hidden lg:flex absolute -right-4 lg:-right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 text-textMuted">
            <span className="[writing-mode:vertical-lr] text-[10px] tracking-[0.3em] uppercase mb-8">
              Follow Me
            </span>
            <a href={siteConfig.personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-xl">
              <FaLinkedin />
            </a>
            <a href={siteConfig.personal.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-xl">
              <FaGithub />
            </a>
          </div>

          {/* Social Links Mobile (Horizontal) */}
          <div className="lg:hidden flex items-center justify-center gap-8 mt-12 text-textMuted z-10">
            <a href={siteConfig.personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-2xl">
              <FaLinkedin />
            </a>
            <a href={siteConfig.personal.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-2xl">
              <FaGithub />
            </a>
          </div>
        </div>
      </main>

      {/* Services Section */}
      <section id="services" className="scroll-mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 py-12 border-y border-card/50">
          {siteConfig.stats.map((stat: StatItem, idx: number) => (
            <div key={idx} className="bg-card p-4 md:p-8 rounded-xl flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-primary/20 shadow-lg">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-background rounded-full flex items-center justify-center text-primary mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-textMain mb-1 md:mb-2">{stat.value}</h3>
              <p className="text-textMuted text-xs md:text-sm font-medium uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="py-16 md:py-24 border-b border-card/50 scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-4 md:mb-6">{siteConfig.skills.title}</h2>
          <p className="text-textMuted text-base md:text-lg">
            {siteConfig.skills.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {siteConfig.skills.categories.map((category: any, idx: number) => {
            const Icon = categoryIcons[category.name] || FaCode;
            return (
              <div 
                key={idx} 
                className={`bg-card p-6 md:p-8 rounded-2xl border border-card/50 hover:border-primary/30 transition-all duration-300 shadow-xl group flex flex-col ${
                  idx === 3 ? "lg:col-span-1 md:col-span-1" : ""
                } ${
                  idx === 4 ? "lg:col-span-2 md:col-span-2 lg:flex-row lg:items-center lg:justify-between gap-6" : ""
                }`}
              >
                <div className={idx === 4 ? "lg:max-w-xs" : ""}>
                  <div className="flex items-center gap-3 mb-4 md:mb-6">
                    <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-textMain">{category.name}</h3>
                  </div>
                </div>
                <div className={`flex flex-wrap gap-2 ${idx === 4 ? "lg:flex-1 lg:justify-end" : ""}`}>
                  {category.items.map((item: string, sIdx: number) => (
                    <span 
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg bg-background/50 border border-card/85 text-xs md:text-sm text-textMuted hover:text-textMain hover:border-primary/30 hover:bg-card transition-colors duration-300 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 md:py-24 scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6 md:gap-8 text-center md:text-left">
          <div className="max-w-xl mx-auto md:mx-0">
            <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-4 md:mb-6">{siteConfig.portfolio.title}</h2>
            <p className="text-textMuted text-base md:text-lg leading-relaxed">
              {siteConfig.portfolio.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {siteConfig.portfolio.projects.map((project: ProjectItem) => (
            <Link key={project.id} href={project.link || "#"} className="group relative rounded-2xl overflow-hidden bg-card aspect-square border border-card/50 hover:border-primary/30 transition-colors block">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
                <span className="text-primary text-xs md:text-sm font-medium mb-2">{project.category}</span>
                <h3 className="text-xl md:text-2xl font-bold text-textMain flex items-center gap-2">
                  {project.title}
                  <svg className="w-5 h-5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all sm:-translate-x-4 sm:group-hover:translate-x-0 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </h3>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3 z-20">
                    {project.technologies.map((tech: string) => {
                      const IconComponent = techIcons[tech];
                      const colorClass = techColors[tech] || "text-textMain";
                      return (
                        <span
                          key={tech}
                          className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/5 shadow-sm hover:scale-110 hover:bg-white/20 hover:border-primary/40 transition-all duration-300"
                          title={tech}
                        >
                          {IconComponent ? (
                            <IconComponent className={`w-4 h-4 ${colorClass}`} />
                          ) : (
                            <span className="text-[10px] font-semibold text-textMain">{tech}</span>
                          )}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Experiences Section */}
      <section id="blog" className="py-16 md:py-24 border-t border-card/50 scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-4 md:mb-6">{siteConfig.experiences.title}</h2>
          <p className="text-textMuted text-base md:text-lg">
            {siteConfig.experiences.description}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute top-[2.25rem] left-0 w-full h-0.5 bg-card"></div>
          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-[19px] top-4 bottom-4 w-0.5 bg-card"></div>

          <div className="flex flex-col md:grid md:grid-cols-4 gap-8 md:gap-6 relative z-10">
            {siteConfig.experiences.timeline.map((exp: TimelineItem, idx: number) => (
              <div key={idx} className="flex flex-row md:flex-col items-start md:items-center group pl-12 md:pl-0 relative">
                {/* Mobile Dot */}
                <div className="md:hidden absolute left-4 top-2 w-4 h-4 rounded-full bg-card border-4 border-background group-hover:bg-primary transition-colors shadow-sm -translate-x-1/2"></div>
                
                <div className="flex-1 md:flex-none flex flex-col items-start md:items-center text-left md:text-center w-full">
                  <div className="bg-card px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium text-textMuted mb-2 md:mb-6 border border-card/50 group-hover:text-primary group-hover:border-primary/30 transition-colors">
                    {exp.year}
                  </div>
                  {/* Desktop Dot */}
                  <div className="hidden md:block w-4 h-4 rounded-full bg-card border-4 border-background mb-4 md:mb-6 group-hover:bg-primary transition-colors shadow-sm"></div>
                  <h3 className="text-base md:text-xl font-bold text-textMain mb-1 md:mb-2">{exp.title}</h3>
                  <p className="text-textMuted text-sm">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 border-t border-card/50 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-4 md:mb-6">{siteConfig.contact.title}</h2>
            <p className="text-textMuted text-base md:text-lg mb-8 md:mb-12">
              {siteConfig.contact.description}
            </p>

            <div className="space-y-6 md:space-y-8 flex flex-col items-center lg:items-start text-left">
              <div className="flex items-start gap-4 w-full max-w-sm lg:max-w-none">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-card flex items-center justify-center text-primary shrink-0">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="text-textMain font-semibold mb-1 text-sm md:text-base">Phone</h4>
                  <p className="text-textMuted text-sm md:text-base">{siteConfig.contact.info.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 w-full max-w-sm lg:max-w-none">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-card flex items-center justify-center text-primary shrink-0">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="text-textMain font-semibold mb-1 text-sm md:text-base">Email</h4>
                  <p className="text-textMuted text-sm md:text-base break-all">{siteConfig.contact.info.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 w-full max-w-sm lg:max-w-none">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-card flex items-center justify-center text-primary shrink-0">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-textMain font-semibold mb-1 text-sm md:text-base">Address</h4>
                  <p className="text-textMuted text-sm md:text-base max-w-xs">{siteConfig.contact.info.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 md:p-8 rounded-2xl border border-card/50">
            <h3 className="text-xl md:text-2xl font-bold text-textMain mb-6 md:mb-8 text-center lg:text-left">Drop a Line</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get("name");
                const email = formData.get("email");
                const subject = formData.get("subject");
                const message = formData.get("message");
                const mailtoUrl = `mailto:${siteConfig.contact.info.email}?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
                window.location.href = mailtoUrl;
              }}
              className="space-y-4 md:space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <input name="name" type="text" placeholder="Your Name" required className="bg-background border border-card rounded-md px-4 py-3 text-sm md:text-base text-textMain focus:outline-none focus:border-primary/50 transition-colors w-full" />
                <input name="email" type="email" placeholder="Your Email" required className="bg-background border border-card rounded-md px-4 py-3 text-sm md:text-base text-textMain focus:outline-none focus:border-primary/50 transition-colors w-full" />
              </div>
              <input name="subject" type="text" placeholder="Subject" required className="bg-background border border-card rounded-md px-4 py-3 text-sm md:text-base text-textMain focus:outline-none focus:border-primary/50 transition-colors w-full" />
              <textarea name="message" placeholder="Message" rows={4} required className="bg-background border border-card rounded-md px-4 py-3 text-sm md:text-base text-textMain focus:outline-none focus:border-primary/50 transition-colors w-full resize-none"></textarea>
              <button type="submit" className="w-full sm:w-auto bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20">
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 md:py-12 border-t border-card/50 flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-textMain mb-2">Let&apos;s Say Hi</h2>
        <a href={`mailto:${siteConfig.contact.info.email}`} className="text-textMuted hover:text-primary transition-colors mb-6 md:mb-8 text-sm md:text-base">
          {siteConfig.contact.info.email}
        </a>
        <div className="flex items-center gap-4 text-textMuted">
          <a href={siteConfig.personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-primary hover:text-white transition-all text-xl">
            <FaLinkedin />
          </a>
          <a href={siteConfig.personal.socials.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-primary hover:text-white transition-all text-xl">
            <FaGithub />
          </a>
        </div>
      </footer>
    </div>
  );
}

