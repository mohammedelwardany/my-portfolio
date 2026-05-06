import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import siteConfig from "../../config.json";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Navigation */}
      <nav className="flex items-center justify-between py-10">
        <div className="flex-1">
          <span className="text-xl font-bold text-textMain tracking-wide whitespace-nowrap">
            {siteConfig.personal.name}
          </span>
        </div>

        <div className="hidden md:flex items-center justify-center gap-12 text-sm font-medium text-textMain flex-[2]">
          {siteConfig.nav.map((item: any, idx: number) => (
            <a key={idx} href={item.href} className="hover:text-primary transition-colors whitespace-nowrap">
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex-1 flex justify-end">
          <a 
            href={siteConfig.personal.cvPath} 
            download 
            className="bg-primary text-white px-8 py-3 rounded-md text-sm font-semibold hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20 whitespace-nowrap"
          >
            Download CV
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main id="about" className="relative pt-20 pb-32 flex flex-col lg:flex-row items-center justify-between scroll-mt-20">
        <div className="lg:w-1/2 z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-card text-primary text-sm font-medium mb-6">
            Welcome! I&apos;m
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold text-textMain leading-tight mb-4">
            {siteConfig.personal.name}
          </h1>
          <h2 className="text-xl lg:text-2xl text-textMuted mb-8">
            {siteConfig.personal.role}
          </h2>
          <p className="text-textMuted max-w-lg leading-relaxed mb-10 text-lg">
            {siteConfig.personal.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="bg-primary text-white px-8 py-4 rounded-md font-semibold hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20">
              Let&apos;s Contact
            </a>
            <a href={siteConfig.personal.cvPath} download className="bg-card text-textMain border border-card/50 px-8 py-4 rounded-md font-semibold hover:bg-card/80 hover:border-primary/50 transition-all">
              Download CV
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 relative flex justify-center mt-16 lg:mt-0">
          {/* Decorative background shapes */}
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative w-80 h-80 lg:w-[28rem] lg:h-[28rem] rounded-full border-4 border-card overflow-hidden z-10 bg-primary shadow-2xl">
            <Image
              src={siteConfig.personal.avatar}
              alt={siteConfig.personal.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Social Links Vertical */}
          <div className="absolute right-0 lg:-right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 text-textMuted">
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
        </div>
      </main>

      {/* Services Section */}
      <section id="services" className="scroll-mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 border-y border-card/50">
          {siteConfig.stats.map((stat: any, idx: number) => (
            <div key={idx} className="bg-card p-8 rounded-xl flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-primary/20 shadow-lg">
              <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-textMain mb-2">{stat.value}</h3>
              <p className="text-textMuted text-sm font-medium uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-textMain mb-6">{siteConfig.portfolio.title}</h2>
            <p className="text-textMuted text-lg leading-relaxed">
              {siteConfig.portfolio.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.portfolio.projects.map((project: any) => (
            <Link key={project.id} href={project.link || "#"} className="group relative rounded-2xl overflow-hidden bg-card aspect-square border border-card/50 hover:border-primary/30 transition-colors block">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-primary text-sm font-medium mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold text-textMain flex items-center gap-2">
                  {project.title}
                  <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </h3>
              </div>
            </Link>
          ))}
        </div>
        

      </section>

      {/* Experiences Section / Blog placeholder */}
      <section id="blog" className="py-24 border-t border-card/50 scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-textMain mb-6">{siteConfig.experiences.title}</h2>
          <p className="text-textMuted text-lg">
            {siteConfig.experiences.description}
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-card -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {siteConfig.experiences.timeline.map((exp: any, idx: number) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="bg-card px-4 py-2 rounded-full text-sm font-medium text-textMuted mb-6 border border-card/50 group-hover:text-primary group-hover:border-primary/30 transition-colors">
                  {exp.year}
                </div>
                <div className="w-4 h-4 rounded-full bg-card border-4 border-background mb-6 group-hover:bg-primary transition-colors shadow-sm"></div>
                <h3 className="text-xl font-bold text-textMain mb-2">{exp.title}</h3>
                <p className="text-textMuted text-center text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 border-t border-card/50 scroll-mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-textMain mb-6">{siteConfig.contact.title}</h2>
            <p className="text-textMuted text-lg mb-12">
              {siteConfig.contact.description}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center text-primary shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="text-textMain font-semibold mb-1">Phone</h4>
                  <p className="text-textMuted">{siteConfig.contact.info.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center text-primary shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="text-textMain font-semibold mb-1">Email</h4>
                  <p className="text-textMuted">{siteConfig.contact.info.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center text-primary shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-textMain font-semibold mb-1">Address</h4>
                  <p className="text-textMuted max-w-xs">{siteConfig.contact.info.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl border border-card/50">
            <h3 className="text-2xl font-bold text-textMain mb-8">Drop a Line</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Your Name" className="bg-background border border-card rounded-md px-4 py-3 text-textMain focus:outline-none focus:border-primary/50 transition-colors w-full" />
                <input type="email" placeholder="Your Email" className="bg-background border border-card rounded-md px-4 py-3 text-textMain focus:outline-none focus:border-primary/50 transition-colors w-full" />
              </div>
              <input type="text" placeholder="Subject" className="bg-background border border-card rounded-md px-4 py-3 text-textMain focus:outline-none focus:border-primary/50 transition-colors w-full" />
              <textarea placeholder="Message" rows={4} className="bg-background border border-card rounded-md px-4 py-3 text-textMain focus:outline-none focus:border-primary/50 transition-colors w-full resize-none"></textarea>
              <button type="button" className="bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20">
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-card/50 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold text-textMain mb-2">Let&apos;s Say Hi</h2>
        <a href={`mailto:${siteConfig.contact.info.email}`} className="text-textMuted hover:text-primary transition-colors mb-8">
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
