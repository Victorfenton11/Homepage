body = document.querySelector("body")
title = document.querySelector("#title");

function ReadMore(idDots, idMore, idRead) {
    var dots = document.getElementById(idDots);
    var moreText = document.getElementById(idMore);
    var btnText = document.getElementById(idRead);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more >>";
        moreText.style.display = "none";
    }
    else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less <<";
        moreText.style.display = "inline";
    }
}