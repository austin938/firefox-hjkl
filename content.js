let lastGTime = 0; // Timestamp of the last 'g' press
const doubleGTimeout = 300; // Time (ms) to wait for second 'g'

document.addEventListener("keydown", (event) => {
  let activeElement = document.activeElement;
  if (
    activeElement.tagName === "INPUT" ||
    activeElement.tagName === "TEXTAREA" ||
    activeElement.isContentEditable
  ) {
    return;
  }

  const scrollStep = 100;

  switch (event.key) {
    case "h":
      window.scrollBy(-scrollStep, 0);
      break;
    case "j":
      window.scrollBy(0, scrollStep);
      break;
    case "k":
      window.scrollBy(0, -scrollStep);
      break;
    case "l":
      window.scrollBy(scrollStep, 0);
      break;
    case "g":
      const currentTime = Date.now();
      if (currentTime - lastGTime < doubleGTimeout) {
        // Second 'g' pressed within timeout, scroll to top
        window.scrollTo(0, 0);
      }
      lastGTime = currentTime; // Update last 'g' time
      break;
    case "G":
      window.scrollTo(0, document.body.scrollHeight); // Bottom
      break;
  }
});
