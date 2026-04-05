# PeopleBot Website

Official website for **PeopleBot** — the reference platform for Spanish-speaking HR professionals leading the AI era.

## Overview

Fully bilingual (ES/EN) static website built with vanilla HTML, CSS, and JavaScript. No build step required — open `index.html` directly in any browser.

## Project Structure

```
PeopleBot/
├── index.html              # Main website (all sections, bilingual)
├── assets/
│   ├── img/
│   │   ├── logo.svg        # PeopleBot logo (SVG, scalable)
│   │   └── gustavo.jpg     # Founder photo — REPLACE WITH ACTUAL PHOTO
├── .gitignore
└── README.md
```

## Setup

No installation required. Open `index.html` in a browser.

## Adding Real Images

1. Replace `assets/img/gustavo.jpg` with the actual founder headshot
2. Replace `assets/img/logo.svg` with the official logo if needed (current SVG approximates the brand)

## Brand Colors

| Name         | Hex       | Usage                          |
|--------------|-----------|--------------------------------|
| Purple       | `#5B21B6` | Primary brand color (CTA, accents) |
| Dark Purple  | `#130830` | Hero and dark section backgrounds |
| Coral/Red    | `#D94040` | Secondary accent (from brain icon) |
| Cream        | `#F7F6F2` | Light section backgrounds     |
| White        | `#FFFFFF` | Cards, clean sections         |

## Typography

- **Display (Headlines):** DM Serif Display — loaded via Google Fonts
- **Body / UI:** DM Sans — loaded via Google Fonts

## Sections

1. Navigation — sticky, bilingual toggle ES/EN
2. Hero — full-height with product cards
3. Stats bar — key metrics
4. Mission — brand pillars
5. Products — Podcast, Newsletter, Consulting, Certification
6. Founder — Gustavo Valbuena profile
7. Newsletter CTA — Substack subscription
8. Contact — form + all social links
9. Footer — full navigation and social icons

## Social Links

| Platform         | URL |
|------------------|-----|
| Substack         | https://substack.com/@gustavovalbuena |
| LinkedIn (Gustavo) | https://www.linkedin.com/in/gustavo-valbuena/ |
| LinkedIn (Company) | https://www.linkedin.com/company/people-bot/ |
| X / Twitter      | https://x.com/ThePeopleBot |
| Instagram        | https://www.instagram.com/thepeoplebot/ |
| Facebook         | https://www.facebook.com/profile.php?id=61566569934779 |

## Deployment

This is a static site — it can be deployed to:
- **GitHub Pages** — push to `main`, enable Pages in repository settings
- **Netlify** — drag and drop the folder
- **Vercel** — connect GitHub repository
- Any static hosting provider

## To push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/peoplebot-website.git
git push -u origin main
```

---

© 2026 PeopleBot. All rights reserved.
