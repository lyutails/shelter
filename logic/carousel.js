import { dataPets } from "../data/dataPets.js";

const cardClasses = ["pets", "carousel_cards", "card"];

export function drawCardRight(card) {
  const carouselCard = document.createElement("div");
  carouselCard.classList.add(...cardClasses);
  carouselCard.style.minWidth = "270px";
  const cardPic = document.createElement("div");
  cardPic.classList.add("pets", "pet_pic");
  cardPic.style.backgroundImage = `url(${card?.pic})`;
  cardPic.style.minHeight = "270px";
  carouselCard.append(cardPic);
  const cardName = document.createElement("div");
  cardName.classList.add("pets", "pet_name");
  cardName.textContent = card?.name;
  carouselCard.append(cardName);
  const cardButton = document.createElement("div");
  cardButton.classList.add("pets", "button_contour");
  cardButton.textContent = "Learn more";
  carouselCard.append(cardButton);
  const currentCards = document.querySelector(".pets.carousel_cards");
  currentCards.append(carouselCard);
  return carouselCard;
}

export function drawCardLeft(card) {
  const carouselCard = document.createElement("div");
  carouselCard.classList.add(...cardClasses);
  carouselCard.style.minWidth = "270px";
  const cardPic = document.createElement("div");
  cardPic.classList.add("pets", "pet_pic");
  cardPic.style.backgroundImage = `url(${card?.pic})`;
  cardPic.style.minHeight = "270px";
  carouselCard.append(cardPic);
  const cardName = document.createElement("div");
  cardName.classList.add("pets", "pet_name");
  cardName.textContent = card?.name;
  carouselCard.append(cardName);
  const cardButton = document.createElement("div");
  cardButton.classList.add("pets", "button_contour");
  cardButton.textContent = "Learn more";
  carouselCard.append(cardButton);
  const currentCards = document.querySelector(".pets.carousel_cards.card");
  // currentCards.insertAdjacentElement("afterbegin", carouselCard);
  // currentCards.prepend(carouselCard);
  // currentCards.insertBefore(carouselCard, currentCards.firstChild);
  currentCards.insertAdjacentElement("beforebegin", carouselCard);
  return carouselCard;
}

let position = 0;
let move = 270;
let gap = 90;

export function createCarousel() {
  const currentCards = document.querySelector(".pets.carousel_cards");
  const arrowLeft = document.querySelector(".pets.button.left");
  const arrowRight = document.querySelector(".pets.button.right");
  const setPosition = () =>
    (currentCards.style.transform = `translateX(${position}px)`);

  arrowLeft.addEventListener("click", () => {
    position -= move + gap;
    setPosition();
    return dataPets
      .sort(() => 0.5 - Math.random())
      .slice(0, 1)
      .map((item) => {
        drawCardRight(item);
      });
  });

  arrowRight.addEventListener("click", () => {
    /* position += move + gap;
    setPosition(); */
    return dataPets
      .sort(() => 0.5 - Math.random())
      .slice(-1)
      .map((item) => {
        drawCardLeft(item);
      });
  });
}

console.log(dataPets.sort(() => 0.5 - Math.random()).at(-1));
console.log(dataPets.sort(() => 0.5 - Math.random()).slice(-1));

let List = [
  { 4: "dog" },
  { 2: "took" },
  { 3: "his" },
  { "-2": "Vatsan" },
  { 5: "for" },
  { 6: "a" },
  { 12: "spin" },
];

// console.log(Object.keys(List));
console.log(List.reduce((r, c) => Object.assign(r, c), {}));
let newObj = List.reduce((r, c) => Object.assign(r, c), {});
console.log(
  Object.entries(newObj).sort((a, b) => {
    b[1] - a[1];
  })
);
// console.log(List.sort((a,b) => {a[1] - b[1]}));

let obj = {
  first: "1",
  second: "3",
  third: false,
  fourth: ["anytime", 2, 3, 4],
  fifth: null,
};

const asArray = Object.entries(obj);
console.log(asArray);
/* return asArray
  .filter(([key, value]) => typeof value === "string")
  .map((item) => item++); */
console.log(
  asArray
    .filter(([key, value]) => {
      Array.isArray(value) === true
        ? value
            .filter((item) => {
              return typeof item === "number" || +item === "number";
            })
            .reduce((acc, curr) => acc + curr, 0)
        : 0;
      return typeof value === "string";
    })
    .map((item) => item[1]++)
    .reduce((acc, curr) => acc + curr, 0)
);

/* const fourth = ["anytime", 2, 3, 4];
console.log(
  Array.isArray(fourth) === true
    ? fourth
        .filter((item) => {
          return typeof item === "number" || +item === "number";
        })
        .reduce((acc, curr) => acc + curr, 0)
    : 0
); */
