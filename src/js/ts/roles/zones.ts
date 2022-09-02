const zones = (triggerSelector, classForActive) => {
  const triggers = document.querySelectorAll(triggerSelector);

  const handleClick = (e) => {
    e.target.classList.contains("zones__item-wrapper")
      ? e.target.classList.toggle("active")
      : e.target.parentNode.classList.toggle("active");
  };

  triggers.forEach((trigger) =>
    trigger.addEventListener("click", (e) => handleClick(e))
  );
};

export { zones };
