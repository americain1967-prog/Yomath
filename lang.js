const translations = {
    fr: {
        title: "📚 Plateforme éducative",
        cours: "📖 Cours",
        devoirs: "✏️ Devoirs",
        quiz: "🧠 Quiz",
        corrections: "✅ Corrections",
        back: "⬅ Retour",
        quiz_title: "🧠 Quiz",
        end: "🎉 Fin du quiz",
        score: "Score"
    },
    en: {
        title: "📚 Educational Platform",
        cours: "📖 Courses",
        devoirs: "✏️ Homework",
        quiz: "🧠 Quiz",
        corrections: "✅ Corrections",
        back: "⬅ Back",
        quiz_title: "🧠 Quiz",
        end: "🎉 Quiz finished",
        score: "Score"
    }
};

function getLang(){
    return localStorage.getItem("lang") || "fr";
}

function setLang(lang){
    localStorage.setItem("lang", lang);
    applyLang();
}

function applyLang(){
    let lang = getLang();

    document.querySelectorAll("[data-key]").forEach(el=>{
        let key = el.getAttribute("data-key");

        if(translations[lang] && translations[lang][key]){
            el.innerText = translations[lang][key];
        }
    });
}
