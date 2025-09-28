export type ResumeLink = {
  label: string;
  url: string;
};

export type Experience = {
  company: string;
  website?: string;
  location: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
};

export type Education = {
  institution: string;
  location?: string;
  degree: string;
  year: string;
};

export type Skill = {
  name: string;
  url?: string;
  icon?: string;
};

export type SkillCategory = {
  category: string;
  items: Skill[];
};

export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  name: string;
  description: string;
  highlights: string[];
  links: ProjectLink[];
};

export type ResumeData = {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  photo: string;
  links: ResumeLink[];
  summary: string;
  experiences: Experience[];
  projects: Project[];
  education: Education[];
  skills: SkillCategory[];
};

export const resumeData: ResumeData = {
  name: "Mehdi Nasiri",
  title: "Software Engineer | React | Next.js | TypeScript",
  location: "Berlin, Germany",
  email: "m.mehdi.nasiri@gmail.com",
  phone: "+49 176 84905865",
  photo: "/profile.png",
  links: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/m-mehdi-nasiri",
    },
    {
      label: "GitHub",
      url: "https://github.com/mmehdinasiri",
    },
  ],
  summary:
    "Dedicated JavaScript Developer with 9+ years of experience building scalable, high-performance web applications using React and Next.js. Skilled in Nx monorepos, I leverage cutting-edge technologies to deliver innovative solutions while expanding backend expertise to contribute as a full-stack developer.",
  experiences: [
    {
      company: "Tourlane",
      website: "https://www.tourlane.de/",
      location: "Germany",
      role: "Software Engineer",
      start: "03/2022",
      end: "Present",
      bullets: [
        "Architected core system standards within a large-scale Nx monorepo (5+ projects, 3+ packages), defining technical direction for tooling and reliability while leveraging Next.js, React 19, and TypeScript for the core application and conducting architectural reviews to scale delivery quality.",
        "Designed the data and service layer using tRPC and Fastify to implement a type-safe Backend-for-Frontend (BFF) pattern. Integrated REST and GraphQL microservices into a unified data layer and optimized performance with advanced Redis-based SWR caching for the tRPC layer, improving both speed and perceived responsiveness.",
        "Contributed significantly to four internal AI-focused hackathons, facilitating the successful implementation of innovative product features that directly influenced the product roadmap.",
        "Drove product innovation and optimization by launching and monitoring four to five critical A/B/C experiments quarterly, directly influencing the product roadmap and leading to 20% improvements in lead conversion and user journey streamlining.",
        "Streamlined CI/CD and developer workflow by designing advanced GitHub Actions with smart caching and dependency analysis, tripling CI speed (15→5 min), enabling faster feedback cycles, reducing ticket cycle time, and ensuring quality with Playwright E2E and Vitest unit tests.",
        "Elevated developer experience by creating a comprehensive design system using React and PandaCSS, accelerating development velocity by 50%.",
        "Managed observability and performance by engineering a custom Next.js middleware for OpenTelemetry to accurately measure and improve performance. Utilized Sentry, Prometheus, and Grafana to monitor data, successfully reducing site latency from 350ms to 250ms and decreasing client-side load.",
        "Drove architectural alignment and collaboration across multiple teams in the Nx monorepo, participating in weekly technical syncs, coordinating large-scale initiatives, enhancing the monorepo, and enforcing shared code guidelines and best practices across projects.",
        "Enhanced code reusability and modularity by implementing composable packages for shared functionalities, ensuring efficient reuse across different projects and supporting scalable, high-quality architecture.",
      ],
    },
    {
      company: "Mofid",
      website: "https://www.emofid.com/",
      location: "Iran",
      role: "Frontend Developer",
      start: "07/2020",
      end: "03/2022",
      bullets: [
        "Led the complete architectural redesign and migration of five major legacy web applications to modern, scalable Next.js/React and TypeScript systems, overseeing the design and implementation of a component-based architecture with 50+ reusable components.",
        "Conducted over 200 technical interviews and successfully recruited and onboarded more than six frontend developers who continue to be valuable members of the organization.",
        "Architected an enterprise-grade system executing SSR/SSG for optimal SEO performance, increasing Lighthouse score by 25% and achieving excellent Core Web Vitals through code splitting and efficient state management using Zustand and React Query.",
        "Constructed financial data visualization and reporting systems using Highcharts and ApexCharts, creating complex charts for net asset value, portfolio analysis, and real-time market data presentation.",
        "Engineered robust internationalization solutions using next-intl for all platforms, supporting comprehensive content translation and RTL/LTR layouts, and spearheaded a self-hosted implementation of Tolgee that yielded significant localization cost savings.",
        "Formulated advanced UI features, including sophisticated animation systems with GSAP and Framer Motion, executed complex forms with React Hook Form (40+ fields), and ensured responsive design using Tailwind CSS for more than five teams.",
      ],
    },
    {
      company: "Farakav",
      website: "https://www.varzesh3.com/",
      location: "Iran",
      role: "Frontend Developer",
      start: "08/2018",
      end: "07/2020",
      bullets: [
        "Implemented a hybrid website structure serving over one million visits per day using Razor Markup for initial page loading, enabling integration of modern JavaScript libraries such as Vue.js and React.js despite legacy constraints.",
        "Enhanced the Varzesh3 website with new features by adding widgets using Vue.js, vanilla JavaScript, and Sass while maintaining compatibility with legacy browsers like Internet Explorer 8.",
        "Developed impactful landing pages for sports events using vanilla JavaScript, jQuery, and Sass.",
        "Led the Tamasha.ir refactoring by designing and building a custom grid system with Sass to deliver a modern design.",
        "Utilized Vue.js for specific pages while strategically employing vanilla JavaScript, jQuery, and Angular to meet diverse project requirements.",
        "Upgraded and expanded the admin panel by introducing new features with Angular and modernizing the overall experience.",
      ],
    },
    {
      company: "Exir",
      website: undefined,
      location: "Iran",
      role: "Frontend Developer",
      start: "08/2016",
      end: "07/2018",
      bullets: [
        "Bootstrapped and constructed web applications as the sole frontend developer for the organization.",
        "Created a Vue.js-based admin panel that reduced page load times by 60%, improving user satisfaction scores among educational agency staff.",
        "Executed responsive design to ensure optimal user experiences across a wide range of devices.",
        "Optimized performance to deliver fast and seamless user interactions across applications.",
      ],
    },
  ],
  projects: [
    {
      name: "React Calendar Date-Time Picker",
      description:
        "Open-source React component that delivers fully accessible Gregorian and Jalali calendars with configurable date and time selection modes.",
      highlights: [
        "Supports single, range, and multiple date selection with optional time pickers, weekend markers, and disabled date rules to fit complex scheduling needs.",
        "Provides comprehensive TypeScript support, theme customization, and context-driven APIs adopted by product teams across multiple internal projects.",
        "Maintains an interactive documentation site with live examples, ensuring seamless onboarding for open-source users and collaborators.",
      ],
      links: [
        {
          label: "Website",
          url: "https://mmehdinasiri.github.io/react-calendar-datetime-picker-website/",
        },
        {
          label: "npm",
          url: "https://www.npmjs.com/package/react-calendar-datetime-picker",
        },
        {
          label: "GitHub",
          url: "https://github.com/mmehdinasiri/react-calendar-datetime-picker",
        },
      ],
    },
  ],
  education: [
    {
      institution: "Payame Noor University",
      location: "Iran",
      degree: "Bachelor's degree, Computer Science",
      year: "2013",
    },
  ],
  skills: [
    {
      category: "Languages & Core",
      items: [
        {
          name: "TypeScript",
          url: "https://www.typescriptlang.org/",
          icon: "typescript",
        },
        {
          name: "JavaScript",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          icon: "javascript",
        },
        {
          name: "HTML",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          icon: "html5",
        },
        {
          name: "CSS / SCSS",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          icon: "css3",
        },
      ],
    },
    {
      category: "Frontend Frameworks",
      items: [
        { name: "React", url: "https://react.dev/", icon: "react" },
        { name: "Next.js", url: "https://nextjs.org/", icon: "nextjs" },
        { name: "Gatsby", url: "https://www.gatsbyjs.com/", icon: "gatsby" },
        { name: "Vue", url: "https://vuejs.org/", icon: "vue" },
      ],
    },
    {
      category: "Styling & UI",
      items: [
        { name: "PandaCSS", url: "https://panda-css.com/", icon: "panda" },
        { name: "Tailwind CSS", url: "https://tailwindcss.com/", icon: "tailwind" },
        {
          name: "CSS Modules",
          url: "https://github.com/css-modules/css-modules",
          icon: "cssmodules",
        },
        {
          name: "Styled Components",
          url: "https://styled-components.com/",
          icon: "styledcomponents",
        },
        { name: "Material UI", url: "https://mui.com/", icon: "mui" },
      ],
    },
    {
      category: "Testing & Quality",
      items: [
        { name: "Playwright", url: "https://playwright.dev/", icon: "playwright" },
        { name: "Cypress", url: "https://www.cypress.io/", icon: "cypress" },
        { name: "Jest", url: "https://jestjs.io/", icon: "jest" },
        { name: "Vitest", url: "https://vitest.dev/", icon: "vitest" },
        { name: "Zod", url: "https://zod.dev/", icon: "zod" },
        { name: "ESLint", url: "https://eslint.org/", icon: "eslint" },
        { name: "Prettier", url: "https://prettier.io/", icon: "prettier" },
      ],
    },
    {
      category: "Backend & Cloud",
      items: [
        { name: "Fastify", url: "https://fastify.dev/", icon: "fastify" },
        { name: "tRPC", url: "https://trpc.io/", icon: "trpc" },
        { name: "Express.js", url: "https://expressjs.com/", icon: "express" },
        { name: "Node.js", url: "https://nodejs.org/", icon: "nodejs" },
        { name: "NestJS", url: "https://nestjs.com/", icon: "nestjs" },
        { name: "MongoDB", url: "https://www.mongodb.com/", icon: "mongodb" },
        { name: "Redis", url: "https://redis.io/", icon: "redis" },
      ],
    },
    {
      category: "Hosting",
      items: [
        { name: "Netlify", url: "https://www.netlify.com/", icon: "netlify" },
        { name: "Fly.io", url: "https://fly.io/", icon: "flyio" },
        {
          name: "AWS CloudWatch",
          url: "https://aws.amazon.com/cloudwatch/",
          icon: "cloudwatch",
        },
      ],
    },
    {
      category: "Architecture & Tools",
      items: [
        { name: "Nx", url: "https://nx.dev/", icon: "nx" },
        { name: "Git", url: "https://git-scm.com/", icon: "git" },
        { name: "GitHub", url: "https://github.com/", icon: "github" },
        {
          name: "GitHub Actions",
          url: "https://docs.github.com/en/actions",
          icon: "githubactions",
        },
        { name: "WebRTC", url: "https://webrtc.org/", icon: "webrtc" },
        { name: "Vim", url: "https://www.vim.org/", icon: "vim" },
        { name: "Cursor", url: "https://www.cursor.com/", icon: "cursor" },
      ],
    },
    {
      category: "Product & Compliance",
      items: [
        { name: "Contentful", url: "https://www.contentful.com/", icon: "contentful" },
        { name: "WordPress", url: "https://wordpress.org/", icon: "wordpress" },
        { name: "ConfigCat", url: "https://configcat.com/", icon: "configcat" },
        { name: "Didomi", url: "https://www.didomi.io/", icon: "didomi" },
        { name: "Phrase", url: "https://phrase.com/", icon: "phrase" },
        { name: "Tolgee", url: "https://tolgee.io/", icon: "tolgee" },
      ],
    },
    {
      category: "Observability & Monitoring",
      items: [
        { name: "Sentry", url: "https://sentry.io/", icon: "sentry" },
        { name: "OpenTelemetry", url: "https://opentelemetry.io/", icon: "opentelemetry" },
        { name: "Snowplow", url: "https://snowplow.io/", icon: "snowplow" },
        {
          name: "Google Tag Manager",
          url: "https://marketingplatform.google.com/about/tag-manager/",
          icon: "gtm",
        },
      ],
    },
    {
      category: "Build Tools & Bundlers",
      items: [
        { name: "Webpack", url: "https://webpack.js.org/", icon: "webpack" },
        { name: "Rollup", url: "https://rollupjs.org/", icon: "rollup" },
        { name: "esbuild", url: "https://esbuild.github.io/", icon: "esbuild" },
      ],
    },
  ],
};
