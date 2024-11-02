const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".link");

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});
