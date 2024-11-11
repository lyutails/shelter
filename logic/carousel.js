import { dataPets } from "../data/dataPets.js";
import { createPopupOnClick } from "./popup.js";

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
  currentCards.insertAdjacentElement("beforebegin", carouselCard);
  return carouselCard;
}

let position = 0;
let move = 270;
let gap = 90;

let carouselPetsNames = ["Katrine", "Jennifer", "Woody"];
let petsWithoutCurrentlyDisplayed = [];
dataPets.filter((elem) => {
  if (!carouselPetsNames.includes(elem.name)) {
    petsWithoutCurrentlyDisplayed.push(elem);
  }
});
let newPet = petsWithoutCurrentlyDisplayed
  .sort(() => 0.5 - Math.random())
  .slice(0, 1);

function shuffle(direction) {
  if (direction === "left") {
    newPet = petsWithoutCurrentlyDisplayed
      .sort(() => 0.5 - Math.random())
      .slice(0, 1);
    carouselPetsNames.push(newPet[0].name);
    carouselPetsNames.shift();
    petsWithoutCurrentlyDisplayed = [];
    dataPets.filter((elem) => {
      if (!carouselPetsNames.includes(elem.name)) {
        petsWithoutCurrentlyDisplayed.push(elem);
      }
    });
    return newPet[0];
  } else {
    newPet = petsWithoutCurrentlyDisplayed
      .sort(() => 0.5 - Math.random())
      .slice(0, 1);
    carouselPetsNames.unshift(newPet[0].name);
    carouselPetsNames.pop();
    petsWithoutCurrentlyDisplayed = [];
    dataPets.filter((elem) => {
      if (!carouselPetsNames.includes(elem.name)) {
        petsWithoutCurrentlyDisplayed.push(elem);
      }
    });
    return newPet[0];
  }
}

export function createCarousel() {
  const currentCards = document.querySelector(".pets.carousel_cards");
  const arrowLeft = document.querySelector(".pets.button.left");
  const arrowRight = document.querySelector(".pets.button.right");
  const setPosition = () =>
    (currentCards.style.transform = `translateX(${position}px)`);

  arrowLeft?.addEventListener("click", () => {
    position -= move + gap;
    setPosition();
    createPopupOnClick();
    return drawCardRight(shuffle("left"));
  });

  arrowRight?.addEventListener("click", () => {
    /* position += move + gap;
    setPosition(); */
  createPopupOnClick();
    return drawCardLeft(shuffle("right"));
  });
}
