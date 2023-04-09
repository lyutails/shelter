export function burgerCreate() {
  const burger = document.querySelector(".burger");

  for (let i = 1; i <= 3; i++) {
    const burgerLine = document.createElement("span");
    burgerLine.classList.add("burger_line");
    burger.append(burgerLine);
  }

  const body = document.querySelector(".body");

  const burgerMenu = document.createElement("div");
  burgerMenu.classList.add("burger_menu");
  body.append(burgerMenu);
  const target = document.querySelector(".header");
  target.parentNode.insertBefore(burgerMenu, target);

  const burgerNavMenu = document.createElement("ul");
  burgerNavMenu.classList.add("burger_nav_menu");
  burgerMenu.append(burgerNavMenu);

  const burgerMenuNames = [
    "About the shelter",
    "Our pets",
    "Help the shelter",
    "Contacts",
  ];

  const anchorLinks = ["#about", "../pets/index.html", "#help", "#footer"];

  burgerMenuNames.forEach((item) => {
    const burgerNavMenuItem = document.createElement("li");
    burgerNavMenu.append(burgerNavMenuItem);
    burgerNavMenuItem.classList.add("burger_nav_menu_item");
    const burgerNavMenuLink = document.createElement("a");
    burgerNavMenuItem.append(burgerNavMenuLink);
    burgerNavMenuLink.classList.add("burger_nav_menu_link");
    burgerNavMenuLink.append(item);
    const burgerLinks = document.querySelectorAll(".burger_nav_menu_link");

    anchorLinks.forEach((element) => {
      burgerLinks.forEach((elem) => {
        elem.href = element;
      });
    });

    burgerNavMenuItem.addEventListener('click', () => {
      burgerMenu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('fixed');
      burger.classList.toggle("active");
    })
  });

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  body.appendChild(overlay);
  target.parentNode.insertBefore(overlay, target);

  burger.onclick = function (e) {
    burger.classList.toggle("active");
    burgerMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    body.classList.toggle('fixed');
    //document.body.style.overflow = "hidden";
  };

  overlay.onclick = function (e) {
    burger.classList.toggle("active");
    burgerMenu.classList.toggle("active");
    overlay.classList.toggle("active");
  };
}
