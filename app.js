let lang = localStorage.getItem("lang") || "fr";

function setLang(l){
    localStorage.setItem("lang", l);
    lang = l;
    location.reload();
}

function getLang(){
    return localStorage.getItem("lang") || "fr";
}

function saveScore(score){
    let board = JSON.parse(localStorage.getItem("board") || "[]");
    board.push({
        score,
        date: new Date().toISOString()
    });

    board.sort((a,b)=>b.score-a.score);
    localStorage.setItem("board", JSON.stringify(board));
}
