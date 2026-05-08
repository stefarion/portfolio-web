"use client";

import { useState } from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";
import styles from "./ContactForm.module.scss";

const emailAddress = "stefanustanjaya230105@gmail.com";

const contactLinks = [
  {
    label: "Gmail",
    href: `mailto:${emailAddress}`,
    icon: <HiOutlineEnvelope />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/stefanus-tan-jaya",
    icon: <FaLinkedin />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/stefanustanjaya/",
    icon: <FaInstagram />,
  },
  {
    label: "Twitter/X",
    href: "https://x.com/steflypacil",
    icon: <FaXTwitter />,
  },
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <div className={styles.contactCard}>
      <div className={styles.formPanel}>
        <div className={styles.contactHeader}>
          <h3>Contact Me!</h3>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </div>

      <aside className={styles.sidePanel} aria-label="Alternative contact options">
        <Image
          src="/icon.jpg"
          alt="Stefanus Tan Jaya portfolio icon"
          width={128}
          height={128}
          className={styles.contactImage}
        />
        <p className={styles.reachText}>
          or feel free to reach through Gmail, LinkedIn, Instagram, and Twitter/X!
        </p>
        <div className={styles.socialRow}>
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
              aria-label={link.label}
              title={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </aside>
    </div>
  );
}
