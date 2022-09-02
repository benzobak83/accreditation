const colors = (triggerSelector, inputSelector) => {
  const triggers = document.querySelectorAll(triggerSelector);
  const input = document.querySelector(inputSelector);

  const handleClick = (e) => {
    triggers.forEach((div) => {
      div.classList.contains("active") ? div.classList.remove("active") : null;
    });
    e.target.classList.contains("colors__item-wrapper")
      ? e.target.classList.toggle("active")
      : e.target.parentNode.classList.toggle("active");

    const color = window.getComputedStyle(e.target).backgroundColor;
    input.value = color;
  };

  triggers.forEach((triger) =>
    triger.addEventListener("click", (e) => handleClick(e))
  );
};

export { colors };
