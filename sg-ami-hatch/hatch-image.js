console.log("Oh?");

function start_hatching() {
    let cards = document.querySelectorAll('div.group\\/card');
    console.log("Hatching " + cards.length + " ami...");
    for (card of cards) {
        let link = card.querySelector('a').href.split('/')
        if (link[4] == "stars1quce89l8clsn8s5tmq5sylg370h58xfnkwadx72crjv90jmetp4syt4sgr") {
            let tokenId = link[link.length - 1];

            let newUrl = "https://www.andromaverse.io/collection/ami/img/" + tokenId + ".gif";
            card.querySelector("img").src = newUrl;
        }
    }
    setTimeout(start_hatching, 500);
}

start_hatching();
