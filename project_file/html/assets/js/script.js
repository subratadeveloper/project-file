let calcScrollValue = () => {
    let scrollProgress = document.getElementById ("backButton");
    let progressValue = document.getElementById ("backButton-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = 
    document.documentElement.scrollHeight - 
    document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 50) {
        scrollProgress.style.display = "grid";
    }
     else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
