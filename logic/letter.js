export function runningLetter() {
  const client = document.querySelector("body");
  const clientRect = client.getBoundingClientRect();
  let clientX = clientRect.left;
  let clientY = clientRect.top;
  const logoWrapper = document.querySelector(".logo_wrapper");
  const movingLetter = document.querySelector(".logo_icon");
  logoWrapper?.addEventListener("mouseover", () => {
    if ((movingLetter.style.position != "fixed")) {
      movingLetter.style.position = "fixed";
      movingLetter.style.marginLeft = '80px';
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
    } else {
      movingLetter.style.position = "unset";
      movingLetter.style.marginLeft = '0px';
    }
  });
  return logoWrapper;
}
