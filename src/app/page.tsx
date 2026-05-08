import { Heading, RevealFx, Column, Row, Schema, Meta, Line } from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import styles from "./page.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
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
      <section className={styles.hero} aria-labelledby="home-hero-title">
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
        <RevealFx className={styles.content} translateY="8" delay={0.1}>
          <p className={styles.eyebrow}>Hello and Welcome!</p>
          <h1 id="home-hero-title" className={styles.title}>
            I'm Stefanus Tan Jaya
          </h1>
          <p className={styles.description}>
            An Undergraduate Computer Science Student at Universitas Indonesia based in Jakarta,
            Indonesia.
          </p>
          <p className={styles.description}>
            Interested in building web applications, mobile apps, and software solutions.
          </p>
        </RevealFx>
      </section>
      <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
        <RevealFx translateY="16" delay={0.2}>
          <Projects range={[1, 1]} />
        </RevealFx>
        {routes["/blog"] && (
          <Column fillWidth gap="24" marginBottom="l">
            <Row fillWidth paddingRight="64">
              <Line maxWidth={48} />
            </Row>
            <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
              <Row flex={1} paddingLeft="l" paddingTop="24">
                <Heading as="h2" variant="display-strong-xs" wrap="balance">
                  Latest from the blog
                </Heading>
              </Row>
              <Row flex={3} paddingX="20">
                <Posts range={[1, 2]} columns="2" />
              </Row>
            </Row>
            <Row fillWidth paddingLeft="64" horizontal="end">
              <Line maxWidth={48} />
            </Row>
          </Column>
        )}
        <Projects range={[2]} />
        <Mailchimp />
      </Column>
    </Column>
  );
}
