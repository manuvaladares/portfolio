import React, { useState } from 'react';
import {
  Section,

  SocialLinks,
  SocialLink
} from './styled';

export default function ContactSection() {
  return (
    <Section id="contact">

        <h1>Thank You, bye!</h1>
        <p>Don't forget to contact me. <br /> Hope to see you later!</p>

        <SocialLinks>
          <SocialLink
            href="https://github.com/manuvaladares"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 .296a12 12 0 00-3.793 23.4c.6.11.82-.26.82-.58v-2.234c-3.338.726-4.042-1.609-4.042-1.609-.546-1.388-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.832 2.807 1.304 3.492.997.108-.776.42-1.305.763-1.605-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.468-2.381 1.236-3.222-.124-.303-.536-1.525.117-3.176 0 0 1.008-.323 3.3 1.23a11.52 11.52 0 016 0c2.292-1.553 3.297-1.23 3.297-1.23.655 1.65.242 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.622-5.48 5.92.432.37.817 1.096.817 2.21v3.282c0 .323.217.696.825.577A12 12 0 0012 .296" />
            </svg>
          </SocialLink>

          <SocialLink
            href="mailto:manuella.valadares@hotmail.com"
            aria-label="Email"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.104.897 2 2 2h16c1.103 0 2-.896 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 4.99-8-4.99V6h16zM4 18V8.489l7.778 4.85a1 1 0 001.444 0L20 8.489V18H4z"/>
            </svg>
          </SocialLink>

          <SocialLink
            href="https://linkedin.com/in/manuella-valadares"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4.983 3.5C3.673 3.5 2.6 4.57 2.6 5.85c0 1.27 1.06 2.35 2.383 2.35h.028c1.92 0 2.4-1.573 2.4-2.828 0-1.375-1.006-2.323-2.428-2.323zm.02 4.895H2.6v12.606h4.4V8.395H5.002zM8.203 8.395v12.606h4.4v-6.3c0-2.5 2.932-2.702 2.932 0v6.3h4.4v-7.9c0-5.684-6.067-5.466-7.6-2.681h.02z"/>
            </svg>
          </SocialLink>

          <SocialLink
            href="http://lattes.cnpq.br/seu-codigo-lattes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Lattes"
          >

            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM6 20V4h7v5h5v11H6zM8 14h8v2H8zM8 10h8v2H8z"/>
            </svg>
          </SocialLink>
        </SocialLinks>
    </Section>
  );
}
