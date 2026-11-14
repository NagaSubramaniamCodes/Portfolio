import type { Ownership, Project } from "@/types/portfolio";

export const ownershipLabel: Record<Ownership, string> = {
  freelance: "Freelance",
  solo: "Solo",
  team: "Team",
};

/**
 * Projects with live or concept visuals keep media.
 * Supporting projects keep strong case-study copy without photo galleries.
 */
export const projects: readonly Project[] = [
  {
    slug: "sportshub",
    title: "SportsHub",
    category: "Solo Product | Full-Stack SaaS",
    ownership: "solo",
    featured: true,
    featuredOrder: 1,
    group: "flagship",
    summary:
      "SportsHub is a production-oriented sports facility management platform designed to bring discovery, booking, access control and payment workflows into one coherent product. I designed and delivered the system end to end — from the data model and role-based access controls to the customer experience, payment flow, and deployment pipeline. The platform uses more than 29 relational database models to support the operational complexity behind a real multi-role SaaS product.",
    contribution:
      "I owned product architecture, frontend, backend, database design, authentication, RBAC, payment integration, AI-powered slot recommendation, and deployment. The result demonstrates that I can take an ambiguous product problem and turn it into a working, production-oriented system rather than a standalone prototype.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "PostgreSQL",
      "Prisma",
      "Clerk v6",
      "RBAC",
      "Razorpay",
      "AI recommendations",
      "Docker",
      "Cloud deployment",
    ],
    links: [],
    images: [
      {
        src: "/images/projects/sportshub/concept.webp",
        alt: "Concept visual of a sports facility booking dashboard with venues, calendar, and time slots.",
        caption:
          "Concept visual. An original interface illustration, not a product screenshot.",
        width: 1280,
        height: 720,
        concept: true,
      },
    ],
    caseStudy: [
      {
        id: "overview",
        heading: "Overview",
        body: "SportsHub is a production-ready sports facility management platform that unifies discovery, booking, access control, and payment workflows into one coherent product experience.",
      },
      {
        id: "problem",
        heading: "Problem",
        body: "Facility operators and players need a single system for venue discovery, slot booking, role-based access, and payments. Fragmented tools create operational friction and a weak booking experience.",
      },
      {
        id: "solution",
        heading: "Solution",
        body: "A multi-role SaaS platform with a relational data model of more than 29 models, Clerk-based authentication and RBAC, Razorpay payments, and AI-powered slot recommendations.",
      },
      {
        id: "architecture",
        heading: "Architecture",
        body: "Next.js and React on the frontend, TypeScript throughout, PostgreSQL with Prisma for the data layer, Clerk v6 for authentication and RBAC, Razorpay for payments, and Docker-backed cloud deployment.",
      },
      {
        id: "contribution",
        heading: "My contribution",
        body: "Solo ownership across product architecture, frontend, backend, database design, authentication, RBAC, payment integration, AI slot recommendation, and deployment.",
      },
      {
        id: "outcomes",
        heading: "Outcomes and evidence",
        body: "Verified claims focus on system scope and ownership: 29+ relational models, end-to-end solo delivery, and the named technology stack. Live URL, usage metrics, and revenue figures are not published here.",
      },
    ],
  },
{
    slug: "chola-power",
    title: "Chola Power",
    category: "Freelance Client Delivery | Production Web Engineering",
    ownership: "freelance",
    featured: true,
    featuredOrder: 2,
    group: "flagship",
    summary:
      "Chola Power is a live digital platform for a solar-energy business. I delivered a fast, trustworthy web experience that helps a real company communicate its services, build credibility, and support customer enquiries — pairing a polished front end with deployment, deliverability, security, and discoverability concerns that are often missing from portfolio-only work.",
    contribution:
      "I built and deployed the production website, including the modern responsive interface, Docker-based delivery, Cloudflare CDN and DDoS protection, transactional email integration, and technical SEO foundation.",
    technologies: [
      "Next.js 15",
      "React 19",
      "Docker",
      "Cloudflare CDN",
      "DDoS protection",
      "Transactional email",
      "Technical SEO",
    ],
    links: [
      {
        label: "cholapower.in",
        href: "https://cholapower.in",
      },
    ],
    images: [
      {
        src: "/images/projects/chola-power/homepage-desktop.webp",
        alt: "Desktop screenshot of the live Chola Power homepage. Brand and design belong to Chola Power Private Limited.",
        caption: "Live homepage on a desktop browser.",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/chola-power/homepage-mobile.webp",
        alt: "Phone screenshot of the live Chola Power homepage. Brand and design belong to Chola Power Private Limited.",
        caption: "Live homepage on a phone-sized browser.",
        width: 780,
        height: 1688,
      },
      {
        src: "/images/projects/chola-power/gallery-desktop.webp",
        alt: "Desktop screenshot of the Chola Power project gallery. Photographs belong to Chola Power Private Limited.",
        caption: "Live project gallery on a desktop browser.",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/chola-power/gallery-mobile.webp",
        alt: "Phone screenshot of the Chola Power project gallery. Photographs belong to Chola Power Private Limited.",
        caption: "Live project gallery on a phone-sized browser.",
        width: 780,
        height: 1688,
      },
    ],
    caseStudy: [
      {
        id: "overview",
        heading: "Overview",
        body: "A live production website for Chola Power, a solar-energy business, designed to communicate services clearly and support customer enquiries.",
      },
      {
        id: "problem",
        heading: "Business problem",
        body: "The business needed a trustworthy public digital presence — fast, secure, and discoverable — rather than a brochure that ignored deployment and SEO realities.",
      },
      {
        id: "approach",
        heading: "Design and development",
        body: "Built with Next.js 15 and React 19 as a responsive public site, with Docker-based delivery, Cloudflare CDN and DDoS protection, transactional email, and a technical SEO foundation.",
      },
      {
        id: "contribution",
        heading: "My contribution",
        body: "Freelance ownership of implementation and production deployment for the public website. Client brand assets and photography remain the property of Chola Power Private Limited.",
      },
      {
        id: "evidence",
        heading: "Live evidence",
        body: "The site is public at cholapower.in. Screenshots were captured from the live site. Traffic, leads, and testimonials are not claimed here.",
      },
    ],
  },
{
    slug: "conversational-rag-assistant",
    title: "Conversational AI Assistant with RAG",
    category: "Team Project | LLM and Retrieval Engineering",
    ownership: "team",
    featured: true,
    featuredOrder: 3,
    group: "flagship",
    summary:
      "A conversational AI assistant that combines large language models with semantic retrieval to produce more grounded, useful responses. The system was built around Llama and Mistral models, FAISS-powered retrieval, Sentence Transformers embeddings, and a FastAPI service layer. Iterative prompt and retrieval tuning produced an F1 score above 89 percent.",
    contribution:
      "As part of the team, I contributed to building and refining the retrieval-augmented workflow, including embedding-based search, model interaction, evaluation, and application integration. The project demonstrates practical understanding of the trade-offs that matter in real RAG systems: retrieval quality, relevance, prompt design, latency, and repeatable evaluation.",
    technologies: [
      "Python",
      "Llama",
      "Mistral",
      "FAISS",
      "Sentence Transformers",
      "Hugging Face",
      "PyTorch",
      "FastAPI",
      "Docker",
    ],
    links: [],
    images: [
      {
        src: "/images/projects/rag-assistant/concept.webp",
        alt: "Concept visual of a document assistant with retrieval diagram and grounded conversation.",
        caption:
          "Concept visual. An original illustration of the RAG workflow, not a live product screenshot.",
        width: 1280,
        height: 720,
        concept: true,
      },
    ],
    caseStudy: [
      {
        id: "overview",
        heading: "Overview",
        body: "A collaborative conversational assistant that pairs LLMs with semantic retrieval so answers stay grounded in retrieved context.",
      },
      {
        id: "architecture",
        heading: "Architecture",
        body: "Document processing → chunking → embeddings (Sentence Transformers) → vector retrieval (FAISS) → LLM generation (Llama / Mistral) → response. Served through a FastAPI layer and packaged with Docker.",
      },
      {
        id: "contribution",
        heading: "My contribution",
        body: "Team contribution across the RAG workflow: embedding-based search, model interaction, evaluation, and application integration. This is collaborative work, not a solo build.",
      },
      {
        id: "evaluation",
        heading: "Evaluation",
        body: "Reported F1 score above 89% after iterative prompt and retrieval tuning. The figure is retained as project-reported evidence and should be read in the context of the team evaluation setup.",
      },
    ],
  },
{
    slug: "multimodal-ai-virtual-assistant",
    title: "Multimodal AI Virtual Assistant",
    category: "Hackathon Team Project | GenAI Product Prototype",
    ownership: "team",
    group: "ai-ml",
    summary: "An award-winning multimodal generative AI assistant built during a 24-hour hackathon, unifying voice, visual, and text workflows into a functional real-time assistant that won 1st place among 39+ competing teams.",
    contribution: "As a core team member at KARE ACM & Diebold Nixdorf's Hack-AI-thon (Dec 2024), I contributed to GenAI solution shaping, rapid prototyping, integration, and the final live demonstration. Judging recognised the team delivery, not an individual award.",
    technologies: [
          "Generative AI",
          "Multimodal AI",
          "LLM orchestration",
          "Rapid prototyping",
          "Python",
          "AI product development"
    ],
    links: [],
    recognition: "1st Place · Hack-AI-thon (KARE ACM & Diebold Nixdorf) · 39+ teams · ₹5,000 · Dec 2024",
    images: [
      {
        src: "/images/projects/multimodal-assistant/concept.webp",
        alt: "Concept visual of a multimodal assistant with text, image, audio, and video panels.",
        caption: "Concept visual. Original illustration of the hackathon concept.",
        width: 1280,
        height: 720,
        concept: true,
      },
    ],
    caseStudy: [
      {
        id: "problem",
        heading: "Problem",
        body: "Standard text-only chatbots create friction in fast-paced, multi-sensory workflows where users need seamless context switching across input and output modalities.",
      },
      {
        id: "solution",
        heading: "Solution & architecture",
        body: "Designed and demonstrated an end-to-end multimodal GenAI pipeline within a strict 24-hour sprint. Integrated LLM orchestration with rapid inference endpoints to deliver responsive, context-aware interactions under hackathon constraints.",
      },
      {
        id: "pipeline",
        heading: "System pipeline",
        body: "Input ingestion and preprocessing → multimodal routing and context assembly → LLM inference → response synthesis. Engineering trade-offs prioritised low-latency inference and deterministic fallback handling so the demo stayed stable under live judging.",
      },
      {
        id: "contribution",
        heading: "My contribution",
        body: "Core-team contribution across solution design, prototyping, integration, and demo. Attribution remains collaborative.",
      },
      {
        id: "impact",
        heading: "Impact & recognition",
        body: "Secured 1st place (₹5,000 cash prize) out of 39+ teams for turning a time-boxed GenAI concept into a stable, live-demonstrable product.",
      }
    ],
  },
{
    slug: "skin-cancer-prediction",
    title: "Skin Cancer Prediction and Detection",
    category: "Team Project | Computer Vision Capstone & Research",
    ownership: "team",
    group: "computer-vision",
    summary: "A computer-vision decision-support system leveraging transfer learning and image preprocessing to assist in early skin-lesion assessment — framed as clinical assistance, not autonomous diagnosis.",
    contribution: "As a team member I worked on dataset preparation, model experimentation, evaluation loops, and integrating the prediction pipeline into a usable workflow. I kept the narrative honest: AI as screening support under expert oversight.",
    technologies: [
          "Python",
          "OpenCV",
          "CNN",
          "VGG16",
          "ResNet50",
          "Transfer learning",
          "Isolation Forest",
          "One-Class SVM",
          "Model evaluation"
    ],
    links: [],
    recognition: "Connected to ICMCTT 2024 publication · 4th author",
    images: [],
    caseStudy: [
      {
        id: "problem",
        heading: "Problem",
        body: "Early visual screening of dermatological lesions suffers from high inter-observer variability and subtle morphological differences between benign and malignant cases.",
      },
      {
        id: "solution",
        heading: "Solution & architecture",
        body: "Built an image-classification pipeline combining OpenCV preprocessing (Gaussian blurring, histogram equalisation) with deep convolutional architectures (CNN, VGG16, ResNet50 via transfer learning) and anomaly-detection baselines (Isolation Forest, One-Class SVM).",
      },
      {
        id: "evaluation",
        heading: "Modeling & evaluation",
        body: "Comparative benchmarking across fine-tuned CNN backbones with precision/recall tracking to minimise false negatives. Outputs were designed as decision support a reviewer could interpret — not a diagnostic replacement.",
      },
      {
        id: "contribution",
        heading: "My contribution",
        body: "Team contribution across data prep, training/evaluation iterations, and workflow integration, with explicit attention to scope boundaries and responsible framing.",
      },
      {
        id: "impact",
        heading: "Impact & recognition",
        body: "Connected to peer-reviewed research — \"Earlier Cancer and Tumor Detection Using Deep Learning Techniques\" (ICMCTT 2024, 4th author) — demonstrating strong classification performance in related oncology imaging workflows. Portfolio claims stay tied to that publication record rather than invented clinical metrics.",
      }
    ],
  },
{
    slug: "flower-plucking-robotic-arm",
    title: "Flower Plucking Robotic Arm",
    category: "Team Project | Patented Robotics and Computer Vision",
    ownership: "team",
    group: "computer-vision",
    summary: "A patented cross-disciplinary mechatronics and computer-vision system engineered to detect mature flowers and execute precision automated harvesting.",
    contribution: "I contributed to the applied AI and robotics workflow — bridging visual detection with physical actuation under real-world constraints. Patent attribution follows the official record; FlowerBot research-paper authorship is not claimed.",
    technologies: [
          "Robotics",
          "Computer vision",
          "Deep learning",
          "Object detection",
          "Embedded systems",
          "Automation"
    ],
    links: [],
    recognition: "Granted Indian Patent No. 573184 · Appl. 202241055456",
    images: [],
    caseStudy: [
      {
        id: "problem",
        heading: "Problem",
        body: "Manual floriculture harvesting is labour-intensive, time-sensitive, and prone to crop damage when maturity identification is inconsistent.",
      },
      {
        id: "solution",
        heading: "Solution & architecture",
        body: "Bridged deep-learning object detection with robotic arm kinematics. The vision module identifies target blooms and estimates spatial coordinates, translating visual detections into physical actuation commands for gentle, automated plucking.",
      },
      {
        id: "subsystems",
        heading: "Subsystems",
        body: "Vision perception (bloom detection and localisation) + control interface + robotic end-effector actuation — hardware-software integration validated through the Indian Patent Office examination lifecycle.",
      },
      {
        id: "contribution",
        heading: "My contribution",
        body: "Team contribution across applied AI/robotics integration and problem framing. Documented strictly as a patented engineering project rather than first-author publication.",
      },
      {
        id: "impact",
        heading: "Impact & recognition",
        body: "Filed under Indian Patent Application 202241055456 (Sept 2022) and granted Patent No. 573184 (Oct 2025) under Kalasalingam Academy of Research and Education.",
      }
    ],
  },
{
    slug: "amazon-product-intelligence",
    title: "Amazon Web Scraping and Product Intelligence",
    category: "Team Project | Data Collection and Analysis",
    ownership: "team",
    group: "ai-ml",
    summary: "An end-to-end data engineering and product analytics pipeline that extracts publicly visible e-commerce listings and transforms them into structured, analysis-ready market intelligence.",
    contribution: "I contributed to collection design, cleaning and structuring product fields, and shaping outputs stakeholders could actually analyse — trustworthy structure over flashy charts.",
    technologies: [
          "Python",
          "Web scraping",
          "HTML parsing",
          "Data cleaning",
          "Pandas",
          "SQL",
          "Data analysis",
          "ETL"
    ],
    links: [],
    images: [],
    caseStudy: [
      {
        id: "problem",
        heading: "Problem",
        body: "E-commerce pricing, rating distributions, and catalog attributes are locked inside unstructured web pages, preventing systematic competitive benchmarking.",
      },
      {
        id: "solution",
        heading: "Solution & architecture",
        body: "Engineered automated extraction scripts with rate-limit compliance, HTML parsing, schema normalisation, and data cleaning workflows to output structured tabular datasets for pricing and sentiment analysis.",
      },
      {
        id: "etl",
        heading: "ETL workflow & analytics output",
        body: "Request orchestration → DOM parsing and attribute extraction → regex/currency/rating normalisation → structured storage. Outputs include price-to-rating correlation tables and category-level competitive summaries.",
      },
      {
        id: "contribution",
        heading: "My contribution",
        body: "Team contribution across pipeline design, cleaning logic, and delivering structured outputs suitable for downstream analysis.",
      },
      {
        id: "impact",
        heading: "Impact",
        body: "Enables rapid market comparison, pricing distribution tracking, and review-volume insights across product categories — without inventing commercial KPIs.",
      }
    ],
  },
{
    slug: "air-quality-monitoring",
    title: "Air Quality Monitoring System",
    category: "Team Project | IoT and Environmental Analytics",
    ownership: "team",
    group: "iot",
    summary: "An IoT environmental sensing and visualization platform that captures real-time air-quality sensor signals and translates raw telemetry into an accessible, human-readable monitoring dashboard.",
    contribution: "I contributed across the sensing-to-dashboard flow: capture, processing, and presenting readings so a non-expert could monitor air-safety status.",
    technologies: [
          "IoT",
          "Sensors",
          "Python",
          "Signal calibration",
          "AQI mapping",
          "Dashboards",
          "Environmental monitoring"
    ],
    links: [],
    images: [],
    caseStudy: [
      {
        id: "problem",
        heading: "Problem",
        body: "Raw particulate and gas sensor voltages are unintelligible to everyday users without calibration, threshold mapping, and clear visual presentation.",
      },
      {
        id: "solution",
        heading: "Solution & architecture",
        body: "Built an end-to-end IoT pipeline connecting air-quality hardware sensors to a data ingestion layer and user-facing monitoring interface with Air Quality Index (AQI) status indicators.",
      },
      {
        id: "layers",
        heading: "System layers",
        body: "Sensor node acquisition → signal filtering and unit calibration → telemetry transmission → visual dashboard.",
      },
      {
        id: "contribution",
        heading: "My contribution",
        body: "Team contribution across the sensing → processing → presentation path, keeping the system coherent as an end-to-end monitor.",
      },
      {
        id: "impact",
        heading: "Impact",
        body: "Turns continuous environmental sensor streams into actionable health and air-safety awareness — without inventing city-scale deployment metrics.",
      }
    ],
  },
{
    slug: "java-library-management",
    title: "Java Library Management System",
    category: "Team Project | Object-Oriented Application Development",
    ownership: "team",
    group: "foundations",
    summary: "A foundational object-oriented Java application built to streamline core library operations — catalog indexing, member records, borrowing lifecycles, and real-time availability tracking.",
    contribution: "I contributed to modelling domain entities, implementing core borrow/return flows, and keeping the codebase structured so another developer could extend it.",
    technologies: [
          "Java",
          "OOP",
          "DBMS",
          "CRUD workflows",
          "Entity modeling",
          "Application design"
    ],
    links: [],
    images: [],
    caseStudy: [
      {
        id: "problem",
        heading: "Problem",
        body: "Manual ledger tracking in small-to-midsize libraries leads to inventory discrepancies, overdue tracking errors, and slow circulation workflows.",
      },
      {
        id: "solution",
        heading: "Solution & architecture",
        body: "Designed a modular Java application applying core OOP principles (encapsulation, inheritance, clean separation of domain entities and data access) to manage books, patrons, issue/return transactions, and availability states.",
      },
      {
        id: "architecture",
        heading: "Architecture",
        body: "Entity modelling (Book, Member, Transaction), CRUD operations, state validation rules that prevent double-issuing unavailable copies, and search/filter logic.",
      },
      {
        id: "contribution",
        heading: "My contribution",
        body: "Team contribution to domain modelling and core transaction flows with maintainability as a first-class goal.",
      },
      {
        id: "impact",
        heading: "Impact",
        body: "Enforces transactional consistency across book checkouts and returns while simplifying catalog lookup — evidence of solid software-engineering fundamentals.",
      }
    ],
  },
{
    slug: "accident-risk-prediction",
    title: "Accident Risk Prediction",
    category: "Team Project | Predictive Analytics",
    ownership: "team",
    group: "ai-ml",
    summary: "A supervised machine-learning workflow that models historical road-incident data to estimate accident risk levels across environmental, temporal, and roadway conditions.",
    contribution: "I contributed to data preparation, feature work, model experiments, and framing outputs as risk indicators for stakeholders — not absolute predictions of individual events.",
    technologies: [
          "Python",
          "Pandas",
          "Scikit-learn",
          "Feature engineering",
          "Classification",
          "Model evaluation",
          "Imbalanced learning"
    ],
    links: [],
    images: [],
    caseStudy: [
      {
        id: "problem",
        heading: "Problem",
        body: "Road safety interventions are often reactive due to a lack of granular risk scoring across combinations of weather, road geometry, and traffic timing.",
      },
      {
        id: "solution",
        heading: "Solution & architecture",
        body: "Executed end-to-end tabular ML engineering — handling missing data, encoding categorical road/weather variables, engineering interaction features, and training classification/risk-scoring models.",
      },
      {
        id: "features",
        heading: "Feature engineering & evaluation",
        body: "Temporal bucketing (rush hour, night), weather severity encoding, and road-type interactions, with class-imbalance handling and precision-recall/ROC analysis across risk tiers.",
      },
      {
        id: "contribution",
        heading: "My contribution",
        body: "Team contribution across cleaning, feature engineering, experimentation, and stakeholder-facing interpretation of risk signals.",
      },
      {
        id: "impact",
        heading: "Impact",
        body: "Identifies high-risk condition combinations to support preventative traffic advisories and resource allocation discussions.",
      }
    ],
  },
{
    slug: "iot-carbon-sequestration",
    title: "IoT Carbon Sequestration Monitor",
    category: "Team Project | Sustainability Technology",
    ownership: "team",
    group: "iot",
    summary: "A sustainability-focused IoT telemetry system built to monitor and log chemical carbon-sequestration performance in a sodium hydroxide (NaOH) capture setup.",
    contribution: "I contributed to sensing/logging design and interpreting process signals for monitoring discussions. Claims stay tied to the telemetry system — not unverified offset volumes.",
    technologies: [
          "IoT",
          "Sensors",
          "Microcontroller logging",
          "Data logging",
          "Environmental analytics",
          "Python"
    ],
    links: [],
    images: [],
    caseStudy: [
      {
        id: "problem",
        heading: "Problem",
        body: "Verifying the efficiency of small-scale chemical carbon capture requires continuous tracking of gas concentration and reaction parameters rather than sporadic manual readings.",
      },
      {
        id: "solution",
        heading: "Solution & architecture",
        body: "Integrated environmental/gas sensors with microcontroller data logging to continuously track CO₂ absorption dynamics within an NaOH-based sequestration unit.",
      },
      {
        id: "telemetry",
        heading: "Hardware & sustainability analysis",
        body: "Sensor calibration, continuous data acquisition, and structured logging of pre/post-capture gas readings — enabling absorption-rate curves and reagent-utilisation tracking without fabricating carbon-credit claims.",
      },
      {
        id: "contribution",
        heading: "My contribution",
        body: "Team contribution across sensing, logging, and honest framing of what the monitor can and cannot claim.",
      },
      {
        id: "impact",
        heading: "Impact",
        body: "Provides empirical, time-stamped telemetry to evaluate capture efficiency and reagent saturation over time.",
      }
    ],
  },
{
    slug: "yolo-transportation-analytics",
    title: "YOLO Transportation Analytics",
    category: "Team Project | Real-Time Computer Vision",
    ownership: "team",
    group: "computer-vision",
    summary: "A real-world computer-vision analytics pipeline utilizing YOLO object detection on custom traffic datasets to identify, classify, and analyze vehicles in complex road scenes.",
    contribution: "I contributed to detection pipeline work, evaluation on custom traffic scenes, and analysing where models fail in cluttered, real-world conditions.",
    technologies: [
          "Python",
          "YOLO",
          "OpenCV",
          "Object detection",
          "Custom datasets",
          "Data annotation",
          "Computer vision analytics"
    ],
    links: [],
    images: [],
    caseStudy: [
      {
        id: "problem",
        heading: "Problem",
        body: "Off-the-shelf object detectors often underperform on region-specific vehicle classes, dense multi-lane congestion, and varied lighting conditions.",
      },
      {
        id: "solution",
        heading: "Solution & architecture",
        body: "Curated and annotated a custom transportation dataset and fine-tuned a YOLO detection architecture to track vehicle counts, class distributions, and traffic flow dynamics.",
      },
      {
        id: "training",
        heading: "Data, training & analytics",
        body: "Custom bounding-box annotation, augmentation for scale/occlusion variance, YOLO fine-tuning, and per-frame detection aggregation into vehicle class breakdowns and directional flow metrics.",
      },
      {
        id: "contribution",
        heading: "My contribution",
        body: "Team contribution across detection setup, evaluation on real scenes, and translating detections into transportation-oriented analysis.",
      },
      {
        id: "impact",
        heading: "Impact",
        body: "Delivers structured traffic telemetry suitable for congestion analysis and urban mobility planning — without inventing city-scale deployment claims.",
      }
    ],
  },
{
    slug: "emotion-aware-music",
    title: "Emotion Aware Music Recommendation",
    category: "Team Project | Computer Vision and Recommendation Systems",
    ownership: "team",
    group: "computer-vision",
    summary: "A multimodal affective computing experiment that captures facial emotion cues and maps user sentiment to personalized music recommendations — assistive personalisation, not clinical emotion diagnosis.",
    contribution: "I contributed to connecting emotion signals with recommendation flow and keeping the product narrative clear: human-centric interaction without overselling emotion AI.",
    technologies: [
          "Python",
          "Computer vision",
          "Facial emotion recognition",
          "Machine learning",
          "Recommendation systems",
          "Affective computing"
    ],
    links: [],
    images: [],
    caseStudy: [
      {
        id: "problem",
        heading: "Problem",
        body: "Traditional recommendation engines rely solely on historical listening logs and miss immediate shifts in a listener's real-time emotional state.",
      },
      {
        id: "solution",
        heading: "Solution & architecture",
        body: "Combined a computer-vision facial expression recognition (FER) module with a mood-indexed recommendation engine, translating detected affect states into curated playlist selections.",
      },
      {
        id: "pipeline",
        heading: "Pipeline & UX",
        body: "Face detection and alignment → emotion classification → sentiment-to-audio-feature mapping → track ranking. Inference intervals were designed to stay responsive without jarring playlist resets.",
      },
      {
        id: "contribution",
        heading: "My contribution",
        body: "Team contribution across CV–recommendation integration and product framing that stays honest about limits.",
      },
      {
        id: "impact",
        heading: "Impact",
        body: "Demonstrates human-centric AI interaction by closing the loop between passive visual sentiment detection and dynamic content delivery.",
      }
    ],
  },
{
    slug: "roadside-object-safety",
    title: "Roadside Object Safety Detection",
    category: "Team Project | Applied Object Detection",
    ownership: "team",
    group: "computer-vision",
    summary: "A safety-focused object detection system designed to spot roadside hazards and near-vehicle obstacles that drivers frequently overlook — scoped as assistive perception research, not certified ADAS.",
    contribution: "I contributed to detection-focused experimentation and framing outputs as awareness support. Scope stayed research/prototype, not certified vehicle software.",
    technologies: [
          "Python",
          "Computer vision",
          "Object detection",
          "YOLO",
          "OpenCV",
          "Deep learning",
          "Real-time inference"
    ],
    links: [],
    images: [],
    caseStudy: [
      {
        id: "problem",
        heading: "Problem",
        body: "Blind spots, roadside encroachments, and sudden peripheral obstacles pose severe collision risks in cluttered driving environments.",
      },
      {
        id: "solution",
        heading: "Solution & architecture",
        body: "Built a low-latency visual perception pipeline tailored for forward and peripheral road views, prioritising high-recall detection of vulnerable road users, debris, and roadside hazards.",
      },
      {
        id: "safety",
        heading: "Perception focus & safety framing",
        body: "Emphasis on small-object sensitivity, edge-case occlusion handling, and real-time frame throughput — prioritising recall on critical hazard classes while avoiding production ADAS claims.",
      },
      {
        id: "contribution",
        heading: "My contribution",
        body: "Team contribution to detection work and responsible safety framing for prototype outputs.",
      },
      {
        id: "impact",
        heading: "Impact",
        body: "Provides an assistive perception layer aimed at reducing reaction time and preventing near-vehicle collisions in research and prototype contexts.",
      }
    ],
  },
{
    slug: "sign-language-translation",
    title: "Continuous Sign Language Translation",
    category: "Team Project | Video Understanding and Inclusive AI",
    ownership: "team",
    group: "computer-vision",
    summary: "An inclusive-AI video understanding pipeline that translates continuous sign-language gestures into coherent, usable text output.",
    contribution: "I contributed to the vision-to-language pipeline: sequence handling, model experimentation, and keeping accessibility goals concrete in the technical design.",
    technologies: [
          "Python",
          "Computer vision",
          "Deep learning",
          "Sequence modelling",
          "NLP",
          "Video understanding",
          "Keypoint features"
    ],
    links: [],
    images: [],
    caseStudy: [
      {
        id: "problem",
        heading: "Problem",
        body: "Isolated gesture classifiers fail in real-world communication because natural sign language relies on continuous temporal transitions, co-articulation, and grammar rather than static hand poses.",
      },
      {
        id: "solution",
        heading: "Solution & architecture",
        body: "Engineered an end-to-end spatio-temporal deep learning system capable of extracting frame-level visual/keypoint features and mapping continuous video sequences to natural language tokens.",
      },
      {
        id: "pipeline",
        heading: "Sequence modeling",
        body: "Frame sampling → spatial feature extraction → temporal sequence alignment/decoding → post-processed text generation. Key challenges included variable signing speeds, motion blur, and sequence boundary segmentation without manual pauses.",
      },
      {
        id: "contribution",
        heading: "My contribution",
        body: "Team contribution across pipeline design and experimentation for continuous sign-language translation.",
      },
      {
        id: "impact",
        heading: "Impact",
        body: "Advances accessibility tooling by bridging continuous visual sign streams with readable text interfaces — accessibility treated as an engineering problem, not a marketing label.",
      }
    ],
  },
{
    slug: "predictive-machine-failure",
    title: "Predictive Machine Failure Detection",
    category: "Team Project | Time-Series Anomaly Detection",
    ownership: "team",
    group: "ai-ml",
    summary: "A predictive-maintenance analytics system that monitors multivariate industrial sensor time series to flag abnormal operating patterns prior to equipment breakdown.",
    contribution: "I contributed to time-series preparation, anomaly-detection experiments, evaluation, and interpreting failure-risk signals to support maintenance planning discussions.",
    technologies: [
          "Python",
          "Time-series analysis",
          "Anomaly detection",
          "Predictive maintenance",
          "Machine learning",
          "Sensor analytics",
          "Feature engineering"
    ],
    links: [],
    images: [],
    caseStudy: [
      {
        id: "problem",
        heading: "Problem",
        body: "Unplanned machinery downtime incurs high operational costs, while fixed-schedule maintenance wastes component lifespan.",
      },
      {
        id: "solution",
        heading: "Solution & architecture",
        body: "Developed a multivariate time-series anomaly detection and failure prediction workflow that ingests multi-sensor telemetry, extracts rolling temporal statistics, and identifies early degradation signatures.",
      },
      {
        id: "data",
        heading: "Data engineering & detection logic",
        body: "Sensor synchronisation, missing-value imputation, lag/rolling-window feature generation, multivariate threshold calibration, and sequence scoring to balance early-warning lead time against false-alarm rates.",
      },
      {
        id: "contribution",
        heading: "My contribution",
        body: "Team contribution across preparation, experiments, evaluation, and risk-signal interpretation.",
      },
      {
        id: "impact",
        heading: "Impact",
        body: "Shifts maintenance operations from reactive repair toward proactive, condition-based intervention — with honest trade-offs between sensitivity and false positives.",
      }
    ],
  },
{
    slug: "dharani-fitness",
    title: "Dharani Fitness",
    category: "Freelance Client Delivery | E-commerce",
    ownership: "freelance",
    group: "freelance",
    featured: true,
    featuredOrder: 4,
    summary:
      "Freelance e-commerce website for a gym-equipment shop. The public site covers product discovery, with cart, checkout, Razorpay, Google sign-in, customer accounts, order history, and product administration included in the engagement.",
    contribution:
      "Full-stack developer on this freelance engagement covering the storefront, catalogue, cart, checkout, payments, Google sign-in, customer accounts, order history, and product administration.",
    technologies: [
      "Next.js",
      "Neon Database",
      "Vercel",
      "Razorpay",
      "Google Authentication",
    ],
    links: [
      {
        label: "dharanifitness.in",
        href: "https://dharanifitness.in/",
      },
    ],
    images: [
      {
        src: "/images/projects/dharani-fitness/hero.webp",
        alt: "Desktop screenshot of the live Dharani Fitness homepage.",
        caption: "Live homepage on a desktop browser.",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/dharani-fitness/catalogue.webp",
        alt: "Desktop screenshot of the public Dharani Fitness equipment catalogue.",
        caption: "Public catalogue on a desktop browser.",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/dharani-fitness/product-detail.webp",
        alt: "Desktop screenshot of a public Dharani Fitness product page.",
        caption: "Public product page on a desktop browser.",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/dharani-fitness/cart.webp",
        alt: "Desktop screenshot of the public Dharani Fitness cart page.",
        caption: "Public cart page with an empty cart.",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/dharani-fitness/hero-mobile.webp",
        alt: "Phone screenshot of the live Dharani Fitness homepage.",
        caption: "Live homepage on a phone-sized browser.",
        width: 780,
        height: 1688,
      },
    ],
    caseStudy: [
      {
        id: "overview",
        heading: "Overview",
        body: "Freelance e-commerce website for Dharani Fitness Equipment. The public site supports browsing equipment and starting a quotation or listed-price purchase.",
      },
      {
        id: "contribution",
        heading: "My contribution",
        body: "Full-stack freelance delivery across storefront, catalogue, cart, checkout, Razorpay, Google sign-in, accounts, order history, and product administration.",
      },
      {
        id: "live",
        heading: "Live project",
        body: "Public at dharanifitness.in. Sales and conversion metrics are not stated.",
      },
    ],
  }
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): readonly Project[] {
  return projects
    .filter((project) => project.featured)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));
}

export function getSupportingProjects(): readonly Project[] {
  return projects.filter((project) => !project.featured);
}
