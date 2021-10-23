let menu = document.querySelector(".menu");
let closeMenu = document.querySelector(".closeMenu");
let sidebar = document.querySelector(".sidebar__responsive");
let videosContent = document.querySelector(".recommendedVideos__content");
let backdrop = document.querySelector(".backdrop");
let sidebarShow = document.querySelector(".sidebar__responsive.show");
let owner = document.querySelector(".owner");
let child = document.querySelector(".sidebar__row.footer");
let lastChild = child.lastElementChild;

// Start Sidebar Responsive
// lastChild.innerHTML = "Created By Fahad Mustafa 2k19/swe/29"


menu.addEventListener("click", (e) => {
    menu.classList.add("show");
    sidebar.classList.add("show");
    videosContent.classList.add("show");
});

closeMenu.addEventListener("click", (e) => {
    menu.classList.remove("show");
    sidebar.classList.remove("show");
    videosContent.classList.remove("show");
});

backdrop.addEventListener("click", (e) => {
    menu.classList.remove("show");
    sidebar.classList.remove("show");
    videosContent.classList.remove("show");
});

// End Sidebar Responsive