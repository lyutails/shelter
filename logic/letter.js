export function runningLetter() {
  console.log("letter1");
  const client = document.querySelector('body');
  const clientRect = client.getBoundingClientRect();
  let clientX = clientRect.left;
  let clientY = clientRect.top;
  const logoWrapper = document.querySelector(".logo_wrapper");
  const movingLetter = document.querySelector(".logo_icon");
  logoWrapper.addEventListener("mousemove", () => {
    document.body.onpointermove = (event) => {
      const { clientX, clientY } = event;

      movingLetter.animate(
        [
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
        ],
        { duration: 1000, iterations: Infinity }
      );
    };
  });
  return logoWrapper;
}
console.log("letter");
