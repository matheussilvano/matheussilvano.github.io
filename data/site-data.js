import { TEXT } from "./text.js";

const ASSETS = {
  favicon: "/assets/images/ui/favicon.png",
  profile: "/assets/images/profile/matheus-silvano.png",
  cvPt: "/assets/docs/cv/cv_matheus_silvano_pereira.pdf",
  cvEn: "/assets/docs/cv/english_cv_matheus_silvano_pereira.pdf"
};

const PROJECTS = {
  featured: [
    { title: "Mooose", image: "/assets/images/projects/mooose.png", desc: "Plataforma gratuita de correção de redações para o ENEM.", href: "https://www.mooose.com.br", btn: "Acessar Mooose", primary: true },
    { title: "PROMOOVE", image: "/assets/images/projects/promoove.png", desc: "HRTech focada em seleção e gestão de talentos com IA.", href: "https://promoove.vercel.app/", btn: "Abrir MVP" },
    { title: "Toxic Content Detector", image: "/assets/images/projects/toxic-content-detector.png", desc: "Projeto de ML para detecção de comentários tóxicos.", href: "https://github.com/matheussilvano/toxic-content-detector", btn: "Ver no GitHub" }
  ],
  ai: [
    {
      title: "Mooose",
      image: "/assets/images/projects/mooose.png",
      desc: "Plataforma gratuita de correção de redações para o ENEM, focada em acessibilidade e impacto social.",
      details: "Permite que estudantes enviem redações em PDF, foto ou texto e recebam feedback detalhado por competência, utilizando modelos de linguagem para análise semântica e geração de comentários claros e didáticos. Inclui painel de acompanhamento, ranking de redações e integrações com ferramentas de analytics.",
      impact: "Centenas de redações corrigidas com feedback médio em menos de 1 min.",
      contrib: "Desenhei arquitetura, APIs e pipeline de correção automática, integrando LLMs e analytics.",
      stack: ["Python", "FastAPI", "PostgreSQL", "OpenAI"],
      actions: [{ label: "Acessar Mooose", href: "https://www.mooose.com.br", primary: true }]
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
      impact: "Pipeline dockerizado, pronto para testes online.",
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
  ...PROJECTS.ai.slice(2),
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
        { labelKey: "view_mod1", href: "/assets/certificates/files/Seguranca-da-Informacao-Modulo-01-20-HORAS-Certificado-Curso-em-Video.pdf" },
        { labelKey: "view_mod2", href: "/assets/certificates/files/Matheus-Silvano-Pereira-Seguranca-da-Informacao-Modulo-02-VIP-Certificado-Curso-em-Video.pdf" }
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



const BASE = import.meta.env.BASE_URL;
const withBase = (value) => {
  if (typeof value === "string") return value.startsWith("/assets/") ? BASE + value.slice(1) : value;
  if (Array.isArray(value)) return value.map(withBase);
  if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, withBase(v)]));
  return value;
};

function t(lang, key) {
  return (TEXT[lang] && TEXT[lang][key]) || TEXT.pt[key] || key;
}

const data = withBase({ ASSETS, PROJECTS, EXPERIENCE, RECOMMENDATIONS, CERT_BADGES, COURSE_SECTIONS });
const OPEN_SOURCE = [
  { name: "kividb", url: "https://github.com/kividbio/kividb/pulls?q=is%3Apr+author%3Amatheussilvano+is%3Amerged", count: 9, key: "os_kividb" },
  { name: "loopmark-agent", url: "https://github.com/loopmark-opensource/loopmark-agent/pull/57", count: 1, key: "os_loopmark" },
  { name: "voyager", url: "https://github.com/voyager-browser/voyager/pull/95", count: 1, key: "os_voyager" },
  { name: "penthera", url: "https://github.com/danoszz/penthera/pull/244", count: 1, key: "os_penthera" }
];
export const { ASSETS: assets, PROJECTS: projects, EXPERIENCE: experience, RECOMMENDATIONS: recommendations, CERT_BADGES: certBadges, COURSE_SECTIONS: courseSections } = data;
export { TEXT, OPEN_SOURCE, t };
