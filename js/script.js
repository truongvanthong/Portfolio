/*========================Typing Animation========================*/
var typed = new Typed(".typing", {
  strings: ["", "Data Engineer / Kỹ sư dữ liệu", "Data Scientist / Nhà khoa học dữ liệu", "" ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropdownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropdownMenu.classList.toggle("open");
  const isOpen = dropdownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
