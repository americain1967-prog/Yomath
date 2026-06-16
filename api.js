const TOKEN = "8851426884:AAHMFkAINVH9ZMwE8sR4h9tMvqKiUBdH_yE";
const CHAT_ID = "7549083262";

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
