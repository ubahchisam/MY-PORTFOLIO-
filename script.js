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
//slide start
var counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 5) {
    counter = 1;
  }
}, 5000);