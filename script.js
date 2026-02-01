const valentine = new Date("February 14, 2026 00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = valentine - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML =
            "💖 Happy Valentine’s Day 💖";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    document.getElementById("countdown").innerHTML =
        `⏳ ${days} Days ${hours} Hours left`;
}, 1000);

// Surprise Function
function playSurprise() {
    const music = document.getElementById("music");
    music.play();
    alert("💖 Surprise! Music started 🎶");
}
