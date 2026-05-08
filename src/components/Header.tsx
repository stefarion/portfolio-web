"use client";

import { usePathname } from "next/navigation";

import { Line, Row, ToggleButton } from "@once-ui-system/core";

import { routes, about, blog, work, gallery } from "@/resources";
import styles from "./Header.module.scss";

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <Row
      fitHeight
      className={styles.position}
      position="fixed"
      as="header"
      zIndex={9}
      fillWidth
      padding="8"
      horizontal="center"
      data-border="rounded"
    >
      <Row
        className={styles.navSurface}
        background="page"
        border="neutral-alpha-weak"
        radius="m-4"
        shadow="l"
        padding="4"
        horizontal="center"
        zIndex={1}
      >
        <Row gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
          {routes["/"] && <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />}
          <Line background="neutral-alpha-medium" vert maxHeight="24" />
          {routes["/about"] && (
            <>
              <Row s={{ hide: true }}>
                <ToggleButton
                  prefixIcon="person"
                  href="/about"
                  label={about.label}
                  selected={pathname === "/about"}
                />
              </Row>
              <Row hide s={{ hide: false }}>
                <ToggleButton prefixIcon="person" href="/about" selected={pathname === "/about"} />
              </Row>
            </>
          )}
          {routes["/work"] && (
            <>
              <Row s={{ hide: true }}>
                <ToggleButton
                  prefixIcon="projects"
                  href="/work"
                  label={work.label}
                  selected={pathname.startsWith("/work")}
                />
              </Row>
              <Row hide s={{ hide: false }}>
                <ToggleButton
                  prefixIcon="projects"
                  href="/work"
                  selected={pathname.startsWith("/work")}
                />
              </Row>
            </>
          )}
          {routes["/blog"] && (
            <>
              <Row s={{ hide: true }}>
                <ToggleButton
                  prefixIcon="experiences"
                  href="/blog"
                  label={blog.label}
                  selected={pathname.startsWith("/blog")}
                />
              </Row>
              <Row hide s={{ hide: false }}>
                <ToggleButton
                  prefixIcon="experiences"
                  href="/blog"
                  selected={pathname.startsWith("/blog")}
                />
              </Row>
            </>
          )}
          {routes["/gallery"] && (
            <>
              <Row s={{ hide: true }}>
                <ToggleButton
                  prefixIcon="contact"
                  href="/gallery"
                  label={gallery.label}
                  selected={pathname.startsWith("/gallery")}
                />
              </Row>
              <Row hide s={{ hide: false }}>
                <ToggleButton
                  prefixIcon="contact"
                  href="/gallery"
                  selected={pathname.startsWith("/gallery")}
                />
              </Row>
            </>
          )}
        </Row>
      </Row>
    </Row>
  );
};
