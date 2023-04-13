import { dataPets } from "../data/dataPets.js";

export function createPopup(card) {
  const body = document.querySelector(".body");

  const popup = document.createElement("div");
  popup.classList.add("popup");
  // body.append(popup);
  body.insertAdjacentElement("afterbegin", popup);
  const popupWrapper = document.createElement("div");
  popupWrapper.classList.add("popup_wrapper");
  popup.append(popupWrapper);
  const crossCircle = document.createElement("div");
  crossCircle.classList.add("popup_cross_circle");
  popup.append(crossCircle);
  const popupCross = document.createElement("span");
  popupCross.classList.add("popup_cross");
  crossCircle.append(popupCross);
  const popupShadow = document.createElement("div");
  popupShadow.classList.add("popup_shadow");
  // body.append(popupShadow);
  popup.insertAdjacentElement("afterend", popupShadow);
  const popupPic = document.createElement("span");
  popupPic.classList.add("popup_pic");
  popupPic.style.backgroundImage = `url(${card.pic})`;
  popupWrapper.append(popupPic);
  const popupInfoWrapper = document.createElement("div");
  popupInfoWrapper.classList.add("popup_info_wrapper");
  popupWrapper.append(popupInfoWrapper);
  const popupName = document.createElement("p");
  popupName.classList.add("popup_name");
  popupName.textContent = card.name;
  popupInfoWrapper.append(popupName);
  const typeSpeciesWrapper = document.createElement("div");
  typeSpeciesWrapper.classList.add("popup_type_species_wrapper");
  popupInfoWrapper.append(typeSpeciesWrapper);
  const popupPetType = document.createElement("div");
  popupPetType.classList.add("popup_pet_type");
  popupPetType.textContent = card.type + ' ' + '-';
  typeSpeciesWrapper.append(popupPetType);
  const popupPetSpecies = document.createElement("div");
  popupPetSpecies.classList.add("popup_pet_species");
  popupPetSpecies.textContent = card.breed;
  typeSpeciesWrapper.append(popupPetSpecies);
  const popupText = document.createElement("p");
  popupText.classList.add("popup_text");
  popupText.textContent = card.description;
  popupInfoWrapper.append(popupText);
  const popupList = document.createElement("ul");
  popupList.classList.add("popup_list");
  popupInfoWrapper.append(popupList);

  const listItemNames = ["Age", "Inoculations", "Diseases", "Parasites"];

  for (let i = 0; i <= 3; i++) {
    const popupListItem = document.createElement("li");
    popupListItem.classList.add("popup_list_item");
    popupList.append(popupListItem);
  }

  document.querySelectorAll(".popup_list_item").forEach((item, index) => {
    item.textContent = listItemNames[index];
  });

  crossCircle.onclick = () => {
    popup.remove();
    // document.body.removeAttribute("style");
    popupShadow.remove();
    body.classList.remove('fixed');
  };

  popupShadow.onclick = (e) => {
    if (e.target !== popupShadow) {
      return;
    } else {
      popup.remove();
      // document.body.removeAttribute("style");
      popupShadow.remove();
      body.classList.remove('fixed');
    }
  };

//   body.style.position = "fixed";
//   body.style.overflow = 'hidden';
  // body.style.right = `-${window.scrollX}px`;

  return popup;
}

const carouselCard = document.querySelector(".pets.carousel_cards.card");
console.log(carouselCard);

dataPets.map((item) => {
  carouselCard.onclick = () => createPopup(item);
});

carouselCard.addEventListener('click', () => {
    body.classList.add('fixed');
})