let loginBtn = document.querySelector(".loginBtn");
let hide_videos = document.querySelector(".recommendedVideos__content");
let logBackdrop = document.querySelector(".logBackdrop");
let close__signIn = document.querySelector(".close__signIn");
let close__signIp = document.querySelector(".close__signIp");
let createAccountBtn = document.querySelector(".create__accountBtn");
let alreadyAccountBtn = document.querySelector(".already__accountBtn");
let signIn = document.querySelector(".sign__in");
let signUp = document.querySelector(".sign__up");
let isChecked = document.querySelector(".is__checked");
let isChecked2 = document.querySelector(".is__checked2");
let check = document.querySelector(".form-check-input");
let chooseAccount = document.querySelector(".choose__account");
let profile = document.querySelector(".profile");
let chooseAccount2 = document.querySelector(".choose__account2");

chooseAccount.addEventListener("click", () => {
    loginBtn.classList.add("hide__loginBtn")
    profile.classList.add("show")
    hide_videos.classList.remove("hide_login");
    logBackdrop.classList.remove("show_login");
})
chooseAccount2.addEventListener("click", () => {
    profile.classList.add("show")
    loginBtn.classList.add("hide__loginBtn")
    hide_videos.classList.remove("hide_login");
    logBackdrop.classList.remove("show_login");
})

check.addEventListener("click", () => {
    if(check.checked === true) isChecked.type = "text"
    if(check.checked === false) isChecked.type = "password"
    if(check.checked === true) isChecked2.type = "text"
    if(check.checked === false) isChecked2.type = "password"
})


let Name = "Fahad Mustafa";
let Email = "burfatfahad.121@gmail.com";
let Password = "kakarot8881212";

loginBtn.addEventListener("click", () => {
    hide_videos.classList.add("hide_login");
    logBackdrop.classList.add("show_login");
});

close__signIn.addEventListener("click", () => {
    hide_videos.classList.remove("hide_login");
    logBackdrop.classList.remove("show_login");
});
close__signIp.addEventListener("click", () => {
    hide_videos.classList.remove("hide_login");
    logBackdrop.classList.remove("show_login");
});

createAccountBtn.addEventListener("click", () => {
    signIn.classList.add("hide__signIn");
    signUp.classList.add("show__signUp");
    signIn.classList.remove("show__signIn");
    signUp.classList.remove("hide__signUp");
});

alreadyAccountBtn.addEventListener("click", () => {
    signIn.classList.remove("hide__signIn");
    signUp.classList.remove("show__signUp");
    signIn.classList.add("show__signIn");
    signUp.classList.add("hide__signUp");
});

