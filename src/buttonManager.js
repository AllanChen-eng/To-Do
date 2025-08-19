export const buttonManager = () => {
  const createButton = (label, className) => {
    // expect image for label
    const btn = document.createElement("button");
    btn.classList = className;
    btn.appendChild(label);
    return btn;
  };
  const setButtonListener = (btn, action) => {
    if (btn instanceof HTMLButtonElement) {
      btn.addEventListener("click", action);
    }
  };
  return { createButton, setButtonListener };
};
