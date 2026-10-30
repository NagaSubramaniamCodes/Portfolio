import type { SkillCategory } from "@/types/portfolio";

/**
 * Four skill areas. Status comes from featured projects and this site.
 * Unverified names stay in the taxonomy and are not presented as experience.
 */
export const skillCategories: readonly SkillCategory[] = [
  {
    id: "full-stack",
    title: "Full-stack development",
    description:
      "Languages, interfaces, services, and delivery named on the client work or used to build this site.",
    groups: [
      {
        id: "languages",
        title: "Languages",
        items: [
          { name: "JavaScript", status: "project", note: "This site" },
          { name: "TypeScript", status: "project", note: "This site" },
          {
            name: "Python",
            status: "working",
            projectSlugs: ["conversational-rag-assistant"],
            note: "FastAPI, FAISS, and Sentence Transformers are named there",
          },
          { name: "SQL", status: "unverified" },
          { name: "Java", status: "unverified" },
        ],
      },
      {
        id: "frontend",
        title: "Frontend",
        items: [
          {
            name: "React",
            status: "project",
            projectSlugs: ["chola-power", "dharani-fitness"],
            note: "This site",
          },
          {
            name: "Next.js",
            status: "project",
            projectSlugs: ["chola-power", "dharani-fitness"],
            note: "This site",
          },
          {
            name: "HTML",
            status: "project",
            projectSlugs: ["chola-power", "dharani-fitness"],
            note: "This site",
          },
          {
            name: "CSS",
            status: "project",
            projectSlugs: ["chola-power", "dharani-fitness"],
            note: "This site",
          },
          { name: "Tailwind CSS", status: "project", note: "This site" },
          {
            name: "Responsive design",
            status: "project",
            projectSlugs: ["chola-power", "dharani-fitness"],
            note: "This site",
          },
        ],
      },
      {
        id: "backend",
        title: "Backend",
        items: [
          {
            name: "Node.js",
            status: "working",
            projectSlugs: ["chola-power", "dharani-fitness"],
            note: "Next.js runtime",
          },
          {
            name: "FastAPI",
            status: "project",
            projectSlugs: ["conversational-rag-assistant"],
          },
          {
            name: "REST APIs",
            status: "working",
            projectSlugs: ["conversational-rag-assistant"],
            note: "FastAPI",
          },
          {
            name: "Authentication and authorization",
            status: "project",
            projectSlugs: ["dharani-fitness", "sportshub"],
            note: "Google Authentication, Clerk, and RBAC",
          },
          {
            name: "Razorpay",
            status: "project",
            projectSlugs: ["dharani-fitness", "sportshub"],
          },
        ],
      },
      {
        id: "databases",
        title: "Databases",
        items: [
          { name: "PostgreSQL", status: "unverified" },
          {
            name: "Neon",
            status: "project",
            projectSlugs: ["dharani-fitness"],
          },
          { name: "Supabase", status: "unverified" },
          { name: "Prisma ORM", status: "unverified" },
        ],
      },
      {
        id: "deployment",
        title: "Deployment",
        items: [
          {
            name: "Vercel",
            status: "project",
            projectSlugs: ["dharani-fitness"],
          },
          {
            name: "Docker",
            status: "project",
            projectSlugs: ["chola-power", "conversational-rag-assistant"],
          },
          {
            name: "Cloudflare CDN",
            status: "project",
            projectSlugs: ["chola-power"],
          },
          { name: "Git", status: "working", note: "This repository" },
          { name: "GitHub", status: "working", note: "This repository" },
        ],
      },
    ],
  },
  {
    id: "analytics",
    title: "Data analytics and visualization",
    description:
      "Exploratory analysis, charts, reporting, and the libraries used to prepare data.",
    groups: [
      {
        id: "analytics-work",
        title: "Analytics",
        items: [
          { name: "Exploratory data analysis", status: "unverified" },
          { name: "Data cleaning", status: "unverified" },
          { name: "Data wrangling", status: "unverified" },
          { name: "Statistical analysis", status: "unverified" },
        ],
      },
      {
        id: "visualization",
        title: "Visualization",
        items: [
          { name: "Matplotlib", status: "unverified" },
          { name: "Seaborn", status: "unverified" },
          { name: "Plotly", status: "unverified" },
          { name: "Power BI", status: "unverified" },
          { name: "Excel", status: "unverified" },
        ],
      },
      {
        id: "reporting",
        title: "Reporting",
        items: [
          { name: "Dashboards", status: "unverified" },
          { name: "KPI reporting", status: "unverified" },
          { name: "Data storytelling", status: "unverified" },
        ],
      },
      {
        id: "preparation",
        title: "Data preparation",
        items: [
          { name: "Pandas", status: "unverified" },
          { name: "NumPy", status: "unverified" },
          { name: "Data validation", status: "unverified" },
        ],
      },
    ],
  },
  {
    id: "ai",
    title: "AI, machine learning, and generative AI",
    description:
      "The conversational RAG assistant names the models and retrieval tools below. The multimodal project does not list a stack.",
    groups: [
      {
        id: "machine-learning",
        title: "Machine learning",
        items: [
          { name: "Scikit-learn", status: "unverified" },
          { name: "Supervised learning", status: "unverified" },
          { name: "Unsupervised learning", status: "unverified" },
          { name: "Feature engineering", status: "unverified" },
          { name: "Model evaluation", status: "unverified" },
        ],
      },
      {
        id: "deep-learning",
        title: "Deep learning",
        items: [
          { name: "PyTorch", status: "unverified" },
          { name: "Neural networks", status: "unverified" },
          { name: "Computer vision", status: "unverified" },
        ],
      },
      {
        id: "nlp",
        title: "Natural language processing",
        items: [
          { name: "Natural language processing", status: "unverified" },
          {
            name: "Hugging Face",
            status: "project",
            projectSlugs: ["conversational-rag-assistant"],
          },
        ],
      },
      {
        id: "generative",
        title: "Generative AI",
        items: [
          {
            name: "Llama",
            status: "project",
            projectSlugs: ["conversational-rag-assistant"],
          },
          {
            name: "Mistral",
            status: "project",
            projectSlugs: ["conversational-rag-assistant"],
          },
          {
            name: "Retrieval-augmented generation",
            status: "project",
            projectSlugs: ["conversational-rag-assistant"],
          },
          {
            name: "Embeddings",
            status: "working",
            projectSlugs: ["conversational-rag-assistant"],
            note: "Sentence Transformers",
          },
          {
            name: "Semantic search",
            status: "working",
            projectSlugs: ["conversational-rag-assistant"],
            note: "FAISS",
          },
          {
            name: "FAISS",
            status: "project",
            projectSlugs: ["conversational-rag-assistant"],
          },
          {
            name: "Sentence Transformers",
            status: "project",
            projectSlugs: ["conversational-rag-assistant"],
          },
          { name: "Prompt engineering", status: "unverified" },
        ],
      },
      {
        id: "ai-apps",
        title: "AI application development",
        items: [
          {
            name: "FastAPI",
            status: "project",
            projectSlugs: ["conversational-rag-assistant"],
          },
          {
            name: "LLM application",
            status: "project",
            projectSlugs: ["conversational-rag-assistant"],
          },
        ],
      },
    ],
  },
  {
    id: "data-engineering",
    title: "Data engineering",
    description:
      "Processing, pipelines, architecture, quality, and the infrastructure around them. Docker and Git stay under full-stack deployment.",
    groups: [
      {
        id: "processing",
        title: "Data processing",
        items: [
          {
            name: "Python",
            status: "working",
            projectSlugs: ["conversational-rag-assistant"],
            note: "Named Python libraries on that project",
          },
          { name: "SQL", status: "unverified" },
          { name: "Pandas", status: "unverified" },
          { name: "NumPy", status: "unverified" },
          { name: "Data transformation", status: "unverified" },
        ],
      },
      {
        id: "pipelines",
        title: "Pipelines",
        items: [
          { name: "ETL and ELT", status: "unverified" },
          { name: "Batch processing", status: "unverified" },
          { name: "Incremental loading", status: "unverified" },
          { name: "API-based ingestion", status: "unverified" },
        ],
      },
      {
        id: "architecture",
        title: "Data architecture",
        items: [
          {
            name: "Relational data models",
            status: "project",
            projectSlugs: ["sportshub"],
          },
          { name: "Data warehousing", status: "unverified" },
          { name: "OLTP and OLAP", status: "unverified" },
        ],
      },
      {
        id: "quality",
        title: "Data quality",
        items: [
          { name: "Validation", status: "unverified" },
          { name: "Profiling", status: "unverified" },
          { name: "Error handling", status: "unverified" },
          { name: "Logging", status: "unverified" },
        ],
      },
      {
        id: "big-data",
        title: "Big data",
        items: [
          { name: "Apache Spark", status: "unverified" },
          { name: "PySpark", status: "unverified" },
          { name: "Hadoop", status: "unverified" },
          { name: "Distributed processing", status: "unverified" },
        ],
      },
      {
        id: "orchestration",
        title: "Orchestration and streaming",
        items: [
          { name: "Apache Airflow", status: "unverified" },
          { name: "Kafka", status: "unverified" },
        ],
      },
      {
        id: "infrastructure",
        title: "Infrastructure",
        items: [{ name: "Cloud data architecture", status: "unverified" }],
      },
    ],
  },
];
