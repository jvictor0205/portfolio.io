// let darkmode = localStorage.getItem('darkmode')
// const themeSwitch = document.getElementById('theme-switch')

// const enableDarkmode = () => {
//     // const iconSwitch = document.getElementById('icon-darkmode')
//     // iconSwitch.classList.remove('fa-sun')
//     // iconSwitch.classList.add('fa-moon')
    
//     document.body.classList.add('darkmode')
//     localStorage.setItem('darkmode', 'active')
// }

// const disableDarkmode = () => {
//     // const iconSwitch = document.getElementById('icon-darkmode')
//     // iconSwitch.classList.remove('fa-moon')
//     // iconSwitch.classList.add('fa-sun')

//     document.body.classList.remove('darkmode')
//     localStorage.setItem('darkmode', null)
// }

// if(darkmode === "active") enableDarkmode()

// themeSwitch.addEventListener("click", () => {
//     darkmode = localStorage.getItem('darkmode')
//     darkmode !== "active" ? enableDarkmode() : disableDarkmode()
// })

// Define the language reload anchors
const language = {
    en: {
        welcome: "Statistician graduated from UFPI, with extensive experience in creating and implementing analytical solutions for " +
        "complex business challenges, ranging from large-scale data storage to statistical modeling, risk analysis, and machine learning. I have a profile "+
        "focused on results, with the ability to translate data into insights through detailed and well-structured reports. "+
        "My expertise includes mastery of languages such as R, Python, SQL, and Elasticsearch, combined with the ability to manage internal and external "+
        "analyses, ensuring accuracy and efficiency in high-impact projects.",
        navAbout: "About me",
        navStudies: "Study projects",
        resumeAbout: "A resume about my abilities and progress in my career.",
        resumeStudy: "Projects and challenges to solidify skills and make everyday life easier.",
        reserved: "<i class='fas fa-copyright fa-1x'></i> 2025 All rights reserved.",
        coffeeBottom: "<i class='fas fa-code fa-1x'></i> with a lot of <i class='fas fa-mug-hot fa-1x'></i> by<span class='text-bold'> Me.</span>",
        greeting: "Hi! I am João",
        name: "Victor",
        profession: "a <span class='fw-bold'>Statistician</span>",
        location: "based in sunny <a href='https://maps.app.goo.gl/ywzrVWnMcnk6DYYd7'>Piauí, Brazil</a>."
    },
    br: {
        welcome: "Estatístico formado pela UFPI, com ampla experiência na criação e implementação de soluções analíticas para " +
        "desafios de negócios complexos, que vão desde armazenamento de dados em grande escala até modelagem estatística, análise de risco e aprendizado de máquina. Tenho um perfil "+
        "focado em resultados, com capacidade de traduzir dados em insights por meio de relatórios detalhados e bem estruturados."+
        "Minha expertise inclui domínio de linguagens como R, Python, SQL e Elasticsearch, aliado à capacidade de gerenciamento interno e externo" +
        "análises, garantindo precisão e eficiência em projetos de alto impacto.",
        navAbout: "Sobre mim",
        navStudies: "Projetos de estudo",
        resumeAbout: "Um resumo sobre minhas habilidades e progresso na carreira.",
        resumeStudy: "Projetos e desafios para solidificar habilidades e tornar a vida tranquila.",
        reserved: "<i class='fas fa-copyright fa-1x'></i> 2025 Todos os direitos reservados.",
        coffeeBottom: "<i class='fas fa-code fa-1x'></i> com muito <i class='fas fa-mug-hot fa-1x'></i> por<span class='text-bold'> Mim.</span>",
        greeting: "Oi! Eu sou João",
        name: "Victor",
        profession: "um <span class='fw-bold'>Estatístico</span>",
        location: "morando no ensolarado <a href='https://maps.app.goo.gl/ywzrVWnMcnk6DYYd7'>Piauí, Brasil</a>."
    
    }
};

// Elementos HTML
const toggle = document.getElementById("language-toggle");

// Evento de troca de idioma
toggle.addEventListener("change", () => {
    // Portuguese
    if (toggle.checked) {

        document.querySelectorAll("[data-i18n]").forEach(
            element => {
                const key = element.getAttribute("data-i18n")
                
                if (language.br[key]) {
                    element.innerHTML = language.br[key]
                }
            }
        )
        
    } else {
        // English
        document.querySelectorAll("[data-i18n]").forEach(
            element => {
                const key = element.getAttribute("data-i18n")
                
                if (language.en[key]) {
                    element.innerHTML = language.en[key]
                }
            }
        )
    }
});