import { Column, Schema, Meta } from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import { SpotifyArtists } from "@/components/about/SpotifyArtists";
import { ContactForm } from "@/components/contact/ContactForm";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import Image from "next/image";
import { FaFutbol, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { HiOutlineDocumentText, HiOutlineEnvelope } from "react-icons/hi2";
import {
  HiOutlineAcademicCap,
  HiOutlineCircleStack,
  HiOutlineCodeBracketSquare,
  HiOutlineCpuChip,
  HiOutlineDevicePhoneMobile,
  HiOutlinePuzzlePiece,
} from "react-icons/hi2";
import { LuGamepad2 } from "react-icons/lu";
import styles from "./page.module.scss";

export async function generateMetadata() {
  return {
    ...Meta.generate({
      title: home.title,
      description: home.description,
      baseURL: baseURL,
      path: home.path,
      image: home.image,
    }),
    icons: {
      icon: "/icon.jpg",
      shortcut: "/icon.jpg",
      apple: "/icon.jpg",
    },
  };
}

export default function Home() {
  const interests = [
    {
      icon: <HiOutlineCpuChip />,
      title: "Backend System",
      description: "Django",
    },
    {
      icon: <HiOutlineCodeBracketSquare />,
      title: "Web Development",
      description: "Next.js, JavaScript, Tailwind CSS",
    },
    {
      icon: <HiOutlineDevicePhoneMobile />,
      title: "Mobile Development",
      description: "Flutter, Dart",
    },
    {
      icon: <HiOutlineCircleStack />,
      title: "Database Management",
      description: "PostgreSQL",
    },
    {
      icon: <LuGamepad2 />,
      title: "Gaming",
      description: "Honkai Star Rail, eFootball, NBA 2K",
    },
    {
      icon: <FaFutbol />,
      title: "Sports",
      description: "Unofficial Manchester United Football Analyst",
    },
  ];

  const heroLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/stefanus-tan-jaya",
      icon: <FaLinkedin />,
    },
    {
      label: "GitHub",
      href: "https://github.com/stefarion",
      icon: <FaGithub />,
    },
    {
      label: "CV",
      href: "https://docs.google.com/document/d/1e-MSYdlhmic6DBAqTGvKjeGoPShZXOMzVkEJRIgepKw/edit?usp=sharing",
      icon: <HiOutlineDocumentText />,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/stefanustanjaya/",
      icon: <FaInstagram />,
    },
    {
      label: "Email",
      href: "mailto:stefanustanjaya230105@gmail.com",
      icon: <HiOutlineEnvelope />,
    },
  ];

  const experiences = [
    {
      title: "Teaching Assistant of Linear Algebra",
      organization: "Faculty of Computer Science, University of Indonesia",
      logo: "/media/experiences/fasilkom.png",
      description:
        "Assisted course activities for Linear Algebra by supporting classroom learning, helping students understand core mathematical concepts, and contributing to a more structured academic experience.",
    },
    {
      title: "Staff of Indie Game Ignite Competition Division",
      organization: "COMPFEST 16",
      logo: "/media/experiences/compfest16.png",
      description:
        "Contributed to the competition division by helping organize the Indie Game Ignite program, coordinating participant-facing needs, and supporting the execution of a student-led technology event.",
    },
    {
      title: "Chairman of Catholic Student Community Organization",
      organization: "ROHKAT SMAN 14 Jakarta",
      logo: "/media/experiences/sman14.jpg",
      description:
        "Led the Catholic student community organization by coordinating activities, encouraging member participation, and maintaining collaboration across school community initiatives.",
    },
    {
      title: "Vice President of IT-Tech 14",
      organization: "IT-Tech 14",
      logo: "/media/experiences/it-tech14.jpg",
      description:
        "Supported organizational leadership in planning and coordinating technology-related student activities while helping maintain communication between members and project teams.",
    },
  ];

  return (
    <Column fillWidth gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <section id="home" className={styles.hero} aria-labelledby="home-hero-title">
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/videos/firefly-astral-express-train.webm" type="video/webm" />
        </video>
        <div className={styles.tint} />
        <div className={styles.leftShade} />
        <div className={styles.content}>
          <p className={styles.eyebrow}>Hello and Welcome!</p>
          <h1 id="home-hero-title" className={styles.title}>
            I'm Stefanus Tan Jaya.
          </h1>
          <p className={styles.description}>
            A{" "}
            <span className={styles.strong}>Software Engineer</span>{" "}
            based in Jakarta, Indonesia.
            <br className={styles.desktopBreak} />
            Interested in building <span className={styles.strong}>web applications</span>,{" "}
            <span className={styles.strong}>mobile apps</span>,
            <br className={styles.desktopBreak} />
            and{" "}
            <span className={styles.strong}>software solutions</span>.
          </p>
          <ul className={styles.socialLinks} aria-label="Social links">
            {heroLinks.map((link) => (
              <li key={link.label}>
                <a
                  className={styles.socialLink}
                  href={link.href}
                  aria-label={link.label}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Column as="main" className={styles.main} maxWidth="m" horizontal="center">
        <section id="about" className={styles.section} aria-labelledby="about-heading">
          <h2 id="about-heading" className={styles.sectionTitle}>
            About Me
          </h2>
          <div className={styles.aboutGrid}>
            <div className={styles.profileFrame}>
              <Image
                src="/media/about/myself.jpeg"
                alt="Stefanus Tan Jaya"
                width={400}
                height={500}
                className={styles.profileImage}
                priority
              />
            </div>
            <div className={styles.aboutSide}>
              <div className={styles.aboutCard}>
                <div className={styles.cardHeader}>
                  <h3>Currently educated in</h3>
                  <HiOutlineAcademicCap aria-hidden="true" />
                </div>
                <div className={styles.educationRow}>
                  <Image
                    src="/media/about/makara-ui.png"
                    alt="University of Indonesia logo"
                    width={64}
                    height={64}
                    className={styles.educationLogo}
                  />
                  <div>
                    <p className={styles.educationTitle}>University of Indonesia</p>
                    <p className={styles.educationSubtitle}>Faculty of Computer Science</p>
                  </div>
                </div>
              </div>
              <SpotifyArtists />
            </div>
          </div>

          <div className={styles.interestCard}>
            <div className={styles.cardHeader}>
              <h3>Interests</h3>
              <HiOutlinePuzzlePiece aria-hidden="true" />
            </div>
            <div className={styles.interestGrid}>
              {interests.map((interest) => (
                <div className={styles.interestItem} key={interest.title}>
                  <span className={styles.interestIcon}>{interest.icon}</span>
                  <div>
                    <p className={styles.interestTitle}>{interest.title}</p>
                    <p className={styles.interestDescription}>{interest.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className={styles.section} aria-labelledby="projects-heading">
          <h2 id="projects-heading" className={styles.sectionTitle}>
            My Projects
          </h2>
          <ProjectShowcase />
        </section>

        <section id="experiences" className={styles.section} aria-labelledby="experiences-heading">
          <h2 id="experiences-heading" className={styles.sectionTitle}>
            My Experiences
          </h2>
          <div className={styles.experienceList}>
            {experiences.map((experience) => (
              <article className={styles.experienceCard} key={experience.title}>
                <Image
                  src={experience.logo}
                  alt={`${experience.organization} logo`}
                  width={64}
                  height={64}
                  className={styles.experienceLogo}
                />
                <div className={styles.experienceBody}>
                  <div className={styles.experienceHeader}>
                    <h3>{experience.title}</h3>
                    <p>{experience.organization}</p>
                  </div>
                  <p className={styles.experienceDescription}>{experience.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className={styles.section} aria-labelledby="contact-heading">
          <h2 id="contact-heading" className={styles.sectionTitle}>
            Contact Me!
          </h2>
          <ContactForm />
        </section>
      </Column>
    </Column>
  );
}
