const navbar = document.getElementById("navbar");
const navbarToggle = navbar.querySelector(".navbar-toggle");

function openMobileNavbar() {
  navbar.classList.add("opened");
  navbarToggle.setAttribute("aria-expanded", "true");
}

function closeMobileNavbar() {
  navbar.classList.remove("opened");
  navbarToggle.setAttribute("aria-expanded", "false");
}

navbarToggle.addEventListener("click", () => {
  if (navbar.classList.contains("opened")) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
});

const navbarMenu = navbar.querySelector("#navbar-menu");
const navbarLinksContainer = navbar.querySelector(".navbar-links");

navbarLinksContainer.addEventListener("click", (clickEvent) => {
  clickEvent.stopPropagation();
});

navbarMenu.addEventListener("click", closeMobileNavbar);

document
  .getElementById("options")
  document.querySelectorAll("input[name='navtype']")
  .forEach((option) => {
    option.addEventListener("change", (e) => {
      const navType = e.target.id.split("-").join(" ");
      navbarMenu.classList = navType;
    });
  });

//const profile
var profilelinks = document.getElementsByClassName("profile-links");
var profilecontents = document.getElementsByClassName("profile-contents");

function openlink(linkvalue) {
  for (profilelink of profilelinks) {
    profilelink.classList.remove("active-link");
  }
  for (profilecontent of profilecontents) {
    profilecontent.classList.remove("active-content");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(linkvalue).classList.add('active-content')
}
