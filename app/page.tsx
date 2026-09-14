'use client';

import Image from 'next/image';
import { useState } from 'react';

type Language = 'EN' | 'IT' | 'ES' | 'DA';

type LocaleCopy = {
  brand: string;
  subtitle: string;
  nav: string[];
  badge: string;
  headline: string;
  quote: string;
  description: string;
  metrics: string[];
  cta: string;
  missionTitle: string;
  missionSubtitle: string;
  missionBody: string[];
  missionCards: Array<[string, string]>;
  servicesTitle: string;
  services: Array<{ number: string; title: string; description: string }>;
  capabilityTitle: string;
  capabilityBlocks: Array<{ title: string; desc: string; impact: string }>;
  portfolioTitle: string;
  portfolioIntro: string;
  portfolioStats: Array<{ label: string; value: string; detail: string }>;
  caseStudies: Array<{ title: string; details: string }>;
  liveDemo: string;
  aboutTitle: string;
  aboutText: string;
  aboutColumns: Array<{ title: string; items: string[] }>;
  contactTitle: string;
  contactBlocks: Array<{ label: string; items: string[] }>;
  partnerTitle: string;
};

const logoList = [
  { src: '/assets/oticon_logo.png', alt: 'Oticon' },
  { src: '/assets/lenus.png', alt: 'Lenus' },
  { src: '/assets/danske_bank.png', alt: 'Danske Bank' },
  { src: '/assets/radiometer.png', alt: 'Radiometer' },
  { src: '/assets/hollister.jpeg', alt: 'Hollister' },
  { src: '/assets/Cameo.png', alt: 'Cameo' },
  { src: '/assets/DIS.png', alt: 'DIS' },
];

const localeCopy: Record<Language, LocaleCopy> = {
  EN: {
    brand: 'Parthenope Data Advisory',
    subtitle: 'Advanced Analytics & AI Strategy',
    nav: ['Home', 'Mission', 'Services', 'About', 'Portfolio', 'Contact'],
    badge: 'Executive advisory',
    headline: 'Data, strategy, and AI with business impact.',
    quote: '“In God we trust, all others must bring data” — W. E. Deming',
    description:
      'Bridging academic rigor and business execution. I help startups, SMEs, and large enterprises scale through data-driven decisions and custom GenAI solutions.',
    metrics: ['13+ years', 'Global advisory', 'AI & data strategy'],
    cta: 'Book a Free Call',
    missionTitle: 'Our Story & Vision',
    missionSubtitle: 'Parthenope Data Advisory: From Southern Resilience to Nordic Excellence',
    missionBody: [
      'Parthenope Data Advisory was born from a journey that started in a small town in Southern Italy and led to Copenhagen, driven by an unyielding passion for mathematics, hard work, and a vision to empower organizations through data.',
      'Built upon over 13 years of expertise across health-tech, fintech, e-health, and academic research, our firm combines Southern European resilience with Nordic precision.',
      'Our purpose is simple: democratizing high-grade Data Science and Generative AI. We believe advanced analytical rigor should not be exclusive to massive tech conglomerates.'
    ],
    missionCards: [
      ['Global journey', 'From Southern Italy to Denmark, with a clear mission to create real-world impact.'],
      ['People first', 'Empowering teams, founders, and business leaders through clear, practical data strategy.'],
      ['Relentless grit', 'Turning complexity into action through persistence, rigor, and business focus.'],
      ['Academic rigor', 'Making advanced statistics and AI understandable, actionable, and scalable.'],
    ],
    servicesTitle: 'Services & Practical Capabilities',
    services: [
      {
        number: '01',
        title: 'Customer & market intelligence',
        description:
          'Turn raw data into clear strategic direction. We help you understand customers, improve pricing, detect demand patterns, and build decision-ready dashboards.',
      },
      {
        number: '02',
        title: 'AI implementation & automation',
        description:
          'Move from experimentation to scalable systems. We design and deploy AI workflows that reduce manual work, accelerate decisions, and integrate with real operations.',
      },
      {
        number: '03',
        title: 'Web scraping & data extraction',
        description:
          'Collect structured data from public or internal sources with robust pipelines, automation, and validation rules so your team can analyze information reliably and at scale.',
      },
      {
        number: '04',
        title: 'Executive & in-company training',
        description:
          'Bridge technical complexity and leadership decisions. Workshops for teams, founders, and management eager to understand AI with practical business context.',
      },
    ],
    capabilityTitle: 'Real-World Capabilities & Methodologies',
    capabilityBlocks: [
      {
        title: 'Market Insights',
        desc: 'Customer satisfaction analysis, survey analytics, and behavioral modeling.',
        impact: 'Discover what actually drives customer loyalty and higher retention.',
      },
      {
        title: 'AI & Smart Apps',
        desc: 'Custom chatbots, document processing, and automated content sorting.',
        impact: 'Save hundreds of team hours by letting AI handle routine information tasks.',
      },
      {
        title: 'BI, Forecasting & Automation',
        desc: 'Interactive dashboards, automated sales tracking, and financial modeling.',
        impact: 'Get real-time visibility into business metrics without manual Excel work.',
      },
      {
        title: 'Executive Advisory',
        desc: 'Translating complex technical models into clear C-level strategies.',
        impact: 'Confidently present data-backed roadmaps to board members and investors.',
      },
    ],
    portfolioTitle: 'Track Record & Experience',
    portfolioIntro: 'A timeline of value delivered across industry leaders and academia.',
    portfolioStats: [
      { label: 'IMPACT', value: '13+', detail: 'years in analytics and AI' },
      { label: 'SECTORS', value: '5', detail: 'healthtech, fintech, e-health, research, enterprise' },
      { label: 'FOCUS', value: 'AI', detail: 'strategy, product intelligence, and operational transformation' },
    ],
    caseStudies: [
      {
        title: 'Lenus eHealth — Chief Data Scientist (GenAI)',
        details:
          'Led AI strategy and developed end-to-end applications: interactive chatbots, specialized questionnaires, automated human-performance evaluation tools, image & text categorization, customer clustering, and spoon-fed C-level insights.',
      },
      {
        title: 'Danske Bank — Senior Data Scientist (NLP & AOT)',
        details:
          'Architected end-to-end ETL pipelines, implemented GenAI & RAG models, fine-tuned LLMs for sentiment and topic modeling, regex automated processing, and Automation of Things (AOT).',
      },
      {
        title: 'Radiometer A/S — Business Insight Analyst',
        details:
          'Applied Deep Neural Networks (DNN) for complex decision-making, designed product clustering algorithms, built automated workflows (AOT & Python/UiPath), and managed SQL environments.',
      },
      {
        title: 'Hollister Inc. — Senior Analyst',
        details:
          'Mastered enterprise-level data visualization with Tableau and PowerBI. Built MYR sales projections, variance analysis between actuals and forecasts, and OPEX budgeting.',
      },
      {
        title: 'Oticon A/S — Data Analyst & Project Manager',
        details:
          'Conducted global market intelligence, direct customer interviewing, hypothesis testing, PCA (Principal Component Analysis), and Structural Equation Models (SEM) for end-to-end project validation.',
      },
      {
        title: 'DIS Copenhagen — University Faculty Member',
        details:
          'Designed and taught Data-Informed Business Strategies, mentoring teams to build statistical experiments, validate hypothesis, and bridge academia with corporate execution.',
      },
    ],
    liveDemo: 'Live Demo App',
    aboutTitle: 'About Nicola Menale',
    aboutText:
      'With 13+ years of experience across healthcare, fintech, e-health, and top European universities, I help organizations turn raw data into strategic competitive advantages.',
    aboutColumns: [
      {
        title: 'Career Journey',
        items: ['Chief Data Scientist (GenAI) | Lenus eHealth', 'Part-time Faculty | DIS University Copenhagen', 'Senior Data Scientist (NLP & AOT) | Danske Bank'],
      },
      {
        title: 'Education',
        items: ['Advanced Topics in Machine Learning | KU', 'Master in Data Science | Unicusano Rome', 'M.Sc. in Economics and Social Sciences | Bocconi'],
      },
      {
        title: 'Seminars & Academia',
        items: ['Data Analysis & GenAI with Python', 'Decision Making and Negotiation', 'Performance Management'],
      },
    ],
    contactTitle: 'Get in Touch',
    contactBlocks: [
      {
        label: 'CONTACT',
        items: ['Email: nicolamenale90@gmail.com', 'Phone: +45 91956163', 'LinkedIn: nicola-menale-b0758293'],
      },
      {
        label: 'BOOK A CALL',
        items: ['App Demo: way2stat.streamlit.app', 'Advice: Strategy, AI adoption, forecasting, and operational analytics'],
      },
    ],
    partnerTitle: 'Selected partners and clients',
  },
  IT: {
    brand: 'Parthenope Data Advisory',
    subtitle: 'Analisi avanzata & Strategia AI',
    nav: ['Home', 'Missione', 'Servizi', 'Chi Sono', 'Portfolio', 'Contatti'],
    badge: 'Consulenza executive',
    headline: 'Dati, strategia e AI con impatto sul business.',
    quote: '“In God we trust, all others must bring data” — W. E. Deming',
    description:
      'Unisco il rigore accademico all’esecuzione aziendale. Aiuto startup, PMI e grandi imprese a crescere con decisioni basate sui dati e soluzioni GenAI su misura.',
    metrics: ['13+ anni', 'Consulenza globale', 'Strategia AI & dati'],
    cta: 'Prenota una chiamata',
    missionTitle: 'La nostra storia e visione',
    missionSubtitle: 'Parthenope Data Advisory: dalla resilienza del Sud all’eccellenza nordica',
    missionBody: [
      'Parthenope Data Advisory nasce da un percorso iniziato in un piccolo paese del Sud Italia e arrivato a Copenaghen, guidato da un’implacabile passione per i dati e la matematica.',
      'Con oltre 13 anni di esperienza tra health-tech, fintech, e-health e ricerca accademica, la nostra azienda combina resilienza mediterranea e precisione nordica.',
      'La nostra missione è rendere accessibile l’analisi di dati e l’AI generativa a startup, PMI e aziende mature.'
    ],
    missionCards: [
      ['Percorso globale', 'Dal Sud Italia alla Danimarca, con una missione concreta e misurabile.'],
      ['Le persone prima di tutto', 'Supportiamo team, founder e leader con strategia data-driven chiara.'],
      ['Tenacia', 'Trasformiamo la complessità in azione con rigore e business focus.'],
      ['Rigor scientifico', 'Rendiamo statistiche avanzate e AI pratiche, comprensibili e scalabili.'],
    ],
    servicesTitle: 'Servizi e competenze pratiche',
    services: [
      {
        number: '01',
        title: 'Customer & market intelligence',
        description:
          'Trasformiamo i dati grezzi in direzioni strategiche concrete per migliorare prezzi, customer understanding e pianificazione.',
      },
      {
        number: '02',
        title: 'AI implementation & automation',
        description:
          'Sviluppiamo workflow AI e automazioni che riducono il lavoro manuale e accelerano le decisioni aziendali.',
      },
      {
        number: '03',
        title: 'Web scraping & data extraction',
        description:
          'Raccogliamo dati strutturati da fonti pubbliche o interne con pipeline robuste, automazioni e controlli di qualità per analisi affidabili e scalabili.',
      },
      {
        number: '04',
        title: 'Executive & in-company training',
        description:
          'Formazione dedicata a management e team non tecnici per affrontare AI, prompt engineering e decisioni basate sui dati.',
      },
    ],
    capabilityTitle: 'Capacità reali e metodologie',
    capabilityBlocks: [
      {
        title: 'Market Insights',
        desc: 'Analisi della soddisfazione clienti e modellazione comportamentale.',
        impact: 'Scopri cosa guida davvero fedeltà e retention.',
      },
      {
        title: 'AI e applicazioni intelligenti',
        desc: 'Chatbot personalizzati, elaborazione documenti e classificazione automatica.',
        impact: 'Risparmia centinaia di ore di lavoro routine.',
      },
      {
        title: 'BI, forecasting e automazione',
        desc: 'Dashboard interattive, analisi vendite e modellazione finanziaria.',
        impact: 'Ottieni visibilità immediata delle performance aziendali.',
      },
      {
        title: 'Consulting executive',
        desc: 'Trasformiamo modelli tecnici in strategie chiare per il management.',
        impact: 'Presenta roadmap efficaci a board e investitori.',
      },
    ],
    portfolioTitle: 'Esperienze e risultati',
    portfolioIntro: 'Valore generato in aziende leader e nel mondo accademico.',
    portfolioStats: [
      { label: 'IMPATTO', value: '13+', detail: 'anni di analytics e AI' },
      { label: 'SETTORI', value: '5', detail: 'healthtech, fintech, e-health, ricerca, enterprise' },
      { label: 'FOCUS', value: 'AI', detail: 'strategia, intelligence e trasformazione operativa' },
    ],
    caseStudies: [
      {
        title: 'Lenus eHealth — Chief Data Scientist (GenAI)',
        details: 'Strategia AI e applicazioni end-to-end per chatbot, questionari, valutazione delle performance e clustering clienti.',
      },
      {
        title: 'Danske Bank — Senior Data Scientist (NLP & AOT)',
        details: 'Pipeline ETL, modelli GenAI e RAG, fine-tuning LLM e automazioni di processo.',
      },
      {
        title: 'Radiometer A/S — Business Insight Analyst',
        details: 'Deep Neural Networks e clustering prodotti per supportare decisioni strategiche complesse.',
      },
      {
        title: 'Hollister Inc. — Senior Analyst',
        details: 'Dashboard Tableau e Power BI, forecast di vendita e analisi budget/variance.',
      },
      {
        title: 'Oticon A/S — Data Analyst & Project Manager',
        details: 'Market intelligence globale, analisi statistica, PCA e SEM per progetti di validazione strategica.',
      },
      {
        title: 'DIS Copenhagen — University Faculty Member',
        details: 'Docenza in Data-Informed Business Strategies e mentoring su esperimenti statistici e processi decisionali.',
      },
    ],
    liveDemo: 'Demo live',
    aboutTitle: 'Chi sono',
    aboutText:
      'Con oltre 13 anni di esperienza tra sanità, fintech e università europee, trasformo dati complessi in vantaggi competitivi reali.',
    aboutColumns: [
      {
        title: 'Carriera',
        items: ['Chief Data Scientist (GenAI) | Lenus eHealth', 'Docente part-time | DIS University Copenhagen', 'Senior Data Scientist (NLP & AOT) | Danske Bank'],
      },
      {
        title: 'Formazione',
        items: ['Advanced Topics in Machine Learning | KU', 'Master in Data Science | Unicusano', 'M.Sc. in Economics and Social Sciences | Bocconi'],
      },
      {
        title: 'Seminari e accademia',
        items: ['Data Analysis & GenAI with Python', 'Decision Making and Negotiation', 'Performance Management'],
      },
    ],
    contactTitle: 'Contattami',
    contactBlocks: [
      {
        label: 'CONTATTO',
        items: ['Email: nicolamenale90@gmail.com', 'Telefono: +45 91956163', 'LinkedIn: nicola-menale-b0758293'],
      },
      {
        label: 'PRENOTA UNA CHIAMATA',
        items: ['Demo: way2stat.streamlit.app', 'Consulenza: strategy, AI adoption, forecasting e analytics operativa'],
      },
    ],
    partnerTitle: 'Partner e clienti selezionati',
  },
  ES: {
    brand: 'Parthenope Data Advisory',
    subtitle: 'Analítica avanzada & estrategia AI',
    nav: ['Inicio', 'Misión', 'Servicios', 'Sobre Mí', 'Portfolio', 'Contacto'],
    badge: 'Asesoría ejecutiva',
    headline: 'Datos, estrategia e IA con impacto de negocio.',
    quote: '“In God we trust, all others must bring data” — W. E. Deming',
    description:
      'Combino rigor académico con ejecución empresarial. Ayudo a startups, pymes y grandes empresas a escalar con decisiones basadas en datos y soluciones GenAI personalizadas.',
    metrics: ['13+ años', 'Asesoría global', 'Estrategia IA & datos'],
    cta: 'Reservar llamada',
    missionTitle: 'Nuestra historia y visión',
    missionSubtitle: 'Parthenope Data Advisory: de la resiliencia del sur a la excelencia nórdica',
    missionBody: [
      'Parthenope Data Advisory nació en un pequeño pueblo del sur de Italia y llegó a Copenhague con una pasión inquebrantable por los datos y la matemática.',
      'Con más de 13 años de experiencia en salud, fintech, e-health e investigación, la firma combina resiliencia mediterránea con precisión nórdica.',
      'Nuestra misión es democratizar la ciencia de datos y la IA generativa para startups, pymes y empresas con visión de crecimiento.'
    ],
    missionCards: [
      ['Trayectoria global', 'Del sur de Italia a Dinamarca, con una misión clara y útil para negocio.'],
      ['Personas primero', 'Acompañamos equipos, founders y líderes con estrategia data-driven.'],
      ['Tenacidad', 'Convertimos complejidad en acción con rigor y enfoque empresarial.'],
      ['Rigor académico', 'Hacemos que estadísticas avanzadas y IA sean comprensibles y escalables.'],
    ],
    servicesTitle: 'Servicios y capacidades prácticas',
    services: [
      {
        number: '01',
        title: 'Customer & market intelligence',
        description:
          'Transformamos datos brutos en direcciones estratégicas para mejorar precios, understanding del cliente y decisiones comerciales.',
      },
      {
        number: '02',
        title: 'AI implementation & automation',
        description:
          'Diseñamos flujos AI y automatizaciones que reducen tareas manuales y aceleran decisiones operativas.',
      },
      {
        number: '03',
        title: 'Web scraping & data extraction',
        description:
          'Recopilamos datos estructurados desde fuentes públicas o internas con pipelines robustos, automatización y validación para análisis fiables y escalables.',
      },
      {
        number: '04',
        title: 'Executive & in-company training',
        description:
          'Capacitaciones para equipos de liderazgo y no técnicos en IA generativa, prompt engineering y toma de decisiones basada en datos.',
      },
    ],
    capabilityTitle: 'Casos prácticos y metodologías',
    capabilityBlocks: [
      {
        title: 'Market Insights',
        desc: 'Análisis de satisfacción y modelado conductual.',
        impact: 'Descubre qué impulsa la retención y la lealtad del cliente.',
      },
      {
        title: 'IA y apps inteligentes',
        desc: 'Chatbots, procesamiento documental y clasificación automatizada.',
        impact: 'Ahorra cientos de horas de trabajo rutinario.',
      },
      {
        title: 'BI, forecasting y automatización',
        desc: 'Dashboards interactivos, modelado financiero y automatización de ventas.',
        impact: 'Obtén visibilidad inmediata de tus métricas clave.',
      },
      {
        title: 'Consultoría ejecutiva',
        desc: 'Traducimos modelos complejos en estrategias ejecutivas.',
        impact: 'Presenta roadmaps con mayor confianza ante directivos e inversores.',
      },
    ],
    portfolioTitle: 'Experiencia y resultados',
    portfolioIntro: 'Valor entregado a organizaciones líderes y al ámbito académico.',
    portfolioStats: [
      { label: 'IMPACTO', value: '13+', detail: 'años de analytics e IA' },
      { label: 'SECTORES', value: '5', detail: 'salud, fintech, e-health, investigación, enterprise' },
      { label: 'FOCUS', value: 'IA', detail: 'estrategia, inteligencia y transformación operativa' },
    ],
    caseStudies: [
      {
        title: 'Lenus eHealth — Chief Data Scientist (GenAI)',
        details: 'Estrategia IA y aplicaciones end-to-end para chatbots, encuestas, validación de rendimiento humano y clustering de clientes.',
      },
      {
        title: 'Danske Bank — Senior Data Scientist (NLP & AOT)',
        details: 'Pipelines ETL, modelos GenAI y RAG, fine-tuning de LLM y automatización de procesos.',
      },
      {
        title: 'Radiometer A/S — Business Insight Analyst',
        details: 'Deep Neural Networks y clustering de productos para soporte de decisiones complejas.',
      },
      {
        title: 'Hollister Inc. — Senior Analyst',
        details: 'Dashboard Tableau y Power BI, forecast de ventas y análisis de presupuesto y variación.',
      },
      {
        title: 'Oticon A/S — Data Analyst & Project Manager',
        details: 'Investigación de mercado, testing de hipótesis, PCA y SEM para validación estratégica de proyectos.',
      },
      {
        title: 'DIS Copenhagen — University Faculty Member',
        details: 'Docencia en Data-Informed Business Strategies y mentoría en experimentos estadísticos.',
      },
    ],
    liveDemo: 'Demo en vivo',
    aboutTitle: 'Sobre Nicola Menale',
    aboutText:
      'Con más de 13 años de experiencia en salud, fintech y universidades europeas, transformo datos complejos en ventajas competitivas claras.',
    aboutColumns: [
      {
        title: 'Carrera',
        items: ['Chief Data Scientist (GenAI) | Lenus eHealth', 'Profesor adjunto | DIS University Copenhagen', 'Senior Data Scientist (NLP & AOT) | Danske Bank'],
      },
      {
        title: 'Educación',
        items: ['Advanced Topics in Machine Learning | KU', 'Master in Data Science | Unicusano Rome', 'M.Sc. in Economics and Social Sciences | Bocconi'],
      },
      {
        title: 'Seminarios y academia',
        items: ['Data Analysis & GenAI with Python', 'Decision Making and Negotiation', 'Performance Management'],
      },
    ],
    contactTitle: 'Contacto',
    contactBlocks: [
      {
        label: 'CONTACTO',
        items: ['Email: nicolamenale90@gmail.com', 'Teléfono: +45 91956163', 'LinkedIn: nicola-menale-b0758293'],
      },
      {
        label: 'RESERVAR LLAMADA',
        items: ['Demo: way2stat.streamlit.app', 'Asesoría: strategy, IA adoption, forecasting y analytics operativa'],
      },
    ],
    partnerTitle: 'Aliados y clientes seleccionados',
  },
  DA: {
    brand: 'Parthenope Data Advisory',
    subtitle: 'Avanceret analytics & AI-strategi',
    nav: ['Hjem', 'Mission', 'Ydelser', 'Om mig', 'Portfolio', 'Kontakt'],
    badge: 'Executive rådgivning',
    headline: 'Data, strategi og AI, der skaber værdi for virksomheden.',
    quote: '“In God we trust, all others must bring data” — W. E. Deming',
    description:
      'Jeg kombinerer akademisk præcision med forretningseksekvering. Jeg hjælper startups, SMV’er og større virksomheder med at vokse gennem datadrevne beslutninger og skræddersyede GenAI-løsninger.',
    metrics: ['13+ år', 'Global rådgivning', 'AI & datastrategi'],
    cta: 'Book en samtale',
    missionTitle: 'Vores historie og vision',
    missionSubtitle: 'Parthenope Data Advisory: fra sydlig modstandskraft til nordisk ekspertise',
    missionBody: [
      'Parthenope Data Advisory blev skabt af en rejse fra det sydlige Italien til København og er drevet af en ubøjelig passion for matematik, hårdt arbejde og data.',
      'Med mere end 13 års erfaring inden for health-tech, fintech, e-health og akademisk forskning kombinerer firmaet sydlig modstandskraft med nordisk præcision.',
      'Vores mål er at gøre avanceret data science og generativ AI tilgængeligt for startups, SMV’er og virksomheder med vækstambitioner.'
    ],
    missionCards: [
      ['Global rejse', 'Fra Syditalien til Danmark med en tydelig mission om at skabe reel værdi.'],
      ['Folk først', 'Vi styrker teams, founders og ledere med tydelig data-driven strategi.'],
      ['Udholdenhed', 'Vi gør kompleksitet om til handling gennem rigor og business focus.'],
      ['Akademisk styrke', 'Vi gør avanceret statistik og AI forståelig, anvendelig og skalerbar.'],
    ],
    servicesTitle: 'Ydelser og praktiske kompetencer',
    services: [
      {
        number: '01',
        title: 'Customer & market intelligence',
        description:
          'Vi omsætter rådata til strategiske beslutninger om pricing, kundebehaviour og dashboarding til ledelsen.',
      },
      {
        number: '02',
        title: 'AI implementation & automation',
        description:
          'Vi bygger AI-workflows og automatiseringer, der reducerer manuel byrde og øger beslutningshastighed.',
      },
      {
        number: '03',
        title: 'Web scraping & data extraction',
        description:
          'Vi indsamler strukturerede data fra offentlige eller interne kilder via robuste pipelines, automatisering og valideringsregler til pålidelige og skalerbare analyser.',
      },
      {
        number: '04',
        title: 'Executive & in-company training',
        description:
          'Workshops til ledelse og ikke-tekniske teams om generativ AI, prompt engineering og datadrevet beslutningstagning.',
      },
    ],
    capabilityTitle: 'Praktiske kompetencer og metoder',
    capabilityBlocks: [
      {
        title: 'Market Insights',
        desc: 'Kundetilfredshed, spørgeskemaanalyse og adfærdsmodellering.',
        impact: 'Opdag, hvad der reelt driver kundeloyalitet og fastholdelse.',
      },
      {
        title: 'AI og intelligente apps',
        desc: 'Skræddersyede chatbots, dokumentbehandling og automatisk kategorisering.',
        impact: 'Spar hundredvis af timer på rutinearbejde.',
      },
      {
        title: 'BI, prognoser og automatisering',
        desc: 'Interaktive dashboards, salgssporing og finansiel modellering.',
        impact: 'Få realtidsoversigt over nøgletal uden manuelt Excel-arbejde.',
      },
      {
        title: 'Executive rådgivning',
        desc: 'Omdanner komplekse modeller til klare ledelsesstrategier.',
        impact: 'Præsenter databaserede roadmaps med større selvtillid.',
      },
    ],
    portfolioTitle: 'Track record og erfaring',
    portfolioIntro: 'Værdi skabt i førende virksomheder og akademiske miljøer.',
    portfolioStats: [
      { label: 'IMPACT', value: '13+', detail: 'år i analytics og AI' },
      { label: 'SEKTORER', value: '5', detail: 'healthtech, fintech, e-health, forskning, enterprise' },
      { label: 'FOCUS', value: 'AI', detail: 'strategi, produktintelligens og transformation' },
    ],
    caseStudies: [
      {
        title: 'Lenus eHealth — Chief Data Scientist (GenAI)',
        details: 'Ledelse af AI-strategi og udvikling af end-to-end AI-løsninger for chatbot, spørgeskemaer og kundeanalyse.',
      },
      {
        title: 'Danske Bank — Senior Data Scientist (NLP & AOT)',
        details: 'ETL-pipelines, GenAI- og RAG-modeller, LLM-finetuning, sentimentanalyse og automatisering.',
      },
      {
        title: 'Radiometer A/S — Business Insight Analyst',
        details: 'Deep Neural Networks, produktklustering og automatisering af analysesystemer.',
      },
      {
        title: 'Hollister Inc. — Senior Analyst',
        details: 'Tableau/Power BI dashboards, sales forecasting og variance analysis.',
      },
      {
        title: 'Oticon A/S — Data Analyst & Project Manager',
        details: 'Markedsanalyse, hypotesetest og PCA/SEM til strategiske projektvalg.',
      },
      {
        title: 'DIS Copenhagen — University Faculty Member',
        details: 'Undervisning i data-informerede business-strategier og statistiske eksperimenter.',
      },
    ],
    liveDemo: 'Live demo',
    aboutTitle: 'Om Nicola Menale',
    aboutText:
      'Med 13+ års erfaring i sundhed, fintech og europæiske universiteter hjælper jeg organisationer med at omdanne data til konkurrencefordele.',
    aboutColumns: [
      {
        title: 'Karriere',
        items: ['Chief Data Scientist (GenAI) | Lenus eHealth', 'Deltidsunderviser | DIS University Copenhagen', 'Senior Data Scientist (NLP & AOT) | Danske Bank'],
      },
      {
        title: 'Uddannelse',
        items: ['Advanced Topics in Machine Learning | KU', 'Master in Data Science | Unicusano Rome', 'M.Sc. in Economics and Social Sciences | Bocconi'],
      },
      {
        title: 'Seminarer og akademi',
        items: ['Data Analysis & GenAI with Python', 'Decision Making and Negotiation', 'Performance Management'],
      },
    ],
    contactTitle: 'Kontakt',
    contactBlocks: [
      {
        label: 'KONTAKT',
        items: ['Email: nicolamenale90@gmail.com', 'Telefon: +45 91956163', 'LinkedIn: nicola-menale-b0758293'],
      },
      {
        label: 'BOOK ET SAMTAL',
        items: ['Demo: way2stat.streamlit.app', 'Rådgivning: strategy, AI adoption, forecasting og operationel analytics'],
      },
    ],
    partnerTitle: 'Udvalgte partnere og kunder',
  },
};

export default function HomePage() {
  const [language, setLanguage] = useState<Language>('EN');
  const copy = localeCopy[language];

  return (
    <main className="min-h-screen bg-brand-bg text-brand-navy">
      <div className="container-shell py-8">
        <header className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-[80px] w-[170px] overflow-hidden rounded-lg">
              <Image src="/assets/parthenope_logo.png" alt="Parthenope logo" width={170} height={80} priority />
            </div>
            <div>
              <div className="text-xs font-bold tracking-[0.18em] text-brand-cyan">DATA ADVISORY</div>
              <div className="text-2xl font-bold">{copy.brand}</div>
              <div className="text-sm text-brand-slate">{copy.subtitle}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 self-start lg:self-auto">
            {(['EN', 'IT', 'ES', 'DA'] as Language[]).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLanguage(lang)}
                className={`site-button px-5 py-2.5 text-sm ${
                  language === lang ? 'site-button-primary' : 'site-button-secondary'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </header>

        <nav className="mt-8 flex flex-wrap gap-3 rounded-full border border-brand-line bg-white/80 p-2 shadow-sm">
          {copy.nav.map((item) => (
            <a
              key={item}
              href={
                item === 'Home' || item === 'Hjem' || item === 'Inicio'
                  ? '#home'
                  : item === 'Mission' || item === 'Missione' || item === 'Misión'
                    ? '#mission'
                    : item === 'Services' || item === 'Servizi' || item === 'Servicios' || item === 'Ydelser'
                      ? '#services'
                      : item === 'About' || item === 'Chi Sono' || item === 'Sobre Mí' || item === 'Om mig'
                        ? '#about'
                        : item === 'Portfolio' || item === 'Portafolio' || item === 'Portfolio' || item === 'Portfolio'
                          ? '#portfolio'
                          : '#contact'
              }
              className="rounded-full px-4 py-2 text-sm font-semibold text-brand-slate transition hover:bg-brand-cyanSoft hover:text-brand-navy"
            >
              {item}
            </a>
          ))}
        </nav>

        <section id="home" className="mt-10 grid gap-8 lg:grid-cols-[1.8fr_1fr]">
          <div className="brand-card p-8">
            <div className="mb-4 inline-block rounded-full border border-brand-cyan/30 bg-brand-cyanSoft px-3 py-2 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-brand-navy">
              {copy.badge}
            </div>
            <h1 className="text-5xl font-bold leading-[1.05] md:text-6xl">{copy.headline}</h1>
            <p className="mt-5 text-lg italic text-brand-slate">{copy.quote}</p>
            <p className="mt-4 max-w-2xl text-base text-brand-slate">{copy.description}</p>

            <div className="mt-5 flex flex-wrap gap-3">
              {copy.metrics.map((metric) => (
                <span key={metric} className="metric-pill">{metric}</span>
              ))}
            </div>

            <div className="mt-8">
              <a href="#contact" className="site-button site-button-primary px-6 py-3 text-sm">
                {copy.cta}
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-brand-line bg-white p-3 shadow-soft">
            <Image src="/assets/hero.jpeg" alt="Strategy and AI illustration" width={800} height={900} className="h-full w-full rounded-xl object-cover" />
          </div>
        </section>

        <section id="mission" className="mt-16">
          <h2 className="text-4xl font-bold">{copy.missionTitle}</h2>
          <h3 className="mt-3 text-2xl font-semibold text-brand-slate">{copy.missionSubtitle}</h3>
          <div className="mt-6 max-w-4xl space-y-4 text-base text-brand-slate">
            {copy.missionBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {copy.missionCards.map(([title, text]) => (
              <div key={title} className="border-t-2 border-brand-navy bg-white p-4">
                <h4 className="mb-2 text-lg font-bold">{title}</h4>
                <p className="text-sm">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="mt-16">
          <h2 className="text-4xl font-bold">{copy.servicesTitle}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {copy.services.map((service) => (
              <div key={service.number} className="service-card">
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-cyanSoft text-sm font-bold text-brand-navy">
                  {service.number}
                </div>
                <h3 className="mb-4 text-2xl font-bold">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h3 className="text-3xl font-bold">{copy.capabilityTitle}</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {copy.capabilityBlocks.map((block) => (
              <div key={block.title} className="rounded-xl border border-brand-line bg-white p-5 shadow-sm">
                <h4 className="text-2xl font-bold">{block.title}</h4>
                <p className="mt-2">{block.desc}</p>
                <p className="mt-3 text-sm font-medium">Business Impact: {block.impact}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="portfolio" className="mt-16">
          <h2 className="text-4xl font-bold">{copy.portfolioTitle}</h2>
          <p className="mt-4 max-w-3xl text-base text-brand-slate">{copy.portfolioIntro}</p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {copy.portfolioStats.map((stat) => (
              <div key={stat.label} className="brand-card p-5">
                <div className="text-[0.72rem] font-bold tracking-[0.15em] text-brand-cyan">{stat.label}</div>
                <div className="mt-3 text-4xl font-bold">{stat.value}</div>
                <div className="mt-2 text-brand-slate">{stat.detail}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            {copy.caseStudies.map((study) => (
              <div key={study.title} className="rounded-xl border border-brand-line bg-white p-5 shadow-sm">
                <h4 className="text-xl font-bold text-brand-navy">{study.title}</h4>
                <p className="mt-2 text-brand-slate">{study.details}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-brand-line bg-white p-5">
            <h4 className="text-2xl font-bold">{copy.liveDemo}</h4>
            <a href="https://way2stat.streamlit.app" target="_blank" rel="noreferrer" className="mt-2 inline-block text-brand-navy underline">
              way2stat.streamlit.app
            </a>
          </div>
        </section>

        <section id="about" className="mt-16">
          <h2 className="text-4xl font-bold">{copy.aboutTitle}</h2>
          <p className="mt-4 max-w-4xl text-base text-brand-slate">{copy.aboutText}</p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {copy.aboutColumns.map((column) => (
              <div key={column.title} className="brand-card p-5">
                <h4 className="text-xl font-bold">{column.title}</h4>
                <ul className="mt-4 space-y-2 text-sm text-brand-slate">
                  {column.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-16">
          <h2 className="text-4xl font-bold">{copy.contactTitle}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {copy.contactBlocks.map((block) => (
              <div key={block.label} className="brand-card p-6">
                <div className="text-xs font-bold tracking-[0.12em] text-brand-cyan">{block.label}</div>
                <div className="mt-4 space-y-3 text-base text-brand-navy">
                  {block.items.map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="logo-strip">
            <div className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.12em] text-brand-slate">
              {copy.partnerTitle}
            </div>
            <div className="grid gap-4 md:grid-cols-7">
              {logoList.map((logo) => (
                <div key={logo.alt} className="flex min-h-[90px] items-center justify-center p-2">
                  <Image src={logo.src} alt={logo.alt} width={120} height={50} className="h-[42px] w-auto object-contain grayscale opacity-70 transition hover:grayscale-0 hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
