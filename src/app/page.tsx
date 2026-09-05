 "use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  Cloud,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Users,
  X,
  Zap,
} from "lucide-react";
import { portfolio } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openExperience, setOpenExperience] = useState<number | null>(0);

  const closeMobile = () => setMobileOpen(false);

  return (
    <main>
      <div className="page-glow glow-one" />
      <div className="page-glow glow-two" />
      <div className="dot-pattern" />

      <header className="site-header">
        <nav className="nav container">
          <a href="#home" className="brand" onClick={closeMobile}>
            <span className="brand-mark">KJ</span>
            <span>Kaushik Janmanchi</span>
          </a>

          <div className={`nav-links ${mobileOpen ? "mobile-open" : ""}`}>
            {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMobile}>
                {item}
              </a>
            ))}
          </div>

          <a className="availability" href="#contact" onClick={closeMobile}>
            <span />
            Open to Opportunities
          </a>

          <button className="menu-button" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Open menu">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      <section id="home" className="hero container">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            SOFTWARE ENGINEER
            <i>·</i>
            CLOUD PLATFORM
            <i>·</i>
            DISTRIBUTED SYSTEMS
          </div>

          <h1>
            Hi, I&apos;m
            <span>Kaushik</span>
            <span>Janmanchi</span>
          </h1>

          <p className="hero-description">{portfolio.intro}</p>

          <div className="hero-buttons">
            <a className="btn btn-primary" href={portfolio.links.resume} target="_blank" rel="noreferrer">
              <Download size={17} />
              View Resume
            </a>
            <a className="btn btn-secondary" href={portfolio.links.email}>
              <Mail size={17} />
              Contact Me
            </a>
            <a className="icon-btn" href={portfolio.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={19} />
            </a>
            <a className="icon-btn" href={portfolio.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={19} />
            </a>
          </div>

          <div className="hero-tags">
            {["AWS", "Kubernetes", "Terraform", "Python", "AI / LLM"].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          <div className="hero-photo-card">
            <div className="photo-placeholder">
              <img src={portfolio.profileImage} alt="Kaushik Janmanchi" />
            </div>
            <div className="photo-caption">
              <span>SOFTWARE · CLOUD · SRE</span>
              <strong>Build reliable systems.</strong>
            </div>
          </div>

          <div className="tech-cloud">
            {[
              ["AWS", Cloud],
              ["GCP", Cloud],
              ["Kubernetes", Server],
              ["Terraform", Code2],
              ["Prometheus", ActivityIcon],
              ["Grafana", BarChart3],
              ["AI / LLM", BrainCircuit],
              ["Python", Terminal],
            ].map(([label, Icon]) => {
              const IconComponent = Icon as typeof Cloud;
              return (
                <div className="tech-chip" key={label as string}>
                  <IconComponent size={17} />
                  <span>{label as string}</span>
                </div>
              );
            })}
          </div>

          <div className="quick-card">
            <div><MapPin size={15} /><span>Hyderabad, India</span></div>
            <div><Sparkles size={15} /><span>5.5+ Years Experience</span></div>
            <div><Cloud size={15} /><span>AWS · GCP · Azure</span></div>
            <div><Zap size={15} /><span>SRE · DevOps · Data</span></div>
            <div><BrainCircuit size={15} /><span>AI / LLM Tooling</span></div>
            <div className="quick-status"><span /> Open to Opportunities</div>
          </div>
        </motion.div>
      </section>

      <section className="metrics container">
        {portfolio.metrics.map((metric, index) => {
          const icons = [Code2, Users, Cloud, ShieldCheck];
          const Icon = icons[index];
          return (
            <motion.div
              className="metric-card"
              key={metric.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="metric-icon"><Icon size={21} /></div>
              <div>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            </motion.div>
          );
        })}
      </section>

      <section id="about" className="section container">
        <SectionLabel number="01" text="ABOUT ME" />

        <div className="about-grid">
          <div>
            <h2>
              Engineering reliable systems
              <span>from code to cloud.</span>
            </h2>
            <p className="lead">
              My work sits at the intersection of software engineering, cloud infrastructure,
              observability, data engineering and production reliability.
            </p>
            <p className="body-copy">
              I enjoy tracing complex problems across application, network, database and platform
              layers — then turning the fix into automation, better telemetry, or a system that
              can recover by itself.
            </p>
            <div className="pill-list">
              {["Software Engineering", "Cloud", "DevOps", "SRE", "Data Engineering", "AI / LLM"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="quote-card">
            <div className="quote-mark">“</div>
            <p>
              Automate the obvious.
              <br />
              Observe the complex.
              <br />
              <strong>Build for reliability.</strong>
            </p>
            <span>— Kaushik Janmanchi</span>
          </div>
        </div>
      </section>

      <section id="experience" className="section section-soft">
        <div className="container">
          <SectionLabel number="02" text="EXPERIENCE" />

          <div className="section-intro">
            <div>
              <h2>Production experience across<br /><span>software, cloud & reliability.</span></h2>
            </div>
            <a className="text-link" href={portfolio.links.resume} target="_blank" rel="noreferrer">
              View Resume <ArrowRight size={15} />
            </a>
          </div>

          <div className="experience-list">
            {portfolio.experience.map((item, index) => {
              const isOpen = openExperience === index;
              return (
                <motion.article
                  className={`experience-card ${isOpen ? "open" : ""}`}
                  key={item.company}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <button
                    className="experience-header"
                    onClick={() => setOpenExperience(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <div className="experience-marker">
                      <span className={item.current ? "current" : ""} />
                    </div>
                    <div className="experience-title">
                      <div className="company-row">
                        <h3>{item.company}</h3>
                        {item.current && <span className="current-badge">CURRENT</span>}
                      </div>
                      <p>{item.role}</p>
                      <small>{item.period} <i>·</i> {item.location}</small>
                    </div>
                    <div className="experience-summary">{item.summary}</div>
                    <ChevronDown className={`chevron ${isOpen ? "rotated" : ""}`} size={19} />
                  </button>

                  {isOpen && (
                    <div className="experience-body">
                      <ul>
                        {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                      </ul>
                      <div className="tag-list">
                        {item.stack.map((tag) => <span key={tag}>{tag}</span>)}
                      </div>
                    </div>
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionLabel number="03" text="ENGINEERING FOCUS" />
        <div className="focus-grid">
          {portfolio.focus.map((item) => (
            <motion.article className="focus-card" key={item.number} whileHover={{ y: -4 }}>
              <span className="focus-number">{item.number}</span>
              <div className="focus-icon">
                {item.number === "01" ? <Cloud size={22} /> : item.number === "02" ? <BarChart3 size={22} /> : <BrainCircuit size={22} />}
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="projects" className="section section-soft">
        <div className="container">
          <SectionLabel number="04" text="FEATURED PROJECTS" />
          <div className="section-intro">
            <h2>Things I&apos;ve built to<br /><span>solve real engineering problems.</span></h2>
          </div>

          <div className="project-grid">
            {portfolio.projects.map((project, index) => (
              <motion.article
                className="project-card"
                key={project.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <div className={`project-banner ${project.accent}`}>
                  <div className="banner-label">
                    {index === 0 ? <Server size={19} /> : <BrainCircuit size={19} />}
                    {project.subtitle}
                  </div>
                  <div className="architecture">
                    <span>{index === 0 ? "Cloud" : "Sources"}</span>
                    <b>{index === 0 ? "K8s" : "AI"}</b>
                    <span>{index === 0 ? "GitOps" : "Match"}</span>
                  </div>
                </div>

                <div className="project-body">
                  <div className="project-heading">
                    <div>
                      <small>PROJECT {String(index + 1).padStart(2, "0")}</small>
                      <h3>{project.title}</h3>
                    </div>
                    <span className="project-type">Featured</span>
                  </div>
                  <p>{project.description}</p>

                  <ul className="project-bullets">
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>
                        <CheckCircle2 size={15} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="tag-list">
                    {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>

                  <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                    <Github size={16} /> View Project <ExternalLink size={13} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section container">
        <SectionLabel number="05" text="TECHNICAL SKILLS" />
        <div className="section-intro">
          <h2>A practical toolkit for<br /><span>building and operating systems.</span></h2>
        </div>

        <div className="skills-grid">
          {portfolio.skills.map((group, index) => {
            const icons = [Cloud, Server, BarChart3, Database, BrainCircuit, Terminal];
            const Icon = icons[index];
            return (
              <motion.article className="skill-card" key={group.title} whileHover={{ y: -3 }}>
                <div className="skill-icon"><Icon size={21} /></div>
                <h3>{group.title}</h3>
                <div className="skill-items">
                  {group.items.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionLabel number="06" text="EDUCATION" />
          <div className="education-grid">
            {portfolio.education.map((item) => (
              <article className="education-card" key={item.degree}>
                <div className="education-icon"><Code2 size={21} /></div>
                <div>
                  <h3>{item.degree}</h3>
                  <p>{item.school}</p>
                  <small>{item.period} <i>·</i> {item.location}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-grid">
          <div>
            <SectionLabel number="07" text="LET'S CONNECT" />
            <h2>Let&apos;s build<br /><span>something reliable.</span></h2>
            <p className="lead">
              I&apos;m open to software engineering, SRE, DevOps, cloud infrastructure,
              platform engineering and interesting systems problems.
            </p>
            <div className="contact-buttons">
              <a className="btn btn-primary" href={portfolio.links.email}>
                <Mail size={17} /> Send an Email
              </a>
              <a className="icon-btn" href={portfolio.links.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={19} />
              </a>
              <a className="icon-btn" href={portfolio.links.github} target="_blank" rel="noreferrer">
                <Github size={19} />
              </a>
            </div>
          </div>

          <div className="contact-details">
            <a href={portfolio.links.email}>
              <Mail size={19} />
              <div><small>Email</small><strong>{portfolio.email}</strong></div>
            </a>
            <div>
              <MapPin size={19} />
              <div><small>Location</small><strong>{portfolio.location}</strong></div>
            </div>
            <a href={portfolio.links.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={19} />
              <div><small>LinkedIn</small><strong>Connect with me</strong></div>
            </a>
            <a href={portfolio.links.github} target="_blank" rel="noreferrer">
              <Github size={19} />
              <div><small>GitHub</small><strong>View my work</strong></div>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer">
          <div className="footer-brand">
            <span className="brand-mark">KJ</span>
            <div>
              <strong>Kaushik Janmanchi</strong>
              <span>Software Engineer · Cloud Platform · SRE</span>
            </div>
          </div>
          <div className="footer-right">Build · Automate · Scale · Repeat</div>
          <div className="footer-bottom">© {new Date().getFullYear()} Kaushik Janmanchi · All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}

function SectionLabel({ number, text }: { number: string; text: string }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      {text}
    </div>
  );
}

function ActivityIcon(props: { size?: number }) {
  return <BarChart3 {...props} />;
}
