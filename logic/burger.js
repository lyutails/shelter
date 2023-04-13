export function createBurger() {
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

  const anchorLinks = ["../main/index.html#about", "../pets/index.html", "../main/index.html#help", "#footer"];

  burgerMenuNames.forEach((item) => {
    const burgerNavMenuItem = document.createElement("li");
    burgerNavMenu.append(burgerNavMenuItem);
    burgerNavMenuItem.classList.add("burger_nav_menu_item");
    const burgerNavMenuLink = document.createElement("a");
    burgerNavMenuItem.append(burgerNavMenuLink);
    burgerNavMenuLink.classList.add("burger_nav_menu_link");
    burgerNavMenuLink.append(item);

    burgerNavMenuItem.addEventListener('click', () => {
      burgerMenu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('fixed');
      burger.classList.toggle("active");
    })
  });

  const burgerLinks = document.querySelectorAll(".burger_nav_menu_link");

  anchorLinks.forEach((element, index) => {
    burgerLinks[index].href = element;
  });

  burgerLinks[0].classList.add('active');
  burgerLinks[0].classList.add('border');

  burgerLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      document.querySelector('.burger_nav_menu_link.active')
      .classList.remove('active');
      e.target.classList.add('active');
      document.querySelector('.burger_nav_menu_link.border')
      .classList.remove('border');
      e.target.classList.add('border');
    });
  })

  let url = window.location.href;

  if(url.endsWith('pets/index.html')) {
    burgerLinks[0].classList.remove('border');
    burgerLinks[1].classList.add('border');
  }
  // const links = [
  //   ['text1','#link1'],
  //   ['text2','#link2'],
  //   ['text3','#link3'],
  //   ['text4','#link4'],
  // ]
  // const list = document.querySelector('.kek')
  // links.forEach(([label,href])=>{
  //   const item = document.createElement('li')
  //   const link = document.createElement('a')
  //   link.href = href
  //   list.append(item)
  //   item.append(link)
  //   link.append(label)
  // })

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
    body.classList.toggle('fixed');
  };
}
