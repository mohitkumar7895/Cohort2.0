const para = document.querySelector("p");
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:',.<>/?`~";

const originalText = para.innerText;
let interval = null;

para.addEventListener("mouseenter", () => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    const newText = originalText
      .split("")
      .map((char, index) => {
        if (index < iteration) {
          return originalText[index]; // lock correct letter
        }
        return characters[Math.floor(Math.random() * characters.length)]; // random letter
      })
      .join("");

    para.innerText = newText;

    iteration += 1 / 2; // speed (0.5 = slower, 1 = normal, 2 = faster)

    if (iteration >= originalText.length) {
      clearInterval(interval);
      para.innerText = originalText; // restore final text
    }
  }, 50);
});
