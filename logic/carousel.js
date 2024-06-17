import { dataPets } from "../data/dataPets.js";

const cardClasses = ["pets", "carousel_cards", "card"];

export function drawCardRight(card) {
  const carouselCard = document.createElement("div");
  carouselCard.classList.add(...cardClasses);
  carouselCard.setAttribute("id", card?.id);
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
  carouselCard.setAttribute("id", card?.id);
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
    requestAnimationFrame(() => {
      return dataPets
        .sort(() => 0.5 - Math.random())
        .slice(-1)
        .map((item) => {
          drawCardLeft(item);
        });
    });
  });
}
