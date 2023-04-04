
// const paginationDisabledButtonOne = document.querySelector("#disabled_one");
// aginationDisabledButtonOne.disabled = true;
// const paginationDisabledButtonTwo = document.querySelector("#disabled_two");
// aginationDisabledButtonTwo.disabled = true;

const burger = document.querySelector(".burger");

for (let i = 1; i <= 3; i++) {
  const burgerLine = document.createElement("span");
  burgerLine.classList.add("burger_line");
  burger.append(burgerLine);
}
