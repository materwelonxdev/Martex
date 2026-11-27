# Martex - SaaS Landing Page & Marketing Website (React + Tailwind CSS)

A modern, responsive multi-page marketing website for the **Martex** SaaS template, rebuilt as a **React** and **Tailwind CSS** project. It covers a home page, company pages, pricing, projects, testimonials, downloads and authentication screens.

> **Note:** This is a personal learning project. The design is based on the Martex Tailwind CSS template by elite-themes24 (ibthemespro). See [Credits](#-credits).

<!-- Add a screenshot of your home page here, then remove these comment markers:
![Martex preview](./screenshots/home.png)
-->

---

## 🌟 Key Features

- **Shared Site Layout**
  - Sticky navbar with dropdown menus (About, Pages) and Sign in / Sign up buttons.
  - Common footer with link columns, social icons and an email signup box.
  - Page preloader and scroll-reveal animations on every section.
- **Home & Company Pages**
  - **Home**: Hero, services grid, integration cards and workflow sections.
  - **About Us, Our Team, Careers, Career Details, Contact**: Content pages with reusable section components.
- **Core Features Page**
  - Alternating image and text feature blocks, a numbered feature list and a video section with a play button.
  - A purple "Getting started" call-to-action card at the bottom.
- **Pricing Page**
  - Three plan cards with a **monthly / yearly billing toggle** that updates the prices.
  - **Auto-scrolling brand logo carousel** that pauses on hover, fades at the edges and respects reduced-motion settings.
  - Plan comparison table, payment methods, money-back and SSL notes, a two-column FAQ and a final call-to-action card.
- **Projects & Project Details**
  - Two-column project grid with **working pagination** (6 projects per page).
  - Project details page with a meta row, image gallery and an embedded video that loads only after you press play.
- **Testimonials**
  - Staggered two-column review cards with pagination and a newsletter signup band.
- **Download Page**
  - Latest version block with a primary download button and a list of older versions.
- **Authentication Screens**
  - **Sign In** and **Sign Up** split-card pages that **scale to fit the browser window**, with a show / hide password toggle and form validation.
  - Rendered outside the shared layout, so there is no navbar or footer on these pages.
- **Resilient Images**
  - Every image has a fallback (a colored block or initials), so the site keeps working when an image file is missing.

---

## 🗺️ Pages & Routes

| Page | Route |
|---|---|
| Home | `/` |
| About Us | `/about-us` |
| Our Team | `/our-team` |
| Careers | `/careers` |
| Career Details | `/career-details` |
| Contact | `/contact` |
| Core Features | `/core-features` |
| Pricing | `/pricing` |
| Our Projects | `/projects` |
| Project Details | `/project-details` |
| Testimonials | `/testimonials` |
| Download | `/download` |
| Sign In | `/login` (also `/signin`) |
| Sign Up | `/signup` |

Still showing a "Page coming soon" placeholder: **FAQs**, **Blog Listing** and the **404** page.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Framework** | React |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS utility classes, custom fonts |
| **Routing** | React Router (`react-router-dom`) |
| **Interactivity** | React Hooks (`useState`, `useRef`, `useEffect`), custom hooks (`useReveal`, `useCountUp`) |
| **Linting** | Oxlint |
| **Assets** | PNG, JPG and SVG images in `public/images/` |

---

## 📁 Project Directory Structure

```text
martex/
├── index.html                      # HTML entry point
├── package.json                    # Dependencies and scripts
├── .oxlintrc.json                  # Oxlint configuration
├── README.md                       # Project documentation
├── public/
│   └── images/                     # Static images
│       ├── projects/               # Project posters
│       ├── avatars/                # Testimonial avatars
│       ├── brands/                 # Rating and brand logos
│       ├── png_icons/              # Tool icons
│       └── ...                     # Page-specific artwork
└── src/
    ├── main.jsx                    # App entry, router and global CSS
    ├── App.jsx                     # Route definitions
    ├── index.css                   # Tailwind import, theme and global styles
    ├── components/
    │   ├── Layout.jsx              # Shared navbar and footer wrapper
    │   ├── Preloader.jsx           # Page loading screen
    │   ├── Reveal.jsx              # Scroll-reveal wrapper
    │   ├── Services.jsx            # Services grid
    │   ├── IntegrationCards.jsx    # Gray panel with four feature cards
    │   ├── NewsletterModal.jsx     # Newsletter signup modal
    │   └── home/                   # Home page sections
    ├── pages/
    │   ├── Home.jsx
    │   ├── AboutUs.jsx
    │   ├── OurTeam.jsx
    │   ├── Careers.jsx
    │   ├── CareerDetails.jsx
    │   ├── Contact.jsx
    │   ├── CoreFeatures.jsx
    │   ├── Pricing.jsx
    │   ├── Projects.jsx
    │   ├── ProjectDetails.jsx
    │   ├── Testimonials.jsx
    │   ├── Download.jsx
    │   ├── SignIn.jsx
    │   └── SignUp.jsx
    ├── data/
    │   ├── navLinks.js             # Navbar and dropdown links
    │   ├── jobs.js                 # Career listings
    │   └── posts.js                # Blog posts
    └── hooks/
        ├── useReveal.js            # Scroll-reveal logic
        └── useCountUp.js           # Animated number counters
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS version) and npm

### Running Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/martex.git
   cd martex
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the local address printed in the terminal (usually `http://localhost:5173`).

### Production Build
```bash
npm run build      # creates the optimized dist/ folder
npm run preview    # serves the production build locally
```

---

## ⚙️ Key Configuration Options

### Changing Colors and Fonts
Global styles and theme values live in [`src/index.css`](src/index.css). The pages also use a few fixed colors that you can find with **Search in Files** (`Ctrl+Shift+F`) and replace:

```text
#1677ff   main blue (buttons, links, active states)
#0f5fd6   darker blue (button hover)
#5a54c8   purple call-to-action cards
#f7f7fb   light gray section backgrounds
```

### Changing Images
- **Core Features:** edit the `IMG` object near the top of [`src/pages/CoreFeatures.jsx`](src/pages/CoreFeatures.jsx).
- **Projects:** edit `baseProjects` in [`src/pages/Projects.jsx`](src/pages/Projects.jsx), and the three extra pages in `moreTitles`.
- **Testimonials and avatars:** edit the `avatar` paths in [`src/pages/Testimonials.jsx`](src/pages/Testimonials.jsx).
- **Project Details:** edit the `IMG` object at the top of [`src/pages/ProjectDetails.jsx`](src/pages/ProjectDetails.jsx), and the YouTube link in `VIDEO_URL`.
- **Sign In / Sign Up artwork:** place `login-bg.jpg` and `signup-bg.jpg` in `public/images/login/`.

Use paths that start with `/images/...`, which point to files in `public/images/`.

### Connecting the Forms
- **Sign In / Sign Up:** both forms currently only log to the console. Add your authentication API call where the `TODO` comment is in [`SignIn.jsx`](src/pages/SignIn.jsx) and [`SignUp.jsx`](src/pages/SignUp.jsx).
- **Download buttons:** put your real file links in the `href` fields of the `latest` and `older` objects in [`Download.jsx`](src/pages/Download.jsx).
- **Newsletter forms:** connect them to your email service.

### Adding a New Page
1. Create the component in `src/pages/`.
2. Import it in [`src/App.jsx`](src/App.jsx) and add a `<Route path="/your-page" element={<YourPage />} />` inside the layout route.
3. Remove its entry from the `pages` placeholder list, if it has one.
4. Add a link to it in `src/data/navLinks.js`.

---

## 🗓️ Roadmap

- [ ] Build the FAQs page
- [ ] Build the Blog listing and a custom 404 page
- [ ] Connect Sign In and Sign Up to a real authentication API
- [ ] Add real content for pages 2 and 3 of Projects and Testimonials

---

## 🙏 Credits

- Original design and template: **Martex** by elite-themes24 / ibthemespro
- React and Tailwind CSS implementation: **<your name>**

The template's artwork and images belong to their original authors. This repository is for learning and demonstration only. Replace any template images with your own before using the project commercially.

---

## 📄 License
No license has been chosen for this project yet. Add a `LICENSE` file if you want others to reuse your code.

Copyright © 2026 <your name>. Template design and artwork © their original authors.
