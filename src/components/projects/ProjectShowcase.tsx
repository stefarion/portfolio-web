"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { HiArrowLeft, HiArrowRight, HiArrowTopRightOnSquare } from "react-icons/hi2";
import {
  SiDart,
  SiDjango,
  SiFigma,
  SiFlutter,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiSass,
  SiTypescript,
} from "react-icons/si";
import styles from "./ProjectShowcase.module.scss";

type ProjectLink = {
  label: string;
  href: string;
  icon: ReactNode;
};

type ProjectTech = {
  label: string;
  icon: ReactNode;
};

type Project = {
  title: string;
  image: string;
  description: string;
  tech: ProjectTech[];
  links?: ProjectLink[];
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    image: "/media/projects/web-porto.png",
    description:
      "Portfolio Website is a personal single-page portfolio built to present my profile, projects, experiences, and contact channels through a responsive interface with animated visuals and structured content.",
    tech: [
      { label: "Next.js", icon: <SiNextdotjs /> },
      { label: "React", icon: <SiReact /> },
      { label: "TypeScript", icon: <SiTypescript /> },
      { label: "Sass", icon: <SiSass /> },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/stefarion/portfolio-web",
        icon: <FaGithub />,
      },
    ],
  },
  {
    title: "Makansar Mobile",
    image: "/media/projects/makansar-mobile.png",
    description:
      "Makansar Mobile is a culinary guide application for Makassar that helps users discover local food, manage favorites, join food discussions, and review products through ratings and comments. I contributed to the buyer profile feature, enabling users to create, view, update, and delete their personal account information.",
    tech: [
      { label: "Dart", icon: <SiDart /> },
      { label: "Flutter", icon: <SiFlutter /> },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/makansar-tk/makansar-mobile",
        icon: <FaGithub />,
      },
    ],
  },
  {
    title: "Rakyat Bisa!",
    image: "/media/projects/rakyat-bisa.png",
    description:
      "Rakyat Bisa! is a mobile application prototype designed to empower marginalized communities through accessible entrepreneurship education, mentoring, and community support. As part of the design team, I contributed to the interaction design process, including user research, prototyping, and usability evaluation.",
    tech: [{ label: "Figma", icon: <SiFigma /> }],
  },
  {
    title: "SiNgawas 2.0",
    image: "/media/projects/singawas-2.png",
    description:
      "SiNgawas 2.0 is an integrated exam supervisor management platform for Fasilkom UI, designed to improve semester-based data segregation, supervisor allocation, academic monitoring, and exam event management. I contributed as part of the development team in building features that support a more transparent, structured, and efficient supervision workflow.",
    tech: [
      { label: "Django", icon: <SiDjango /> },
      { label: "React", icon: <SiReact /> },
      { label: "PostgreSQL", icon: <SiPostgresql /> },
    ],
    links: [
      {
        label: "Website",
        href: "https://singawas.cs.ui.ac.id/",
        icon: <HiArrowTopRightOnSquare />,
      },
    ],
  },
];

export function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + projects.length) % projects.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % projects.length);
  };

  return (
    <div className={styles.showcase} aria-live="polite">
      <div className={styles.mediaFrame}>
        <Image
          key={activeProject.image}
          src={activeProject.image}
          alt={`${activeProject.title} project preview`}
          fill
          sizes="(max-width: 768px) 100vw, 56rem"
          className={styles.projectImage}
          priority={activeIndex === 0}
        />
        <button
          className={`${styles.navButton} ${styles.navPrevious}`}
          type="button"
          onClick={goToPrevious}
          aria-label="Previous project"
        >
          <HiArrowLeft />
        </button>
        <button
          className={`${styles.navButton} ${styles.navNext}`}
          type="button"
          onClick={goToNext}
          aria-label="Next project"
        >
          <HiArrowRight />
        </button>
      </div>

      <div className={styles.progress} aria-label="Project slides">
        {projects.map((project, index) => (
          <button
            key={project.title}
            className={`${styles.progressItem} ${index === activeIndex ? styles.active : ""}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show ${project.title}`}
            aria-current={index === activeIndex}
          />
        ))}
      </div>

      <article className={styles.details}>
        <div className={styles.detailsHeader}>
          <h3>{activeProject.title}</h3>
          {activeProject.links && activeProject.links.length > 0 ? (
            <div className={styles.links} aria-label={`${activeProject.title} links`}>
              {activeProject.links.map((link) => (
                <a
                  key={link.href}
                  className={styles.linkButton}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${activeProject.title} ${link.label}`}
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          ) : null}
        </div>
        <p className={styles.description}>{activeProject.description}</p>
        <ul className={styles.techList} aria-label={`${activeProject.title} tech stack`}>
          {activeProject.tech.map((tech) => (
            <li className={styles.techItem} key={tech.label} title={tech.label}>
              {tech.icon}
              <span>{tech.label}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
