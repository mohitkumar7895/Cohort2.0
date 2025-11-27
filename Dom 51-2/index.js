const para = document.querySelector("p");
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:',.<>/?`~";
const text = para.innerText;

para.addEventListener("mouseenter", () => {
    setInterval(() => {
      const str = text.split("")
        .map((char) => characters[Math.floor(Math.random() * characters.length)])
        .join("");
      para.innerText = str;
    },100);
});
