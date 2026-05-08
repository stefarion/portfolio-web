"use client";

import { useEffect, useState } from "react";

import { Line, Row, ToggleButton } from "@once-ui-system/core";

import styles from "./Header.module.scss";

const navItems = [
  { id: "home", href: "/#home", icon: "home" },
  { id: "about", href: "/#about", icon: "person", label: "About" },
  { id: "projects", href: "/#projects", icon: "projects", label: "Projects" },
  { id: "experiences", href: "/#experiences", icon: "experiences", label: "Experiences" },
  { id: "contact", href: "/#contact", icon: "contact", label: "Contact" },
];

export const Header = () => {
  const [active, setActive] = useState(navItems[0].id);

  useEffect(() => {
    const updateActiveSection = () => {
      const activationLine = 84;
      let currentActive = navItems[0].id;

      for (const item of navItems) {
        const section = document.getElementById(item.id);

        if (!section) {
          continue;
        }

        const { top } = section.getBoundingClientRect();

        if (top <= activationLine) {
          currentActive = item.id;
        }
      }

      setActive(currentActive);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

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
        padding="8"
        horizontal="center"
        zIndex={1}
      >
        <Row gap="8" vertical="center" textVariant="body-default-m" suppressHydrationWarning>
          <ToggleButton
            prefixIcon={navItems[0].icon}
            href={navItems[0].href}
            selected={active === navItems[0].id}
          />
          <Line background="neutral-alpha-medium" vert maxHeight="24" />
          {navItems.slice(1).map((item) => (
            <Row key={item.id}>
              <Row s={{ hide: true }}>
                <ToggleButton
                  prefixIcon={item.icon}
                  href={item.href}
                  label={item.label}
                  selected={active === item.id}
                />
              </Row>
              <Row hide s={{ hide: false }}>
                <ToggleButton
                  prefixIcon={item.icon}
                  href={item.href}
                  selected={active === item.id}
                />
              </Row>
            </Row>
          ))}
        </Row>
      </Row>
    </Row>
  );
};
