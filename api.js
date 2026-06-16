const TOKEN = "TON_TOKEN";
const CHAT_ID = "TON_CHAT_ID";

function sendToTelegram(score){
    fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            chat_id:CHAT_ID,
            text:`🎯 Nouveau score startup: ${score}`
        })
    });
}
