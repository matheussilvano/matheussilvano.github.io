const ASSETS = {
  favicon: "/assets/images/ui/favicon.png",
  assistant: "/assets/images/ui/assistant_logo.png",
  flagPt: "/assets/images/flags/brazil-flag.png",
  flagEn: "/assets/images/flags/uk-flag.png",
  flagEs: "/assets/images/flags/spain-flag.png",
  profile: "/assets/images/profile/matheus-silvano.png",
  cvPt: "/assets/docs/cv/cv_matheus_silvano_pereira.pdf",
  cvEn: "/assets/docs/cv/english_cv_matheus_silvano_pereira.pdf"
};

const TEXT = {
  pt: {
    nav_opensource: "Open source", os_title: "Open source", os_intro: "Projetos de outras pessoas em que tenho pull requests aceitos. Esta lista se atualiza sozinha.", github_button: "Código no GitHub", nav_about: "Sobre",
    nav_tech: "Tecnologias",
    nav_projects: "Projetos",
    nav_experience: "Experiência",
    nav_recommendations: "Recomendações",
    nav_contact: "Contato",
    hero_subtitle: "Desenvolvedor full-stack de IA",
    hero_pitch: "Construo APIs, automações e sistemas com IA que reduzem trabalho manual, aceleram operações e geram insights aplicáveis em produção.",
    hero_kicker: "Produtos de IA end-to-end, do front ao back",
    hero_side_title: "Certificações em destaque",
    hero_side_note: "Foco em produtos de IA com arquitetura robusta, velocidade de execução e impacto real.",
    next_section_label: "Próxima seção:",
    courses_button: "Cursos & Certificações",
    download_cv_button: "Baixar Currículo",
    about_me_title: "Sobre Mim",
    about_me_p1: "Desenvolvedor de IA na Dígitro Tecnologia e estudante de Sistemas de Informação na UFSC. Atuo com pesquisa, desenvolvimento e avaliação de modelos de linguagem, focando em soluções que geram impacto real em produtos e clientes.",
    about_me_p2: "Tenho experiência em Python, FastAPI, machine learning, processamento de linguagem natural e visão computacional. Gosto de unir teoria e prática, construindo APIs, automações e ferramentas que ajudam pessoas e times a trabalharem melhor.",
    tech_title: "Tecnologias",
    tech_description: "Experiência prática com APIs REST usando Python, FastAPI e Django. Domínio em versionamento com Git, integração com bancos de dados (PostgreSQL e Oracle), e conhecimento em contêineres com Docker. Familiaridade com práticas de DevOps e stacks de IA, incluindo Scikit-learn, TensorFlow, PyTorch, OpenCV, pandas, NumPy, LangChain e spaCy, aplicando técnicas de machine learning, deep learning, processamento de linguagem natural e visão computacional em projetos práticos.",
    projects_title: "Projetos",
    featured_projects_title: "Projetos em destaque",
    projects_ia_title: "IA & LLMs",
    projects_other_title: "Outros projetos",
    projects_backend_title: "Back-end & APIs",
    projects_tools_title: "Ferramentas & Extensões",
    projects_page_title: "Projetos em Destaque",
    projects_page_subtitle: "Os 3 projetos principais com links diretos e resultados reais.",
    all_projects_page_title: "Todos os Projetos",
    all_projects_page_subtitle: "Lista completa dos demais projetos e iniciativas.",
    view_all_projects_button: "Ver todos os projetos",
    back_to_projects_button: "← Voltar para destaque",
    open_projects_page_button: "Abrir página de projetos",
    view_more_button: "Ver mais",
    close_button: "Fechar",
    in_dev_button: "Em desenvolvimento — peça detalhes",
    experience_title: "Experiência Profissional",
    recommendations_title: "Recomendações",
    recommendation_source_prefix: "Recomendação feita pelo",
    linkedin_source_label: "Ver recomendação no LinkedIn",
    contact_title: "Contato",
    contact_subtitle: "Vamos conversar! Entre em contato comigo através dos canais abaixo.",
    contact_fab_label: "Fale comigo",
    footer_text: "© 2026 Matheus Silvano. Todos os direitos reservados.",
    courses_page_title: "Cursos & Certificações",
    courses_page_subtitle: "Uma visão geral das trilhas de estudo que fortalecem minha base.",
    back_to_portfolio_button: "← Voltar ao portfólio",
    courses_main_title: "Formações & Trilhas",
    cert_featured_label: "Destaques em IA",
    cert_featured_title: "Certificações",
    cert_featured_desc: "Badges verificados em IA generativa e uso responsável.",
    validate_cert_button: "Validar certificação",
    courses_intro: "Abaixo estão alguns dos cursos mais relevantes que concluí.",
    courses_search_label: "Buscar cursos e certificações",
    courses_search_placeholder: "Buscar por curso, instituição ou ano",
    courses_search_empty: "Nenhum curso encontrado para sua busca.",
    institution_label: "Instituição",
    year_label: "Ano",
    view_certificate_button: "Ver certificado",
    view_mod1_button: "Ver Mod 01",
    view_mod2_button: "Ver Mod 02",
    course_star_label: "⭐ Mais relevante",
    radar_title: "Stack Atual",
    radar_proficient: "Tenho Proficiência",
    radar_learning: "Estudando Agora",
    radar_on_radar: "No Radar"
  },
  en: {
    nav_opensource: "Open source", os_title: "Open source", os_intro: "Projects by other people where I have merged pull requests. This list updates itself.", github_button: "Code on GitHub", nav_about: "About", nav_tech: "Technologies", nav_projects: "Projects", nav_experience: "Experience", nav_recommendations: "Recommendations", nav_contact: "Contact",
    hero_subtitle: "Full-stack AI Developer",
    hero_pitch: "I build APIs, automations, and AI systems that reduce manual work, accelerate operations, and generate actionable insights in production.",
    hero_kicker: "End-to-end AI products, from frontend to backend",
    hero_side_title: "Highlighted certifications",
    hero_side_note: "Focused on AI products with strong architecture, execution speed, and measurable impact.",
    next_section_label: "Next section:",
    courses_button: "Courses & Certifications", download_cv_button: "Download CV",
    about_me_title: "About Me",
    about_me_p1: "AI Developer at Dígitro Tecnologia and Information Systems student at UFSC. I work with research, development, and evaluation of language models, focused on solutions that generate real impact for products and clients.",
    about_me_p2: "I have experience with Python, FastAPI, machine learning, natural language processing, and computer vision. I like combining theory and practice by building APIs, automations, and tools that help people and teams work better.",
    tech_title: "Technologies",
    tech_description: "Hands-on experience with REST APIs using Python, FastAPI, and Django. Strong command of version control with Git, database integration (PostgreSQL and Oracle), and containerization with Docker. Familiarity with DevOps practices and AI stacks, including Scikit-learn, TensorFlow, PyTorch, OpenCV, pandas, NumPy, LangChain, and spaCy, applying machine learning, deep learning, natural language processing, and computer vision techniques in practical projects.",
    projects_title: "Projects", featured_projects_title: "Featured projects", projects_ia_title: "AI & LLMs", projects_other_title: "Other projects", projects_backend_title: "Back-end & APIs", projects_tools_title: "Tools & Extensions",
    projects_page_title: "Featured Projects", projects_page_subtitle: "Top 3 projects with direct links and real outcomes.",
    all_projects_page_title: "All Projects", all_projects_page_subtitle: "Complete list of the remaining projects and initiatives.",
    view_all_projects_button: "View all projects", back_to_projects_button: "← Back to highlights", open_projects_page_button: "Open projects page",
    view_more_button: "View more", close_button: "Close",
    in_dev_button: "In development — ask for details", experience_title: "Professional Experience", recommendations_title: "Recommendations", recommendation_source_prefix: "Recommendation made on", linkedin_source_label: "View recommendation on LinkedIn",
    contact_title: "Contact", contact_subtitle: "Let's talk! Feel free to reach out through the channels below so we can discuss ideas, projects, or opportunities.", contact_fab_label: "Contact me", footer_text: "© 2026 Matheus Silvano. All rights reserved.",
    courses_page_title: "Courses & Certifications", courses_page_subtitle: "An overview of the learning tracks that strengthen my technical foundation and support practical delivery.", back_to_portfolio_button: "← Back to portfolio",
    courses_main_title: "Training & Tracks", cert_featured_label: "AI Highlights", cert_featured_title: "Certifications", cert_featured_desc: "Verified badges in generative AI and responsible use.", validate_cert_button: "Validate certification",
    courses_intro: "Below are some of the most relevant courses I completed.", courses_search_label: "Search courses and certifications", courses_search_placeholder: "Search by course, provider or year", courses_search_empty: "No courses or certifications were found for your search.",
    institution_label: "Institution", year_label: "Year", view_certificate_button: "View certificate", view_mod1_button: "View Mod 01", view_mod2_button: "View Mod 02", course_star_label: "⭐ Most relevant",
    radar_title: "Current Stack", radar_proficient: "Areas Where I Have Proficiency", radar_learning: "Learning Now", radar_on_radar: "On My Radar"
  },
  es: {
    nav_opensource: "Open source", os_title: "Open source", os_intro: "Proyectos de otras personas en los que tengo pull requests aceptados. Esta lista se actualiza sola.", github_button: "Código en GitHub", nav_about: "Sobre", nav_tech: "Tecnologías", nav_projects: "Proyectos", nav_experience: "Experiencia", nav_recommendations: "Recomendaciones", nav_contact: "Contacto",
    hero_subtitle: "Desarrollador full-stack de IA",
    hero_pitch: "Construyo APIs, automatizaciones y sistemas de IA que reducen trabajo manual, aceleran operaciones y generan insights aplicables en producción.",
    hero_kicker: "Productos de IA end-to-end, del front al back",
    hero_side_title: "Certificaciones destacadas",
    hero_side_note: "Enfoque en productos de IA con arquitectura sólida, velocidad de ejecución e impacto real.",
    next_section_label: "Siguiente sección:",
    courses_button: "Cursos y Certificaciones", download_cv_button: "Descargar CV",
    about_me_title: "Sobre mí",
    about_me_p1: "Desarrollador de IA en Dígitro Tecnologia y estudiante de Sistemas de Información en la UFSC. Actúo en investigación, desarrollo y evaluación de modelos de lenguaje, con foco en soluciones que generan impacto real en productos y clientes.",
    about_me_p2: "Tengo experiencia con Python, FastAPI, machine learning, procesamiento de lenguaje natural y visión por computador. Me gusta unir teoría y práctica, construyendo APIs, automatizaciones y herramientas que ayudan a personas y equipos a trabajar mejor.",
    tech_title: "Tecnologías",
    tech_description: "Experiencia práctica con APIs REST usando Python, FastAPI y Django. Dominio de versionado con Git, integración con bases de datos (PostgreSQL y Oracle), y conocimiento de contenedores con Docker. Familiaridad con prácticas de DevOps y stacks de IA, incluyendo Scikit-learn, TensorFlow, PyTorch, OpenCV, pandas, NumPy, LangChain y spaCy, aplicando técnicas de machine learning, deep learning, procesamiento de lenguaje natural y visión por computador en proyectos prácticos.",
    projects_title: "Proyectos", featured_projects_title: "Proyectos destacados", projects_ia_title: "IA & LLMs", projects_other_title: "Otros proyectos", projects_backend_title: "Back-end & APIs", projects_tools_title: "Herramientas y Extensiones",
    projects_page_title: "Proyectos Destacados", projects_page_subtitle: "Los 3 proyectos principales con enlaces directos y resultados reales.",
    all_projects_page_title: "Todos los Proyectos", all_projects_page_subtitle: "Lista completa de los demás proyectos e iniciativas.",
    view_all_projects_button: "Ver todos los proyectos", back_to_projects_button: "← Volver a destacados", open_projects_page_button: "Abrir página de proyectos",
    view_more_button: "Ver más", close_button: "Cerrar",
    in_dev_button: "En desarrollo — pide detalles", experience_title: "Experiencia Profesional", recommendations_title: "Recomendaciones", recommendation_source_prefix: "Recomendación hecha en", linkedin_source_label: "Ver recomendación en LinkedIn",
    contact_title: "Contacto", contact_subtitle: "Hablemos. Contáctame por los canales de abajo para conversar sobre ideas, proyectos u oportunidades.", contact_fab_label: "Habla conmigo", footer_text: "© 2026 Matheus Silvano. Todos los derechos reservados.",
    courses_page_title: "Cursos y Certificaciones", courses_page_subtitle: "Una visión general de las rutas de estudio que fortalecen mi base técnica y respaldan entregas prácticas.", back_to_portfolio_button: "← Volver al portafolio",
    courses_main_title: "Formaciones y Rutas", cert_featured_label: "Destacados de IA", cert_featured_title: "Certificaciones", cert_featured_desc: "Insignias verificadas en IA generativa y uso responsable.", validate_cert_button: "Validar certificación",
    courses_intro: "Abajo están algunos de los cursos más relevantes que completé.", courses_search_label: "Buscar cursos y certificaciones", courses_search_placeholder: "Buscar por curso, institución o año", courses_search_empty: "No se encontraron cursos ni certificaciones para tu búsqueda.",
    institution_label: "Institución", year_label: "Año", view_certificate_button: "Ver certificado", view_mod1_button: "Ver Mód 01", view_mod2_button: "Ver Mód 02", course_star_label: "⭐ Más relevante",
    radar_title: "Stack Actual", radar_proficient: "Áreas en las que tengo dominio", radar_learning: "Estudiando ahora", radar_on_radar: "En el radar"
  }
};

const TECH_ICONS = [
  "python", "fastapi", "javascript", "nodejs", "react", "vuejs", "postgresql", "oracle", "docker", "scikitlearn", "tensorflow", "pytorch"
].map((name) => ({
  src: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`,
  alt: name
}));

const PROJECTS = {
  featured: [
    { title: "Mooose", image: "/assets/images/projects/mooose.png", desc: "Open-source ENEM essay grader. Bring your own AI model (OpenRouter, Gemini, Groq, Ollama, OpenAI, Claude).", href: "https://www.mooose.com.br", btn: "Open Mooose", primary: true, github: "https://github.com/matheussilvano/mooose" },
    { title: "Moodle MCP", image: "/assets/images/projects/moodle-mcp.png", desc: "MCP server that connects a student's own Moodle account to Claude Code, Codex and ChatGPT: deadlines, grades, attendance and submissions.", href: "https://github.com/matheussilvano/moodle-mcp", btn: "View on GitHub", primary: true, github: "https://github.com/matheussilvano/moodle-mcp" }
  ],
  ai: [
    {
      title: "Moodle MCP",
      image: "/assets/images/projects/moodle-mcp.png",
      desc: "Community MCP server that connects a student's own Moodle account to Claude Code, Codex and ChatGPT.",
      details: "Exposes 55 tools over stdio and Streamable HTTP: deadlines, assignments, grades, attendance, materials and announcements, using your own token and your own model. Ships as a Claude Code plugin with guided skills. Independent project, not affiliated with Moodle or any institution.",
      impact: "Open source, with CI, tests and docs for adding other institutions.",
      contrib: "Designed and built the server, the tool surface and the plugin.",
      stack: ["Python", "MCP", "uv", "Claude Code"],
      actions: [{ label: "View on GitHub", href: "https://github.com/matheussilvano/moodle-mcp", primary: true }]
    },
    {
      title: "Mooose",
      image: "/assets/images/projects/mooose.png",
      desc: "Plataforma gratuita de correção de redações para o ENEM, focada em acessibilidade e impacto social.",
      details: "Permite que estudantes enviem redações em PDF, foto ou texto e recebam feedback detalhado por competência, utilizando modelos de linguagem para análise semântica e geração de comentários claros e didáticos. Inclui painel de acompanhamento, ranking de redações e integrações com ferramentas de analytics.",
      impact: "Centenas de redações corrigidas com feedback médio em menos de 1 min.",
      contrib: "Desenhei arquitetura, APIs e pipeline de correção automática, integrando LLMs e analytics.",
      stack: ["Python", "FastAPI", "PostgreSQL", "OpenAI"],
      actions: [{ label: "Open Mooose", href: "https://www.mooose.com.br", primary: true }, { label: "View on GitHub", href: "https://github.com/matheussilvano/mooose" }]
    },
    {
      title: "PROMOOVE",
      image: "/assets/images/projects/promoove.png",
      desc: "HRTech focada em transformar processos de seleção e gestão de talentos por meio de IA.",
      details: "A solução nasce de um problema real: recrutamentos longos, pouca visibilidade interna e dificuldade de enxergar quem as pessoas realmente são além do currículo. Analisa histórias, competências e trajetórias de forma humanizada, gerando insights que apoiam decisões mais justas e eficientes. O projeto envolve pesquisa de mercado, desenho da solução, matriz RPU e prototipação com backend em Python/FastAPI e modelos da OpenAI.",
      impact: "MVP online para avaliação rápida de candidatos com análise assistida por IA.",
      contrib: "Modelei fluxos de avaliação, prototipei backend e automações de análise de histórias com LLMs.",
      stack: ["Python", "FastAPI", "OpenAI"],
      actions: [{ label: "Abrir MVP", href: "https://promoove.vercel.app/" }]
    },
    {
      title: "Interviewly",
      image: "/assets/images/projects/interviewly.png",
      desc: "Plataforma de simulação de entrevistas com IA voltada para candidatos que desejam se preparar melhor para processos seletivos.",
      details: "Permite simulações realistas por área/vaga, com treino sob demanda e acompanhamento contínuo de evolução.",
      highlights: [
        "Simule entrevistas realistas por área/vaga.",
        "Receba feedback automático sobre respostas, comunicação e postura.",
        "Identifique pontos fortes e fracos.",
        "Acompanhe a evolução ao longo do tempo.",
        "Treine quantas vezes quiser, sob demanda."
      ],
      impact: "Objetivo de aumentar a taxa de aprovação em entrevistas, com treino acessível, personalizado e baseado em dados.",
      contrib: "Funciona como um coach digital de carreira com arquitetura orientada a IA e feedback acionável.",
      stack: ["IA", "ElevenLabs", "OpenAI", "FastAPI", "React", "Vue"],
      actions: [{ label: "Acessar Interviewly", href: "https://www.interviewly.com.br", primary: true }]
    },
    {
      title: "Cognita Suite",
      image: "/assets/images/projects/cognita.png",
      desc: "Aplicação web feita em 24 horas, desenvolvida para a trilha de Educação do Hackathon AI Challenge da SECCOM UFSC + DOOOR.",
      details: "A suíte visa potencializar os estudos de alunos, oferecendo ferramentas inteligentes para correção de redações e consulta a materiais de estudo, tudo impulsionado por modelos de linguagem de ponta.",
      impact: "Entrega funcional em 24h de hackathon com correção inteligente de redações.",
      contrib: "Responsável pela arquitetura backend (FastAPI), orquestração e avaliação de prompts.",
      stack: ["Python", "FastAPI", "PostgreSQL", "OpenAI"],
    },
    {
      title: "Toxic Content Detector",
      image: "/assets/images/projects/toxic-content-detector.png",
      desc: "Projeto de ML para detecção de comentários tóxicos com modelo treinado do zero em dataset próprio, usando NLP, regressão logística e TF-IDF.",
      details: "Modelo proprietário treinado do zero; pipeline dockerizado pronto para testes online.",
      impact: "Modelo proprietário treinado do zero; pipeline dockerizado pronto para testes online.",
      contrib: "Desenvolvi o pré-processamento, treino e deploy do modelo com avaliação contínua.",
      stack: ["Python", "Pandas", "Scikit-learn", "Streamlit", "Docker"],
      actions: [
        { label: "Testar Online", href: "https://toxic-content-detector.streamlit.app/", primary: true },
        { label: "Ver no GitHub", href: "https://github.com/matheussilvano/toxic-content-detector" }
      ]
    },
    {
      title: "Sua Clínica",
      image: "/assets/images/projects/sua-clinica.jpeg",
      desc: "Plataforma inteligente desenvolvida no Techstars Startup Weekend Health Floripa 2025 para automatizar agendamentos e atendimentos em clínicas de saúde, reduzindo etapas operacionais e erros manuais.",
      details: "Backend em Python (FastAPI) integrado ao n8n para orquestrar fluxos automatizados, diminuindo tarefas repetitivas e aumentando a eficiência do time. Utiliza modelos da OpenAI para entender mensagens em linguagem natural — inclusive por voz — e realizar agendamentos automáticos via WhatsApp, tornando a jornada do paciente mais ágil, humanizada e orientada por dados.",
      impact: "Fluxo fim a fim entregue em 54h de hackathon com agendamento automático.",
      contrib: "Liderei o backend e integrações com n8n/OpenAI, garantindo fluxo fim a fim em 54h de hackathon.",
      stack: ["Python", "FastAPI", "n8n", "OpenAI"],
    }
  ],
  backend: [
    {
      title: "Smart Pricing",
      image: "/assets/images/projects/smart-pricing.png",
      desc: "Projeto freelance (não pessoal) para sistema interno que centraliza preços, ocupação e métricas de desempenho para anfitriões com portfólio de 30+ imóveis.",
      details: "Atuei como Desenvolvedor Full-Stack em um freelance na entrega da plataforma, implementando backend e frontend para tomada de decisão orientada a dados em operação real.",
      highlights: [
        "Atuei como Desenvolvedor Full-Stack em projeto freelance na entrega do sistema interno da Smart Pricing, centralizando preços, ocupação e métricas de desempenho para anfitriões com portfólio de 30+ imóveis.",
        "Desenvolvi a interface completa do sistema (front-end), criando dashboards de pricing, ocupação e performance com foco em usabilidade, clareza visual e decisão orientada a dados.",
        "Projetei e implementei uma API backend em Python (arquitetura REST), com modelagem de domínio para imóveis, reservas, métricas de performance e hosts, preparada para integrações e escalabilidade.",
        "Implementei automações de pricing para identificar imóveis sem reservas nos próximos 3, 5 e 7 dias e detectar gaps de ocupação nos próximos 30 dias, gerando oportunidades práticas de ajuste de tarifas diretamente no painel.",
        "Integrei o sistema à API da Stays.net, consolidando indicadores como ADR, taxa de ocupação, REVPAR e avaliações, permitindo análises financeiras e operacionais por imóvel.",
        "Automatizei rotinas agendadas de varredura de agenda e atualização de métricas, reduzindo trabalho manual e risco de erro operacional.",
        "Implementei a ingestão do dado de criação do imóvel via Stays.net e ajustei cálculos dos dashboards, garantindo maior precisão histórica das métricas exibidas no front-end.",
        "Realizei o deploy da versão V0 do sistema no ambiente da Corpinvest, cumprindo prazos e viabilizando uso operacional em produção.",
        "Desenvolvi mecanismo de alerta visual e operacional para avaliações negativas, criando automaticamente tarefas no TO DO quando a média de avaliações por imóvel fica abaixo de 4,5.",
        "Conduzi estudo e definição de POC de integração com IA, combinando dados de precificação via Stays.net e ocupação de mercado via PriceLabs, com geração automática de KPIs detalhados e explicações da performance dos imóveis."
      ],
      impact: "Sistema em produção com mais de 5.000 imóveis utilizando automações de pricing e métricas financeiras em tempo real.",
      contrib: "Responsável pelo desenvolvimento end-to-end (frontend, backend, integrações, automações, deploy e POC de IA).",
      stack: ["Python", "REST API", "Dashboards", "Stays.net", "PriceLabs", "Automações"],
      actions: [{ label: "Acessar Smart Pricing", href: "https://app.smartpricing.com.br", primary: true }]
    },
    {
      title: "Real Time Face Recognizer",
      image: "/assets/images/projects/Reconhecimento.jpg",
      desc: "Um sistema local de reconhecimento facial com OpenCV e LBPH.",
      details: "Ideal para projetos de visão computacional que identificam rostos em tempo real.",
      impact: "Reconhecimento em tempo real rodando localmente com baixo tempo de resposta.",
      contrib: "Implementei o pipeline de captura, extração de features e identificação ao vivo com OpenCV.",
      stack: ["Python", "OpenCV", "NumPy", "Docker"],
      actions: [{ label: "Ver no GitLab", href: "https://gitlab.com/projetos3193519/face-recognitor" }]
    },
    {
      title: "Fake Data API",
      image: "/assets/images/projects/fake-data-api.png",
      desc: "Uma API para gerar dados fictícios de pessoas e empresas.",
      details: "Ideal para testes com usuários anônimos.",
      impact: "Geração de milhares de registros sintéticos em poucos segundos para testes.",
      contrib: "Construi a API com FastAPI e autenticação, além da geração customizada de dados.",
      stack: ["Python", "FastAPI", "Docker"],
      actions: [{ label: "Ver no GitLab", href: "https://gitlab.com/projetos3193519/fake-data-api" }]
    }
  ],
  tools: [
    {
      title: "Removedor de Pontos do CNPJ",
      image: "/assets/images/projects/cnpj-extension.jpeg",
      desc: "Extensão para Chrome que simplifica a cópia de CNPJs formatados. Hoje com mais de 300 usuários.",
      details: "Extensão leve, prática e pensada para reduzir fricção operacional em rotinas administrativas.",
      impact: "300+ usuários ativos e nota 5 estrelas na Web Store, economizando ~20s por cópia.",
      contrib: "Criei a extensão end-to-end, UI simples e publicação na Chrome Web Store.",
      stack: ["HTML", "CSS"],
      actions: [
        { label: "Ver na Web Store", href: "https://chromewebstore.google.com/detail/remover-pontos-do-cnpj/kfpolfmflhddjgkhcagdhcckmfhnhoha", primary: true },
        { label: "Ver no GitHub", href: "https://github.com/matheussilvano/limpa-cnpj" }
      ]
    }
  ]
};

PROJECTS.rest = [
  ...PROJECTS.ai.slice(3),
  ...PROJECTS.backend,
  PROJECTS.tools[0]
];

PROJECTS.all = [
  ...PROJECTS.ai,
  ...PROJECTS.backend,
  PROJECTS.tools[0]
];

const EXPERIENCE = [
  { date: "Fev 2026 - Atual", title: "Dígitro - Desenvolvedor de IA Jr.", bullets: ["Implementação de soluções RAG com fontes internas.", "Integração de ferramentas via MCP.", "Pipelines de avaliação e observabilidade para LLMs em produção."] },
  { date: "Nov 2025 - Atual", title: "Smart Pricing - Desenvolvedor Full Stack & IA (Contrato)", bullets: ["Construí e entreguei o SaaS da Smart Pricing para operação real, centralizando precificação, ocupação e performance para portfólios com 30+ imóveis.", "Desenvolvi dashboards de pricing, ocupação e performance em React e consolidei indicadores como ADR, ocupação e REVPAR para acelerar decisões por imóvel e por portfólio.", "Projetei e implementei API REST em Python/FastAPI com base para arquitetura multi-tenant, além de automações de precificação e jobs agendados para atualização contínua de métricas."] },
  { date: "Abr 2025 - Fev 2026", title: "Dígitro - Estagiário em Desenvolvimento de IA", bullets: ["Avaliação e comparação de LLMs para diagnósticos VoIP.", "Prototipagem de fluxos RAG.", "Pesquisa e melhorias de prompts e fluxos."] },
  { date: "Dez 2023 - Abr 2025", title: "Nexxera - Operador de Implantação", bullets: ["Automação com Shell Script/Python.", "Análise de layouts para integrações financeiras.", "Suporte técnico e estabilidade das entregas."] },
  { date: "Jan 2022 - Dez 2023", title: "Nexxera - Jovem Aprendiz (Implantação)", bullets: ["Onboarding de clientes em sistemas internos.", "Suporte a implantações e testes funcionais.", "Aprendizado de processos de negócio."] }
];

const RECOMMENDATIONS = [
  {
    name: "Junior Manoel de Matos",
    role: "Tech Leader no Grupo Nexxees",
    image: "/assets/images/recommendations/junior-matos.jpeg",
    text: "Tive o prazer imenso de ser Tech Lead durante toda evolução do Matheus Silvano na Nexxera, desde estagiário até operador de implantação. Possui muita facilidade de aprendizagem e sempre busca soluções com agilidade. Ótimo comportamento e grande facilidade de trabalho em equipe, muito responsável com suas entregas e o mais importante: entregas com qualidade, sem retrabalho a ser realizado. Enfim, posso afirmar que o Silvano é um grande profissional e que com certeza terá um futuro brilhante pela frente.",
    sourceUrl: "https://www.linkedin.com/in/matheussilvano/"
  },
  {
    name: "Robson Clemente",
    role: "Gerente de Implantação no Grupo Nexxees",
    image: "/assets/images/recommendations/robson-clemente.jpeg",
    text: "Matheus Silvano, obrigado pelo período em que você esteve conosco na equipe de Implantação. Desde o seu início como jovem aprendiz até a sua efetivação, você sempre demonstrou muito respeito e comprometimento. Você é um grande profissional e tem um futuro muito promissor.",
    sourceUrl: "https://www.linkedin.com/in/matheussilvano/"
  },
  {
    name: "Edson Silva",
    role: "Presidente no Grupo Nexxees",
    image: "/assets/images/recommendations/edson-silva.jpeg",
    text: "Matheus,\n\nPrimeiro fico muito feliz por sua trajetória até aqui.\nSegundo, por poder ter contribuído para o início de sua carreira e crescimento.\nTerceiro, por se dedicar e ajudar nosso time em seus objetivos e metas.\nE quarto, por poder afirmar que nossa empresa não só atrai, mas contribui na formação de talentos que têm potencial de voar mais alto e buscar objetivos maiores.\n\nSabemos que grandes talentos seguirão novos rumos um dia. Tentamos ao máximo retê-los, mas o mundo oferece oportunidades e não seremos nós a bloquear, mas a recomendar, torcer e aplaudir pelo seu sucesso.\n\nParabéns, siga em frente e conquiste seus sonhos.",
    sourceUrl: "https://www.linkedin.com/in/matheussilvano/"
  }
];

const CERT_BADGES = [
  { image: "/assets/certificates/badges/databricks_gerative_ai_fundamentals.png", title: "Databricks Academy Accreditation - Generative AI Fundamentals", institution: "Databricks", focus: "Fundamentos de IA generativa e Lakehouse", link: "https://credentials.databricks.com/7e1cd27a-b050-4d11-91c3-150c23fa985b" },
  { image: "/assets/certificates/badges/badge_google_essencials_ai.png", title: "Especialização: Google AI Essentials", institution: "Google & Coursera", focus: "Boas práticas de IA generativa e uso responsável", link: "https://www.coursera.org/account/accomplishments/specialization/5QI99HXISLFA" }
];

const COURSE_SECTIONS = [
  {
    key: "Inteligência Artificial & Machine Learning",
    items: [
      { title: "Google: Discover the Art of Prompting", institution: "Google", year: "2025", cert: "/assets/certificates/files/Discover the Art of Prompting.pdf", preview: "/assets/certificates/files/previews/discover_the_art_of_prompting.png" },
      { title: "Prompt Engineering for ChatGPT", institution: "Vanderbilt University", year: "2026", cert: "/assets/certificates/files/Prompt Engineer for ChatGPT.pdf", preview: "/assets/certificates/files/previews/prompt_engineering_for_chatgpt.png" },
      { title: "Google: Introduction to AI", institution: "Google", year: "2025", cert: "/assets/certificates/files/Introduction to AI.pdf", preview: "/assets/certificates/files/previews/introduction_to_ai.png" },
      { title: "Google: Maximize Productivity With AI Tools", institution: "Google", year: "2025", cert: "/assets/certificates/files/Maximize Productivity With AI Tools.pdf", preview: "/assets/certificates/files/previews/maximize_productivity_with_ai_tools.png" },
      { title: "Google: Stay Ahead of the AI Curve", institution: "Google", year: "2025", cert: "/assets/certificates/files/Stay Ahead of the AI Curve.pdf", preview: "/assets/certificates/files/previews/stay_ahead_of_the_ai_curve.png" },
      { title: "Google: Use AI Responsibly", institution: "Google", year: "2025", cert: "/assets/certificates/files/Use AI Responsibly.pdf", preview: "/assets/certificates/files/previews/use_ai_responsibly.png" },
      { title: "Aprenda Machine Learning em Python com Scikit-learn", institution: "Udemy", year: "2025", cert: "/assets/certificates/files/sk-learn-udemy.pdf", preview: "/assets/certificates/files/previews/sk_learn_udemy.png" },
      { title: "Langchain: Desenvolva Agentes de IA e Apps com LLMs", institution: "Udemy", year: "2025", cert: "/assets/certificates/files/langchain_udemy.pdf", preview: "/assets/certificates/files/previews/langchain_udemy.png", star: true },
      { title: "Fundamentals of Agents", institution: "Hugging Face", year: "2025", cert: "/assets/certificates/files/agents-hugging-face.jpeg", preview: "/assets/certificates/files/agents-hugging-face.jpeg" },
      { title: "AWS Foundations: Machine Learning Basics", institution: "AWS", year: "2025", cert: "/assets/certificates/files/AWS Foundations Machine Learning Basics.pdf", preview: "/assets/certificates/files/previews/aws_foundations_machine_learning_basics.png" },
      { title: "Inteligência Artificial: Módulo 1", institution: "Curso em Vídeo", year: "2025", cert: "/assets/certificates/files/curso_em_video_ia.pdf", preview: "/assets/certificates/files/previews/curso_em_video_ia.png" },
      { title: "MLOps: Implantação e Operação de Modelos de Machine Learning", institution: "Udemy", year: "2025", cert: "/assets/certificates/files/mlops_udemy.pdf", preview: "/assets/certificates/files/previews/mlops_udemy.png", star: true }
    ]
  },
  {
    key: "Python & Programação Geral",
    items: [
      { title: "Python 3 - Mundo 1", institution: "Curso em Vídeo", year: "2022", cert: "/assets/certificates/files/python3_mundo1.pdf", preview: "/assets/certificates/files/previews/python3_mundo1.png" },
      { title: "Python 3 - Mundo 2", institution: "Curso em Vídeo", year: "2023", cert: "/assets/certificates/files/Certificado Ptyhon mundo 2.pdf", preview: "/assets/certificates/files/previews/certificado_ptyhon_mundo_2.png" },
      { title: "Python 3 - Mundo 3", institution: "Curso em Vídeo", year: "2024", cert: "/assets/certificates/files/Python-3-8211-Mundo-3-40-Horas-Certificado-Curso-em-Video.pdf", preview: "/assets/certificates/files/previews/python_3_8211_mundo_3_40_horas_certificado_curso_em_video.png" },
      { title: "Python Básico", institution: "IFMG", year: "2024", cert: "/assets/certificates/files/python_ifmg.pdf", preview: "/assets/certificates/files/previews/python_ifmg.png" },
      { title: "Python", institution: "Santander Open Academy", year: "2024", cert: "/assets/certificates/files/python_santander_open_academy.jpeg", preview: "/assets/certificates/files/python_santander_open_academy.jpeg" },
      { title: "Programming for Everybody", institution: "University of Michigan", year: "2024", cert: "/assets/certificates/files/programming_for_everybody_michigan.pdf", preview: "/assets/certificates/files/previews/programming_for_everybody_michigan.png" },
      { title: "Crash Course on Python", institution: "Google", year: "2024", cert: "/assets/certificates/files/crash_course_google.pdf", preview: "/assets/certificates/files/previews/crash_course_google.png" },
      { title: "Introdução à Ciência da Computação com Python", institution: "USP", year: "2024", cert: "/assets/certificates/files/cienciadacomputacaousp.pdf", preview: "/assets/certificates/files/previews/cienciadacomputacaousp.png" },
      { title: "Java Básico (40h)", institution: "Curso em Vídeo", year: "2025", cert: "/assets/certificates/files/java_basico.pdf", preview: "/assets/certificates/files/previews/java_basico.png" }
    ]
  },
  {
    key: "Banco de Dados & SQL",
    items: [
      { title: "Curso Completo de Banco de Dados Oracle SQL e PL/SQL", institution: "Udemy", year: "2024", cert: "/assets/certificates/files/oracle_e_pl_sql.jpeg", preview: "/assets/certificates/files/oracle_e_pl_sql.jpeg" },
      { title: "Banco de Dados e Linguagem SQL com PostgreSQL", institution: "Udemy", year: "2024", cert: "/assets/certificates/files/sql_com_postgres.jpeg", preview: "/assets/certificates/files/sql_com_postgres.jpeg" }
    ]
  },
  {
    key: "Desenvolvimento Web & JavaScript",
    items: [
      { title: "HTML5 e CSS3 - Módulo 1", institution: "Curso em Vídeo", year: "2024", cert: "/assets/certificates/files/Curso-HTML5-e-CSS3-modulo-1-de-5-40-HORAS-Certificado-Curso-em-Video.pdf", preview: "/assets/certificates/files/previews/curso_html5_e_css3_modulo_1_de_5_40_horas_certificado_curso_em_video.png" },
      { title: "Introdução à plataforma Node.js", institution: "Ada Tech", year: "2024", cert: "/assets/certificates/files/ada_introducao_a_plataforma_node.pdf", preview: "/assets/certificates/files/previews/ada_introducao_a_plataforma_node.png" },
      { title: "Lógica de programação com Javascript (Node.js)", institution: "Ada Tech", year: "2024", cert: "/assets/certificates/files/ada_logica_de_programacao_com_javascript.pdf", preview: "/assets/certificates/files/previews/ada_logica_de_programacao_com_javascript.png" },
      { title: "Introdução ao Node.js com Express", institution: "Ada Tech", year: "2024", cert: "/assets/certificates/files/introducao-ao-node-com-express.pdf", preview: "/assets/certificates/files/previews/introducao_ao_node_com_express.png" }
    ]
  },
  {
    key: "Segurança da Informação",
    items: [
      { title: "Consciência em Segurança da Informação", institution: "AuditSafe", year: "2024", cert: "/assets/certificates/files/audit_safe_seguranca_da_info.jpeg", preview: "/assets/certificates/files/audit_safe_seguranca_da_info.jpeg" },
      { title: "Segurança da Informação - Módulos 01 e 02", institution: "Curso em Vídeo", year: "2024", preview: "/assets/certificates/files/previews/seguranca_da_informacao_modulo_01_20_horas_certificado_curso_em_video.png", multiActions: [
        { labelKey: "view_mod1_button", href: "/assets/certificates/files/Seguranca-da-Informacao-Modulo-01-20-HORAS-Certificado-Curso-em-Video.pdf" },
        { labelKey: "view_mod2_button", href: "/assets/certificates/files/Matheus-Silvano-Pereira-Seguranca-da-Informacao-Modulo-02-VIP-Certificado-Curso-em-Video.pdf" }
      ] }
    ]
  },
  {
    key: "Linux & Shell Script",
    items: [
      { title: "Linux", institution: "Curso em Vídeo", year: "2024", cert: "/assets/certificates/files/linux-40-Horas-Certificado-Curso-em-Video.pdf", preview: "/assets/certificates/files/previews/linux_40_horas_certificado_curso_em_video.png" },
      { title: "Programação Shell Script - Automatizando Rotinas no Linux", institution: "Udemy", year: "2024", cert: "/assets/certificates/files/shell_script.jpeg", preview: "/assets/certificates/files/shell_script.jpeg" }
    ]
  },
  {
    key: "Controle de Versão (Git, GitHub, GitLab)",
    items: [
      { title: "Git e GitHub", institution: "Curso em Vídeo", year: "2024", cert: "/assets/certificates/files/Git-e-GitHub-20-Horas-Certificado-Curso-em-Video.pdf", preview: "/assets/certificates/files/previews/git_e_github_20_horas_certificado_curso_em_video.png" },
      { title: "Santander Tech+: Git e Versionamento", institution: "Ada Tech", year: "2024", cert: "/assets/certificates/files/git-ada.pdf", preview: "/assets/certificates/files/previews/git_ada.png" },
      { title: "SCM e Versionamento de Código Efetivo", institution: "Udemy", year: "2025", cert: "/assets/certificates/files/scm_e_versionamento_udemy.pdf", preview: "/assets/certificates/files/previews/scm_e_versionamento_udemy.png" },
      { title: "GitLab CI: Pipelines, Continuous Delivery e Deployment", institution: "Udemy", year: "2025", cert: "/assets/certificates/files/gitlab-ci.pdf", preview: "/assets/certificates/files/previews/gitlab_ci.png", star: true }
    ]
  },
  {
    key: "Containerização & DevOps",
    items: [
      { title: "Docker para Desenvolvedores (com Docker Swarm e Kubernetes)", institution: "Udemy", year: "2025", cert: "/assets/certificates/files/docker_para_desenvolvedores.pdf", preview: "/assets/certificates/files/previews/docker_para_desenvolvedores.png" }
    ]
  },
  {
    key: "Reconhecimentos & Prêmios",
    items: [
      { title: "Menção Honrosa - OBMEP", institution: "IMPA", year: "2021", cert: "/assets/certificates/files/mencao_honrosa_obmep.jpeg", preview: "/assets/certificates/files/mencao_honrosa_obmep.jpeg" },
      { title: "Medalha de Prata - ONC", institution: "Olimpíada Nacional de Ciências", year: "2020", cert: "/assets/certificates/files/Certificado Olimpíada Nacional de Ciências.pdf", preview: "/assets/certificates/files/previews/certificado_olimpiada_nacional_de_ciencias.png" }
    ]
  }
];


function t(lang, key) {
  return (TEXT[lang] && TEXT[lang][key]) || TEXT.pt[key] || key;
}

export { ASSETS, TEXT, TECH_ICONS, PROJECTS, EXPERIENCE, RECOMMENDATIONS, CERT_BADGES, COURSE_SECTIONS, t };
