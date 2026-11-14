export const site = {
  name: "Nagasubramaniam G",
  shortName: "NG",
  role: "AI/ML Engineer | GenAI and LLM/RAG Systems | Full-Stack Developer",
  headline: "Building Intelligent Systems. Engineering Real-World Solutions.",
  tagline:
    "I build practical AI-powered applications and full-stack products, combining machine learning, generative AI, data and software engineering to solve real-world problems.",
  description:
    "Portfolio of Nagasubramaniam G — AI Engineer, GenAI / LLM-RAG developer, and full-stack engineer in Chennai, India. Entry-level / junior hire profile with production freelance sites, RAG systems, computer vision, and SaaS projects.",
  availability:
    "Open to AI/ML roles and scoped freelance web / GenAI projects.",
  location: "Chennai, Tamil Nadu, India",
  responsePromise: "I usually reply within two business days.",
  email: "nagasubramaniamg@gmail.com",
  phone: "+91 8056970460",
  phoneHref: "tel:+918056970460",
  whatsappHref: "https://wa.me/918056970460",
  github: "https://github.com/NagaSubramaniamCodes",
  linkedin: "https://www.linkedin.com/in/nagasubramaniam-g/",
  resumePath: "/resume/nagasubramaniam-g-aiml.pdf",
  resumeReady: true,
  portraitPath: "/images/profile/portrait.jpg",
  copyrightYear: 2026,
} as const;

/** Verified live freelance deliveries — shown in hero proof line. */
export const liveSites = [
  {
    label: "cholapower.in",
    href: "https://cholapower.in",
    title: "Chola Power",
  },
  {
    label: "dharanifitness.in",
    href: "https://dharanifitness.in/",
    title: "Dharani Fitness",
  },
] as const;

export const profileLinks = [
  { label: "Email", href: `mailto:${site.email}` },
  { label: "Phone", href: site.phoneHref },
  { label: "WhatsApp", href: site.whatsappHref },
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
] as const;

export const aboutStory = {
  intro:
    "I am an early-career AI/ML engineer who builds practical GenAI systems and production-ready web products — from problem framing through architecture, implementation, and deployment.",
  paragraphs: [
    "I completed a B.Tech in Computer Science with an Artificial Intelligence and Machine Learning specialisation at Kalasalingam Academy of Research and Education (August 2021 – May 2025). Alongside formal study, I trained at Bosscoder Academy in data science and machine learning.",
    "My work sits at the intersection of applied AI and product engineering: retrieval-augmented assistants, computer-vision experiments, solo SaaS architecture, and freelance production websites. I care about clear ownership, verified evidence, and systems that ship.",
    "I am looking for AI/ML, GenAI, LLM/RAG, and applied AI engineering roles — and carefully scoped freelance engagements where I can own delivery end to end.",
  ],
  timeline: [
    {
      period: "2021 – 2025",
      title: "B.Tech CSE — AI & ML",
      detail:
        "Kalasalingam Academy of Research and Education. Specialisation in Artificial Intelligence and Machine Learning.",
    },
    {
      period: "Training",
      title: "Bosscoder Academy",
      detail: "Data Science and Machine Learning programme.",
    },
    {
      period: "Practice",
      title: "Freelance & solo product work",
      detail:
        "Live client sites for Chola Power and Dharani Fitness, SportsHub SaaS architecture, and collaborative GenAI projects.",
    },
    {
      period: "Recognition",
      title: "Hack-AI-thon · Patent · Publication",
      detail:
        "First place among 39+ teams; Indian Patent No. 573184; fourth-author research at ICMCTT 2024.",
    },
  ],
} as const;
