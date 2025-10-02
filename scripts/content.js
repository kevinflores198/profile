const translations = {
  es: {
    // nav
    "nav-about": "Sobre mí",
    "nav-projects": "Proyectos",
    "nav-studies": "Educación",
    "nav-resume": "¿Por qué yo?",
    "nav-references": "Testimonios",
    "projects-title": "Proyectos",
    "about-text": "Soy un desarrollador web apasionado por crear sitios modernos y funcionales.",
    // main
    // profile section
    "profile-name": "Kevin Flores",
    "profile-role": "Desarrollador Full Stack",
    "profile-about": "Soy un apasionado desarrollador web enfocado en crear sitios modernos y responsivos. Siempre aprendiendo, mejorando y colaborando para entregar los mejores resultados a mis clientes.",
    "profile-contact": "Contacto",
    // projects section
    "projects-title": "Proyectos",
    //project 1
    "project1-title": "Sitio Web Portafolio",
    "project1-exp": "Un portafolio moderno y adaptable para mostrar mi trabajo.",
    "project1-btn": "Ver proyecto",
    //project 2
    "project2-title": "E-commerce",
    "project2-exp": "Online store with cart, payment system and admin panel.",
    "project1-btn": "View project",
    //project 3
    "project3-title": "Blog Platform",
    "project3-exp": "A blog system with user accounts and content management.",
    "project1-btn": "View project",
    //terms
    "quote-title": "¿Querés una página como esta?",
    "quote-btn": "Pedir presupuesto",
    "quote-terms": "Términos y Condiciones",
    "quote-li1": "El precio depende de los requisitos del proyecto, el nivel de dedicación y el tiempo que demande. Cada proyecto es único y, por lo tanto, necesita una atención y un trabajo diferente.",
    "quote-li2": "El tiempo estimado de entrega es de hasta 15 días hábiles después de recibir todos los materiales necesarios para el proyecto.",
    "quote-li3": "Una semana después de recibir los materiales, se programará una reunión de seguimiento para revisar el avance y confirmar que todo esté alineado con las expectativas del cliente.",
    "quote-li4": "Se requiere un pago inicial de al menos el 30% para comenzar el proyecto, lo que garantiza el compromiso de ambas partes.",
    "quote-li5": "Después de la entrega final, se incluye una revisión gratuita. Cualquier ajuste o cambio adicional solicitado posteriormente requerirá un presupuesto extra (mucho menor al valor original del proyecto, ya que se tratará solo de una corrección o ajuste)."


  },
  pt: {
    // nav
    "nav-about": "Sobre mim",
    "nav-projects": "Projetos",
    "nav-studies": "Educação",
    "nav-resume": "Por que eu?",
    "nav-references": "Depoimentos",
    "projects-title": "Projetos",
    "about-text": "Sou um desenvolvedor web apaixonado por criar sites modernos e funcionais.",
    // main
    "profile-name": "Kevin Flores",
    "profile-role": "Desenvolvedor Full Stack",
    "profile-about": "Sou um desenvolvedor web apaixonado, focado em criar sites modernos e responsivos. Sempre aprendendo, melhorando e colaborando para entregar os melhores resultados aos meus clientes.",
    "profile-contact": "Contato",

    "projects-title": "Projetos",
    "project1-title": "Site de Portfólio",
    "project1-exp": "Um portfólio moderno e responsivo para mostrar meu trabalho.",
    "project1-btn": "Ver projeto",

    "quote-title": "Quer um site assim?",
    "quote-btn": "Solicitar orçamento",
    "quote-terms": "Termos e Condições",
    "quote-li1": "O preço depende dos requisitos do projeto, do nível de dedicação e do tempo envolvido. Cada projeto é único e, portanto, exige uma atenção e um esforço diferentes.",
    "quote-li2": "O prazo estimado de entrega é de até 15 dias úteis após o recebimento de todos os materiais necessários para o projeto.",
    "quote-li3": "Uma semana após o recebimento dos materiais, será agendada uma reunião de acompanhamento para revisar o andamento e confirmar que tudo está de acordo com as expectativas do cliente.",
    "quote-li4": "É necessário um pagamento inicial de pelo menos 30% para iniciar o projeto, garantindo o compromisso de ambas as partes.",
    "quote-li5": "Após a entrega final, está incluída uma revisão gratuita. Qualquer ajuste ou modificação adicional solicitada depois disso exigirá um novo orçamento (significativamente menor que o valor original, pois será apenas um ajuste)."


  },
  en: {
    // nav
    "nav-about": "About Me",
    "nav-projects": "Projects",
    "nav-studies": "Education",
    "nav-resume": "Why Me",
    "nav-references": "Testimonials",
    "projects-title": "Projects",
    "about-text": "I am a web developer passionate about building modern and functional websites.",
    // main
    "profile-name": "Kevin Flores",
    "profile-role": "Full Stack Developer",
    "profile-about": "I'm a passionate web developer focused on building modern, responsive websites. Always learning, improving and collaborating to deliver the best results for my clients.",
    "profile-contact": "Contact",

    "projects-title": "Projects",
    "project1-title": "Portfolio Website",
    "project1-exp": "A responsive and modern portfolio to showcase my work.",
    "project1-btn": "View project",

    "quote-title": "Want a website like this?",
    "quote-btn": "Get a quote",
    "quote-terms": "Terms and Conditions",
    "quote-li1": "The price depends on the project's requirements, level of dedication, and time involved. Every project is unique and therefore requires a different amount of work and attention.",
    "quote-li2": "Estimated delivery time: up to 15 business days after receiving all the necessary materials for the project.",
    "quote-li3": "One week after receiving the materials, a follow-up meeting will be scheduled to review the progress and confirm alignment with the client’s expectations.",
    "quote-li4": "An upfront payment of at least 30% is required to start the project, ensuring the commitment of both parties.",
    "quote-li5": "After the final delivery, one free revision will be included. Any further adjustments or changes requested after that will require an additional quote significantly lower than the original price since it will only be an adjustment)."
  }
};

function setLanguage(lang) {
  for (const key in translations[lang]) {
    const element = document.getElementById(key);
    if (element) element.innerText = translations[lang][key];
  }
  localStorage.setItem("lang", lang);
}


// Detecta preferencia guardada o idioma del navegador
const savedLang = localStorage.getItem("lang") || navigator.language.slice(0, 2);
setLanguage(translations[savedLang] ? savedLang : "en");
