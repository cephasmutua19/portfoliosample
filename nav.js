const navLink = document.querySelector("#nav-link");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click', () => {
    const visibility = navLink.getAttribute('data-visible');

    if(visibility === "false"){
        navLink.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else if(visibility === "true"){
        navLink.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    };
});