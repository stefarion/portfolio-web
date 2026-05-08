import { Column, IconButton, Row, Schema, Meta, Text } from "@once-ui-system/core";
import { home, about, person, baseURL, social } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { HiOutlineDocumentText, HiOutlineEnvelope } from "react-icons/hi2";
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
      href: "https://docs.google.com/document/d/1BOt7kxpcbJTMzgqzeNEQiE94pStoZ4_CWaFHSvt_9S0/edit?usp=sharing",
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
          <source src="/videos/firefly-astral-express-train.mp4" type="video/mp4" />
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
          <p className={styles.sectionIntro}>
            I am Stefanus Tan Jaya, a Jakarta-based software engineer focused on building reliable
            web applications, mobile apps, and practical software solutions. This section is ready
            for a fuller biography, education details, interests, and technical profile.
          </p>
        </section>

        <section id="projects" className={styles.section} aria-labelledby="projects-heading">
          <h2 id="projects-heading" className={styles.sectionTitle}>
            My Projects
          </h2>
          <Projects />
        </section>

        <section id="experiences" className={styles.section} aria-labelledby="experiences-heading">
          <h2 id="experiences-heading" className={styles.sectionTitle}>
            My Experiences
          </h2>
          <div className={styles.experienceGrid}>
            <article className={styles.experienceCard}>
              <Text variant="heading-strong-m">Academic Journey</Text>
              <Text onBackground="neutral-weak">
                Undergraduate Computer Science Student at Universitas Indonesia.
              </Text>
            </article>
            <article className={styles.experienceCard}>
              <Text variant="heading-strong-m">Software Development</Text>
              <Text onBackground="neutral-weak">
                Building web, mobile, and software projects while growing a practical engineering
                portfolio.
              </Text>
            </article>
          </div>
        </section>

        <section id="contact" className={styles.section} aria-labelledby="contact-heading">
          <h2 id="contact-heading" className={styles.sectionTitle}>
            Contact Me!
          </h2>
          <p className={styles.sectionIntro}>
            Let us connect for collaborations, project discussions, or opportunities.
          </p>
          <Row className={styles.contactLinks} gap="16" wrap horizontal="center">
            {social.map((item) => (
              <IconButton
                key={item.name}
                href={item.link}
                icon={item.icon}
                tooltip={item.name}
                size="l"
                variant="secondary"
              />
            ))}
          </Row>
        </section>
      </Column>
    </Column>
  );
}
